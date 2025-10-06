import React, { useState } from 'react';
import Container from '../pages/Container';
import { FaPills, FaSyringe, FaLeaf, FaGift, FaEyeDropper, FaStethoscope, FaCheckCircle, FaTruck, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      heroBadge: 'Comprehensive Product Range',
      heroTitle: 'Our Product',
      heroHighlight: 'Categories',
      heroSubtitle: 'We offer a comprehensive range of pharmaceutical products to meet your healthcare needs. Contact us for detailed product lists and bulk orders.',
      categories: [
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
      ],
      benefitsTitle: 'Why Choose',
      benefitsHighlight: 'Our Products?',
      benefitsSubtitle: 'Quality, reliability, and service you can trust',
      benefits: [
        { icon: FaCheckCircle, title: 'Authentic Products', desc: 'ISO certified and quality assured' },
        { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick and reliable shipping' },
        { icon: FaShieldAlt, title: 'Safe & Secure', desc: 'Proper handling and storage' },
        { icon: MdVerified, title: 'Verified Suppliers', desc: 'Direct from manufacturers' }
      ],
      ctaTitle: 'Need a Complete Product List?',
      ctaSubtitle: 'Get detailed information about our entire product range, pricing, and availability',
      ctaBtn1: 'Contact Us',
      ctaBtn2: 'Request Quote',
      stats: [
        { number: '10,000+', label: 'Products' },
        { number: '100%', label: 'Authentic' },
        { number: '24/7', label: 'Available' }
      ],
      popularBadge: 'Popular'
    },
    hi: {
      heroBadge: 'व्यापक उत्पाद रेंज',
      heroTitle: 'हमारे उत्पाद',
      heroHighlight: 'श्रेणियां',
      heroSubtitle: 'हम आपकी स्वास्थ्य सेवा की जरूरतों को पूरा करने के लिए फार्मास्युटिकल उत्पादों की एक व्यापक श्रृंखला प्रदान करते हैं। विस्तृत उत्पाद सूची और थोक ऑर्डर के लिए हमसे संपर्क करें।',
      categories: [
        {
          icon: FaPills,
          title: 'गोलियां और कैप्सूल',
          description: 'विभिन्न स्वास्थ्य जरूरतों के लिए ब्रांडेड और जेनेरिक गोलियों की विस्तृत श्रृंखला।',
          color: 'from-teal-500 to-emerald-500',
          features: ['500+ किस्में', 'सभी ब्रांड', 'जेनेरिक उपलब्ध']
        },
        {
          icon: FaSyringe,
          title: 'इंजेक्शन और वैक्सीन',
          description: 'चिकित्सा उपचार के लिए उच्च गुणवत्ता वाले इंजेक्शन और टीके।',
          color: 'from-emerald-500 to-teal-500',
          features: ['कोल्ड चेन', 'WHO मानक', 'प्रमाणित']
        },
        {
          icon: FaLeaf,
          title: 'आयुर्वेदिक दवाएं',
          description: 'समग्र स्वास्थ्य के लिए प्राकृतिक और पारंपरिक आयुर्वेदिक उपचार।',
          color: 'from-green-500 to-emerald-500',
          features: ['100% प्राकृतिक', 'पारंपरिक', 'सुरक्षित']
        },
        {
          icon: FaGift,
          title: 'प्रचार उत्पाद',
          description: 'विशेष प्रचार दवाएं और स्वास्थ्य सेवा उत्पाद।',
          color: 'from-cyan-500 to-teal-500',
          features: ['थोक ऑर्डर', 'कस्टम पैकेजिंग', 'छूट']
        },
        {
          icon: FaEyeDropper,
          title: 'सिरप और सस्पेंशन',
          description: 'खांसी, सर्दी और अन्य बीमारियों के लिए प्रभावी सिरप।',
          color: 'from-teal-600 to-cyan-600',
          features: ['सभी आयु वर्ग', 'शुगर-फ्री', 'स्वाद युक्त']
        },
        {
          icon: FaStethoscope,
          title: 'ओटीसी उत्पाद',
          description: 'रोजमर्रा की स्वास्थ्य समस्याओं के लिए ओवर-द-काउंटर दवाएं।',
          color: 'from-emerald-600 to-green-600',
          features: ['बिना नुस्खे', 'दैनिक उपयोग', 'सुरक्षित']
        }
      ],
      benefitsTitle: 'क्यों चुनें',
      benefitsHighlight: 'हमारे उत्पाद?',
      benefitsSubtitle: 'गुणवत्ता, विश्वसनीयता और सेवा जिस पर आप भरोसा कर सकते हैं',
      benefits: [
        { icon: FaCheckCircle, title: 'प्रामाणिक उत्पाद', desc: 'आईएसओ प्रमाणित और गुणवत्ता आश्वासन' },
        { icon: FaTruck, title: 'तेज डिलीवरी', desc: 'त्वरित और विश्वसनीय शिपिंग' },
        { icon: FaShieldAlt, title: 'सुरक्षित', desc: 'उचित हैंडलिंग और भंडारण' },
        { icon: MdVerified, title: 'सत्यापित आपूर्तिकर्ता', desc: 'सीधे निर्माताओं से' }
      ],
      ctaTitle: 'पूर्ण उत्पाद सूची चाहिए?',
      ctaSubtitle: 'हमारी संपूर्ण उत्पाद श्रृंखला, मूल्य निर्धारण और उपलब्धता के बारे में विस्तृत जानकारी प्राप्त करें',
      ctaBtn1: 'संपर्क करें',
      ctaBtn2: 'कोट का अनुरोध',
      stats: [
        { number: '10,000+', label: 'उत्पाद' },
        { number: '100%', label: 'प्रामाणिक' },
        { number: '24/7', label: 'उपलब्ध' }
      ],
      popularBadge: 'लोकप्रिय'
    }
  };

  const t = content[language];

  return (
    <div className=" w-[100vw] overflow-x-hidden bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
      {/* Language Toggle Button */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
                {t.heroBadge}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              {t.heroTitle} <span className="text-yellow-300">{t.heroHighlight}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-8" data-aos="fade-up" data-aos-delay="200">
              {t.heroSubtitle}
            </p>
          </div>
        </Container>
      </div>

      {/* Product Categories Grid */}
      <div className="py-20" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {t.categories.map((category, index) => (
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
                    {t.popularBadge}
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
              {t.benefitsTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">{t.benefitsHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.benefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => (
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
              {t.ctaTitle}
            </h2>
            
            <p className="text-xl mb-8 text-teal-100" data-aos="fade-up" data-aos-delay="200">
              {t.ctaSubtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
              >
                <FaCheckCircle />
                {t.ctaBtn1}
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
              >
                <FaGift />
                {t.ctaBtn2}
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              {t.stats.map((stat, index) => (
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
