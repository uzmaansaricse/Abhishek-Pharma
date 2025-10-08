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
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  // Also update on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    
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
      {/* Desktop Header - Clean White */}
      <div
        className={`bg-white sticky top-0 left-0 z-50 lg:block hidden transition-all duration-300 border-b border-gray-200 ${
          scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo Section - Minimal Animation */}
            <a
              href="/"
              onClick={() => setActiveLink('/')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Simple Logo Container */}
              <div className="relative">
                <img 
                  src="/lo.png" 
                  alt="Abhishek Pharma Logo"
                  className="relative w-14 h-14 rounded-full shadow-sm transform group-hover:scale-105 transition-all duration-300 border-2 border-gray-200"
                />
              </div>

              {/* Brand Name - Gray Typography */}
              <div>
                <h1 className="text-xl font-bold leading-5 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  ABHISHEK
                  <br />
                  <span className="text-gray-700">
                    PHARMA
                  </span>
                </h1>
              </div>
            </a>

            {/* Navigation Links - Clean Gray Design */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setActiveLink(link.path)}
                  className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 group ${
                    isActive(link.path)
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                  
                  {/* Clean Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform origin-left transition-transform duration-300 ${
                      isActive(link.path)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              ))}

              {/* CTA Button - Solid Gray */}
              <a
                href="/request"
                onClick={() => setActiveLink('/request')}
                className="ml-4 px-6 py-2.5 bg-gray-800 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-gray-900 transform transition-all duration-300"
              >
                REQUEST QUOTE
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Header - Clean White */}
      <div
        className={`lg:hidden sticky top-0 left-0 z-50 bg-white transition-all duration-300 border-b border-gray-200 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
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
              className="w-12 h-12 rounded-full shadow-sm border-2 border-gray-200"
            />
            <h1 className="font-bold text-base leading-4 text-gray-900">
              ABHISHEK
              <br />
              <span className="text-gray-700">
                PHARMA
              </span>
            </h1>
          </a>

          {/* Hamburger Menu Button - Gray */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
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

        {/* Mobile Menu Panel - Clean White with Gray Accents */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-3">
              <img 
                src="/lo.png" 
                alt="Abhishek Pharma Logo"
                className="w-12 h-12 rounded-full shadow-sm border-2 border-gray-200"
              />
              <h2 className="font-bold text-lg text-gray-900">Menu</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Menu Links - Clean Gray Design */}
          <div className="p-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setOpen(false);
                }}
                className={`block p-4 rounded-lg border-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  isActive(link.path)
                    ? 'bg-gray-800 border-gray-800 text-white shadow-md'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
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
              className={`block mt-6 p-4 rounded-lg font-bold text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                isActive('/request')
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-900'
              }`}
              style={{
                animation: open ? `slideInRight 0.3s ease-out 0.5s both` : 'none',
              }}
            >
              REQUEST QUOTE
            </a>
          </div>

          {/* Contact Info Section - Gray Background */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
            <div className="space-y-3">
              <a
                href="tel:+919414147250"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <div className="p-2 bg-gray-200 rounded-lg">
                  <FaPhoneAlt className="w-4 h-4 text-gray-700" />
                </div>
                <span className="font-medium">+91 9414147250</span>
              </a>
              <a
                href="mailto:info@abhishekpharma.com"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <div className="p-2 bg-gray-200 rounded-lg">
                  <FaEnvelope className="w-4 h-4 text-gray-700" />
                </div>
                <span className="font-medium text-sm">info@abhishekpharma.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
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
      `}</style>
    </>
  );
}
