import React, { useState } from 'react';
import { FaBriefcase, FaUserMd, FaTruck, FaChartLine, FaCheckCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const openPositions = [
    {
      title: 'Pharmaceutical Sales Representative',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-5 years',
      icon: FaBriefcase,
      description: 'Drive sales growth by building relationships with pharmacies and healthcare providers.'
    },
    {
      title: 'Quality Control Specialist',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-7 years',
      icon: FaCheckCircle,
      description: 'Ensure pharmaceutical products meet quality standards and regulatory requirements.'
    },
    {
      title: 'Warehouse Manager',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5+ years',
      icon: FaTruck,
      description: 'Oversee inventory management, storage, and distribution of pharmaceutical products.'
    },
    {
      title: 'Business Development Manager',
      location: 'Pan India',
      type: 'Full-time',
      experience: '4-8 years',
      icon: FaChartLine,
      description: 'Identify new business opportunities and expand our pharmaceutical distribution network.'
    },
    {
      title: 'Pharmacist',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-3 years',
      icon: FaUserMd,
      description: 'Provide expert pharmaceutical advice and ensure proper medication dispensing.'
    },
    {
      title: 'Supply Chain Coordinator',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      icon: FaTruck,
      description: 'Coordinate procurement, logistics, and timely delivery of pharmaceutical products.'
    }
  ];

  const benefits = [
    { icon: '💼', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive medical insurance' },
    { icon: '📈', title: 'Career Growth', desc: 'Professional development opportunities' },
    { icon: '🎯', title: 'Performance Bonuses', desc: 'Reward excellence and dedication' }
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
                <FaBriefcase className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Join Our <span className="text-yellow-300">Team</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Build Your Career in Pharmaceutical Excellence
            </p>
            
            <p className="text-lg text-teal-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              Be part of a dynamic team dedicated to providing quality pharmaceutical solutions across India
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200 text-center"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Work at <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Abhishek Pharma?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate professionals committed to healthcare excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl" data-aos="fade-right">
              <div className="inline-flex p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl mb-4">
                <FaCheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Culture</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We select our team very diligently. Our team is made up of passionate and ambitious pharmaceutical professionals who are driven & dedicated to providing exceptional service to our clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We invest in our employees' professional development, providing ongoing training, mentorship, and growth opportunities to help them achieve their full potential in the pharmaceutical industry.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl" data-aos="fade-left">
              <div className="inline-flex p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-4">
                <FaChartLine className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Growth & Innovation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Abhishek Pharma, we understand that the pharmaceutical industry is constantly evolving. That's why we stay at the forefront of industry trends, using the latest technologies to deliver excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We approach every challenge with innovation and collaborate to develop solutions that align with our mission of providing quality healthcare products across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Openings</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => setSelectedJob(position)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <position.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                    {position.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {position.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {position.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="w-4 h-4 text-teal-500" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-4 h-4 text-teal-500" />
                    <span>{position.experience}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                  <MdSend className="w-4 h-4" />
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            We're always looking for talented professionals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@abhishekpharma.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <MdSend className="w-5 h-5" />
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
