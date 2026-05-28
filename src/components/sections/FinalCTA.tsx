import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  empresa: z.string().trim().max(120).optional(),
  telefone: z.string().trim().max(40).optional(),
  mensagem: z.string().trim().min(10, "Conte um pouco mais (mín. 10 caracteres)").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const FinalCTA = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      telefone: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const { nome, email, empresa, telefone, mensagem } = data;

    try {
      // Envia os dados silenciosamente via FormSubmit.co direto para o e-mail
      const response = await fetch("https://formsubmit.co/ajax/sac@dashvisiontec.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nome: nome,
          Email: email,
          Empresa: empresa || "Não informada",
          Telefone: telefone || "Não informado",
          Mensagem: mensagem
        })
      });

      if (!response.ok) {
        throw new Error("Erro na rede ao tentar enviar");
      }

      toast.success("Mensagem enviada com sucesso!", {
        description: "Agradecemos o contato, nossa equipe retornará em breve.",
      });

      setOpen(false);
      form.reset();
    } catch (err: any) {
      console.error("Erro ao enviar mensagem via FormSubmit:", err);

      // Fallback de segurança apenas se falhar a internet
      const subject = `Contato pelo site - ${nome}`;
      const body = [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        empresa ? `Empresa: ${empresa}` : null,
        telefone ? `Telefone: ${telefone}` : null,
        "",
        "Mensagem:",
        mensagem,
      ]
        .filter(Boolean)
        .join("\n");

      const mailto = `mailto:sac@dashvisiontec.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      toast.info("Redirecionando para o e-mail...", {
        description: "Houve uma instabilidade no envio automático. Por favor, envie via e-mail.",
      });

      setTimeout(() => {
        setOpen(false);
        form.reset();
      }, 1000);
    }
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60 animate-float"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="reveal relative">
          <div className="absolute inset-0 -z-10 bg-gradient-glow blur-3xl opacity-50" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground">Apresentação sem compromisso</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Vamos mostrar como o SegRondas se encaixa na <span className="glow-text">sua operação</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conte para a gente o seu cenário, condomínio, empresa, indústria ou frota, e marcamos uma conversa
            para entender as suas rotas, pontos críticos e o que faz sentido para o seu time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow group" asChild>
              <a href="https://wa.me/5598319970934" target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar pelo WhatsApp
              </a>
            </Button>

            <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) form.reset(); }}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="glass border-border/60">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar e-mail
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Fale com a nossa equipe</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo e enviaremos sua mensagem para sac@dashvisiontec.com.br.
                  </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 mt-2 text-left">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome *</FormLabel>
                          <FormControl>
                            <Input {...field} maxLength={100} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} maxLength={255} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} maxLength={40} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input {...field} maxLength={120} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              maxLength={1000}
                              rows={5}
                              placeholder="Conte um pouco sobre sua operação e o que precisa..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="bg-gradient-primary hover:opacity-90 shadow-glow w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
