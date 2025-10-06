import React, { useState } from 'react';
import Container from '../pages/Container';
import { FaPills, FaSyringe, FaLeaf, FaGift, FaEyeDropper, FaStethoscope, FaCheckCircle, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      icon: FaPills,
      title: 'Tablets & Capsules',
      description: 'Wide range of branded and generic tablets for various health needs.',
      color: 'from-teal-500 to-emerald-500',
      features: ['500+ Varieties', 'All Brands', 'Generic Available']
    },
    {
      icon: FaSyringe,
      title: 'Injections & Vaccines',
      description: 'High-quality injections and vaccines for medical treatments.',
      color: 'from-emerald-500 to-teal-500',
      features: ['Cold Chain', 'WHO Standards', 'Certified']
    },
    {
      icon: FaLeaf,
      title: 'Ayurvedic Medicines',
      description: 'Natural and traditional Ayurvedic remedies for holistic health.',
      color: 'from-green-500 to-emerald-500',
      features: ['100% Natural', 'Traditional', 'Safe']
    },
    {
      icon: FaGift,
      title: 'Promotional Products',
      description: 'Specialized promotional medicines and healthcare products.',
      color: 'from-cyan-500 to-teal-500',
      features: ['Bulk Orders', 'Custom Packaging', 'Discounts']
    },
    {
      icon: FaEyeDropper,
      title: 'Syrups & Suspensions',
      description: 'Effective syrups for cough, cold, and other ailments.',
      color: 'from-teal-600 to-cyan-600',
      features: ['All Age Groups', 'Sugar-Free', 'Flavored']
    },
    {
      icon: FaStethoscope,
      title: 'OTC Products',
      description: 'Over-the-counter medicines for everyday health concerns.',
      color: 'from-emerald-600 to-green-600',
      features: ['No Prescription', 'Daily Use', 'Safe']
    }
  ];

  const benefits = [
    { icon: FaCheckCircle, title: 'Authentic Products', desc: 'ISO certified and quality assured' },
    { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick and reliable shipping' },
    { icon: FaShieldAlt, title: 'Safe & Secure', desc: 'Proper handling and storage' },
    { icon: MdVerified, title: 'Verified Suppliers', desc: 'Direct from manufacturers' }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
                Comprehensive Product Range
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Our Product <span className="text-yellow-300">Categories</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-8" data-aos="fade-up" data-aos-delay="200">
              We offer a comprehensive range of pharmaceutical products to meet your healthcare needs. Contact us for detailed product lists and bulk orders.
            </p>

            
          </div>
        </Container>
      </div>

      {/* Product Categories Grid */}
      <div className="py-20" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-2 border-transparent hover:border-teal-200"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon Section */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex p-6 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-full text-xs font-medium text-teal-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  
                </div>

                {/* Animated Badge */}
                {hoveredIndex === index && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Our Products?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quality, reliability, and service you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl mb-4">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FaStethoscope className="w-12 h-12" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-aos="zoom-in">
              Need a Complete Product List?
            </h2>
            
            <p className="text-xl mb-8 text-teal-100" data-aos="fade-up" data-aos-delay="200">
              Get detailed information about our entire product range, pricing, and availability
            </p>
            
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
              >
                <FaCheckCircle />
                Contact Us
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
              >
                <FaGift />
                Request Quote
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { number: '10,000+', label: 'Products' },
                { number: '100%', label: 'Authentic' },
                { number: '24/7', label: 'Available' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</h3>
                  <p className="text-sm text-teal-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
