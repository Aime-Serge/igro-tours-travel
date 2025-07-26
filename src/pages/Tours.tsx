import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

export default function ToursPage() {
  const [activeTab, setActiveTab] = useState("rwanda");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with contact info */}
      <div className="bg-gray-100 py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-sm">
                <i className="fas fa-envelope"></i>
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Email Address</span>
                <a href="mailto:travel@iglotours.com" className="text-sm font-medium">travel@iglotours.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-sm">
                <i className="fas fa-phone"></i>
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Phone contact</span>
                <a href="tel:+250788306892" className="text-sm font-medium">+(250) 788 306 892</a>
              </div>
            </div>
          </div>
          <div>
            <Button variant="ghost" size="sm">Login / Register</Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-40 h-14 bg-blue-50 flex items-center justify-center text-center">
                <span className="font-bold text-blue-900 text-lg">IGLO TOURS & TRAVEL</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
              <Link to="/tours" className="font-medium text-blue-600">Tours</Link>
              <a href="/#car-rental" className="font-medium hover:text-blue-600">Car Rental</a>
              <a href="/#destination" className="font-medium hover:text-blue-600">Destination</a>
              <a href="/#about" className="font-medium hover:text-blue-600">About Us</a>
              <a href="/#contact" className="font-medium hover:text-blue-600">Contact Us</a>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/images/destinations/images.jpeg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Tour Packages</h1>
            <p className="text-xl mb-8">
              Explore our carefully crafted tour packages designed to give you the best experience
              across East Africa. We offer a variety of tours to suit your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Selection Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rwanda" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto md:grid-cols-4 h-auto">
              <TabsTrigger value="rwanda">Rwanda</TabsTrigger>
              <TabsTrigger value="uganda">Uganda</TabsTrigger>
              <TabsTrigger value="kenya">Kenya</TabsTrigger>
              <TabsTrigger value="tanzania">Tanzania</TabsTrigger>
            </TabsList>
            
            {/* Rwanda Tours */}
            <TabsContent value="rwanda" className="mt-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* 10 DAYS BEST OF RWANDA */}
                <Card className="mb-8 overflow-hidden">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/destinations/images /images/Rwanda.jpg')" }}></div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">10 DAYS BEST OF RWANDA</h2>
                    <p className="text-gray-600 mb-6">
                      Experience the best Rwanda has to offer with our comprehensive 10-day tour package. From wildlife safari in Akagera to gorilla trekking in Volcanoes National Park.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-gray-600">Duration</p>
                        <p className="font-bold">10 Days</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-gray-600">Destinations</p>
                        <p className="font-bold">Kigali, Akagera, Nyungwe, Kibuye, Gisenyi, Musanze</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-gray-600">Activities</p>
                        <p className="font-bold">Game drives, Chimp trekking, Gorilla trekking</p>
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="day1">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-bold mr-2">Day 1:</span>
                            <span>ARRIVAL</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            After completion of customs and immigration formalities you will be met at the Airport by our representative/safari driver guide, transferred to the hotel where you will have your Safari briefings.<br />
                            <span className="font-medium">Overnight:</span> Hotel of your choice (BB)
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="day2">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-bold mr-2">Day 2:</span>
                            <span>KIGALI – AKAGERA NATIONAL PARK</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            After breakfast, drive to Akagera National Park. The park is set at a relatively low altitude on the border with Tanzania and dominated scenically by a labyrinth of swamps and lakes that follow the meandering course of the Akagera River. Upon arrival, check-in Akagera Game lodge. Have lunch and then enter the national park for an afternoon Game viewing.<br />
                            <span className="font-medium">Overnight:</span> Lodge of your choice (Full board)
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="day3">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-bold mr-2">Day 3:</span>
                            <span>AKAGERA NATIONAL PARK - GAME DRIVE</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            After an early breakfast, have game drive in the National park. Akagera is home to a variety of game, it's an exciting reserve and there are plenty of animals around and the birdlife is quite exceptional. Mammals include a healthy population of Elephant and Buffalo, plus 11 species of antelope including Impala, Common Duiker, Defassa Waterbuck, Bushbuck, Oribi, Tsessebe, Cape Eland and the rare Sable Antelope. Hippos are present in impressive numbers in the lakes and rivers and Zebra and Giraffe still roam the more open acacia dotted plains. Afternoon, have another game drive with an optional boat ride at Lake Ihema.<br />
                            <span className="font-medium">Overnight:</span> Lodge of your choice (Full board)
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="day4">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-bold mr-2">Day 4:</span>
                            <span>AKAGERA - KIGALI – NYUNGWE NATIONAL PARK</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            After a leisurely breakfast, have an en-route game viewing as you head to Kigali (where you will have lunch) and then proceed your Safari to Butare. Have a visit to the National Museum and Butare city thereafter, proceed to Nyungwe National Reserve.<br />
                            <span className="font-medium">Overnight:</span> Hotel/Resort/Lodge of your choice (Full board)
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="day5">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-bold mr-2">Day 5:</span>
                            <span>NYUNGWE NATIONAL PARK- CHIMP TREKKING</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            After an early breakfast, report to the park headquarters for trekking formalities then depart for a hike into Nyungwe Forest in search of chimps. There is a lot more in Nyungwe than just chimps. Colobus Monkeys, Mangabeys, various other primate species and lots of forest dwelling birds will be encountered on the way. For those interested in botany, the flora in Nyungwe comes as an added bonus, lunch at the guest house. Afternoon, relax at the guesthouse or visit the nearby areas.<br />
                            <span className="font-medium">Overnight:</span> Hotel/Resort/Lodge of your choice (Full board)
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Uganda Tours */}
            <TabsContent value="uganda" className="mt-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Tours content here */}
                <p>Uganda tour packages will be displayed here.</p>
              </div>
            </TabsContent>
            
            {/* Kenya Tours */}
            <TabsContent value="kenya" className="mt-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Tours content here */}
                <p>Kenya tour packages will be displayed here.</p>
              </div>
            </TabsContent>
            
            {/* Tanzania Tours */}
            <TabsContent value="tanzania" className="mt-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Tours content here */}
                <p>Tanzania tour packages will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-4">IGLO TOURS & TRAVEL</h5>
              <p className="mb-4">Travel wise and experience the world with us because we are the driving forces who are not afraid to think on a different niche.</p>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><a href="/#about" className="hover:underline">About Us</a></li>
                <li><Link to="/tours" className="hover:underline">Tours</Link></li>
                <li><a href="/#destination" className="hover:underline">Destinations</a></li>
                <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Contact Info</h5>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-map-marker-alt"></i></span>
                  <span>Rwanda</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-phone"></i></span>
                  <span>+(250) 788 306 892</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-envelope"></i></span>
                  <span>travel@iglotours.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center">
            <p>&copy; {new Date().getFullYear()} IGLO TOURS & TRAVEL, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}