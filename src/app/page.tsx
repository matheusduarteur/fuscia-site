// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BRAND = {
  name: "Fúcsia",
  accent: "#E11DFF"
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Quero um diagnóstico rápido para gerar mais leads. Pode me chamar?";

function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_15%_10%,rgba(225,29,255,0.18),transparent_55%)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
          {hasWhatsApp && (
            <Link
              href={waLink()}
              target="_blank"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: BRAND.accent }}
            >
              WhatsApp
            </Link>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid lg:grid-cols-2 gap-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-semibold leading-tight"
          >
            Marketing de performance com{" "}
            <span style={{ color: BRAND.accent }}>estética premium</span> e foco
            em conversão
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-zinc-600 text-lg"
          >
            A Fúcsia cuida do funil completo — estratégia, tráfego, criativos e
            copy — para gerar leads qualificados todos os dias.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4">
            {hasWhatsApp && (
              <Link
                href={waLink()}
                target="_blank"
                className="rounded-xl px-6 py-3 text-white font-semibold"
                style={{ background: BRAND.accent }}
              >
                Quero diagnóstico
              </Link>
            )}
            <a
              href="#sobre"
              className="rounded-xl border px-6 py-3 font-semibold"
            >
              Quem somos
            </a>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-2xl bg-white shadow-xl p-6 border"
        >
          <p className="font-semibold text-lg">
            Diagnóstico rápido
          </p>
          <form action="/api/lead" method="POST" className="mt-4 space-y-3">
            <input
              name="name"
              placeholder="Seu nome"
              required
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              name="whatsapp"
              placeholder="Seu WhatsApp"
              required
              className="w-full border rounded-xl px-3 py-2"
            />
            <button
              className="w-full rounded-xl py-3 text-white font-semibold"
              style={{ background: BRAND.accent }}
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="max-w-6xl mx-auto px-4 pb-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <Image
            src="/socia.jpg"
            alt="Sócia da Fúcsia"
            width={420}
            height={420}
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">
              +6 anos gerando resultado real
            </h2>
            <p className="mt-4 text-zinc-600">
              Nossa sócia atua há mais de seis anos com marketing digital,
              tráfego pago e estratégia de conversão. A Fúcsia nasce da união
              entre estética, dados e performance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {BRAND.name}
      </footer>
    </div>
  );
}
