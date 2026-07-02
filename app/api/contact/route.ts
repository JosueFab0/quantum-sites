import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// ── HTML-safe escaping ────────────────────────────────────────────────────────
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Rate limiting ─────────────────────────────────────────────────────────────
// Uses Upstash Redis when UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
// are set (persistent across serverless instances). Falls back to in-memory.
async function checkRateLimit(ip: string): Promise<boolean> {
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    const { Ratelimit } = await import("@upstash/ratelimit");
    const { Redis } = await import("@upstash/redis");
    const ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 m"),
      prefix: "qs:contact",
    });
    const { success } = await ratelimit.limit(ip);
    return success;
  }

  // Fallback: in-memory (resets on cold start — acceptable without Redis)
  const now = Date.now();
  const entry = fallbackMap.get(ip);
  if (!entry || now > entry.resetAt) {
    fallbackMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

const fallbackMap = new Map<string, { count: number; resetAt: number }>();

// ── Validation schema ─────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional(), // honeypot
});

const NO_STORE = { "Cache-Control": "no-store, no-cache, must-revalidate" };

export async function POST(req: NextRequest) {
  // ── IP extraction — x-real-ip is set by Vercel, cannot be spoofed ──────────
  const ip =
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() ??
    "unknown";

  const allowed = await checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429, headers: NO_STORE }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400, headers: NO_STORE }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos. Revisa los campos e intenta de nuevo." },
      { status: 422, headers: NO_STORE }
    );
  }

  const { name, email, phone, message, website } = result.data;

  // ── Honeypot — real users never fill the "website" field ──────────────────
  if (website) {
    return NextResponse.json({ ok: true }, { headers: NO_STORE });
  }

  // ── Send email ────────────────────────────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "quantum.sites.cr@gmail.com";

    const { error } = await resend.emails.send({
      from: "Quantum Sites <noreply@quantum.sites.cr>",
      to,
      subject: `Nuevo contacto de ${esc(name)}`,
      html: `
        <h2 style="font-family:sans-serif">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        ${phone ? `<p><strong>Teléfono:</strong> ${esc(phone)}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] resend error:", error.name);
    }
  }

  return NextResponse.json({ ok: true }, { headers: NO_STORE });
}
