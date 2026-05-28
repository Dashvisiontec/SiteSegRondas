import { useEffect, useState } from "react";
import { MapPin, Radio, TrendingUp, AlertCircle } from "lucide-react";
import { BRAZIL_PATH } from "./brazilPath";

// Coordenadas em unidades do viewBox 100x100, alinhadas ao contorno real do Brasil
const points = [
  { x: 61.26, y: 19.27, label: "Belém / PA", side: "right" as const },
  { x: 71.36, y: 21.85, label: "São Luís / MA", side: "right" as const },
  { x: 85.25, y: 24.74, label: "Fortaleza / CE", side: "right" as const },
  { x: 93.22, y: 29.70, label: "Natal / RN", side: "right" as const },
  { x: 94.01, y: 35.13, label: "Recife / PE", side: "right" as const },
  { x: 85.37, y: 46.95, label: "Salvador / BA", side: "right" as const },
  { x: 43.01, y: 53.27, label: "Cuiabá / MT", side: "left" as const },
  { x: 72.25, y: 63.64, label: "Belo Horizonte / MG", side: "right" as const },
  { x: 65.76, y: 72.38, label: "São Paulo / SP", side: "left" as const },
  { x: 59.41, y: 76.89, label: "Curitiba / PR", side: "left" as const },
  { x: 54.74, y: 87.96, label: "Porto Alegre / RS", side: "left" as const },
];

export const RealTime = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % points.length), 1400);
    return () => clearInterval(t);
  }, []);

  const hub = { x: 58, y: 55 }; // centro aproximado do Brasil no viewBox

  return (
    <section id="tempo-real" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Presença nacional</div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Clientes em <span className="glow-text">todo o Brasil</span>, monitorados em tempo real
          </h2>
          <p className="mt-4 text-muted-foreground">
            Operações ativas em diversos estados, do Norte ao Sul. Cada ponto no mapa representa uma cidade onde o SegRondas está em campo neste momento.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 reveal glass rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-medium">Mapa de operações · Brasil</span>
              </div>
              <span className="text-xs text-muted-foreground">{points.length} cidades ativas</span>
            </div>
            <div className="relative aspect-[4/3] rounded-xl bg-secondary/30 overflow-hidden border border-border/50">
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="brFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
                  </linearGradient>
                  <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d={BRAZIL_PATH}
                  fill="url(#brFill)"
                  fillRule="evenodd"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.7"
                  strokeWidth="0.25"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* divisas estaduais sutis */}
                <path
                  d={BRAZIL_PATH}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.18"
                  strokeWidth="0.15"
                  strokeLinejoin="round"
                />


                {points.map((p, i) => {
                  if (p === hub) return null;
                  return (
                    <line
                      key={`l-${i}`}
                      x1={hub.x} y1={hub.y} x2={p.x} y2={p.y}
                      stroke="hsl(var(--primary))"
                      strokeOpacity={active === i ? 0.55 : 0.1}
                      strokeWidth="0.25"
                      strokeDasharray="0.8 1.2"
                    />
                  );
                })}

                {points.map((p, i) => {
                  const isActive = active === i;
                  return (
                    <g key={p.label}>
                      {isActive && (
                        <circle cx={p.x} cy={p.y} r="3" fill="url(#pulse)">
                          <animate attributeName="r" values="1.5;4.5;1.5" dur="1.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.8;0;0.8" dur="1.4s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        cx={p.x} cy={p.y}
                        r={isActive ? 1.1 : 0.8}
                        fill={isActive ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        stroke="hsl(var(--background))"
                        strokeWidth="0.2"
                      />
                    </g>
                  );
                })}

                {points.map((p, i) => {
                  const isActive = active === i;
                  const dx = p.side === "left" ? -1.6 : 1.6;
                  const anchor = p.side === "left" ? "end" : "start";
                  return (
                    <text
                      key={`t-${p.label}`}
                      x={p.x + dx}
                      y={p.y + 0.7}
                      fontSize="1.9"
                      textAnchor={anchor}
                      fill={isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                      opacity={isActive ? 1 : 0.75}
                      style={{ transition: "opacity 0.3s, fill 0.3s" }}
                    >
                      {p.label}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            <div className="reveal glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Equipes ativas</span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <div className="text-3xl font-bold mt-2 glow-text">12 / 14</div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className={`h-8 flex-1 rounded ${i < 12 ? "bg-gradient-primary" : "bg-secondary"}`} />
                ))}
              </div>
            </div>

            <div className="reveal glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Pontos verificados (24h)</span>
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold tabular-nums">1.847</div>
              <svg viewBox="0 0 200 60" className="mt-3 w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 18 L160 24 L180 12 L200 16 L200 60 L0 60 Z" fill="url(#g)" />
                <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 18 L160 24 L180 12 L200 16" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="reveal glass rounded-2xl p-6 border-accent/30">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Status global</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">Todas as rotas operando dentro do SLA.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
