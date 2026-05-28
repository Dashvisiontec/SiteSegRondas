import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Privacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | SegRondas";
  }, []);
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 pb-20 prose prose-invert">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-foreground">1. Quem somos</h2>
          <p>O SegRondas é um sistema de monitoramento de rondas operado pela DashVision Tecnologia, responsável pelo tratamento dos dados coletados na plataforma.</p>

          <h2 className="text-2xl font-semibold text-foreground">2. Dados coletados</h2>
          <p>Coletamos dados de cadastro (nome, e-mail, telefone, empresa) e dados operacionais gerados pelo uso do app (data, hora, geolocalização, fotos de evidência e identificação do colaborador).</p>

          <h2 className="text-2xl font-semibold text-foreground">3. Finalidade</h2>
          <p>Os dados são utilizados exclusivamente para registrar, comprovar e auditar as rondas realizadas, além de gerar relatórios e indicadores para o cliente contratante.</p>

          <h2 className="text-2xl font-semibold text-foreground">4. Compartilhamento</h2>
          <p>Não vendemos nem compartilhamos dados com terceiros para fins comerciais. O acesso aos dados é restrito ao cliente contratante e à equipe técnica do SegRondas.</p>

          <h2 className="text-2xl font-semibold text-foreground">5. Segurança</h2>
          <p>Aplicamos criptografia em trânsito e em repouso, controle de acesso por perfil e backups periódicos para garantir a integridade das informações.</p>

          <h2 className="text-2xl font-semibold text-foreground">6. Direitos do titular (LGPD)</h2>
          <p>Você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail sac@dashvisiontec.com.br.</p>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Privacidade;
