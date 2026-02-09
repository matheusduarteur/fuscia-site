"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const BRAND = {
  name: "Fúcsia",
  accent: "#E11DFF",
  accent2: "#7C3AED",
  dark: "#0B0B10",
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
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fade = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.accent }} />
      {children}
    </span>
  );
}

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
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      {subtitle ? <p className="mt-3 text-zinc-600 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}

const services = [
  { title: "Tráfego pago", desc: "Campanhas com criativos e copy alinhados à oferta, focadas em lead qualificado." },
  { title: "Social media", desc: "Conteúdo com intenção: constrói desejo e melhora a conversão do tráfego." },
  { title: "Copy", desc: "Mensagem certa no anúncio e na página, reduzindo objeções e aumentando resposta." },
  { title: "Estratégia", desc: "Oferta, funil e posicionamento: sem isso, performance vira sorte." },
  { title: "Captação de leads", desc: "WhatsApp + formulário com triagem e roteiro pra vender com previsibilidade." },
  { title: "Vídeo (gravação/edição)", desc: "Criativos de performance: hook, prova, retenção e CTA — sem enrolação." },
];

const steps = [
  { title: "Diagnóstico rápido", desc: "Entendemos produto, público, ticket e meta. Você sai com clareza do que fazer." },
  { title: "Plano + execução", desc: "Criativos + landing + tracking + campanha no ar com velocidade." },
  { title: "Otimização semanal", desc: "Testes, cortes e melhorias contínuas pra baixar CPL e subir qualidade do lead." },
];

const faqs = [
  { q: "Vocês trabalham com qual tipo de negócio?", a: "Atendemos serviços, negócios locais e digitais. O mais importante é ter oferta clara e demanda real." },
  { q: "Preciso ter site pronto?", a: "Não. Podemos subir uma landing rápida focada em conversão e tráfego pago." },
  { q: "Qual o prazo pra começar?", a: "Normalmente 3 a 7 dias, dependendo do volume de criativos e do setup de tracking." },
  { q: "Vocês fazem só tráfego?", a: "Podemos fazer só tráfego, mas o melhor resultado vem quando copy + criativo + página andam juntos." },
  { q: "Como funciona o primeiro contato?", a: "Você preenche o formulário ou chama no WhatsApp. A gente faz perguntas rápidas e define o próximo passo." },
];

function GlassCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:bg-white">
      <p className="text-sm font-semibold text-zinc-950">{title}</p>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/**
 * FOTO SEM “FUNDO”
 * - Removemos o overlay que parecia um retângulo
 * - Mantemos glow leve + drop-shadow pra dar presença
 */
function HeroPortrait() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[9/16] w-full">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(circle at 55% 35%, rgba(225,29,255,0.16), transparent 62%)",
          }}
        />
        <Image
          src="/socia.png"
          alt="Sócia da Fúcsia"
          fill
          priority
          className="object-contain"
          style={{
            filter: "drop-shadow(0px 18px 38px rgba(0,0,0,0.18))",
          }}
        />
      </div>

      <div className="mt-2">
        <p className="text-xs font-semibold text-zinc-900">+6 anos de mercado</p>
        <p className="mt-1 text-[11px] text-zinc-600">Estratégia • Tráfego • Copy • Criativos</p>
      </div>
    </div>
  );
}

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22 });

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Fundo premium branco */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_650px_at_18%_10%,rgba(225,29,255,0.16),transparent_55%),radial-gradient(900px_520px_at_82%_18%,rgba(124,58,237,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(255,255,255,1))]" />
      </div>

      {/* Barra progresso */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* WhatsApp flutuante */}
      {hasWhatsApp ? (
        <Link
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-[55] bottom-5 right-5 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)] backdrop-blur hover:bg-white"
        >
          💬 WhatsApp
        </Link>
      ) : null}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl shadow-sm"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${BRAND.accent}, ${BRAND.dark})`,
              }}
            />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">{BRAND.name}</p>
              <p className="text-xs text-zinc-500">Marketing & Performance</p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#servicos" className="hover:text-zinc-950">Serviços</a>
            <a href="#processo" className="hover:text-zinc-950">Processo</a>
            <a href="#cases" className="hover:text-zinc-950">Cases</a>
            <a href="#faq" className="hover:text-zinc-950">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
            >
              Pedir diagnóstico
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:pt-16">
          {/* Linha 1: APENAS Texto + Foto */}
          <div className="grid gap-6 lg:gap-10 grid-cols-[1fr_160px] sm:grid-cols-[1fr_220px] lg:grid-cols-3 lg:items-start">
            <motion.div className="lg:col-span-2" initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Pill>Full service • performance de verdade</Pill>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-[30px] leading-tight sm:text-5xl font-semibold tracking-tight text-zinc-950"
              >
                <span className="text-zinc-950">Marketing</span>{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                >
                  premium
                </span>{" "}
                <span className="text-zinc-950">para</span>{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent2}, ${BRAND.accent})` }}
                >
                  gerar leads
                </span>{" "}
                <span className="text-zinc-950">com</span>{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                >
                  conversão real
                </span>
                .
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-3 text-zinc-600 leading-relaxed text-sm sm:text-lg max-w-2xl">
                A Fúcsia cuida do funil completo: estratégia → tráfego → criativos → copy → captação.
                Tudo pensado para gerar leads qualificados e escala.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-[11px] text-zinc-500">
                Sem spam • resposta rápida • direto ao ponto
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="self-start">
              <HeroPortrait />
            </motion.div>
          </div>

          {/* Linha 2: Botões FULL WIDTH (como você pediu) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
            >
              Quero diagnóstico
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white"
            >
              Ver serviços
            </a>
          </motion.div>

          {/* Linha 3: benefícios FULL WIDTH (pra não sobrar “lado vazio”) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mt-5 rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur"
          >
            <div className="grid gap-3 sm:grid-cols-3 text-sm text-zinc-700">
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="font-semibold text-zinc-950">⚡ Implementação rápida</p>
                <p className="mt-1 text-zinc-600">Sem enrolação: funil e campanha no ar com clareza.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="font-semibold text-zinc-950">🎯 Mensagem + criativos</p>
                <p className="mt-1 text-zinc-600">Alinhados à oferta pra atrair lead qualificado.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="font-semibold text-zinc-950">📈 Otimização contínua</p>
                <p className="mt-1 text-zinc-600">Pra baixar CPL e subir qualidade com consistência.</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            id="contato"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mt-6 rounded-2xl border border-zinc-200 bg-white/70 p-5 sm:p-6 shadow-[0_22px_70px_-45px_rgba(0,0,0,0.22)] backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-zinc-950">Diagnóstico em 2 minutos</p>
                <p className="mt-1 text-sm text-zinc-600">A gente te chama no WhatsApp com próximos passos claros.</p>
              </div>
              <div
                className="h-10 w-10 rounded-xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${BRAND.accent}, ${BRAND.dark})` }}
              />
            </div>

            <form action="/api/lead" method="POST" className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <label className="text-xs font-medium text-zinc-700">Nome</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="Seu nome"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-medium text-zinc-700">WhatsApp</label>
                <input
                  name="whatsapp"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="(xx) xxxxx-xxxx"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-medium text-zinc-700">Objetivo</label>
                <select
                  name="goal"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                  defaultValue="Leads"
                >
                  <option>Leads</option>
                  <option>Vendas</option>
                  <option>Agenda cheia</option>
                  <option>Escalar campanhas</option>
                  <option>Reposicionar oferta</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <button
                  className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                >
                  Enviar e receber plano rápido
                </button>
                <p className="mt-2 text-[11px] text-zinc-500">
                  Ao enviar, você concorda em receber contato pelo WhatsApp.
                </p>
              </div>
            </form>

            {hasWhatsApp ? (
              <div className="mt-4">
                <Link
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                >
                  Prefiro chamar no WhatsApp agora →
                </Link>
              </div>
            ) : null}
          </motion.div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Serviços"
              title="Full service, sem bagunça."
              subtitle="Estratégia, tráfego, criativos, copy e captação — tudo alinhado para conversão."
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
                <GlassCard title={s.title} desc={s.desc} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Processo */}
        <section id="processo" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Processo"
              title="Simples, rápido e mensurável."
              subtitle="Você sabe exatamente o que está acontecendo e por quê — com foco em resultado."
            />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {steps.map((st, idx) => (
              <motion.div key={st.title} variants={fadeUp}>
                <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Passo {idx + 1}</p>
                  <p className="mt-2 font-semibold text-zinc-950">{st.title}</p>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Cases */}
        <section id="cases" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Prova"
              title="Entrega com cara de escala."
              subtitle="Quando você tiver números/prints, eu deixo essa seção editorial (bem agência high-end)."
            />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { t: "Campanha + landing + WhatsApp", d: "Estrutura enxuta de captação e triagem — sem fricção." },
              { t: "Criativos de performance", d: "Rotina de vídeos curtos com hook, prova e CTA pra escalar testes." },
              { t: "Otimização semanal", d: "Ajustes contínuos de público, criativo e página pra melhorar CPL e qualidade." },
            ].map((c) => (
              <motion.div key={c.t} variants={fadeUp}>
                <GlassCard title={c.t} desc={c.d} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Sobre"
              title="Quem está por trás da Fúcsia"
              subtitle="Autoridade e confiança: essencial pra converter tráfego pago."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-8 rounded-2xl border border-zinc-200 bg-white/70 p-5 sm:p-6 shadow-sm backdrop-blur"
          >
            <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-center">
              <div className="relative w-full max-w-[220px]">
                <div className="relative aspect-[9/16] w-full">
                  <div
                    className="absolute inset-0 -z-10"
                    style={{
                      background: "radial-gradient(circle at 55% 35%, rgba(225,29,255,0.16), transparent 62%)",
                    }}
                  />
                  <Image
                    src="/socia.png"
                    alt="Sócia da Fúcsia"
                    fill
                    className="object-contain"
                    style={{ filter: "drop-shadow(0px 18px 38px rgba(0,0,0,0.16))" }}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-950">Sócia • Estratégia & Performance</p>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Profissional do mercado há <span className="font-semibold text-zinc-950">mais de 6 anos</span>, atuando com
                  tráfego pago, estratégia, copy e criativos focados em conversão.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle eyebrow="FAQ" title="Objeções comuns (respondidas)." />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {faqs.map((f) => (
              <motion.details
                key={f.q}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <summary className="cursor-pointer font-semibold text-zinc-950">{f.q}</summary>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-100">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
              </p>
              <p className="text-xs">Next.js + Vercel • Tema Fúcsia</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
