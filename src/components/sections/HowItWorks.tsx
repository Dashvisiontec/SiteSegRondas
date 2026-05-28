import { Play, QrCode, Clock, Activity, FileBarChart } from "lucide-react";
import storyboard from "@/assets/storyboard-rondas.jpg";

const steps = [
  { icon: Play, title: "Operador inicia ronda", desc: "Login mobile e seleção da rota planejada para o turno." },
  { icon: QrCode, title: "Leitura do QR Code", desc: "Ponto validado por scan único e georreferenciado." },
  { icon: Clock, title: "Registro automático", desc: "Data, hora e localização salvas instantaneamente." },
  { icon: Activity, title: "Monitoramento ao vivo", desc: "Cliente acompanha cada movimento em tempo real." },
  { icon: FileBarChart, title: "Relatórios e auditoria", desc: "Histórico completo, exportável e auditável." },
];

export const HowItWorks = () => (
  <section id="como-funciona" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Como funciona</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Do ponto de ronda ao <span className="glow-text">dashboard</span> em segundos</h2>
        <p className="mt-4 text-muted-foreground">Um fluxo simples, um sistema poderoso. Cada etapa garante rastreabilidade total.</p>
      </div>

      {/* Storyboard - SegRondas em ação */}
      <div className="relative mt-16 reveal">
        <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-50" />
        <div className="relative rounded-2xl overflow-hidden glow-ring shadow-elegant border border-border/60">
          <img
            src={storyboard}
            alt="SegRondas em ação: vigilante escaneando QR Code, registro de ronda e confirmação no app"
            loading="lazy"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="text-xs uppercase tracking-widest text-primary">SegRondas em campo</div>
            <div className="text-sm sm:text-lg font-semibold mt-1">Da abordagem do vigilante à confirmação da ronda em segundos</div>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative glass rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-3 left-6 text-xs font-mono text-primary/60">0{i + 1}</div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <s.icon className="w-6 h-6 text-primary-foreground" />
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-50 blur-md transition-opacity" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
