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
      {/* Floating WhatsApp Button - Green (Keep as is for WhatsApp branding) */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Main WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-[#46C47E] hover:bg-[#3AB56D] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>


        {/* Tooltip - Blue-Green Gradient */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-xl">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-[#4C9EFF]"></div>
            </div>
          </div>
        </div>
      </div>


      <footer className="relative bg-gradient-to-b from-[#f2f8ff] via-[#e8f4ff] to-[#e9fff2] text-gray-800">
        {/* Decorative Top Border - Blue-Green Gradient */}
        <div className="h-1 bg-gradient-to-r from-[#BEE3FF] via-[#4C9EFF] via-[#46C47E] to-[#C7F5D9]"></div>


        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-10">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm">
            
            {/* Company Info with Logo */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B0D8FF] to-[#C7F5D9] rounded-full blur-md opacity-50"></div>
                  <img 
                    src="/i.jpg"
                    alt="Abhishek Pharma Logo" 
                    className="relative w-16 h-16 shadow-md transform hover:scale-105 transition-transform duration-300 rounded-full border-2 border-[#DCEBFF]"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">
                    Abhishek Pharma
                  </h2>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                We are a trusted wholesale supplier of branded and promotional medicines, providing high-quality pharmaceutical products across India.
              </p>
              
              {/* Social Media Icons - Blue-Green Design */}
             
            </div>


            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">
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
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] transition-all duration-300 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Our Office with Google Maps */}
            <div>
              <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">
                Our Office
              </h3>
              <div className="space-y-4">
                <div 
                  onClick={handleMapClick}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="mt-1 p-2 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#4C9EFF] group-hover:to-[#46C47E] transition-all duration-300 shadow-sm">
                    <FaMapMarkerAlt className="text-[#4C9EFF] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold text-gray-900">Abhishek Pharma</p>
                    <p className="text-sm">Click to view on Google Maps</p>
                    <p className="text-xs bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent hover:from-[#3A8AE8] hover:to-[#3AB56D] mt-1 font-medium">View Location →</p>
                  </div>
                </div>


                {/* Embedded Google Map - Blue-Green Border */}
                <div className="mt-4 rounded-lg overflow-hidden shadow-md border-2 border-[#DCEBFF] hover:border-[#B0D8FF] transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.1596366910376!2d73.4752902!3d27.5575557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396aa9e7cbfb6a69%3A0x7f2e65fe6d0c92a8!2sAbhishek%20Pharma.!5e0!3m2!1sen!2sin!4v1760343979038!5m2!1sen!2sin"
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
              <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@abhishekpharma.com" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#4C9EFF] group-hover:to-[#46C47E] transition-all duration-300 shadow-sm">
                    <FaEnvelope className="text-[#4C9EFF] group-hover:text-white transition-colors" />
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
                    <div className="p-2 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#4C9EFF] group-hover:to-[#46C47E] transition-all duration-300 shadow-sm">
                      <FaPhoneAlt className="text-[#4C9EFF] group-hover:text-white transition-colors" />
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
                    <div className="p-2 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#46C47E] group-hover:to-[#4C9EFF] transition-all duration-300 shadow-sm">
                      <FaPhoneAlt className="text-[#46C47E] group-hover:text-white transition-colors" />
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
          <div className="mt-12 pt-8 border-t border-[#DCEBFF]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <p>
                © 2025 <span className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent font-semibold">Abhishek Pharma</span>. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-gray-900 transition-colors hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:text-gray-900 transition-colors hover:underline">Terms & Conditions</a>
                <a href="/sitemap" className="hover:text-gray-900 transition-colors hover:underline">Sitemap</a>
              </div>
            </div>
          </div>
        </div>


        {/* Decorative Bottom Accent - Blue-Green Gradient */}
        <div className="h-1 bg-gradient-to-r from-[#C7F5D9] via-[#46C47E] via-[#4C9EFF] to-[#BEE3FF]"></div>
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
