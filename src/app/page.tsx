"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const BRAND = {
  name: "Fúcsia",
  // fúcsia mais “chique” (menos neon)
  accent: "#C026D3",
  accent2: "#7C3AED",
  // grafite minimalista (parecido com o site referência)
  graphite: "#55575E",
  graphite2: "#44464D",
  paper: "#FFFFFF",
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Quero um diagnóstico rápido para gerar mais leads. Pode me chamar?";

function waLink() {
  const msg = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const services = [
  { title: "Tráfego pago", desc: "Campanhas com criativos e copy alinhados à oferta, focadas em lead qualificado." },
  { title: "Social media", desc: "Conteúdo com intenção: constrói desejo e melhora a conversão do tráfego." },
  { title: "Copy", desc: "Mensagem certa no anúncio e na página, reduzindo objeções e aumentando resposta." },
  { title: "Estratégia", desc: "Oferta, funil e posicionamento: sem isso, performance vira sorte." },
  { title: "Captação de leads", desc: "WhatsApp + formulário com triagem e roteiro pra vender com previsibilidade." },
  { title: "Vídeo (gravação/edição)", desc: "Criativos de performance: hook, prova, retenção e CTA — sem enrolação." },
];

const steps = [
  { title: "Diagnóstico", desc: "Entendemos seu cenário e mapeamos o que precisa ser ajustado pra converter melhor." },
  { title: "Execução", desc: "Copy + criativos + landing + tracking + campanha no ar com velocidade." },
  { title: "Otimização", desc: "Rotina de testes e melhorias contínuas pra baixar CPL e subir qualidade do lead." },
];

const faqs = [
  {
    q: "Vocês atendem qualquer tipo de negócio?",
    a: "Atendemos serviços, negócios locais e digitais. O principal é ter oferta clara e demanda real.",
  },
  { q: "Preciso ter site pronto?", a: "Não. Subimos uma landing rápida focada em conversão e tráfego pago." },
  {
    q: "Qual o prazo pra começar?",
    a: "Normalmente 3 a 7 dias, dependendo do volume de criativos e do setup de tracking.",
  },
  {
    q: "Dá pra fazer só tráfego?",
    a: "Dá. Mas o melhor resultado vem quando copy + criativo + página andam juntos.",
  },
  {
    q: "Como é o primeiro contato?",
    a: "Você chama no WhatsApp ou preenche o formulário. A gente faz perguntas rápidas e define o próximo passo.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      {subtitle ? <p className="mt-3 text-zinc-600 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}

function MinimalCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_20px_70px_-55px_rgba(0,0,0,0.25)]">
      <p className="text-sm font-semibold text-zinc-950">{title}</p>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</p>
      <div className="mt-4 h-px w-full bg-zinc-100" />
      <p className="mt-3 text-[12px] text-zinc-500">
        <span className="font-semibold" style={{ color: BRAND.accent }}>
          Fúcsia
        </span>{" "}
        • Marketing & Performance
      </p>
    </div>
  );
}

/**
 * Foto PNG “solta” no hero (sem caixa)
 * - usamos mixBlendMode pra ajudar a apagar matte branco
 * - um leve drop-shadow só pra dar profundidade
 */
