import {
  TrendingDown, Users2, FileCheck, Lock, Route, Rocket, BarChart, Eye,
  Cloud, Smartphone, Sparkles, Timer, Database, ShieldCheck, Server, Headphones,
} from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Redução de falhas", desc: "Processos automatizados eliminam o erro humano." },
  { icon: Users2, title: "Controle das equipes", desc: "Visibilidade total das atividades em campo." },
  { icon: FileCheck, title: "Auditoria automatizada", desc: "Cada ronda é registrada e rastreável." },
  { icon: Lock, title: "Segurança das informações", desc: "Criptografia ponta-a-ponta e backups." },
  { icon: Route, title: "Rastreabilidade total", desc: "Cada movimento mapeado por GPS." },
  { icon: Rocket, title: "Agilidade operacional", desc: "Decisões em segundos, não em horas." },
  { icon: BarChart, title: "Gestão por dados", desc: "Indicadores claros para evoluir." },
  { icon: Eye, title: "Transparência total", desc: "Clientes e gestores na mesma página." },
];

const diffs = [
  { icon: Cloud, title: "100% em nuvem" },
  { icon: Smartphone, title: "Mobile online e offline" },
  { icon: Sparkles, title: "Interface intuitiva" },
  { icon: Timer, title: "Implantação rápida" },
  { icon: Database, title: "Dados em tempo real" },
  { icon: ShieldCheck, title: "Criptografia avançada" },
  { icon: Server, title: "Alta disponibilidade" },
  { icon: Headphones, title: "Suporte especializado" },
];

export const Benefits = () => (
  <section id="beneficios" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Benefícios</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Resultados mensuráveis para <span className="glow-text">sua operação</span></h2>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b, i) => (
          <div key={b.title} className="reveal glass rounded-2xl p-6 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
            <b.icon className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-semibold text-sm">{b.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 reveal">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Diferenciais</div>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Por que escolher o <span className="glow-text">SegRondas</span></h3>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {diffs.map((d, i) => (
              <div key={d.title} className={`reveal flex items-center gap-4 glass rounded-xl p-4 ${i % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <d.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-sm">{d.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
