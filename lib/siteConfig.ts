// Set these values in .env.local (and in Vercel environment variables for production).
// The fallbacks below are intentional for this public marketing site —
// contact info that visitors are meant to see.
export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "quantum.sites.cr@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50683442955",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/quantum.sites.cr/",
};
