import React, { useState } from 'react';
import Container from '../pages/Container';
import { FaShieldAlt, FaAward, FaCertificate, FaHeart, FaHandshake, FaLeaf, FaBullseye, FaGlobe, FaCheckCircle, FaTruck, FaUserMd, FaBoxes, FaMoneyBillWave, FaHeadset, FaWarehouse, FaClock } from 'react-icons/fa';
import { MdVerified, MdLocalShipping, MdInventory } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';

export default function About() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      heroTitle: 'About',
      heroHighlight: 'Abhishek Pharma',
      heroSubtitle: 'Trusted Wholesale Supplier of Quality Pharmaceutical Products',
      stats: [
        { number: '20+', label: 'Years Experience' },
        { number: '200+', label: 'Healthcare Partners' },
        { number: '10K+', label: 'Products' },
        { number: '24/7', label: 'Support' }
      ],
      storyBadge: 'Our Story',
      storyTitle: 'Building',
      storyHighlight: 'Trust Through Quality',
      storyPara1: 'Abhishek Pharma has been a trusted wholesale supplier of branded and promotional medicines since 2003. We specialize in providing high-quality pharmaceutical products to healthcare providers, pharmacies, and businesses across India.',
      storyPara2: 'With a team of experienced professionals, we have successfully served the pharmaceutical industry with a wide range of products including tablets, injections, syrups, Ayurvedic medicines, and OTC products.',
      storyPara3: 'Our dedication to excellence has enabled us to build strong partnerships with clients, ensuring timely delivery and competitive pricing.',
      features: ['Certified Products', 'Timely Delivery', 'Competitive Pricing', 'Expert Support'],
      
      whyBestTitle: 'Why',
      whyBestHighlight: 'Abhishek Pharma?',
      whyBestSubtitle: 'The trusted choice for pharmaceutical wholesale distribution',
      whyBestReasons: [
        { title: 'Extensive Product Range', desc: 'From human medicines to veterinary products, surgical supplies to promotional items—we stock it all under one roof.', icon: 'boxes' },
       
        { title: 'Competitive Wholesale Pricing', desc: 'Volume discounts, promotional offers, and transparent pricing. No hidden costs or surprise charges.', icon: 'money' },
        { title: 'Quality Assurance', desc: 'We ensure every product meets the highest standards of pharmaceutical excellence and safety.', icon: 'verified' },
        { title: 'Trust & Integrity', desc: 'Building lasting relationships through transparent practices and ethical business conduct.', icon: 'handshake' },
        { title: 'Customer Focus', desc: 'Your satisfaction drives us. We provide personalized service and support at every step.', icon: 'heart' },
         { title: 'Verified Quality Assurance', desc: 'Every product sourced from certified manufacturers.', icon: 'shield' },
      ],
      
      oneStopTitle: 'Everything Under',
      oneStopHighlight: 'One Roof',
      oneStopSubtitle: 'Why deal with multiple suppliers when you can get everything from Abhishek Pharma?',
      oneStopDesc: 'We understand the challenges of managing multiple vendor relationships, inconsistent quality, and delayed deliveries. That\'s why we\'ve built a comprehensive pharmaceutical supply ecosystem—so you can focus on patient care while we handle the rest.',
      oneStopBenefits: [
        { title: 'Single Point of Contact', desc: 'One supplier for all your pharmaceutical needs. Simplified ordering, invoicing, and communication.', icon: 'user' },
      { title: 'Consistent Quality Standards', desc: 'No more worrying about varying quality from different suppliers. Uniform excellence across all product categories.', icon: 'verified' },

        { title: 'Faster Turnaround Time', desc: 'No coordination delays between multiple vendors. Single warehouse, faster processing, quicker delivery.', icon: 'clock' }
      ],
      
      valuesTitle: 'Our Core',
      valuesHighlight: 'Values',
      valuesSubtitle: 'Principles that guide everything we do',
      values: [
        { title: 'Quality Assurance', desc: 'We ensure every product meets the highest standards of pharmaceutical excellence and safety.' },
        { title: 'Trust & Integrity', desc: 'Building lasting relationships through transparent practices and ethical business conduct.' },
        { title: 'Customer Focus', desc: 'Your satisfaction drives us. We provide personalized service and support at every step.' },
  
      ],
      
      certHighlight: '',
      certSubtitle: '',
      certifications: [
       
        // { title: 'Drug License', desc: 'Valid & Updated' },
        
      ],
    
    },
    hi: {
      heroTitle: 'अभिषेक फार्मा ',
      heroHighlight: 'के बारे में',
      heroSubtitle: 'गुणवत्तापूर्ण फार्मास्युटिकल उत्पादों का विश्वसनीय थोक आपूर्तिकर्ता',
      stats: [
        { number: '15+', label: 'वर्षों का अनुभव' },
        { number: '200+', label: 'स्वास्थ्य साझेदार' },
        { number: '10K+', label: 'उत्पाद' },
        { number: '24/7', label: 'सहायता' }
      ],
      storyBadge: 'हमारी कहानी',
      storyTitle: 'निर्माण',
      storyHighlight: 'गुणवत्ता के माध्यम से विश्वास',
      storyPara1: 'अभिषेक फार्मा 2003 से ब्रांडेड और प्रचार दवाओं का एक विश्वसनीय थोक आपूर्तिकर्ता रहा है।',
      storyPara2: 'अनुभवी पेशेवरों की टीम के साथ, हमने गोलियों, इंजेक्शन, सिरप, आयुर्वेदिक दवाओं और ओटीसी उत्पादों के साथ सेवा प्रदान की है।',
      storyPara3: 'उत्कृष्टता के प्रति समर्पण ने हमें मजबूत साझेदारी बनाने में सक्षम बनाया है।',
      features: ['प्रमाणित उत्पाद', 'समय पर डिलीवरी', 'प्रतिस्पर्धी मूल्य', 'विशेषज्ञ सहायता'],
      
      whyBestTitle: 'क्यों',
      whyBestHighlight: 'अभिषेक फार्मा?',
      whyBestSubtitle: 'फार्मास्युटिकल थोक वितरण के लिए विश्वसनीय विकल्प',
      whyBestReasons: [
        { title: 'व्यापक उत्पाद श्रृंखला', desc: 'मानव दवाओं से लेकर पशु चिकित्सा उत्पादों तक—सब कुछ एक छत के नीचे।', icon: 'boxes' },
       
        { title: 'प्रतिस्पर्धी थोक मूल्य', desc: 'वॉल्यूम छूट, पारदर्शी मूल्य निर्धारण। कोई छिपी हुई लागत नहीं।', icon: 'money' },
         { title: 'सत्यापित गुणवत्ता आश्वासन', desc: 'प्रमाणित निर्माताओं से प्राप्त हर उत्पाद।।', icon: 'shield' },
      ],
      
      oneStopTitle: 'सब कुछ',
      oneStopHighlight: 'एक छत के नीचे',
      oneStopSubtitle: 'जब आप अभिषेक फार्मा से सब कुछ प्राप्त कर सकते हैं तो कई आपूर्तिकर्ताओं से क्यों निपटें?',
      oneStopDesc: 'हम कई विक्रेता संबंधों, असंगत गुणवत्ता और विलंबित डिलीवरी की चुनौतियों को समझते हैं। इसलिए हमने एक व्यापक फार्मास्युटिकल आपूर्ति पारिस्थितिकी तंत्र बनाया है।',
      oneStopBenefits: [
        { title: 'एकल संपर्क बिंदु', desc: 'आपकी सभी फार्मास्युटिकल जरूरतों के लिए एक आपूर्तिकर्ता। सरलीकृत ऑर्डरिंग।', icon: 'user' },
      
        { title: 'सुसंगत गुणवत्ता मानक', desc: 'विभिन्न आपूर्तिकर्ताओं से अलग-अलग गुणवत्ता की चिंता नहीं।', icon: 'verified' },
    
        { title: 'तेज़ टर्नअराउंड समय', desc: 'कई विक्रेताओं के बीच कोई समन्वय देरी नहीं। तेज़ प्रसंस्करण।', icon: 'clock' }
      ],
      
      valuesTitle: 'हमारे मुख्य',
      valuesHighlight: 'मूल्य',
      valuesSubtitle: 'सिद्धांत जो हम जो कुछ भी करते हैं उसका मार्गदर्शन करते हैं',
      values: [
        { title: 'गुणवत्ता आश्वासन', desc: 'हम सुनिश्चित करते हैं कि प्रत्येक उत्पाद उच्चतम मानकों को पूरा करता है।' },
        { title: 'विश्वास और ईमानदारी', desc: 'पारदर्शी प्रथाओं के माध्यम से स्थायी संबंध।' },
        { title: 'ग्राहक फोकस', desc: 'आपकी संतुष्टि हमें प्रेरित करती है।' },
    
      ],

      certTitle: '',
      certHighlight: '',
      certSubtitle: '',
      certifications: [
        // { title: 'ISO 9001:2015', desc: 'गुणवत्ता प्रबंधन प्रणाली' },
        // { title: 'औषधि लाइसेंस', desc: 'वैध और अद्यतन' },
        // { title: 'GSTIN पंजीकृत', desc: 'कर अनुपालन' }
      ],
   
    }
  };

  const t = content[language];
  const valueIcons = [FaShieldAlt, FaHandshake, FaHeart, FaLeaf, FaAward, MdVerified];
  const certIcons = [FaCertificate, FaShieldAlt, MdVerified];

  const getWhyBestIcon = (iconName) => {
    const icons = { boxes: FaBoxes, shield: FaShieldAlt, money: FaMoneyBillWave, truck: FaTruck, headset: FaHeadset, award: FaAward, verified: MdVerified, handshake: FaHandshake, heart: FaHeart };
    return icons[iconName];
  };

  const getOneStopIcon = (iconName) => {
    const icons = { user: FaUserMd, medicines: GiMedicines, inventory: MdInventory, verified: MdVerified, warehouse: FaWarehouse, clock: FaClock };
    return icons[iconName];
  };

  return (
    <div className="w-[100vw] overflow-x-hidden bg-white">
      {/* Language Toggle Button - Blue-Green Gradient */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] hover:from-[#3A8AE8] hover:to-[#3AB56D] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section - Blue-Green Gradient */}
      <div className="relative bg-gradient-to-br from-[#4C9EFF] via-[#5AB4F5] to-[#46C47E] text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#46C47E]/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center" data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="zoom-in">
              {t.heroTitle} <span className="text-[#C7F5D9]">{t.heroHighlight}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#E8FFF2] max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              {t.heroSubtitle}
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              {t.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-sm lg:text-base text-[#E8FFF2]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Our Story Section - Light Blue-Green Background */}
      <div className="py-16 bg-gradient-to-br from-[#f2f8ff] to-[#e9fff2]" data-aos="fade-up">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B0D8FF] to-[#C7F5D9] rounded-3xl blur-xl opacity-30"></div>
              <img
                src="drug.png"
                alt="Pharmaceutical Excellence"
                className="relative rounded-2xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-500 border-4 border-white"
                loading="lazy"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#4C9EFF] to-[#46C47E] rounded-xl p-6 shadow-xl animate-float border-2 border-white">
                <MdVerified className="w-12 h-12 text-white" />
                <p className="text-white font-bold mt-2">{language === 'en' ? ' Certified' : ' प्रमाणित'}</p>
              </div>
            </div>

            <div className="space-y-6 text-center" data-aos="fade-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-[#BEE3FF] to-[#C7F5D9] text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                  {t.storyBadge}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t.storyTitle} <span className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">{t.storyHighlight}</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">{t.storyPara1}</p>
                <p className="text-lg">{t.storyPara2}</p>
                <p className="text-lg">{t.storyPara3}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 justify-center">
                {t.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] border-2 border-[#DCEBFF] rounded-full text-gray-800 font-medium text-sm hover:from-[#4C9EFF] hover:to-[#46C47E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Abhishek Pharma Section */}
      <div className="py-16 bg-white" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.whyBestTitle} <span className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">{t.whyBestHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyBestSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.whyBestReasons.map((reason, index) => {
              const Icon = getWhyBestIcon(reason.icon);
              return (
                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="inline-block p-4 bg-gradient-to-br from-[#4C9EFF] to-[#46C47E] rounded-xl mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Everything Under One Roof Section - Blue-Green Gradient */}
      <div className="py-16 bg-gradient-to-br from-[#4C9EFF] via-[#5AB4F5] to-[#46C47E] text-white" data-aos="fade-up">
        <Container>
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {t.oneStopTitle} <span className="text-[#C7F5D9]">{t.oneStopHighlight}</span>
            </h2>
            <p className="text-xl text-[#E8FFF2] max-w-3xl mx-auto mb-4">
              {t.oneStopSubtitle}
            </p>
            <p className="text-lg text-[#D8FFE5] max-w-4xl mx-auto">
              {t.oneStopDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.oneStopBenefits.map((benefit, index) => {
              const Icon = getOneStopIcon(benefit.icon);
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#E8FFF2] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

       
        </Container>
      </div>



      {/* Vision & Mission Section - Blue-Green Gradients */}




    

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
