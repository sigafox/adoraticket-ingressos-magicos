import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Descubra os Melhores
          <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Eventos
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ingressos para shows, teatro, esportes e muito mais. Sua próxima experiência inesquecível está aqui!
        </p>
        
        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-glow max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Que evento você procura?"
                className="w-full pl-12 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Cidade"
                className="w-full pl-12 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="date"
                className="w-full pl-12 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              />
            </div>
          </div>
          <Button variant="hero" className="w-full mt-4 py-6 text-lg">
            Buscar Eventos
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-white/80">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>Milhares de eventos</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span>Ingressos em PDF</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary-glow rounded-full"></span>
            <span>Pagamento seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;