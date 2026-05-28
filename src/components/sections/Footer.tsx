import { Logo } from "@/components/Logo";
import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer id="contato" className="relative border-t border-border/50 py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            SegRondas: sistema inteligente de monitoramento de rondas para operações que exigem precisão, controle e confiabilidade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
            <li><a href="#funcionalidades" className="hover:text-foreground">Funcionalidades</a></li>
            <li><a href="#beneficios" className="hover:text-foreground">Benefícios</a></li>
            <li><a href="#depoimentos" className="hover:text-foreground">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:sac@dashvisiontec.com.br" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> sac@dashvisiontec.com.br
              </a>
            </li>
            <li>
              <a href="https://wa.me/5598319970934" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" /> (98) 3197-0934
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} SegRondas. Todos os direitos reservados.</div>
        <div className="flex gap-4"><a href="/privacidade" className="hover:text-foreground">Privacidade</a><a href="/termos" className="hover:text-foreground">Termos</a></div>
      </div>
    </div>
  </footer>
);