function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="relative h-[360px] sm:h-[460px]">
        <Image
          src="/socia.png"
          alt="Sócia da Fúcsia"
          fill
          priority
          className="object-contain select-none"
          style={{
            mixBlendMode: "screen",
            filter: "drop-shadow(0px 22px 46px rgba(0,0,0,0.28))",
          }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-white/85">
        <div>
          <p className="text-xs font-semibold text-white">Giovanna Duarte</p>
          <p className="text-[11px] text-white/70">Estratégia • Performance</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-white">+6 anos</p>
          <p className="text-[11px] text-white/70">no mercado</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);
  const whatsappHref = hasWhatsApp ? waLink() : "#contato";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22 });

  return (
    <div className="min-h-screen text-zinc-900">
      {/* Barra progresso */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* HERO: grafite + minimalista (estilo referência) */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${BRAND.graphite} 0%, ${BRAND.graphite2} 100%)`,
        }}
      >
        {/* textura sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:26px_26px]" />

        {/* glow fúcsia MUITO discreto */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 45%, rgba(192,38,211,0.65), transparent 60%)`,
          }}
        />

        {/* Top bar: logo + menu hamburguer fake + CTA */}
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <div className="flex items-center justify-between">
            <div className="text-center w-full sm:w-auto sm:text-left">
              <p className="text-white/90 text-sm tracking-[0.16em] uppercase">
                {BRAND.name} <span className="text-white/70">• Marketing & Performance</span>
              </p>
              <div className="mt-1 h-px w-40 bg-white/20 mx-auto sm:mx-0" />
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>

        {/* Conteúdo hero */}
        <motion.div
          className="mx-auto max-w-6xl px-4 pt-10 pb-10 sm:pt-14 sm:pb-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            {/* Texto (bem editorial, central no mobile) */}
            <div className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-white/70 text-xs font-semibold tracking-[0.22em] uppercase">
                Full service • performance minimalista
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-white font-semibold tracking-tight leading-[1.02] text-[52px] sm:text-[68px]"
                style={{ letterSpacing: "-0.03em" }}
              >
                QUEM
                <br />
                SOMOS
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Olá! Somos a <span className="font-semibold text-white">{BRAND.name}</span>, agência full service focada em
                gerar <span className="font-semibold">leads</span> e <span className="font-semibold">vendas</span> com estratégia,
                copy, criativos e tráfego pago.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  ENTRE EM CONTATO
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/95 hover:bg-white/15"
                >
                  VER SERVIÇOS
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-green-400/50 bg-green-500/15 px-6 py-3 text-sm font-semibold text-green-300 hover:bg-green-500/25"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-5 text-[11px] text-white/60">
                Sem spam • resposta rápida • direto ao ponto
              </motion.p>
            </div>

            {/* Foto (aparece de cara no mobile, estilo referência) */}
            <motion.div variants={fadeUp} className="lg:justify-self-end">
              <HeroPortrait />
            </motion.div>
          </div>
        </motion.div>

        {/* WhatsApp bolha (se tiver número) */}
        {hasWhatsApp ? (
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-[55] bottom-5 right-5 h-14 w-14 rounded-full bg-green-500 grid place-items-center shadow-[0_20px_60px_-35px_rgba(0,0,0,0.45)]"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <span className="text-white text-xl">💬</span>
          </Link>
        ) : null}
      </header>

      {/* SEÇÕES (white clean) */}
      <main style={{ backgroundColor: BRAND.paper }}>
        {/* Sobre / editorial */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* “capsule image” igual referência */}
            <div className="order-2 lg:order-1">
              <div className="rounded-[38px] bg-zinc-100 border border-zinc-200 overflow-hidden">
                <div className="relative h-[220px] sm:h-[260px]">
                  {/* reaproveita a PNG, só pra criar o “capsule” editorial */}
                  <Image
                    src="/socia.png"
                    alt="Giovanna Duarte"
                    fill
                    className="object-contain"
                    style={{ mixBlendMode: "multiply", filter: "drop-shadow(0px 12px 26px rgba(0,0,0,0.14))" }}
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTitle
                eyebrow="Sobre"
                title="Estratégia antes de tráfego."
                subtitle="Acreditamos que cada negócio tem um funil, uma história e uma oferta. Nosso trabalho vai além de “rodar anúncio”: é sobre previsibilidade, qualidade de lead e escala."
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-white p-5">
                  <p className="text-sm font-semibold text-zinc-950">+6 anos de mercado</p>
                  <p className="mt-2 text-sm text-zinc-600">Performance, copy e criativos voltados pra conversão.</p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-white p-5">
                  <p className="text-sm font-semibold text-zinc-950">Full service</p>
                  <p className="mt-2 text-sm text-zinc-600">Estratégia • Tráfego • Copy • Criativos • Captação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Serviços"
              title="O pacote completo (sem bagunça)."
              subtitle="Você não precisa coordenar 5 fornecedores. A gente cuida da cadeia de conversão."
            />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <MinimalCard title={s.title} desc={s.desc} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Processo */}
        <section id="processo" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Processo"
              title="Simples e mensurável."
              subtitle="Um método direto: entender → executar → otimizar. Sem firula."
            />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {steps.map((st, i) => (
              <motion.div key={st.title} variants={fadeUp}>
                <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">Passo {i + 1}</p>
                  <p className="mt-3 text-lg font-semibold text-zinc-950">{st.title}</p>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{st.desc}</p>
                  <div
                    className="mt-5 h-[2px] w-16 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contato/Form */}
        <section id="contato" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="rounded-[40px] border border-zinc-200 bg-zinc-50 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">Contato</p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                  Vamos montar seu diagnóstico?
                </h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  Responde rápido: a gente entende seu cenário e te devolve o próximo passo com clareza.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                    Tráfego pago
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                    Copy & criativos
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                    Landing & captação
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6">
                <form action="/api/lead" method="POST" className="grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-zinc-700">Nome</label>
                    <input
                      name="name"
                      required
                      className="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-zinc-700">WhatsApp</label>
                    <input
                      name="whatsapp"
                      required
                      className="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                      placeholder="(xx) xxxxx-xxxx"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-zinc-700">Objetivo</label>
                    <select
                      name="goal"
                      className="mt-1 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                      defaultValue="Leads"
                    >
                      <option>Leads</option>
                      <option>Vendas</option>
                      <option>Agenda cheia</option>
                      <option>Escalar campanhas</option>
                      <option>Reposicionar oferta</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 pt-1">
                    <button
                      className="w-full rounded-full px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                      style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                    >
                      Enviar diagnóstico
                    </button>
                    <p className="mt-2 text-[11px] text-zinc-500">
                      Ao enviar, você concorda em receber contato pelo WhatsApp.
                    </p>
                  </div>

                  {hasWhatsApp ? (
                    <div className="sm:col-span-2">
                      <Link
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                      >
                        Prefiro chamar no WhatsApp agora →
                      </Link>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <SectionTitle eyebrow="FAQ" title="Dúvidas rápidas." subtitle="Objetivo: tirar objeção sem textão." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-3xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-zinc-950">{f.q}</summary>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
              </p>
              <p className="text-xs">Next.js + Vercel</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Barra fixa no mobile (minimal, estilo site referência) */}
      <div className="sm:hidden fixed inset-x-0 bottom-0 z-[70] border-t border-white/15 bg-[#2F3034]/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <a
            href="#contato"
            className="block w-full text-center rounded-full border border-white/35 bg-transparent px-5 py-3 text-sm font-semibold text-white"
          >
            ENTRE EM CONTATO
          </a>
        </div>
      </div>

      <div className="sm:hidden h-[78px]" />
    </div>
  );
}
