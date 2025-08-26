import { Button } from "@/components/ui/button";
import { Search, User, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            adoraTicket
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Eventos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Categorias
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent w-64"
            />
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <User className="w-4 h-4 mr-2" />
            Entrar
          </Button>
          <Button variant="hero">
            Vender
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;