import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../public/lo.png';

export default function Footer() {
  // Updated WhatsApp number for Manoj Kumar Bajaj
  const whatsappNumber = "919414147250"; 
  const whatsappMessage = "Hello! I'm interested in your pharmaceutical products.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/aKTx1nETh1eZMH2b6', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Pulsing Rings Animation */}
      
        {/* Main WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-xl">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
        {/* Decorative Top Border */}
        <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-10">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm">
            
            {/* Company Info with Logo */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="Abhishek Pharma Logo" 
                  className="w-16 h-16 shadow-md transform hover:scale-105 transition-transform duration-300 rounded-full border-2 border-gray-300"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Abhishek Pharma
                  </h2>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                We are a trusted wholesale supplier of branded and promotional medicines, providing high-quality pharmaceutical products across India.
              </p>
              
              {/* Social Media Icons - Clean Gray Design */}
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="group bg-gray-200 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group bg-gray-200 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-lg text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group bg-gray-200 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group bg-gray-200 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg text-gray-700 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-gray-900">
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
                      className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gray-800 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Office with Google Maps */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-gray-900">
                Our Office
              </h3>
              <div className="space-y-4">
                <div 
                  onClick={handleMapClick}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="mt-1 p-2 bg-gray-200 rounded-lg group-hover:bg-gray-800 transition-all duration-300">
                    <FaMapMarkerAlt className="text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold text-gray-900">Abhishek Pharma</p>
                    <p className="text-sm">Click to view on Google Maps</p>
                    <p className="text-xs text-blue-600 hover:text-blue-800 mt-1">View Location →</p>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="mt-4 rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8429547668985!2d75.81674231504473!3d26.918854983135827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c6b5b5b5b5%3A0x0!2zMjbCsDU1JzA3LjkiTiA3NcKwNDknMDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Abhishek Pharma Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Get in Touch - Updated Contact Numbers */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-gray-900">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@abhishekpharma.com" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-200 rounded-lg group-hover:bg-gray-800 transition-all duration-300">
                    <FaEnvelope className="text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium">info@abhishekpharma.com</p>
                  </div>
                </a>

                {/* Phone Numbers - Two Contacts */}
                <div className="space-y-3">
                  <a 
                    href="tel:+919414147250" 
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gray-200 rounded-lg group-hover:bg-gray-800 transition-all duration-300">
                      <FaPhoneAlt className="text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="font-medium">Manoj Kumar Bajaj</p>
                      <p className="text-sm">+91 9414147250</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919636302626" 
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gray-200 rounded-lg group-hover:bg-gray-800 transition-all duration-300">
                      <FaPhoneAlt className="text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium">Dinesh Bajaj</p>
                      <p className="text-sm">+91 9636302626</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <p>
                © 2025 <span className="text-gray-900 font-semibold">Abhishek Pharma</span>. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
                <a href="/sitemap" className="hover:text-gray-900 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>
      </footer>

      {/* Add Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
