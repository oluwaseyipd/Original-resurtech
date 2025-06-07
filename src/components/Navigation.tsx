
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import logo from "@/images/logo-1.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky py-2 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
          <img src={logo} alt="Logo" className="w-[150px] md:w-[200px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/') ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/about') ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/apply" 
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/apply') ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    Apply for Help
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[250px]">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/donate"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Donate</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Give laptops or funds
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      
                      <NavigationMenuLink asChild>
                        <Link
                          to="/volunteer"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Volunteer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our mission
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      
                      <NavigationMenuLink asChild>
                        <Link
                          to="/partner"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Partner with Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Collaborate for impact
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/contact') ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                About Us
              </Link>
              <Link to="/apply" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                Apply for Help
              </Link>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-500 mb-2">Get Involved</p>
                <Link to="/donate" className="block px-3 py-1 text-sm text-gray-700 hover:text-primary">
                  Donate
                </Link>
                <Link to="/volunteer" className="block px-3 py-1 text-sm text-gray-700 hover:text-primary">
                  Volunteer
                </Link>
                <Link to="/partner" className="block px-3 py-1 text-sm text-gray-700 hover:text-primary">
                  Partner with Us
                </Link>
              </div>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
