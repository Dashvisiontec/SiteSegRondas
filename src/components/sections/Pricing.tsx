import { Fragment, useState } from "react";
import { Check, X, Sparkles, ShieldCheck, Zap, Headphones, Brain, BarChart3, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Tier = "starter" | "profissional" | "enterprise";

type Plan = {
  id: Tier;
  name: string;
  audience: string;
  priceMonthly: number;
  tagline: string;
  highlight?: boolean;
  badge?: string;
  cta: string;
  ctaHref: string;
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Para portarias e pequenas equipes (até 5 vigilantes)",
    priceMonthly: 59.99,
    tagline: "Comece a monitorar rondas com o essencial.",
    cta: "Começar grátis",
    ctaHref: "#cta",
  },
  {
    id: "profissional",
    name: "Profissional",
    audience: "Para empresas de segurança com múltiplos postos",
    priceMonthly: 89.99,
    tagline: "Mais controle, geolocalização e ocorrências.",
    highlight: true,
    badge: "Escolhido por 70% dos clientes",
    cta: "Testar 7 dias grátis",
    ctaHref: "#cta",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "Para grandes operações com auditoria e compliance",
    priceMonthly: 159.99,
    tagline: "Operação completa com IA, alertas e auditoria.",
    cta: "Falar com especialista",
    ctaHref: "#cta",
  },
];

type FeatureValue = boolean | string;

type FeatureGroup = {
  title: string;
  icon: typeof ShieldCheck;
  highlight?: boolean;
  rows: { label: string; values: Record<Tier, FeatureValue>; star?: Tier }[];
};

