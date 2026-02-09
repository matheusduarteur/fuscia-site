import Link from "next/link";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""; // ex: 5511999999999
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Quero um diagnóstico rápido para gerar mais leads. Pode me chamar?";

function waLink() {
  const base = "https://wa.me/";
  const msg = encodeURIComponent(WHATSAPP_MESSAGE);
  return `${base}${WHATSAPP_NUMBER}?text=${msg}`;
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
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-zinc-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

const services = [
  {
    title: "Tráfego pago",
    desc: "Estrutura de campanha + criativos alinhados à oferta pra gerar lead qualificado.",
  },
  {
    title: "Social media",
    desc: "Conteúdo que constrói percepção e facilita a conversão do tráfego.",
  },
  {
    title: "Copy",
    desc: "Mensagem certa no anúncio e na página, reduzindo dúvida e aumentando resposta.",
  },
  {
    title: "Estratégia",
    desc: "Oferta, funil e posicionamento: sem isso, o anúncio vira loteria.",
  },
  {
    title: "Captação de leads",
    desc: "WhatsApp e formulários com roteiro e triagem pra vender com previsibilidade.",
  },
  {
    title: "Vídeo (gravação/edição)",
    desc: "Criativos de performance: ganchos, retenção, prova e CTA sem enrolação.",
  },
];

const steps = [
  {
    title: "Diagnóstico rápido",
    desc: "Entendemos produto, público, ticket e meta. Você sai com clareza do que fazer.",
  },
  {
    title: "Plano + execução",
    desc: "Criamos estrutura (anúncios + criativos + landing + tracking) e colocamos pra rodar.",
  },
  {
    title: "Otimização semanal",
    desc: "Cortes, testes e melhorias constantes pra baixar CPL e subir qualidade do lead.",
  },
];

const faqs = [
  {
    q: "Vocês trabalham com qual tipo de negócio?",
    a: "Atendemos serviços, negócios locais e digitais. O que importa é ter uma oferta clara e demanda real.",
  },
  {
    q: "Preciso ter site pronto?",
    a: "Não. Podemos subir uma landing rápida (como essa estrutura) focada em conversão.",
  },
  {
    q: "Qual o prazo pra começar?",
    a: "Geralmente em 3 a 7 dias, dependendo do volume de criativos e do setup de tracking.",
  },
  {
    q: "Vocês fazem só tráfego?",
    a: "Podemos fazer só tráfego, mas os melhores resultados vêm quando copy + criativo + página andam juntos.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você preenche o formulário ou chama no WhatsApp. A gente faz perguntas rápidas e propõe o próximo passo.",
  },
];

export default function Page() {
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-zinc-900" />
            <span className="font-semibold tracking-tight">Sua Agência</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#servicos" className="hover:text-zinc-900">
              Serviços
            </a>
            <a href="#processo" className="hover:text-zinc-900">
              Processo
            </a>
            <a href="#cases" className="hover:text-zinc-900">
              Cases
            </a>
            <a href="#faq" className="hover:text-zinc-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {hasWhatsApp ? (
              <Link
                href={waLink()}
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </Link>
            ) : (
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Pedir diagnóstico
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                Full service • focada em performance
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                Leads qualificados todos os dias com{" "}
                <span className="text-zinc-900">tráfego + conteúdo + copy</span>{" "}
                que converte.
              </h1>

              <p className="mt-4 text-zinc-600 leading-relaxed text-base sm:text-lg">
                A gente planeja, executa e otimiza seu funil — do criativo ao
                lead — com foco em resultado e velocidade.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-0.5">🎯</span>
                  <span>Anúncios com mensagem alinhada à sua oferta</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">📈</span>
                  <span>Otimização semanal pra baixar CPL e melhorar qualidade</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">🎥</span>
                  <span>Vídeos e criativos feitos pra performance</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {hasWhatsApp ? (
                  <Link
                    href={waLink()}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero um diagnóstico no WhatsApp
                  </Link>
                ) : (
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                  >
                    Quero um diagnóstico
                  </a>
                )}

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Ver serviços
                </a>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Resposta rápida • Sem spam • Direto ao ponto
              </p>
            </div>

            {/* Form Card */}
            <div
              id="contato"
              className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">
                    Peça um diagnóstico em 2 minutos
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    A gente te chama no WhatsApp com próximos passos claros.
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-zinc-100" />
              </div>

              <form
                action="/api/lead"
                method="POST"
                className="mt-6 space-y-3"
              >
                <div>
                  <label className="text-xs font-medium text-zinc-700">
                    Nome
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-700">
                    WhatsApp
                  </label>
                  <input
                    name="whatsapp"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                    placeholder="(xx) xxxxx-xxxx"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-700">
                    Objetivo
                  </label>
                  <select
                    name="goal"
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                    defaultValue="Leads"
                  >
                    <option>Leads</option>
                    <option>Vendas</option>
                    <option>Agenda cheia</option>
                    <option>Escalar campanhas</option>
                    <option>Reposicionar oferta</option>
                  </select>
                </div>

                <button className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">
                  Enviar e receber plano rápido
                </button>

                <p className="text-xs text-zinc-500">
                  Ao enviar, você concorda em receber contato pelo WhatsApp.
                </p>
              </form>

              {hasWhatsApp ? (
                <div className="mt-4">
                  <Link
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    Prefiro chamar no WhatsApp agora →
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Logos / proof bar */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Pra quem é
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm text-zinc-700">
              <div className="rounded-xl bg-white border border-zinc-200 p-4">
                Negócios locais que precisam de demanda constante
              </div>
              <div className="rounded-xl bg-white border border-zinc-200 p-4">
                Serviços e consultorias que vendem no WhatsApp
              </div>
              <div className="rounded-xl bg-white border border-zinc-200 p-4">
                Produtos digitais com oferta e margem pra escalar
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle
            eyebrow="Serviços"
            title="Full service, sem bagunça."
            subtitle="Tudo o que precisa pra rodar tráfego com consistência: estratégia, execução e otimização — com criativos e copy de performance."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold">{s.title}</p>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="processo" className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle
            eyebrow="Processo"
            title="Simples, rápido e mensurável."
            subtitle="Você sabe exatamente o que está acontecendo e por quê — com foco em resultado."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((st, idx) => (
              <div
                key={st.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  Passo {idx + 1}
                </p>
                <p className="mt-2 font-semibold">{st.title}</p>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle
            eyebrow="Prova"
            title="Alguns exemplos do tipo de entrega."
            subtitle="Se você já tiver cases reais, substitui esses cards por prints/mini-histórias."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                t: "Campanha + landing + WhatsApp",
                d: "Estrutura enxuta pra captação e triagem de leads (sem fricção).",
              },
              {
                t: "Criativos de performance",
                d: "Rotina de vídeos curtos com ganchos, prova e CTA pra escalar testes.",
              },
              {
                t: "Otimização semanal",
                d: "Ajustes contínuos de público, criativo e página pra melhorar CPL e qualidade.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold">{c.t}</p>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold">Quer ver se faz sentido pro seu caso?</p>
              <p className="mt-1 text-sm text-zinc-600">
                Me diga seu nicho e meta. Eu te respondo com os próximos passos.
              </p>
            </div>
            {hasWhatsApp ? (
              <Link
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Chamar no WhatsApp
              </Link>
            ) : (
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Pedir diagnóstico
              </a>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle eyebrow="FAQ" title="Objeções comuns (respondidas)." />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-100">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Sua Agência. Todos os direitos reservados.</p>
              <p className="text-xs">
                Feito com Next.js + Vercel • LGPD: coletamos apenas dados para contato.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
