import { Play } from "lucide-react";

export const VideoDemo = () => (
  <section id="video" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/20 to-background" />
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center reveal mb-12">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Vídeo demonstrativo</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Veja o <span className="glow-text">SegRondas</span> em ação</h2>
      </div>

      <div className="reveal relative aspect-video rounded-2xl overflow-hidden glow-ring shadow-elegant group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-60 animate-pulse-glow" />
            <button className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <div className="text-xs text-accent mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> AO VIVO · DEMO
            </div>
            <div className="font-semibold">Operação completa: do scan ao dashboard</div>
          </div>
          <div className="hidden sm:block text-xs text-muted-foreground">02:34</div>
        </div>
      </div>
    </div>
  </section>
);
