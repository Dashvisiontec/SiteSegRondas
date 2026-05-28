import { QrCode } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60" />
      <div className="relative w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
        <QrCode className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
    <div className="leading-none">
      <div className="text-base font-bold tracking-tight">Seg<span className="glow-text">Rondas</span></div>
    </div>
  </div>
);
