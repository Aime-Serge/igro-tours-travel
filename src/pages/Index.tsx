import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
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

    // Preload all images
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

      {/* Rest of your sections */}
      {/* ... (Keep all your existing sections) ... */}

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