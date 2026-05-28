import { Quote } from "lucide-react";

const points = [
  {
    title: "Antes do SegRondas",
    items: [
      "Planilhas e cadernos de papel para registrar pontos visitados",
      "Sem como provar ao cliente ou à diretoria que a ronda aconteceu",
      "Relatórios montados manualmente, sujeitos a erro e atraso",
      "Falhas só descobertas depois que algo dá errado",
    ],
    tone: "muted",
  },
  {
    title: "Com o SegRondas",
    items: [
      "Cada ponto verificado com leitura de QR Code, GPS e horário",
      "Cliente acompanha em tempo real pelo painel ou pelo celular",
      "Relatórios prontos automaticamente, exportáveis em PDF",
      "Alertas imediatos quando um ponto não é registrado",
    ],
    tone: "primary",
  },
];

export const Testimonials = () => (
  <section id="depoimentos" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center reveal mb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">A diferença na prática</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          O que muda na rotina da sua <span className="glow-text">operação</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Comparativo direto entre o modelo tradicional de rondas e o trabalho com o SegRondas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {points.map((col) => (
          <div
            key={col.title}
            className={`reveal glass rounded-2xl p-8 ${
              col.tone === "primary" ? "border-primary/40 shadow-glow" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-2 h-2 rounded-full ${
                  col.tone === "primary" ? "bg-accent animate-pulse" : "bg-muted-foreground"
                }`}
              />
              <h3 className="font-semibold">{col.title}</h3>
            </div>
            <ul className="space-y-3">
              {col.items.map((it) => (
                <li key={it} className="flex gap-3 text-sm">
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                      col.tone === "primary" ? "bg-primary" : "bg-border"
                    }`}
                  />
                  <span className={col.tone === "primary" ? "text-foreground" : "text-muted-foreground"}>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 reveal glass rounded-2xl p-6 sm:p-8 flex items-start gap-4">
        <Quote className="w-8 h-8 text-primary shrink-0" />
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          O SegRondas nasceu da rotina real de quem faz ronda todos os dias. Cada funcionalidade foi pensada
          para resolver um problema concreto: a falta de evidência, o retrabalho dos relatórios e a dificuldade de
          mostrar resultado para o contratante. É um sistema feito para ser usado em campo, no celular, mesmo sem internet.
        </p>
      </div>
    </div>
  </section>
);
