import React, { useState } from 'react';
import { 
  FaTruck, FaWarehouse, FaBoxes, FaClipboardCheck, 
  FaFileInvoiceDollar, FaHandshake, FaUserMd, FaChartLine 
} from 'react-icons/fa';
import { MdLocalShipping, MdInventory, MdSupportAgent, MdVerified } from 'react-icons/md';
import Container from '../pages/Container';

export default function PharmaceuticalSupport() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: FaTruck,
      title: 'Distribution Management',
      description: 'Complete pharmaceutical distribution services ensuring timely delivery to pharmacies and hospitals across India.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: FaWarehouse,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art storage facilities with temperature-controlled environments for sensitive pharmaceutical products.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FaBoxes,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking systems ensuring optimal stock levels and reducing wastage through expiry management.',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      icon: FaClipboardCheck,
      title: 'Quality Control Services',
      description: 'Comprehensive quality assurance and batch testing services ensuring compliance with pharmaceutical standards.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Billing & Documentation',
      description: 'Streamlined billing processes and regulatory documentation management for seamless pharmaceutical transactions.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: FaHandshake,
      title: 'Partnership Programs',
      description: 'Exclusive partnership opportunities for distributors, retailers, and healthcare providers with dedicated support.',
      color: 'from-emerald-600 to-green-600'
    },
    {
      icon: FaUserMd,
      title: 'Healthcare Staffing',
      description: 'Qualified pharmacists and healthcare professionals available for temporary, permanent, or contract-based positions.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: FaChartLine,
      title: 'Business Analytics',
      description: 'Data-driven insights and market analysis to optimize pharmaceutical sales and distribution strategies.',
      color: 'from-emerald-500 to-teal-500'
    },
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
                <MdSupportAgent className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Pharmaceutical <span className="text-yellow-300">Support Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Complete Solutions for Healthcare Supply Chain Management
            </p>
            
            <p className="text-lg text-teal-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              From warehousing to distribution, we provide end-to-end pharmaceutical support services
            </p>
          </div>
        </Container>
      </div>

      {/* Introduction Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    About Our Support Services
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Pharmaceutical Partner</span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  <strong>Abhishek Pharma</strong> offers comprehensive pharmaceutical support services designed to streamline 
                  your healthcare operations. Our services include Distribution Management, Warehousing Solutions, Inventory 
                  Management, Quality Control, Billing & Documentation, Partnership Programs, Healthcare Staffing, and Business 
                  Analytics.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  As a trusted pharmaceutical distributor, we leverage our extensive experience and cutting-edge systems to 
                  enhance operational efficiency and optimize supply chain processes for businesses across India. Whether you're 
                  looking to outsource distribution, manage inventory, or partner for growth, <strong>Abhishek Pharma</strong> is here 
                  to help you navigate the complexities of pharmaceutical operations, ensuring your business remains compliant, 
                  efficient, and competitive.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  { icon: MdVerified, title: 'ISO Certified', desc: 'Quality assured operations' },
                  { icon: MdLocalShipping, title: 'Pan-India Network', desc: 'Nationwide distribution reach' },
                  { icon: MdInventory, title: 'Smart Systems', desc: 'Technology-driven solutions' }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 text-center border-2 border-teal-200"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="inline-flex p-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Support Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive pharmaceutical solutions tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
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
                    <service.icon className="text-4xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 text-lg font-bold text-center mb-3 group-hover:text-teal-600 transition-colors min-h-[56px] flex items-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 w-0 group-hover:w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Abhishek Pharma?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Experience', desc: '15+ years in pharmaceutical distribution', icon: '📅' },
                { title: 'Network', desc: '500+ healthcare partners across India', icon: '🏥' },
                { title: 'Quality', desc: 'ISO certified with rigorous quality control', icon: '✅' },
                { title: 'Technology', desc: 'Advanced inventory and tracking systems', icon: '💻' },
                { title: 'Compliance', desc: 'Full regulatory compliance and licensing', icon: '📋' },
                { title: 'Support', desc: '24/7 customer support and assistance', icon: '🤝' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Let us handle your pharmaceutical support services so you can focus on growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Request Information
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
