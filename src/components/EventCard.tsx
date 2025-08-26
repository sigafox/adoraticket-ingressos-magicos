import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
  availableTickets: number;
  featured?: boolean;
}

const EventCard = ({ 
  title, 
  image, 
  date, 
  time, 
  location, 
  category, 
  price, 
  availableTickets, 
  featured = false 
}: EventCardProps) => {
  return (
    <div className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 ${featured ? 'ring-2 ring-primary' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-primary text-primary-foreground border-0">
            Destaque
          </Badge>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-1" />
            {availableTickets} disponíveis
          </div>
        </div>
        
        <h3 className="font-bold text-xl mb-3 text-card-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{date} • {time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">{price}</span>
          </div>
          <Button variant="glow" className="px-6">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;