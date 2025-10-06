import React from 'react';
import Container from '../pages/Container';
import { FaShieldAlt, FaAward, FaCertificate, FaHeart, FaHandshake, FaLeaf, FaBullseye } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center" data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="zoom-in">
              About <span className="text-yellow-300">Abhishek Pharma</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Trusted Wholesale Supplier of Quality Pharmaceutical Products
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '500+', label: 'Healthcare Partners' },
                { number: '10K+', label: 'Products' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</h3>
                  <p className="text-sm lg:text-base text-teal-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Our Story Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                alt="Pharmaceutical Excellence"
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-6 shadow-2xl animate-float">
                <MdVerified className="w-12 h-12 text-white" />
                <p className="text-white font-bold mt-2">ISO Certified</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Trust Through Quality</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Abhishek Pharma has been a trusted wholesale supplier of branded and promotional medicines since 2010. We specialize in providing high-quality pharmaceutical products to healthcare providers, pharmacies, and businesses across India.
                </p>
                <p className="text-lg">
                  With a team of experienced professionals, we have successfully served the pharmaceutical industry with a wide range of products including tablets, injections, syrups, Ayurvedic medicines, and OTC products.
                </p>
                <p className="text-lg">
                  Our dedication to excellence has enabled us to build strong partnerships with clients, ensuring timely delivery and competitive pricing.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['Certified Products', 'Timely Delivery', 'Competitive Pricing', 'Expert Support'].map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-full text-teal-700 font-medium text-sm hover:scale-105 transition-transform duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: 'Quality Assurance', desc: 'We ensure every product meets the highest standards of pharmaceutical excellence and safety.' },
              { icon: FaHandshake, title: 'Trust & Integrity', desc: 'Building lasting relationships through transparent practices and ethical business conduct.' },
              { icon: FaHeart, title: 'Customer Focus', desc: 'Your satisfaction drives us. We provide personalized service and support at every step.' },
              { icon: FaLeaf, title: 'Sustainability', desc: 'Committed to environmentally responsible practices in all our operations.' },
              { icon: FaAward, title: 'Excellence', desc: 'Continuous improvement and innovation in pharmaceutical distribution and service.' },
              { icon: MdVerified, title: 'Compliance', desc: 'Full adherence to regulatory requirements and industry best practices.' }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <value.icon className="w-10 h-10 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div
              className="relative bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-10 text-white overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
              data-aos="fade-right"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/20 rounded-2xl mb-6">
                  <FaBullseye className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-teal-50 leading-relaxed">
                  To be the leading wholesale supplier of pharmaceutical products, promoting health and wellness through reliable and accessible medicines across India and beyond.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
              data-aos="fade-left"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/20 rounded-2xl mb-6">
                  <FaHeart className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-emerald-50 leading-relaxed">
                  To provide high-quality, authentic medicines and exceptional service to healthcare providers, ensuring customer satisfaction and contributing to better health outcomes for all.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-teal-900 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Certifications & <span className="text-yellow-300">Licenses</span>
            </h2>
            <p className="text-xl text-gray-300">
              Fully compliant with all regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: FaCertificate, title: 'ISO Certified', desc: 'ISO 9001:2015 Quality Management' },
              { icon: FaShieldAlt, title: 'Drug License', desc: 'License No.: DL-123456789' },
              { icon: MdVerified, title: 'GSTIN Registered', desc: 'GSTIN: 27XXXXX1234X1ZY' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20 hover:bg-white/20 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl mb-4">
                  <cert.icon className="w-10 h-10 text-whitete" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-300">{cert.title}</h3>
                <p className="text-gray-300">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We are fully licensed and compliant with all regulatory requirements for pharmaceutical distribution. Our certifications ensure that every product we supply meets the highest standards of quality and safety.
            </p>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-aos="zoom-in">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-teal-100" data-aos="fade-up" data-aos-delay="200">
              Join hundreds of healthcare providers who trust Abhishek Pharma for their pharmaceutical needs
            </p>
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Contact Us Today
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Add custom CSS for animations */}
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

        @import 'react-icons/fa';
      `}</style>
    </div>
  );
}
