import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const payload = {
    name: String(formData.get("name") || ""),
    whatsapp: String(formData.get("whatsapp") || ""),
    goal: String(formData.get("goal") || ""),
    createdAt: new Date().toISOString(),
    ua: req.headers.get("user-agent") || "",
    ip: req.headers.get("x-forwarded-for") || "",
  };

  // Por enquanto: log no Vercel (Serverless logs)
  console.log("NEW_LEAD", payload);

  // Se quiser: enviar pro seu WhatsApp via webhook/Make/Zapier depois.
  return NextResponse.redirect(new URL("/?ok=1", req.url), 303);
}
