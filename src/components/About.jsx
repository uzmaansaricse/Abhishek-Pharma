import React, { useState } from 'react';
import Container from '../pages/Container';
import { FaShieldAlt, FaAward, FaCertificate, FaHeart, FaHandshake, FaLeaf, FaBullseye, FaGlobe } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function About() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      heroTitle: 'About',
      heroHighlight: 'Abhishek Pharma',
      heroSubtitle: 'Trusted Wholesale Supplier of Quality Pharmaceutical Products',
      stats: [
        { number: '15+', label: 'Years Experience' },
        { number: '500+', label: 'Healthcare Partners' },
        { number: '10K+', label: 'Products' },
        { number: '24/7', label: 'Support' }
      ],
      storyBadge: 'Our Story',
      storyTitle: 'Building',
      storyHighlight: 'Trust Through Quality',
      storyPara1: 'Abhishek Pharma has been a trusted wholesale supplier of branded and promotional medicines since 2010. We specialize in providing high-quality pharmaceutical products to healthcare providers, pharmacies, and businesses across India.',
      storyPara2: 'With a team of experienced professionals, we have successfully served the pharmaceutical industry with a wide range of products including tablets, injections, syrups, Ayurvedic medicines, and OTC products.',
      storyPara3: 'Our dedication to excellence has enabled us to build strong partnerships with clients, ensuring timely delivery and competitive pricing.',
      features: ['Certified Products', 'Timely Delivery', 'Competitive Pricing', 'Expert Support'],
      valuesTitle: 'Our Core',
      valuesHighlight: 'Values',
      valuesSubtitle: 'Principles that guide everything we do',
      values: [
        { title: 'Quality Assurance', desc: 'We ensure every product meets the highest standards of pharmaceutical excellence and safety.' },
        { title: 'Trust & Integrity', desc: 'Building lasting relationships through transparent practices and ethical business conduct.' },
        { title: 'Customer Focus', desc: 'Your satisfaction drives us. We provide personalized service and support at every step.' },
        { title: 'Sustainability', desc: 'Committed to environmentally responsible practices in all our operations.' },
        { title: 'Excellence', desc: 'Continuous improvement and innovation in pharmaceutical distribution and service.' },
        { title: 'Compliance', desc: 'Full adherence to regulatory requirements and industry best practices.' }
      ],
      visionTitle: 'Our Vision',
      visionDesc: 'To be the leading wholesale supplier of pharmaceutical products, promoting health and wellness through reliable and accessible medicines across India and beyond.',
      missionTitle: 'Our Mission',
      missionDesc: 'To provide high-quality, authentic medicines and exceptional service to healthcare providers, ensuring customer satisfaction and contributing to better health outcomes for all.',
      certTitle: 'Certifications &',
      certHighlight: 'Licenses',
      certSubtitle: 'Fully compliant with all regulatory requirements',
      certifications: [
        { title: 'ISO Certified', desc: 'ISO 9001:2015 Quality Management' },
        { title: 'Drug License', desc: 'License No.: DL-123456789' },
        { title: 'GSTIN Registered', desc: 'GSTIN: 27XXXXX1234X1ZY' }
      ],
      certDesc: 'We are fully licensed and compliant with all regulatory requirements for pharmaceutical distribution. Our certifications ensure that every product we supply meets the highest standards of quality and safety.',
      ctaTitle: 'Ready to Partner With Us?',
      ctaSubtitle: 'Join hundreds of healthcare providers who trust Abhishek Pharma for their pharmaceutical needs',
      ctaBtn1: 'Contact Us Today',
      ctaBtn2: 'Request a Quote'
    },
    hi: {
      heroTitle: 'अभिषेक फार्मा ',
      heroHighlight: 'के बारे में',
      heroSubtitle: 'गुणवत्तापूर्ण फार्मास्युटिकल उत्पादों का विश्वसनीय थोक आपूर्तिकर्ता',
      stats: [
        { number: '15+', label: 'वर्षों का अनुभव' },
        { number: '500+', label: 'स्वास्थ्य साझेदार' },
        { number: '10K+', label: 'उत्पाद' },
        { number: '24/7', label: 'सहायता' }
      ],
      storyBadge: 'हमारी कहानी',
      storyTitle: 'निर्माण',
      storyHighlight: 'गुणवत्ता के माध्यम से विश्वास',
      storyPara1: 'अभिषेक फार्मा 2010 से ब्रांडेड और प्रचार दवाओं का एक विश्वसनीय थोक आपूर्तिकर्ता रहा है। हम पूरे भारत में स्वास्थ्य सेवा प्रदाताओं, फार्मेसियों और व्यवसायों को उच्च गुणवत्ता वाले फार्मास्युटिकल उत्पाद प्रदान करने में विशेषज्ञ हैं।',
      storyPara2: 'अनुभवी पेशेवरों की एक टीम के साथ, हमने गोलियों, इंजेक्शन, सिरप, आयुर्वेदिक दवाओं और ओटीसी उत्पादों सहित उत्पादों की एक विस्तृत श्रृंखला के साथ फार्मास्युटिकल उद्योग को सफलतापूर्वक सेवा प्रदान की है।',
      storyPara3: 'उत्कृष्टता के प्रति हमारे समर्पण ने हमें ग्राहकों के साथ मजबूत साझेदारी बनाने में सक्षम बनाया है, समय पर डिलीवरी और प्रतिस्पर्धी मूल्य निर्धारण सुनिश्चित करते हुए।',
      features: ['प्रमाणित उत्पाद', 'समय पर डिलीवरी', 'प्रतिस्पर्धी मूल्य', 'विशेषज्ञ सहायता'],
      valuesTitle: 'हमारे मुख्य',
      valuesHighlight: 'मूल्य',
      valuesSubtitle: 'सिद्धांत जो हम जो कुछ भी करते हैं उसका मार्गदर्शन करते हैं',
      values: [
        { title: 'गुणवत्ता आश्वासन', desc: 'हम सुनिश्चित करते हैं कि प्रत्येक उत्पाद फार्मास्युटिकल उत्कृष्टता और सुरक्षा के उच्चतम मानकों को पूरा करता है।' },
        { title: 'विश्वास और ईमानदारी', desc: 'पारदर्शी प्रथाओं और नैतिक व्यावसायिक आचरण के माध्यम से स्थायी संबंध बनाना।' },
        { title: 'ग्राहक फोकस', desc: 'आपकी संतुष्टि हमें प्रेरित करती है। हम हर कदम पर व्यक्तिगत सेवा और सहायता प्रदान करते हैं।' },
        { title: 'स्थिरता', desc: 'हमारे सभी संचालन में पर्यावरण की दृष्टि से जिम्मेदार प्रथाओं के लिए प्रतिबद्ध।' },
        { title: 'उत्कृष्टता', desc: 'फार्मास्युटिकल वितरण और सेवा में निरंतर सुधार और नवाचार।' },
        { title: 'अनुपालन', desc: 'नियामक आवश्यकताओं और उद्योग सर्वोत्तम प्रथाओं का पूर्ण पालन।' }
      ],
      visionTitle: 'हमारी दृष्टि',
      visionDesc: 'भारत और उससे आगे विश्वसनीय और सुलभ दवाओं के माध्यम से स्वास्थ्य और कल्याण को बढ़ावा देते हुए फार्मास्युटिकल उत्पादों का अग्रणी थोक आपूर्तिकर्ता बनना।',
      missionTitle: 'हमारा मिशन',
      missionDesc: 'स्वास्थ्य सेवा प्रदाताओं को उच्च गुणवत्ता वाली, प्रामाणिक दवाएं और असाधारण सेवा प्रदान करना, ग्राहक संतुष्टि सुनिश्चित करना और सभी के लिए बेहतर स्वास्थ्य परिणामों में योगदान करना।',
      certTitle: 'प्रमाणन और',
      certHighlight: 'लाइसेंस',
      certSubtitle: 'सभी नियामक आवश्यकताओं के साथ पूरी तरह से अनुपालन',
      certifications: [
        { title: 'आईएसओ प्रमाणित', desc: 'ISO 9001:2015 गुणवत्ता प्रबंधन' },
        { title: 'औषधि लाइसेंस', desc: 'लाइसेंस नं.: DL-123456789' },
        { title: 'GSTIN पंजीकृत', desc: 'GSTIN: 27XXXXX1234X1ZY' }
      ],
      certDesc: 'हम फार्मास्युटिकल वितरण के लिए सभी नियामक आवश्यकताओं के साथ पूरी तरह से लाइसेंस प्राप्त और अनुपालन कर रहे हैं। हमारे प्रमाणन यह सुनिश्चित करते हैं कि हम जो भी उत्पाद आपूर्ति करते हैं वह गुणवत्ता और सुरक्षा के उच्चतम मानकों को पूरा करता है।',
      ctaTitle: 'हमारे साथ साझेदारी करने के लिए तैयार हैं?',
      ctaSubtitle: 'सैकड़ों स्वास्थ्य सेवा प्रदाताओं में शामिल हों जो अपनी फार्मास्युटिकल जरूरतों के लिए अभिषेक फार्मा पर भरोसा करते हैं',
      ctaBtn1: 'आज ही संपर्क करें',
      ctaBtn2: 'कोट का अनुरोध करें'
    }
  };

  const t = content[language];
  const valueIcons = [FaShieldAlt, FaHandshake, FaHeart, FaLeaf, FaAward, MdVerified];
  const certIcons = [FaCertificate, FaShieldAlt, MdVerified];

  return (
    <div className="w-[100vw] overflow-x-hidden bg-white">
      {/* Language Toggle Button - Gray Theme */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section - Clean Gray */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center" data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="zoom-in">
              {t.heroTitle} <span className="text-gray-300">{t.heroHighlight}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              {t.heroSubtitle}
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              {t.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-sm lg:text-base text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Our Story Section - Light Gray Background */}
      <div className="py-16 bg-gray-50" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gray-200 rounded-3xl blur-xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                alt="Pharmaceutical Excellence"
                className="relative rounded-2xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-500 border-2 border-gray-200"
              />
              
              {/* Floating Badge - Gray Accent */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-xl p-6 shadow-xl animate-float border-2 border-gray-200">
                <MdVerified className="w-12 h-12 text-white" />
                <p className="text-white font-bold mt-2">{language === 'en' ? 'ISO Certified' : 'आईएसओ प्रमाणित'}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="inline-block">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {t.storyBadge}
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t.storyTitle} <span className="text-gray-700">{t.storyHighlight}</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">{t.storyPara1}</p>
                <p className="text-lg">{t.storyPara2}</p>
                <p className="text-lg">{t.storyPara3}</p>
              </div>

              {/* Feature Pills - Gray Design */}
              <div className="flex flex-wrap gap-3 pt-4">
                {t.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-800 font-medium text-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Values Section - White Background */}
      <div className="py-16 bg-white" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.valuesTitle} <span className="text-gray-700">{t.valuesHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.valuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-gray-400"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-gray-200 rounded-xl group-hover:bg-gray-800 transition-all duration-300">
                      <Icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Vision & Mission Section - Light Gray */}
      <div className="py-16 bg-gray-50" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div
              className="relative bg-gray-800 rounded-2xl p-10 text-white overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500"
              data-aos="fade-right"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/10 rounded-xl mb-6">
                  <FaBullseye className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.visionTitle}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.visionDesc}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="relative bg-gray-700 rounded-2xl p-10 text-white overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500"
              data-aos="fade-left"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/10 rounded-xl mb-6">
                  <FaHeart className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.missionTitle}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.missionDesc}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Certifications Section - Dark Gray */}
      <div className="py-16 bg-gray-900 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {t.certTitle} <span className="text-gray-300">{t.certHighlight}</span>
            </h2>
            <p className="text-xl text-gray-400">
              {t.certSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.certifications.map((cert, index) => {
              const Icon = certIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center border-2 border-white/10 hover:bg-white/10 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-block p-4 bg-gray-800 rounded-xl mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">{cert.title}</h3>
                  <p className="text-gray-400">{cert.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t.certDesc}
            </p>
          </div>
        </Container>
      </div>

      {/* CTA Section - Gray Gradient */}
      <div className="py-16 bg-gradient-to-r from-gray-800 to-gray-700 text-white" data-aos="fade-up">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-aos="zoom-in">
              {t.ctaTitle}
            </h2>
            <p className="text-xl mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                {t.ctaBtn1}
              </a>
              <a
                href="/request"
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-2 border-white"
              >
                {t.ctaBtn2}
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
      `}</style>
    </div>
  );
}
