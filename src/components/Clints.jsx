import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaTruck, FaStore, FaHospital } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';

const Partners = () => {
  const distributionAreas = [
    { icon: '🏥', title: 'Hospitals', count: '150+', desc: 'Major hospitals across India' },
    { icon: '💊', title: 'Pharmacies', count: '500+', desc: 'Retail and chain pharmacies' },
    { icon: '🏬', title: 'Distributors', count: '200+', desc: 'Regional distributors' },
    { icon: '🏪', title: 'Clinics', count: '300+', desc: 'Private clinics and healthcare centers' }
  ];

  const partnerStates = [
    'Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu',
    'Telangana', 'Delhi NCR', 'Uttar Pradesh', 'West Bengal'
  ];

  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <FaHandshake className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Our Distribution <span className="text-yellow-300">Network</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Serving Healthcare Providers Across India
            </p>
            
            <p className="text-lg text-teal-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              Partner with Abhishek Pharma for reliable pharmaceutical distribution and supply chain solutions
            </p>
          </div>
        </div>
      </div>

      {/* Distribution Stats */}
      <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200 text-center"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-3">{area.icon}</div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 mb-2">
                  {area.count}
                </h3>
                <h4 className="font-bold text-gray-800 mb-1">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Information */}
      <div className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why Partner Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl" data-aos="fade-right">
              <div className="inline-flex p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl mb-6">
                <FaHandshake className="w-8 h-8 text-teal-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Abhishek Pharma?</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  We are proud to work with a network of trusted healthcare providers, pharmacies, and distributors across India. Together, we aim to deliver exceptional pharmaceutical products and expand our presence throughout the country.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our partnership model is built on trust, quality, and mutual growth. We provide comprehensive support to ensure your success in the pharmaceutical distribution business.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Authentic ISO-certified products',
                  'Competitive wholesale pricing',
                  'Timely delivery and logistics support',
                  'Marketing and promotional assistance',
                  'Dedicated account management'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Contact Card */}
            <div className="space-y-6" data-aos="fade-left">
              {/* Main Office Card */}
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">Head Office</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="font-bold text-lg mb-2">Abhishek Pharma</p>
                      <p className="text-teal-100">
                        123 Medical Plaza,<br />
                        Andheri East, Mumbai,<br />
                        Maharashtra - 400069, India
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <FaPhoneAlt className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-teal-100 text-sm mb-1">Phone</p>
                        <a href="tel:+919876543210" className="font-semibold hover:text-yellow-300 transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <FaEnvelope className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-teal-100 text-sm mb-1">Email</p>
                        <a href="mailto:partners@abhishekpharma.com" className="font-semibold hover:text-yellow-300 transition-colors break-all">
                          partners@abhishekpharma.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partner Locations */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaGlobe className="text-teal-600" />
                  We Serve These States
                </h4>
                <div className="flex flex-wrap gap-2">
                  {partnerStates.map((state, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking to expand your pharmaceutical business? Join our growing network of partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FaTruck, title: 'Become a Distributor', desc: 'Distribute our products in your region' },
              { icon: MdLocalPharmacy, title: 'Pharmacy Partnership', desc: 'Stock quality medicines at competitive prices' },
              { icon: FaHospital, title: 'Hospital Tie-ups', desc: 'Bulk supply agreements for hospitals' }
            ].map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl mb-4">
                  <opportunity.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Interested in partnership opportunities? Contact us to discuss how we can grow together.
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:from-teal-600 hover:to-emerald-600">
                Become a Partner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
