import React, { useState } from 'react';
import Container from '../pages/Container';
import { FaPills, FaSyringe, FaLeaf, FaGift, FaEyeDropper, FaStethoscope, FaCheckCircle, FaTruck, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function Products() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      heroBadge: 'Comprehensive Product Range',
      heroTitle: 'Our Product',
      heroHighlight: 'Categories',
      heroSubtitle: 'We offer a comprehensive range of pharmaceutical products to meet your healthcare needs. Contact us for detailed product lists and bulk orders.',
      
      humanMedicines: 'Allopathic Medicines',
      humanDesc: 'Comprehensive range of pharmaceutical products including tablets, capsules, syrups, injections, and liquid formulations for various therapeutic needs, ensuring effective treatment and patient care. Our allopathic medicines are sourced from certified manufacturers and undergo rigorous quality testing to guarantee safety and efficacy.',
      surgical: 'Surgical & Consumables',
      surgicalDesc: 'High-quality medical devices, surgical instruments, disposable products, and consumables essential for healthcare facilities, maintaining the highest standards of safety and reliability. We provide sterile surgical supplies and equipment that meet international standards for medical procedures.',
      veterinary: 'Veterinary Medicines',
      vetDesc: 'Specialized healthcare solutions for livestock and companion animals, ensuring optimal health and wellness through scientifically formulated products and expert veterinary care. Our veterinary range includes medications for various animal species, from farm animals to pets, with focus on preventive and curative treatments.',
      ayurveda: 'Ayurvedic Products',
      ayurvedaDesc: 'Traditional herbal medicines, wellness supplements, and natural formulations based on ancient Ayurvedic principles, promoting holistic health and natural healing. Our Ayurvedic products combine time-tested herbal wisdom with modern manufacturing standards for safe and effective natural remedies.',
      generalItems: 'General Medical Items',
      generalItemsDesc: 'Essential medical supplies including IV cannulas, syringes, bandages, and other critical healthcare accessories, designed for professional medical use and patient comfort. We offer a complete range of disposable medical items that ensure hygiene and safety in healthcare settings.',
      categories: [
        {
          icon: FaPills,
          title: 'Tablets & Capsules',
          description: 'Wide range of branded and generic tablets for various health needs.',
          gradient: 'from-[#4C9EFF] to-[#3A8AE8]',
          features: ['500+ Varieties', 'All Brands', 'Generic Available']
        },
        {
          icon: FaSyringe,
          title: 'Injections & Vaccines',
          description: 'High-quality injections and vaccines for medical treatments.',
          gradient: 'from-[#5AB4F5] to-[#4C9EFF]',
          features: ['Cold Chain', 'WHO Standards', 'Certified']
        },
        {
          icon: FaLeaf,
          title: 'Ayurvedic Medicines',
          description: 'Natural and traditional Ayurvedic remedies for holistic health.',
          gradient: 'from-[#46C47E] to-[#3AB56D]',
          features: ['100% Natural', 'Traditional', 'Safe']
        },
        {
          icon: FaGift,
          title: 'Promotional Products',
          description: 'Specialized promotional medicines and healthcare products.',
          gradient: 'from-[#4C9EFF] to-[#46C47E]',
          features: ['Bulk Orders', 'Custom Packaging', 'Discounts']
        },
        {
          icon: FaEyeDropper,
          title: 'Syrups & Suspensions',
          description: 'Effective syrups for cough, cold, and other ailments.',
          gradient: 'from-[#5AB4F5] to-[#46C47E]',
          features: ['All Age Groups', 'Sugar-Free', 'Flavored']
        },
        {
          icon: FaStethoscope,
          title: 'OTC Products',
          description: 'Over-the-counter medicines for everyday health concerns.',
          gradient: 'from-[#3A8AE8] to-[#3AB56D]',
          features: ['No Prescription', 'Daily Use', 'Safe']
        }
      ],
      benefitsTitle: 'Why Choose',
      benefitsHighlight: 'Our Products?',
      benefitsSubtitle: 'Quality, reliability, and service you can trust',
      benefits: [
        { icon: FaCheckCircle, title: 'Authentic Products', desc: 'quality assured' },
        { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick and reliable shipping' },
        { icon: FaShieldAlt, title: 'Safe & Secure', desc: 'Proper handling and storage' },
        { icon: MdVerified, title: 'Verified Suppliers', desc: 'Direct from manufacturers' }
      ],
      ctaTitle: 'Need a Complete Product List?',
      ctaSubtitle: 'Get detailed information about our entire product range, pricing, and availability',
      ctaBtn1: 'Contact Us',
      ctaBtn2: 'Contact Us',
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
          gradient: 'from-[#4C9EFF] to-[#3A8AE8]',
          features: ['500+ किस्में', 'सभी ब्रांड', 'जेनेरिक उपलब्ध']
        },
        {
          icon: FaSyringe,
          title: 'इंजेक्शन और वैक्सीन',
          description: 'चिकित्सा उपचार के लिए उच्च गुणवत्ता वाले इंजेक्शन और टीके।',
          gradient: 'from-[#5AB4F5] to-[#4C9EFF]',
          features: ['कोल्ड चेन', 'WHO मानक', 'प्रमाणित']
        },
        {
          icon: FaLeaf,
          title: 'आयुर्वेदिक दवाएं',
          description: 'समग्र स्वास्थ्य के लिए प्राकृतिक और पारंपरिक आयुर्वेदिक उपचार।',
          gradient: 'from-[#46C47E] to-[#3AB56D]',
          features: ['100% प्राकृतिक', 'पारंपरिक', 'सुरक्षित']
        },
        {
          icon: FaGift,
          title: 'प्रचार उत्पाद',
          description: 'विशेष प्रचार दवाएं और स्वास्थ्य सेवा उत्पाद।',
          gradient: 'from-[#4C9EFF] to-[#46C47E]',
          features: ['थोक ऑर्डर', 'कस्टम पैकेजिंग', 'छूट']
        },
        {
          icon: FaEyeDropper,
          title: 'सिरप और सस्पेंशन',
          description: 'खांसी, सर्दी और अन्य बीमारियों के लिए प्रभावी सिरप।',
          gradient: 'from-[#5AB4F5] to-[#46C47E]',
          features: ['सभी आयु वर्ग', 'शुगर-फ्री', 'स्वाद युक्त']
        },
        {
          icon: FaStethoscope,
          title: 'ओटीसी उत्पाद',
          description: 'रोजमर्रा की स्वास्थ्य समस्याओं के लिए ओवर-द-काउंटर दवाएं।',
          gradient: 'from-[#3A8AE8] to-[#3AB56D]',
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
    <div className="w-[100vw] overflow-x-hidden bg-white min-h-screen">
      {/* Language Toggle Button */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] hover:from-[#3A8AE8] hover:to-[#3AB56D] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#4C9EFF] via-[#5AB4F5] to-[#46C47E] text-white py-20 overflow-hidden">
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20">
                {t.heroBadge}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t.heroTitle} <span className="text-[#C7F5D9]">{t.heroHighlight}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#E8FFF2] mb-8">
              {t.heroSubtitle}
            </p>
          </div>
        </Container>
      </div>

      {/* Product Categories */}
      <div className="py-20 bg-gradient-to-br from-[#f2f8ff] to-[#e9fff2]">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            {[
              { title: t.humanMedicines, desc: t.humanDesc, img: '/alll.png' },
              { title: t.surgical, desc: t.surgicalDesc, img: 's.png' },
              { title: t.veterinary, desc: t.vetDesc, img: '2.png' },
              { title: t.ayurveda, desc: t.ayurvedaDesc, img: 'ay.png' },
              { title: t.generalItems, desc: t.generalItemsDesc, img: 'g.png' },
            ].map((cat, idx) => (
              <div key={idx} className="py-16">
                <div className="text-center mb-10">
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">{cat.title}</h3>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-8xl mx-auto px-8">
                  <div className="flex-1 text-center lg:text-left max-w-4xl">
                    <p className="text-gray-600 leading-relaxed text-lg lg:text-2xl">{cat.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img src={cat.img} alt={cat.title} className="w-64 h-64 object-contain rounded-xl shadow-xl mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.benefitsTitle} <span className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">{t.benefitsHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600">{t.benefitsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => {
              const gradients = [
                'from-[#E8F2FF] to-[#D8EAFF]',
                'from-[#E8FFF2] to-[#D8FFE5]',
                'from-[#E8F2FF] to-[#E8FFF2]',
                'from-[#D8EAFF] to-[#D8FFE5]'
              ];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#DCEBFF] hover:border-[#B0D8FF]"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${gradients[index]} rounded-xl mb-4`}>
                    <benefit.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
