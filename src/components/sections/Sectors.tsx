import { Building2, Factory, Truck, ShoppingBag, GraduationCap, Hospital, Home, Hotel } from "lucide-react";

const sectors = [
  { icon: Home, title: "Condomínios residenciais", desc: "Portarias, garagens e áreas comuns com rondas auditáveis para o síndico e moradores." },
  { icon: Building2, title: "Empresas e escritórios", desc: "Controle de acesso, vistorias periódicas e checagem de pontos sensíveis." },
  { icon: Factory, title: "Indústrias e galpões", desc: "Patrulhamento de perímetros extensos com pontos de QR Code distribuídos." },
  { icon: Truck, title: "Logística e pátios", desc: "Conferência de docas, contêineres e cargas em operações 24/7." },
  { icon: ShoppingBag, title: "Shoppings e varejo", desc: "Rotas internas, estacionamentos e áreas técnicas com evidência fotográfica." },
  { icon: Hotel, title: "Hotéis e resorts", desc: "Inspeção de andares, áreas de lazer e perímetro com discrição." },
  { icon: Hospital, title: "Hospitais e clínicas", desc: "Rondas em alas, almoxarifados e áreas restritas com rastreabilidade." },
  { icon: GraduationCap, title: "Escolas e universidades", desc: "Cobertura de campi, laboratórios e turnos noturnos." },
];

export const Sectors = () => (
  <section id="setores" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="max-w-2xl reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Para quem é</div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Pensado para qualquer operação que <span className="glow-text">precisa de controle</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Do condomínio residencial à indústria de grande porte. Onde houver uma ronda, o SegRondas se adapta.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectors.map((s, i) => (
          <div
            key={s.title}
            className="reveal group relative glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500 hover:border-primary/40"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-gradient-primary flex items-center justify-center mb-4 transition-all">
              <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
