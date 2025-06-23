
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import logo from "@/images/logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/">
          <img src={logo} alt="Logo" className="w-[200px] mb-3" />
          </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Reducing electronic waste and restoring hope by refurbishing laptops for those in need. Join our mission to give tech life and give someone hope.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/apply" className="text-gray-600 hover:text-primary transition-colors">Apply for Help</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
              <li><a href="https://medium.com/@resurtech" target="_blank" className="text-gray-600 hover:text-primary transition-colors">Medium Blog</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-gray-600 hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="/volunteer" className="text-gray-600 hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-primary transition-colors">Partner with Us</Link></li>
            </ul>
          </div>
      
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Resurtech. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.instagram.com/resurtech_global/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/resurtech_global/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="resurtechglobal@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
