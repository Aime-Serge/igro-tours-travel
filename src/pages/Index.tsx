import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { TourPackageCard } from '@/components/TourPackageCard';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-40 h-14 bg-blue-50 flex items-center justify-center text-center">
                <span className="font-bold" style={{ backgroundImage: "url('/Logos/IGLO_LOGO.jpg')" }}></span>
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
      <section className="relative bg-blue-900 text-white h-[500px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/destinations/download.jpeg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome To IGLO TOURS & TRAVEL!</h1>
            <p className="text-xl mb-8">Travel wise and experience the world with us because we are the driving forces who are not afraid to think on a different niche.</p>
            <Link to="/tours">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Explore Our Tours</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">About Us</h2>
            <h3 className="text-3xl font-bold mb-2">Who We Are?</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/assets/images/destinations/images (7).jpeg" alt="Safari experience" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-lg mb-6">
                <span className="font-bold">IGLO TOURS & TRAVEL</span> is managed by a team of experienced administrative, operation staff and a team of very knowledgeable Tourist guides and careful drivers.
              </p>
              <p className="mb-6">
                At IGLO TOURS & TRAVEL, we specialize in designer tours for individuals, groups and corporate and incentive Tours. We understand your travel needs. Every detail is looked into, to provide you a smooth experience. We help you select the trip that suits your needs and your style. We explore areas untouched by other groups. We will provide you with the information you need to make the most of your adventure, and will look after all logistical details. All you need worry about is having the time of your life.
              </p>
              <p>
                Tell us about the adventure you dream of - we'll tailor one that fulfills your fondest hopes. We will work with you to find the right trip at the right time, and then make sure you have all the right information - right up to the day of your departure!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Featured Tours</h2>
            <h3 className="text-3xl font-bold mb-2">Popular Tour Packages</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
            <p className="text-center mt-4 max-w-2xl text-gray-600">
              Explore our most popular tour packages across East Africa. From mountain gorilla trekking to thrilling safaris and cultural experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourPackageCard
              title="10 Days Best of Rwanda"
              days={10}
              destination="Rwanda"
              description="A comprehensive Rwanda experience including gorilla trekking, chimpanzee tracking, game drives, and cultural experiences across the country."
            />
            
            <TourPackageCard
              title="8 Day Uganda Classic Safari"
              days={8}
              destination="Uganda"
              description="Experience Uganda's incredible wildlife from Murchison Falls to gorilla trekking in Bwindi Impenetrable Forest."
            />
            
            <TourPackageCard
              title="3 Days Mountain Gorilla Tour"
              days={3}
              destination="Rwanda"
              description="Experience the majestic mountain gorillas in their natural habitat in Volcanoes National Park."
            />
            
            <TourPackageCard
              title="8 Days Big 5 Safari"
              days={8}
              destination="Kenya"
              description="Explore Kenya's premier wildlife destinations including Samburu, Nakuru, and the famous Masai Mara."
            />
            
            <TourPackageCard
              title="6 Days Tanzanian Great Wildlife Safari"
              days={6}
              destination="Tanzania"
              description="Visit Tanzania's most famous national parks including Tarangire, Serengeti and Ngorongoro Crater."
            />
            
            <TourPackageCard
              title="3 Days Queen Elizabeth National Park"
              days={3}
              destination="Uganda"
              description="Experience the abundant wildlife and beautiful scenery of Queen Elizabeth National Park."
            />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/tours">
              <Button className="bg-blue-600 hover:bg-blue-700">View All Tour Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destination" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Destinations</h2>
            <h3 className="text-3xl font-bold mb-2">Our Destinations</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/destinations/images (5).jpeg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-xl font-bold p-4">Rwanda</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Discover the beauty and wonders of Rwanda with our specially crafted tours.
                </p>
                <Link to="/tours">
                  <Button variant="outline" size="sm">
                    Explore Tours
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/destinations/queen-elizabeth-park-1.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-xl font-bold p-4">Uganda</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Discover the beauty and wonders of Uganda with our specially crafted tours.
                </p>
                <Link to="/tours">
                  <Button variant="outline" size="sm">
                    Explore Tours
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/destinations/download (1).jpeg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-xl font-bold p-4">Kenya</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Discover the beauty and wonders of Kenya with our specially crafted tours.
                </p>
                <Link to="/tours">
                  <Button variant="outline" size="sm">
                    Explore Tours
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/destinations/images (3).jpeg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-xl font-bold p-4">Tanzania</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Discover the beauty and wonders of Tanzania with our specially crafted tours.
                </p>
                <Link to="/tours">
                  <Button variant="outline" size="sm">
                    Explore Tours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Our Services</h2>
            <h3 className="text-3xl font-bold mb-2">What We Offer</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Accommodations</h2>
            <h3 className="text-3xl font-bold mb-2">Where You'll Stay</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/assets/images/destinations/images (6).jpeg" alt="Luxury Lodge" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                <h4 className="text-white text-xl font-bold mb-2">Luxury Lodges</h4>
                <p className="text-white text-sm opacity-90">Experience the height of comfort and elegance with our luxury lodge options.</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/assets/images/destinations/images (4).jpeg" alt="Mid-range Accommodations" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                <h4 className="text-white text-xl font-bold mb-2">Mid-range Accommodations</h4>
                <p className="text-white text-sm opacity-90">Comfortable and well-appointed accommodations that offer excellent value.</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/assets/images/destinations/download (1).jpeg" alt="Budget-friendly Options" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                <h4 className="text-white text-xl font-bold mb-2">Budget-friendly Options</h4>
                <p className="text-white text-sm opacity-90">Clean and comfortable accommodations for travelers on a budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types Section */}
      <section id="tour-types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Tour Types</h2>
            <h3 className="text-3xl font-bold mb-2">Specialized Travel Services</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">FIT Travel</h4>
              <p>Flexibility is an IGLO TOURS & TRAVEL's specialty; our team of highly trained and experienced Tour Managers are experts at tailoring tour arrangements to suit individual guests' requirements.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Incentive Travel</h4>
              <p>At IGLO TOURS & TRAVEL we understand that Incentive Groups need special attention to detail and require unusual events and activities. We have dedicated Incentive staff to provide the most creative itineraries to fit any budget, and operate all programs smoothly and efficiently on the ground.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Special Interest Groups</h4>
              <p>We also organize themed itineraries for special interest groups, and we can provide Specialist guides and lectures for wildlife, birding, flora, cultural tours and photography, as well as professional delegations related to a particular field like archaeology, wildlife research and more.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Conferences and Events</h4>
              <p>We can offer a full package for Conference and events - reliable transportation for delegates, conference venues, visual and sound equipment, functions, guest accommodation and pre/post safaris.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Contact Us</h2>
            <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h5 className="font-medium">Address</h5>
                    <p className="text-gray-600">Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h5 className="font-medium">Phone</h5>
                    <p className="text-gray-600">+(250) 788 306 892</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h5 className="font-medium">Email</h5>
                    <p className="text-gray-600">travel@iglotours.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h5 className="font-medium">Website</h5>
                    <p className="text-gray-600">iglotours.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Send us a message</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Subject</label>
                  <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Message</label>
                  <textarea rows={4} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
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
              <form className="flex">
                <input type="email" placeholder="Your email address" className="p-2 w-full rounded-l-md focus:outline-none text-gray-800" />
                <Button className="rounded-l-none bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center">
            <p>&copy; {new Date().getFullYear()} IGLO TOURS & TRAVEL, All Rights Reserved</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="hover:text-yellow-400">Login to Book</a>
              <a href="#" className="hover:text-yellow-400">Register to Book</a>
              <a href="#" className="hover:text-yellow-400">Admin Login</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}