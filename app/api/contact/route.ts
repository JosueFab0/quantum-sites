import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Simple in-memory rate limiter (5 requests per IP per minute)
const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(100),
  email: z.string().email("Email inválido"),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, "Mensaje muy corto").max(2000),
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", details: result.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, phone, message } = result.data;

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "quantum.sites.cr@gmail.com";

    const { error } = await resend.emails.send({
      from: "Quantum Sites <noreply@quantum.sites.cr>",
      to,
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2 style="font-family:sans-serif">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    if (error) {
      // Log server-side only — never expose to client
      console.error("[contact] resend error:", error.name);
    }
  }

  return NextResponse.json({ ok: true });
}
