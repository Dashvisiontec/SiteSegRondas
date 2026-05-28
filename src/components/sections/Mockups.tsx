import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dashboard1 from "@/assets/real-dashboard-1.png";
import dashboard2 from "@/assets/real-dashboard-2.png";
import mapImg from "@/assets/real-map.png";
import establishments from "@/assets/real-establishments.png";

const slides = [
  { src: dashboard1, tag: "Dashboard", title: "Constância de rondas e indicadores em tempo real" },
  { src: dashboard2, tag: "Analytics", title: "Tendências e rondas por estabelecimento" },
  { src: establishments, tag: "Estabelecimentos", title: "Score de eficiência por unidade em tempo real" },
  { src: mapImg, tag: "Mapa GPS", title: "Localizações reais com rastreamento ao vivo" },
];

export const Mockups = () => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Plataforma real</div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Telas reais do <span className="glow-text">SegRondas</span> em produção
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dashboards analíticos, gestão de estabelecimentos e mapa GPS, tudo já operando hoje.
          </p>
        </div>

        <div className="relative mt-16 reveal">
          <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-60" />

          <div className="relative rounded-2xl overflow-hidden glow-ring shadow-elegant border border-border/60 bg-secondary/30">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.tag} className="relative w-full shrink-0">
                  <img src={s.src} alt={s.title} loading="lazy" className="w-full h-auto block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <div className="text-xs uppercase tracking-widest text-primary">{s.tag}</div>
                    <div className="text-sm sm:text-lg font-semibold mt-1">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gradient-primary shadow-glow" : "w-3 bg-secondary hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="mt-6 hidden md:grid grid-cols-4 gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.tag}
                onClick={() => setI(idx)}
                className={`relative rounded-xl overflow-hidden border transition-all ${
                  idx === i ? "border-primary shadow-glow" : "border-border/50 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={s.src} alt={s.title} loading="lazy" className="w-full h-24 object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
