import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Define image paths constant
const IMAGE_PATHS = {
  logo: '/Logos/IGLO_LOGO.jpg',
  hero: '/assets/images/destinations/download.jpeg',
  about: '/assets/images/destinations/images (7).jpeg',
  destinations: {
    rwanda: '/assets/images/destinations/images (5).jpeg',
    uganda: '/assets/images/destinations/queen-elizabeth-park-1.jpg',
    kenya: '/assets/images/destinations/download (1).jpeg',
    tanzania: '/assets/images/destinations/images (3).jpeg'
  },
  accommodations: {
    luxury: '/assets/images/destinations/images (6).jpeg',
    midRange: '/assets/images/destinations/images (4).jpeg',
    budget: '/assets/images/destinations/download (1).jpeg'
  }
};

// Define services data
const SERVICES = [
  {
    title: 'Mountain Gorilla Safaris',
    icon: '🦍',
    description: 'Experience the majestic mountain gorillas in their natural habitat.'
  },
  {
    title: 'Wildlife Safaris',
    icon: '🦁',
    description: 'Explore the diverse wildlife in East Africa\'s national parks.'
  },
  {
    title: 'Cultural & Historic Tours',
    icon: '🏛️',
    description: 'Immerse yourself in the rich cultural heritage of East Africa.'
  },
  {
    title: 'Honeymoon Packages',
    icon: '💑',
    description: 'Special romantic getaways for newlyweds.'
  },
  {
    title: 'Hiking & Birding',
    icon: '🥾',
    description: 'Adventure through scenic trails and discover unique bird species.'
  },
  {
    title: 'Car Hire Services',
    icon: '🚗',
    description: 'Reliable transportation options for your travel needs.'
  }
];

export default function HomePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const imagesToLoad = [
      IMAGE_PATHS.logo,
      IMAGE_PATHS.hero,
      IMAGE_PATHS.about,
      ...Object.values(IMAGE_PATHS.destinations),
      ...Object.values(IMAGE_PATHS.accommodations)
    ];

    Promise.all(imagesToLoad.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch(console.error);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-40 h-14 relative">
                <img 
                  src={IMAGE_PATHS.logo} 
                  alt="IGLO TOURS & TRAVEL"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="font-medium text-blue-600">Home</a>
              <Link to="/tours" className="font-medium hover:text-blue-600">Tours</Link>
              <a href="#car-rental" className="font-medium hover:text-blue-600">Car Rental</a>
              <a href="#destination" className="font-medium hover:text-blue-600">Destination</a>
              <a href="#about" className="font-medium hover:text-blue-600">About Us</a>
              <a href="#contact" className="font-medium hover:text-blue-600">Contact Us</a>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src={IMAGE_PATHS.hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover East Africa
            </h1>
            <p className="text-xl mb-8">Your journey begins with us</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Explore Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destination" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(IMAGE_PATHS.destinations).map(([country, image]) => (
              <div key={country} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={country}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold capitalize">{country}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-4">IGLO TOURS & TRAVEL</h5>
              <p className="mb-4">Travel wise and experience the world with us because we are the driving forces who are not afraid to think on a different niche.</p>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><Link to="/tours" className="hover:underline">Tours</Link></li>
                <li><a href="#destination" className="hover:underline">Destinations</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Newsletter</h5>
              <p className="mb-4">Subscribe to our newsletter to receive updates and special offers.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="p-2 w-full rounded-l-md focus:outline-none text-gray-800" 
                />
                <Button 
                  type="submit"
                  className="rounded-l-none bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center">
            <p>&copy; {new Date().getFullYear()} IGLO TOURS & TRAVEL, All Rights Reserved</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link to="/login" className="hover:text-yellow-400">Login to Book</Link>
              <Link to="/register" className="hover:text-yellow-400">Register to Book</Link>
              <Link to="/admin" className="hover:text-yellow-400">Admin Login</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}