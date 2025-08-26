import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import concertEvent from "@/assets/concert-event.jpg";
import theaterEvent from "@/assets/theater-event.jpg";
import sportsEvent from "@/assets/sports-event.jpg";

// Mock events data
const featuredEvents = [
  {
    id: "1",
    title: "Festival de Rock Nacional 2024",
    image: concertEvent,
    date: "15 Fev 2024",
    time: "20:00",
    location: "Estádio do Morumbi, São Paulo",
    category: "Música",
    price: "R$ 180,00",
    availableTickets: 150,
    featured: true
  },
  {
    id: "2", 
    title: "Peça: O Fantasma da Ópera",
    image: theaterEvent,
    date: "22 Fev 2024",
    time: "19:30",
    location: "Teatro Municipal, Rio de Janeiro",
    category: "Teatro",
    price: "R$ 120,00",
    availableTickets: 85,
    featured: true
  },
  {
    id: "3",
    title: "Campeonato Brasileiro - Final",
    image: sportsEvent,
    date: "28 Fev 2024", 
    time: "16:00",
    location: "Maracanã, Rio de Janeiro",
    category: "Esportes",
    price: "R$ 250,00",
    availableTickets: 200,
    featured: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Events Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card-hover to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Eventos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os eventos mais procurados da temporada. Garante já seu ingresso!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="accent" className="px-8 py-3 text-lg">
              Ver Todos os Eventos
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-xl text-muted-foreground">
              Encontre exatamente o que você procura
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Música", icon: "🎵", count: "150+ eventos" },
              { name: "Teatro", icon: "🎭", count: "80+ eventos" },
              { name: "Esportes", icon: "⚽", count: "45+ eventos" },
              { name: "Stand-up", icon: "😄", count: "30+ eventos" }
            ].map((category) => (
              <div key={category.name} className="group p-6 bg-card hover:bg-card-hover rounded-2xl shadow-card hover:shadow-primary transition-smooth text-center cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-bounce">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">adoraTicket</h3>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                A plataforma líder em venda de ingressos no Brasil. Conectando você aos melhores eventos do país.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  📱
                </Button>
                <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  📧
                </Button>
                <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  📞
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Eventos</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Música</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Teatro</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Esportes</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Stand-up</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 adoraTicket. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
