import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface TourPackageCardProps {
  title: string;
  days: number;
  destination: string;
  description: string;
  image?: string;
}

export function TourPackageCard({ title, days, destination, description, image }: TourPackageCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:transform hover:scale-105 h-full">
      <div className={`h-48 bg-gray-300 ${image ? 'bg-cover bg-center' : ''}`} style={image ? { backgroundImage: `url(${image})` } : {}}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-sm">
            {days} Days
          </div>
        </div>
      </div>
      <CardContent className="pt-6 flex flex-col h-[calc(100%-12rem)]">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-blue-600">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span className="text-sm text-gray-600">{destination}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{description}</p>
        <Link to="/tours">
          <Button variant="outline" className="w-full mt-auto">
            View Details <span className="ml-2">→</span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}