const groups: FeatureGroup[] = [
  {
    title: "Operacional",
    icon: ShieldCheck,
    rows: [
      { label: "Acesso à plataforma SegRondas", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Monitoramento por QR Code", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Registro de data e horário", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Acesso via aplicativo mobile", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Painel básico de acompanhamento", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Controle de acesso por perfis", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Geolocalização das leituras", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Funcionamento offline", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Configuração de tempo por ronda", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Registro de ocorrências (imagens)", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Checklists configuráveis", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Armazenamento de imagens", values: { starter: "—", profissional: "60 dias", enterprise: "90 dias" } },
    ],
  },
  {
    title: "Inteligência & Dados",
    icon: Brain,
    highlight: true,
    rows: [
      { label: "Painéis analíticos", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Dashboards gerenciais", values: { starter: false, profissional: true, enterprise: true } },
      { label: "Inteligência Artificial", values: { starter: false, profissional: false, enterprise: true }, star: "enterprise" },
      { label: "Alertas automáticos", values: { starter: false, profissional: false, enterprise: true }, star: "enterprise" },
      { label: "Painéis executivos", values: { starter: false, profissional: false, enterprise: true } },
      { label: "Relatórios automatizados", values: { starter: false, profissional: false, enterprise: true } },
    ],
  },
  {
    title: "Suporte & Compliance",
    icon: Headphones,
    rows: [
      { label: "Suporte e atualizações", values: { starter: true, profissional: true, enterprise: true } },
      { label: "Trilha de auditoria", values: { starter: false, profissional: false, enterprise: true } },
      { label: "Suporte prioritário", values: { starter: false, profissional: false, enterprise: true } },
    ],
  },
];

const formatPrice = (v: number) => v.toFixed(2).replace(".", ",");

const Cell = ({ v, star }: { v: FeatureValue; star?: boolean }) => {
  if (typeof v === "string") {
    return (
      <span className={`text-sm font-medium ${star ? "text-primary" : "text-foreground"}`}>
        {v}
      </span>
    );
  }
  return v ? (
    <Check className={`w-5 h-5 mx-auto ${star ? "text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" : "text-primary"}`} />
  ) : (
    <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
  );
};

export const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const discount = 0.2;

  const priceFor = (p: Plan) =>
    annual ? p.priceMonthly * (1 - discount) : p.priceMonthly;

  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Planos & Preços
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Sem esconder preço, sem precisar agendar demo. Escolha seu plano e comece a testar agora.
          </p>

          {/* Toggle Mensal / Anual */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full glass border border-border/50">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              Anual
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${annual ? "bg-background/20" : "bg-primary/15 text-primary"}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`reveal relative rounded-2xl p-8 flex flex-col transition-all ${
                p.highlight
                  ? "bg-gradient-to-b from-primary/15 to-transparent border-2 border-primary/50 shadow-glow md:-translate-y-2"
                  : "glass border border-border/50 hover:border-primary/30"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-gradient-primary text-xs font-medium text-primary-foreground shadow-glow">
                  {p.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-primary/80 font-medium">{p.audience}</p>
              <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">{p.tagline}</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold tracking-tight">{formatPrice(priceFor(p))}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  por posto · {annual ? "cobrado anualmente" : "cobrado mensalmente"}
                </div>
                {annual && (
                  <div className="mt-1 text-xs text-primary">
                    Economize R$ {formatPrice(p.priceMonthly * 12 * discount)}/ano
                  </div>
                )}
              </div>

              <Button
                className={`mt-8 w-full ${
                  p.highlight ? "bg-gradient-primary hover:opacity-90 shadow-glow" : ""
                }`}
                variant={p.highlight ? "default" : "outline"}
                asChild
              >
                <a href={p.ctaHref}>{p.cta}</a>
              </Button>

              {/* Top differentiators */}
              <ul className="mt-8 space-y-3 text-sm">
                {(p.id === "starter"
                  ? ["Monitoramento por QR Code", "Aplicativo mobile", "Painel de acompanhamento", "Controle por perfis"]
                  : p.id === "profissional"
                  ? ["Tudo do Starter", "Geolocalização das leituras", "Funcionamento offline", "Checklists configuráveis", "Dashboards gerenciais", "Imagens 60 dias"]
                  : ["Tudo do Profissional", "Inteligência Artificial", "Alertas automáticos", "Trilha de auditoria", "Painéis executivos", "Suporte prioritário"]
                ).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Custom plan card */}
        <div className="mt-8 reveal">
          <div className="w-full glass border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-3">
                <MessageCircle className="w-3.5 h-3.5" /> Personalizado
              </div>
              <h3 className="text-lg font-semibold">Precisa de algo sob medida?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Volume alto, integrações específicas ou funcionalidades exclusivas? Nossos especialistas desenham um plano na medida da sua operação.
              </p>
            </div>
            <Button className="shrink-0" variant="outline" asChild>
              <a href="#cta" className="flex items-center gap-2">
                Falar com especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 reveal grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Zap, label: "Teste grátis por 7 dias" },
            { icon: ShieldCheck, label: "Sem cartão de crédito" },
            { icon: BarChart3, label: "Cancele quando quiser" },
            { icon: Headphones, label: "Setup em menos de 1 hora" },
          ].map((t) => (
            <div key={t.label} className="glass rounded-xl p-4 flex items-center justify-center gap-2 border border-border/50">
              <t.icon className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground">{t.label}</span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 reveal">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold">
            Compare todos os recursos
          </h3>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Recursos agrupados por categoria para facilitar sua escolha.
          </p>

          {/* Desktop: tabela completa */}
          <div className="hidden md:block mt-8 overflow-x-auto rounded-2xl border border-border/50 glass">
            <table className="w-full text-sm">
              <thead className="sticky top-0">
                <tr className="border-b border-border/50 bg-background/60 backdrop-blur">
                  <th className="text-left p-4 font-semibold w-[40%]">Funcionalidades</th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className={`p-4 font-semibold text-center min-w-[140px] ${
                        p.highlight ? "bg-primary/5" : ""
                      }`}
                    >
                      <div className={p.highlight ? "text-primary" : ""}>{p.name}</div>
                      <div className="text-xs font-normal text-muted-foreground mt-1">
                        R$ {formatPrice(priceFor(p))}/mês
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.map((g) => (
                  <Fragment key={g.title}>
                    <tr className="bg-background/40">
                      <td colSpan={4} className="p-3 pl-4">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary/90">
                          <g.icon className="w-4 h-4" />
                          {g.title}
                        </div>
                      </td>
                    </tr>
                    {g.rows.map((f, i) => (
                      <tr
                        key={f.label}
                        className={`border-b border-border/20 ${i % 2 === 0 ? "bg-background/10" : ""}`}
                      >
                        <td className="p-3 pl-4 text-muted-foreground">{f.label}</td>
                        <td className="p-3 text-center"><Cell v={f.values.starter} /></td>
                        <td className="p-3 text-center bg-primary/5"><Cell v={f.values.profissional} /></td>
                        <td className="p-3 text-center"><Cell v={f.values.enterprise} star={f.star === "enterprise"} /></td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: accordion por plano */}
          <Accordion
            type="single"
            defaultValue="profissional"
            collapsible
            className="md:hidden mt-8 space-y-3"
          >
            {plans.map((p) => (
              <AccordionItem
                key={p.id}
                value={p.id}
                className={`glass rounded-2xl border overflow-hidden ${
                  p.highlight ? "border-primary/50" : "border-border/50"
                }`}
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-transparent [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <div className={`font-semibold ${p.highlight ? "text-primary" : ""}`}>
                        {p.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        R$ {formatPrice(priceFor(p))}/mês
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-t border-border/30">
                  {groups.map((g) => (
                    <div key={g.title} className="mt-4">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary/90 mb-2">
                        <g.icon className="w-4 h-4" />
                        {g.title}
                      </div>
                      <ul className="space-y-2">
                        {g.rows.map((f) => {
                          const v = f.values[p.id];
                          const isStar = f.star === p.id;
                          return (
                            <li key={f.label} className="flex items-start justify-between gap-3 text-sm">
                              <span className="text-muted-foreground flex-1">{f.label}</span>
                              <span className="shrink-0">
                                {typeof v === "string" ? (
                                  <span className={`text-xs font-medium ${isStar ? "text-primary" : "text-foreground"}`}>
                                    {v}
                                  </span>
                                ) : v ? (
                                  <Check className={`w-4 h-4 ${isStar ? "text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" : "text-primary"}`} />
                                ) : (
                                  <X className="w-4 h-4 text-muted-foreground/30" />
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

  );
};
