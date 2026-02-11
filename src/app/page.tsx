"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const BRAND = {
  name: "Fúcsia",
  accent: "#E11DFF",
  accent2: "#7C3AED",
  dark: "#0B0B10",
  paper: "#FBFAFC", // “branco premium”
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
  hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
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
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-zinc-600 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}

function SoftCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 shadow-[0_20px_80px_-65px_rgba(0,0,0,0.35)] backdrop-blur">
      <p className="text-sm font-semibold text-zinc-950">
        {icon ? <span className="mr-2">{icon}</span> : null}
        {title}
      </p>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</p>
      <div
        className="mt-4 h-[2px] w-14 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
      />
    </div>
  );
}

/**
 * Retrato “editorial” (sem caixa aparente)
 * - A imagem fica “solta” e integrada ao fundo
 * - mixBlendMode ajuda quando sobra matte branco do recorte
 */
function EditorialPortrait() {
  return (
    <div className="relative">
      {/* Glow suave atrás */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 60% 35%, rgba(225,29,255,0.22), transparent 60%)",
        }}
      />

      {/* “Véu” sutil para dar profundidade, sem parecer caixa */}
      <div className="absolute -inset-4 -z-10 rounded-[40px] bg-white/35 backdrop-blur-[2px]" />

      {/* A imagem em si */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[520px]">
        <Image
          src="/socia.png"
          alt="Sócia da Fúcsia"
          fill
          priority
          className="object-contain select-none"
          style={{
            mixBlendMode: "multiply",
            filter: "drop-shadow(0px 18px 42px rgba(0,0,0,0.16))",
          }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-zinc-950 truncate">Giovanna Duarte</p>
          <p className="text-[11px] text-zinc-600 truncate">Estratégia • Performance</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-zinc-950">+6 anos</p>
          <p className="text-[11px] text-zinc-600">no mercado</p>
        </div>
      </div>
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
  {
    q: "Vocês trabalham com qual tipo de negócio?",
    a: "Atendemos serviços, negócios locais e digitais. O mais importante é ter oferta clara e demanda real.",
  },
  { q: "Preciso ter site pronto?", a: "Não. Podemos subir uma landing rápida focada em conversão e tráfego pago." },
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

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);
  const whatsappHref = hasWhatsApp ? waLink() : "#contato";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22 });

  return (
    <div className="min-h-screen text-zinc-900" style={{ backgroundColor: BRAND.paper }}>
      {/* Fundo “clean premium”: paper + glows discretos */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_10%,rgba(225,29,255,0.14),transparent_60%),radial-gradient(900px_520px_at_86%_20%,rgba(124,58,237,0.10),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(0,0,0,0.45)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Barra progresso */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* Header (minimal) */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/65 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-2xl shadow-sm"
              style={{ background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accent2})` }}
            />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">{BRAND.name}</p>
              <p className="text-xs text-zinc-500">Marketing & Performance</p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#servicos" className="hover:text-zinc-950">Serviços</a>
            <a href="#processo" className="hover:text-zinc-950">Processo</a>
            <a href="#cases" className="hover:text-zinc-950">Prova</a>
            <a href="#faq" className="hover:text-zinc-950">FAQ</a>
          </nav>

          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
          >
            Pedir diagnóstico
          </a>
        </div>
      </header>

      {/* WhatsApp flutuante (desktop) */}
      {hasWhatsApp ? (
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex fixed z-[55] bottom-5 right-5 rounded-3xl border border-zinc-200/70 bg-white/75 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.35)] backdrop-blur hover:bg-white"
        >
          💬 WhatsApp
        </Link>
      ) : null}

      <main>
        {/* HERO (mobile-first, editorial clean) */}
        <section className="mx-auto max-w-6xl px-4 pt-7 pb-10 sm:pt-14">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Em mobile, foto primeiro pra “aparecer de cara” */}
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <EditorialPortrait />
            </motion.div>

            {/* Texto */}
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeUp}>
                <Pill>Full service • tráfego com direção</Pill>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-[32px] leading-[1.06] sm:text-5xl font-semibold tracking-tight text-zinc-950"
              >
                Aumente a{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}>
                  quantidade
                </span>{" "}
                e a{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent2}, ${BRAND.accent})` }}>
                  qualidade
                </span>{" "}
                dos seus leads.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-3 text-zinc-600 leading-relaxed text-sm sm:text-lg">
                Sem “tráfego no escuro”. A Fúcsia entrega estratégia → copy → criativos → landing → captação.
                Tudo alinhado para conversão.
              </motion.p>

              {/* CTA clean (estilo “clínica premium”) */}
              <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                >
                  Quero diagnóstico
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-950 backdrop-blur hover:bg-white"
                >
                  Ver serviços
                </a>
              </motion.div>

              {/* Micro prova (bem discreta) */}
              <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-3">
                <SoftCard icon="⚡" title="Implementação rápida" desc="Funil e campanha no ar com clareza." />
                <SoftCard icon="🎯" title="Mensagem + criativo" desc="Anúncio e página falando a mesma coisa." />
                <SoftCard icon="📈" title="Otimização contínua" desc="CPL menor e lead melhor, com consistência." />
              </motion.div>
            </div>
          </motion.div>

          {/* FORM (primeiro bloco de conversão) */}
          <motion.div
            id="contato"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mt-10 rounded-3xl border border-zinc-200/70 bg-white/75 p-5 sm:p-6 shadow-[0_26px_90px_-60px_rgba(0,0,0,0.28)] backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-zinc-950">Diagnóstico em 2 minutos</p>
                <p className="mt-1 text-sm text-zinc-600">
                  A gente te chama no WhatsApp com próximos passos claros.
                </p>
              </div>
              <div className="h-10 w-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accent2})` }} />
            </div>

            <form action="/api/lead" method="POST" className="mt-5 grid gap-3 sm:grid-cols-3">
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

              <div className="sm:col-span-1">
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

              <div className="sm:col-span-3">
                <button
                  className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
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
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
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
              title="Full service, com consistência."
              subtitle="Tráfego, copy, criativos e captação — tudo alinhado para conversão."
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
                <SoftCard title={s.title} desc={s.desc} />
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
                <SoftCard
                  icon={`0${idx + 1}`}
                  title={st.title}
                  desc={st.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Prova / Cases */}
        <section id="cases" className="mx-auto max-w-6xl px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionTitle
              eyebrow="Prova"
              title="Entrega com cara de escala."
              subtitle="Quando você tiver prints/números, eu deixo essa seção ainda mais editorial."
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
              { t: "Campanha + landing + WhatsApp", d: "Captação e triagem sem fricção." },
              { t: "Criativos de performance", d: "Hook, prova e CTA pra escalar testes." },
              { t: "Otimização contínua", d: "Melhora de CPL e qualidade com rotina." },
            ].map((c) => (
              <motion.div key={c.t} variants={fadeUp}>
                <SoftCard title={c.t} desc={c.d} />
              </motion.div>
            ))}
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
                className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <summary className="cursor-pointer font-semibold text-zinc-950">{f.q}</summary>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200/60 bg-white/40">
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

      {/* Barra fixa mobile (conversão) */}
      <div className="sm:hidden fixed inset-x-0 bottom-0 z-[70] border-t border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-3">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
          >
            Diagnóstico
          </a>
          <Link
            href={whatsappHref}
            target={hasWhatsApp ? "_blank" : undefined}
            rel={hasWhatsApp ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
          >
            WhatsApp
          </Link>
        </div>
      </div>

      {/* Espaço pra barra não cobrir conteúdo */}
      <div className="sm:hidden h-[78px]" />
    </div>
  );
}
