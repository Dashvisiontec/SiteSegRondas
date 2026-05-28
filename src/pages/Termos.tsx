import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Termos = () => {
  useEffect(() => {
    document.title = "Termos de Uso | SegRondas";
  }, []);
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-foreground">1. Aceitação</h2>
          <p>Ao contratar e utilizar o SegRondas, o cliente concorda com os termos descritos neste documento.</p>

          <h2 className="text-2xl font-semibold text-foreground">2. Uso da plataforma</h2>
          <p>O sistema deve ser utilizado para fins legítimos de controle e auditoria de rondas. É proibido o uso para qualquer atividade ilegal ou que viole direitos de terceiros.</p>

          <h2 className="text-2xl font-semibold text-foreground">3. Conta e responsabilidade</h2>
          <p>O cliente é responsável por manter a confidencialidade das credenciais de acesso e por todas as atividades realizadas na sua conta.</p>

          <h2 className="text-2xl font-semibold text-foreground">4. Disponibilidade</h2>
          <p>Trabalhamos para manter o serviço disponível 24/7, podendo realizar manutenções programadas com aviso prévio.</p>

          <h2 className="text-2xl font-semibold text-foreground">5. Cancelamento</h2>
          <p>O cliente pode solicitar o cancelamento a qualquer momento. Os dados ficam disponíveis para exportação por 30 dias após o encerramento do contrato.</p>

          <h2 className="text-2xl font-semibold text-foreground">6. Contato</h2>
          <p>Dúvidas sobre estes termos: sac@dashvisiontec.com.br.</p>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Termos;
