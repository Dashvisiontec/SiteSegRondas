import {
  QrCode, MapPin, Activity, Bell, History, BarChart3,
  LayoutDashboard, Users, WifiOff, FileSearch, AlertTriangle, MessageSquareWarning,
  Terminal, Smartphone,
} from "lucide-react";

const features = [
  { icon: QrCode, title: "Registro via QR Code", desc: "Validação única por ponto." },
  { icon: MapPin, title: "Geolocalização", desc: "Rastreamento preciso por GPS." },
  { icon: Activity, title: "Monitoramento real-time", desc: "Status ao vivo da operação." },
  { icon: Bell, title: "Alertas automáticos", desc: "Notificações de desvios e atrasos." },
  { icon: AlertTriangle, title: "Módulo de ocorrências", desc: "Registre incidentes com foto, descrição e localização direto do app." },
  { icon: MessageSquareWarning, title: "Módulo de justificativas", desc: "Justifique pontos não realizados com aprovação do gestor." },
  { icon: History, title: "Histórico completo", desc: "Todas as rondas auditáveis." },
  { icon: BarChart3, title: "Relatórios inteligentes", desc: "Indicadores que orientam decisões." },
  { icon: LayoutDashboard, title: "Dashboard gerencial", desc: "Visão consolidada da operação." },
  { icon: Users, title: "Controle de equipes", desc: "Permissões e escalas integradas." },
  { icon: WifiOff, title: "Registro offline", desc: "Funciona mesmo sem internet." },
  { icon: FileSearch, title: "Auditoria completa", desc: "Trilha de evidências confiável." },
  { icon: Terminal, title: "Logs operacionais", desc: "Eventos detalhados em tempo real." },
  { icon: Smartphone, title: "Mobile nativo", desc: "App leve, rápido e seguro." },
];

export const Features = () => (
  <section id="funcionalidades" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Funcionalidades</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Tudo que sua operação precisa em <span className="glow-text">um só lugar</span></h2>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="reveal group relative rounded-2xl p-6 glass hover:border-primary/40 transition-all duration-500 overflow-hidden"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
