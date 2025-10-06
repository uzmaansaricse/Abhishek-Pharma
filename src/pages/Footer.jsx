import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../public/lo.png';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white ">
      {/* Decorative Wave Background - Changed to Teal/Green */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-teal-100"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-20 pt-24 pb-10">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm">
          
          {/* Company Info with Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Abhishek Pharma Logo" 
                className="w-16 h-16 drop-shadow-lg transform hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Abhishek Pharma
                </h2>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              We are a trusted wholesale supplier of branded and promotional medicines, providing high-quality pharmaceutical products across India.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Request Quote', path: '/request' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Office */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Our Office
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                  <FaMapMarkerAlt className="text-teal-400 group-hover:text-white" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Abhishek Pharma</p>
                  <p className="text-sm">123 Medical Plaza,</p>
                  <p className="text-sm">Mumbai, Maharashtra,</p>
                  <p className="text-sm">India - 400001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@abhishekpharma.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                  <FaEnvelope className="text-teal-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-medium">info@abhishekpharma.com</p>
                </div>
              </a>

              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                  <FaPhoneAlt className="text-teal-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>
              © 2025 <span className="text-teal-400 font-semibold">Abhishek Pharma</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</a>
              <a href="/sitemap" className="hover:text-teal-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500"></div>
    </footer>
  );
}
