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
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fade = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 backdrop-blur">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: BRAND.accent }}
      />
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
        <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-zinc-300 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

const services = [
  {
    title: "Tráfego pago",
    desc: "Campanhas com criativos e copy alinhados à oferta, focadas em lead qualificado.",
  },
  {
    title: "Social media",
    desc: "Conteúdo com intenção: constrói desejo e melhora a conversão do tráfego.",
  },
  {
    title: "Copy",
    desc: "Mensagem certa no anúncio e na página, reduzindo objeções e aumentando resposta.",
  },
  {
    title: "Estratégia",
    desc: "Oferta, funil e posicionamento: sem isso, performance vira sorte.",
  },
  {
    title: "Captação de leads",
    desc: "WhatsApp + formulário com triagem e roteiro pra vender com previsibilidade.",
  },
  {
    title: "Vídeo (gravação/edição)",
    desc: "Criativos de performance: hook, prova, retenção e CTA — sem enrolação.",
  },
];

const steps = [
  {
    title: "Diagnóstico rápido",
    desc: "Entendemos produto, público, ticket e meta. Você sai com clareza do que fazer.",
  },
  {
    title: "Plano + execução",
    desc: "Criativos + landing + tracking + campanha no ar com velocidade.",
  },
  {
    title: "Otimização semanal",
    desc: "Testes, cortes e melhorias contínuas pra baixar CPL e subir qualidade do lead.",
  },
];

const faqs = [
  {
    q: "Vocês trabalham com qual tipo de negócio?",
    a: "Atendemos serviços, negócios locais e digitais. O mais importante é ter oferta clara e demanda real.",
  },
  {
    q: "Preciso ter site pronto?",
    a: "Não. Podemos subir uma landing rápida focada em conversão e tráfego pago.",
  },
  {
    q: "Qual o prazo pra começar?",
    a: "Normalmente 3 a 7 dias, dependendo do volume de criativos e do setup de tracking.",
  },
  {
    q: "Vocês fazem só tráfego?",
    a: "Podemos fazer só tráfego, mas o melhor resultado vem quando copy + criativo + página andam juntos.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você preenche o formulário ou chama no WhatsApp. A gente faz perguntas rápidas e define o próximo passo.",
  },
];

function GlassCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur transition hover:bg-white/7">
      <p className="text-sm font-semibold text-white flex items-center gap-2">
        {icon ? <span className="text-base">{icon}</span> : null}
        {title}
      </p>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function HeroPortrait() {
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_26px_80px_-45px_rgba(0,0,0,0.85)] backdrop-blur">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(225,29,255,0.28), transparent 65%)",
          }}
        />
        <div className="relative aspect-[9/16] w-full">
          <Image
            src="/socia.png"
            alt="Sócia da Fúcsia"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="p-3 border-t border-white/10 bg-white/5">
          <p className="text-xs font-semibold text-white">+6 anos de mercado</p>
          <p className="mt-1 text-[11px] text-zinc-300">
            Estratégia • Tráfego • Copy • Criativos
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{hint}</p>
    </div>
  );
}

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22 });

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: BRAND.dark }}>
      {/* Premium background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(225,29,255,0.18),transparent_55%),radial-gradient(900px_520px_at_82%_18%,rgba(124,58,237,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_110%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* Floating WhatsApp */}
      {hasWhatsApp ? (
        <Link
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-[55] bottom-5 right-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)] backdrop-blur hover:bg-white/15"
        >
          💬 WhatsApp
        </Link>
      ) : null}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur">
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
              <p className="text-xs text-zinc-400">Marketing & Performance</p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#processo" className="hover:text-white">
              Processo
            </a>
            <a href="#cases" className="hover:text-white">
              Cases
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {hasWhatsApp ? (
              <Link
                href={waLink()}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </Link>
            ) : (
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                }}
              >
                Pedir diagnóstico
              </a>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:pt-16">
          {/* MOBILE: texto + foto lado a lado logo de cara */}
          <div className="grid gap-6 lg:gap-10 grid-cols-[1fr_148px] sm:grid-cols-[1fr_188px] lg:grid-cols-3 lg:items-start">
            {/* Texto */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Pill>Full service • performance de verdade</Pill>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-[28px] leading-tight sm:text-5xl font-semibold tracking-tight"
              >
                Marketing{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                  }}
                >
                  premium
                </span>{" "}
                com foco total em conversão.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-3 text-zinc-300 leading-relaxed text-sm sm:text-lg max-w-2xl"
              >
                A Fúcsia cuida do funil completo: estratégia → tráfego → criativos → copy → captação.
                Tudo pensado para gerar leads qualificados e escala.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-200 max-w-2xl"
              >
                <li className="flex gap-2">
                  <span className="mt-0.5">⚡</span>
                  <span>Implementação rápida (sem enrolação)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">🎯</span>
                  <span>Mensagem e criativos alinhados à oferta</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">📈</span>
                  <span>Otimização contínua pra baixar CPL e subir qualidade</span>
                </li>
              </motion.ul>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                {hasWhatsApp ? (
                  <Link
                    href={waLink()}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero diagnóstico no WhatsApp
                  </Link>
                ) : (
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                    }}
                  >
                    Quero diagnóstico
                  </a>
                )}

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
                >
                  Ver serviços
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-3 text-[11px] text-zinc-400">
                Sem spam • resposta rápida • direto ao ponto
              </motion.p>
            </motion.div>

            {/* Foto vertical (story) — aparece na primeira dobra no mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="self-start"
            >
              <HeroPortrait />
            </motion.div>

            {/* Form abaixo no mobile (mas ainda na primeira tela em muitos celulares) */}
            <motion.div
              id="contato"
              className="col-span-2 lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_22px_70px_-45px_rgba(0,0,0,0.85)] backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Diagnóstico em 2 minutos
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      A gente te chama no WhatsApp com próximos passos claros.
                    </p>
                  </div>
                  <div
                    className="h-10 w-10 rounded-xl"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${BRAND.accent}, ${BRAND.dark})`,
                    }}
                  />
                </div>

                <form action="/api/lead" method="POST" className="mt-5 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-zinc-300">Nome</label>
                    <input
                      name="name"
                      required
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-fuchsia-500/20"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-300">WhatsApp</label>
                    <input
                      name="whatsapp"
                      required
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-fuchsia-500/20"
                      placeholder="(xx) xxxxx-xxxx"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-300">Objetivo</label>
                    <select
                      name="goal"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                      defaultValue="Leads"
                    >
                      <option>Leads</option>
                      <option>Vendas</option>
                      <option>Agenda cheia</option>
                      <option>Escalar campanhas</option>
                      <option>Reposicionar oferta</option>
                    </select>
                  </div>

                  <button
                    className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                    }}
                  >
                    Enviar e receber plano rápido
                  </button>

                  <p className="text-[11px] text-zinc-400">
                    Ao enviar, você concorda em receber contato pelo WhatsApp.
                  </p>
                </form>

                {hasWhatsApp ? (
                  <div className="mt-4">
                    <Link
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
                    >
                      Prefiro chamar no WhatsApp agora →
                    </Link>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROVA RÁPIDA (metrics / diferenciais) */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="grid gap-4 lg:grid-cols-3"
          >
            <motion.div variants={fadeUp}>
              <Metric
                label="Posicionamento"
                value="Full service"
                hint="Estratégia, tráfego, criativos e copy no mesmo time, sem desalinhamento."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Metric
                label="Velocidade"
                value="Implementação rápida"
                hint="Do diagnóstico ao funil no ar com consistência (sem “projetinho eterno”)."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Metric
                label="Método"
                value="Otimização semanal"
                hint="Testes e ajustes contínuos pra baixar CPL e elevar a qualidade do lead."
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionTitle
              eyebrow="Serviços"
              title="Full service de verdade."
              subtitle="Você não compra “posts”. Você compra demanda, conversão e estrutura pra escalar."
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
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
                <GlassCard
                  icon={String(idx + 1)}
                  title={st.title}
                  desc={st.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Cases */}
        <section id="cases" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionTitle
              eyebrow="Prova"
              title="Entrega com cara de escala."
              subtitle="Se você já tiver números/prints, eu troco esses exemplos por cases reais com design editorial."
            />
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <GlassCard
                title="Campanha + landing + WhatsApp"
                desc="Estrutura enxuta de captação e triagem — sem fricção e com CTA claro."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <GlassCard
                title="Criativos de performance"
                desc="Rotina de vídeos curtos com hook, prova, retenção e CTA pra escalar testes."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <GlassCard
                title="Otimização semanal"
                desc="Ajustes contínuos de público, criativo e página pra melhorar CPL e qualidade."
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-white">
                Quer ver se faz sentido pro seu caso?
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                Me diga seu nicho e sua meta. Eu respondo com próximos passos.
              </p>
            </div>
            {hasWhatsApp ? (
              <Link
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                }}
              >
                Chamar no WhatsApp
              </Link>
            ) : (
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                }}
              >
                Pedir diagnóstico
              </a>
            )}
          </motion.div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
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
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.9)] backdrop-blur"
          >
            <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-center">
              <div className="relative h-[320px] w-[220px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(225,29,255,0.25), transparent 65%)",
                  }}
                />
                <div className="relative h-full w-full">
                  <Image
                    src="/socia.png"
                    alt="Sócia da Fúcsia"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Sócia • Estratégia & Performance
                </p>

                <p className="mt-2 text-zinc-300 leading-relaxed">
                  Profissional do mercado há{" "}
                  <span className="font-semibold text-white">mais de 6 anos</span>,
                  atuando com tráfego pago, estratégia, copy e criativos focados em conversão.
                  O objetivo é simples: transformar atenção em demanda real.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["+6 anos no ramo", "Tráfego & escala", "Copy & criativos", "Full service"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6">
                  {hasWhatsApp ? (
                    <Link
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                      }}
                    >
                      Falar com a Fúcsia no WhatsApp
                    </Link>
                  ) : (
                    <a
                      href="#contato"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
                      }}
                    >
                      Pedir diagnóstico
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
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
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {f.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
              </p>
              <p className="text-xs">
                Next.js + Vercel • Tema Fúcsia • LGPD: coletamos apenas dados para contato.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
