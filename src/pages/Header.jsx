import React, { useState, useEffect } from 'react';
import Container from './Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Detect scroll for header shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link based on current URL path
  useEffect(() => {
    // Get current path from window location
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []); // Run once on mount

  // Also update on route change (if using React Router)
  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // Function to check if link is active
  const isActive = (path) => {
    return activeLink === path;
  };

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`bg-white sticky top-0 left-0 z-50 lg:block hidden transition-all duration-300 ${
          scrolled ? 'shadow-lg py-2' : 'shadow-md py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo Section with Animation */}
            <a
              href="/"
              onClick={() => setActiveLink('/')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Animated Logo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img 
                  src="/lo.png" 
                  alt="Abhishek Pharma Logo"
                  className="relative w-14 h-14 rounded-full shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                />
              </div>

              {/* Brand Name */}
              <div>
                <h1 className="text-xl font-bold leading-5 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  ABHISHEK
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                    PHARMA
                  </span>
                </h1>
              </div>
            </a>

            {/* Navigation Links with Animations */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setActiveLink(link.path)}
                  className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 group ${
                    isActive(link.path)
                      ? 'text-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                  
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 transform origin-left transition-transform duration-300 ${
                      isActive(link.path)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              ))}

              {/* CTA Button with Gradient */}
              <a
                href="/request"
                onClick={() => setActiveLink('/request')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-teal-600 hover:to-emerald-600"
              >
                REQUEST QUOTE
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Header */}
      <div
        className={`lg:hidden sticky top-0 left-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Mobile Logo */}
          <a 
            href="/" 
            onClick={() => setActiveLink('/')}
            className="flex items-center gap-2"
          >
            <img 
              src="/lo.png" 
              alt="Abhishek Pharma Logo"
              className="w-12 h-12 rounded-full shadow-md"
            />
            <h1 className="font-bold text-base leading-4 text-gray-800">
              ABHISHEK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                PHARMA
              </span>
            </h1>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-600 hover:from-teal-100 hover:to-emerald-100 transition-all duration-300 transform hover:scale-110"
            aria-label="Open menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-br from-white via-teal-50 to-emerald-50 shadow-2xl transform transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-teal-200 flex items-center justify-between bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img 
                src="/lo.png" 
                alt="Abhishek Pharma Logo"
                className="w-12 h-12 rounded-full shadow-lg animate-bounce-slow"
              />
              <h2 className="font-bold text-lg text-gray-800">Menu</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-gradient-to-br from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Menu Links with Staggered Animation */}
          <div className="p-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setOpen(false);
                }}
                className={`block p-4 rounded-xl border-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 shadow-sm hover:shadow-md ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 border-transparent text-white'
                    : 'bg-white/80 backdrop-blur-sm border-transparent hover:border-teal-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 text-gray-700 hover:text-teal-600'
                }`}
                style={{
                  animation: open ? `slideInRight 0.3s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <svg
                    className="w-5 h-5 text-current transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}

            {/* CTA Button in Mobile Menu */}
            <a
              href="/request"
              onClick={() => {
                setActiveLink('/request');
                setOpen(false);
              }}
              className={`block mt-6 p-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                isActive('/request')
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600'
              }`}
              style={{
                animation: open ? `slideInRight 0.3s ease-out 0.5s both` : 'none',
              }}
            >
              REQUEST QUOTE
            </a>
          </div>

          {/* Contact Info Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm border-t border-teal-200">
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors duration-300"
              >
                <div className="p-2 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg">
                  <FaPhoneAlt className="w-4 h-4 text-teal-600" />
                </div>
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@abhishekpharma.com"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors duration-300"
              >
                <div className="p-2 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg">
                  <FaEnvelope className="w-4 h-4 text-teal-600" />
                </div>
                <span className="font-medium text-sm">info@abhishekpharma.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your global CSS */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
