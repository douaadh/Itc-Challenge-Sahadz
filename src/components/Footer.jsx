// Footer.jsx

import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white" style={{ minHeight: '700px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Logo & Description */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold mb-4">SahaDz</h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              Your health, anywhere in Algeria. Connecting patients with healthcare 
              professionals across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#" className="hover:text-white transition">Find Doctors</a></li>
              <li><a href="#" className="hover:text-white transition">Pharmacies</a></li>
              <li><a href="#" className="hover:text-white transition">Appointments</a></li>
              <li><a href="#" className="hover:text-white transition">Telemedicine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+213 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@sahadz.dz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Algiers, Algeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Newsletter */}
        <div className="border-t border-purple-500 pt-8 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-purple-100 mb-6">
              Stay updated with health tips, news, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-80"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media & Copyright */}
        <div className="border-t border-purple-500 pt-8 mt-8">
          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-purple-200 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-purple-200 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-purple-200 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-purple-200 transition">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-purple-100 text-sm">
            <p className="flex items-center justify-center gap-2">
              © 2026 SahaDz. Made with <Heart size={16} className="text-red-400 fill-red-400" /> in Algeria.
            </p>
            <p className="mt-2">Your health, anywhere in Algeria.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;