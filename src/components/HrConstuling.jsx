import React, { useState } from 'react';
import Container from '../pages/Container';
import {
  FaPills, FaSyringe, FaTruck, FaWarehouse, FaBoxes, FaClipboardCheck,
  FaShieldAlt, FaCertificate, FaHandshake, FaChartLine, FaLeaf, FaHospital,
  FaUserMd, FaFlask, FaIndustry, FaFileInvoiceDollar, FaGift, FaStethoscope
} from 'react-icons/fa';
import { MdInventory, MdVerified, MdLocalShipping } from 'react-icons/md';

export default function PharmaceuticalServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaPills />,
      title: 'Bulk Pharmaceutical Supply',
      desc: 'Comprehensive range of tablets, capsules, and medicines for wholesale distribution.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaSyringe />,
      title: 'Injections & Vaccines',
      desc: 'Temperature-controlled storage and distribution of injectable medicines.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <FaTruck />,
      title: 'Logistics & Distribution',
      desc: 'Fast, reliable delivery network across all major cities in India.',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      icon: <FaWarehouse />,
      title: 'Inventory Management',
      desc: 'Real-time stock tracking and automated reordering systems.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <FaBoxes />,
      title: 'Bulk Order Processing',
      desc: 'Efficient handling of large-scale orders for hospitals and chains.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Quality Assurance',
      desc: 'ISO-certified products with rigorous quality control measures.',
      color: 'from-emerald-600 to-green-600'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Regulatory Compliance',
      desc: 'Full compliance with drug licensing and pharmaceutical regulations.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaCertificate />,
      title: 'Product Authentication',
      desc: 'Verified genuine products with complete traceability.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <MdVerified />,
      title: 'License & Documentation',
      desc: 'Assistance with drug licenses and regulatory documentation.',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership Programs',
      desc: 'Distributor and franchise opportunities across India.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <FaChartLine />,
      title: 'Market Analysis',
      desc: 'Data-driven insights for pharmaceutical market trends.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaLeaf />,
      title: 'Ayurvedic Products',
      desc: 'Natural and traditional Ayurvedic medicine distribution.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaHospital />,
      title: 'Hospital Supply Solutions',
      desc: 'Dedicated supply chain for hospital pharmaceutical needs.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaUserMd />,
      title: 'Healthcare Consultation',
      desc: 'Expert guidance on pharmaceutical procurement and management.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <FaFlask />,
      title: 'OTC Products',
      desc: 'Wide selection of over-the-counter medicines and health products.',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      icon: <FaIndustry />,
      title: 'Manufacturing Tie-ups',
      desc: 'Direct partnerships with leading pharmaceutical manufacturers.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Competitive Pricing',
      desc: 'Best wholesale rates with flexible payment options.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <FaGift />,
      title: 'Promotional Products',
      desc: 'Special offers and promotional pharmaceutical campaigns.',
      color: 'from-emerald-600 to-green-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <FaStethoscope className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Our <span className="text-yellow-300">Pharmaceutical Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Comprehensive Solutions for Healthcare Distribution
            </p>
            
            <p className="text-lg text-teal-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              We understand exactly what your organization needs to deliver quality pharmaceutical products efficiently and reliably
            </p>
          </div>
        </Container>
      </div>

      {/* Introduction Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      About Our Services
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800">
                    Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Excellence</span> in Every Service
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    We understand exactly what your organization needs to deliver quality pharmaceutical products to healthcare providers across India. Our services are strategically designed to meet critical objectives in distribution, quality assurance, and regulatory compliance.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border-2 border-teal-200">
                    <div className="space-y-4">
                      {[
                        'ISO Certified Quality',
                        'Pan-India Distribution',
                        'Regulatory Compliance',
                        'Competitive Pricing'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-semibold text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border-l-4 border-teal-500">
                <p className="text-gray-700 leading-relaxed">
                  Whether your organization needs bulk pharmaceutical supply, quality assurance support, logistics management, or partnership opportunities, we provide comprehensive solutions fully customized to your pharmaceutical distribution needs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end pharmaceutical distribution and support services
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-teal-200 flex flex-col items-center cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Container */}
                <div className={`relative mb-4 ${hoveredIndex === index ? 'animate-bounce' : ''}`}>
                  <div className={`inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="text-4xl text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 text-lg font-bold text-center mb-3 group-hover:text-teal-600 transition-colors min-h-[56px] flex items-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 w-0 group-hover:w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Discover how our pharmaceutical services can help your business grow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
