import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { value: "60+", label: "Condomínios, empresas e indústrias atendidos" },
  { value: "2k+", label: "Pontos de verificação por QR Code distribuídos em campo" },
  { value: "24/7", label: "Operação contínua 24 horas, todos os dias da semana" },
  { value: "100%", label: "Registros com data, hora, GPS e foto de evidência" },
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center sm:text-left">
    <div className="text-2xl sm:text-3xl font-bold glow-text mb-1">{value}</div>
    <div className="w-8 h-px bg-gradient-primary mx-auto sm:mx-0 mb-2" />
    <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{label}</div>
  </div>
);

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Central de monitoramento de rondas"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs text-muted-foreground">
              Sistema online · Monitoramento ativo agora
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up">
            Sua ronda <span className="glow-text">comprovada</span>,
            <br />
            do primeiro ao <span className="relative inline-block">último ponto
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 9 Q 75 2, 150 6 T 298 4" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Para condomínios, empresas, indústrias e qualquer operação que precisa provar, com data, hora, GPS e foto, que cada ponto de ronda foi realmente verificado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow group" asChild>
              <a href="#cta">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Solicitar Demonstração
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass border-border/60" asChild>
              <a href="#cta">
                Falar com Especialista
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Dados criptografados</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary-glow" /> Funciona online e offline</div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-2xl p-6 sm:p-8">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
