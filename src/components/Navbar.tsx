import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#setores", label: "Para quem é" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY > 60) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled || open
            ? "bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-card"
            : ""
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://app.segrondas.com.br/login" target="_blank" rel="noreferrer">Entrar</a>
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow" asChild>
              <a href="#cta">Solicitar Demonstração</a>
            </Button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-3 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">
                {l.label}
              </a>
            ))}
            <Button size="sm" className="bg-gradient-primary mt-2" asChild>
              <a href="#cta">Solicitar Demonstração</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
