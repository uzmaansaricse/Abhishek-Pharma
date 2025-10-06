import React, { useState } from 'react';
import Container from '../pages/Container';
import {
  FaMobileAlt, FaBarcode, FaClipboardList, FaChartBar,
  FaBox, FaTruck, FaFileInvoiceDollar, FaLaptopCode
} from 'react-icons/fa';
import { MdQrCodeScanner, MdInventory, MdAnalytics, MdCloudDone } from 'react-icons/md';

export default function PharmaTechnology() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    { 
      icon: MdInventory, 
      title: 'PharmaTrack Inventory', 
      desc: 'Real-time inventory management system with automated stock alerts and expiry tracking for pharmaceutical products.',
      color: 'from-teal-500 to-emerald-500'
    },
    { 
      icon: FaBarcode, 
      title: 'Smart Barcode System', 
      desc: 'Barcode-based tracking for seamless product identification, batch tracking, and supply chain visibility.',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: FaClipboardList, 
      title: 'Order Management', 
      desc: 'Automated order processing system that streamlines purchase orders, approvals, and delivery tracking.',
      color: 'from-teal-600 to-cyan-600'
    },
    { 
      icon: FaFileInvoiceDollar, 
      title: 'Digital Billing', 
      desc: 'Automated billing and invoicing system with GST compliance and integrated payment processing.',
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      icon: FaChartBar, 
      title: 'Sales Analytics', 
      desc: 'Advanced analytics dashboard providing insights into sales trends, product performance, and market analysis.',
      color: 'from-teal-500 to-emerald-500'
    },
    { 
      icon: FaTruck, 
      title: 'Distribution Tracker', 
      desc: 'GPS-enabled delivery tracking system ensuring real-time visibility of pharmaceutical shipments.',
      color: 'from-emerald-600 to-green-600'
    },
    { 
      icon: FaMobileAlt, 
      title: 'Mobile App Solution', 
      desc: 'Mobile application for on-the-go access to inventory, orders, and customer management features.',
      color: 'from-teal-500 to-emerald-500'
    },
    { 
      icon: MdCloudDone, 
      title: 'Cloud Integration', 
      desc: 'Secure cloud-based platform enabling seamless data access, backup, and multi-location synchronization.',
      color: 'from-emerald-500 to-teal-500'
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
                <FaLaptopCode className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Pharmaceutical <span className="text-yellow-300">Technology Solutions</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Digital Transformation for Modern Pharmaceutical Distribution
            </p>
            
            <p className="text-lg text-teal-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              Streamline operations with our cutting-edge technology platforms designed specifically for pharmaceutical businesses
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
                    Technology-Driven Solutions
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  Digitally Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Pharmaceutical Operations</span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  <strong>Abhishek Pharma</strong> helps organizations digitally transform their pharmaceutical distribution 
                  and automate all business processes. From our comprehensive inventory management systems to custom-built 
                  applications for your unique business needs, our team of technology experts is capable of delivering all 
                  your pharmaceutical technology requirements.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  We combine innovation with industry expertise to create solutions that optimize inventory management, 
                  streamline distribution, enhance compliance, and drive business growth. Our cloud-based platforms ensure 
                  real-time data access, automated workflows, and seamless integration across your entire supply chain.
                </p>
              </div>

              {/* Technology Benefits */}
              <div className="grid md:grid-cols-4 gap-6 mt-10">
                {[
                  { icon: '⚡', title: 'Real-Time', desc: 'Instant updates' },
                  { icon: '☁️', title: 'Cloud-Based', desc: 'Access anywhere' },
                  { icon: '🔒', title: 'Secure', desc: 'Data protection' },
                  { icon: '🤖', title: 'Automated', desc: 'Reduce errors' }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 text-center border-2 border-teal-200 hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Technology Suite</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions for pharmaceutical businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {solutions.map((solution, index) => (
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
                  <div className={`inline-flex p-5 bg-gradient-to-br ${solution.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <solution.icon className="text-4xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 text-lg font-bold text-center mb-3 group-hover:text-teal-600 transition-colors min-h-[56px] flex items-center">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-600 text-sm leading-relaxed">
                  {solution.desc}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 w-0 group-hover:w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features Showcase */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Features</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MdQrCodeScanner, title: 'QR Code Integration', desc: 'Scan and track products instantly' },
                { icon: MdAnalytics, title: 'Advanced Reports', desc: 'Comprehensive business insights' },
                { icon: FaBox, title: 'Batch Management', desc: 'Track batches and expiry dates' },
                { icon: '📱', title: 'Mobile Access', desc: 'Manage on the go' },
                { icon: '🔔', title: 'Smart Alerts', desc: 'Low stock and expiry notifications' },
                { icon: '📊', title: 'Dashboard', desc: 'Visual overview of operations' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {typeof feature.icon === 'string' ? (
                      <span className="text-3xl">{feature.icon}</span>
                    ) : (
                      <div className="p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl">
                        <feature.icon className="w-6 h-6 text-teal-600" />
                      </div>
                    )}
                    <h3 className="font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
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
              Ready to Go Digital?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Transform your pharmaceutical business with our cutting-edge technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Schedule a Demo
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
