import React, { useState, useEffect } from 'react'
import Slider from '../pages/Slider'
import Container from '../pages/Container'
import Slider1 from '../pages/Slider1'
import { FaTools, FaCogs, FaRegHandshake, FaChartLine, FaBullseye, FaGlobe } from 'react-icons/fa'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { BiSearchAlt } from 'react-icons/bi'
import { GiLaptop } from 'react-icons/gi'
import { useNavigate } from 'react-router'

export default function Home() {
  const [open, setOpen] = useState(null);
  const [language, setLanguage] = useState('en');
  const toggles = (val) => { setOpen(val == open ? null : val) }
  
  const navigate = useNavigate();

  const partners = [
    { name: 'Intas', logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/188d613a288679f1fd181d32eadff902' },
    { name: 'Alkem', logo: 'https://bl-i.thgim.com/public/incoming/8iqg0i/article67888261.ece/alternates/LANDSCAPE_1200/ALKEM.jpg' },
    { name: 'Alembic', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTKpce6EVMgVuPklFSlotjlQxiACqyTYvRg&s' },
    { name: 'Cipla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/1200px-Cipla_logo.svg.png' },
    { name: 'Pil', logo: 'https://pilindia.co.in/cdn/shop/files/logo.webp?crop=center&height=300&v=1746648055&width=300' },
    { name: 'Medley', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGAXkf3MCI2ow/company-logo_200_200/company-logo_200_200/0/1630594190088/medley_pharmaceuticals_ltd_logo?e=2147483647&v=beta&t=g80fBimliYkyiI5OTZe984ULobr5DGngSLtTQw6d0h4' },
    { name: 'Bestochem', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29mIsOYOFI2IZGxF1x90hr4b1Zp1HkRiaEw&s ' },
    { name: 'Lupin', logo: ' https://upload.wikimedia.org/wikipedia/en/f/f7/The_Lupin_Logo.svg' },
    { name: 'Biochem', logo: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVT8ONYntbhBOSTRmZ0vp-b8MsBuFag7hg06z2hMtfAV6Wjn-5F_WrnY-NkFNJPUBaKjA&usqp=CAU' },
    { name: 'Morphem', logo: 'https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/A21TJRUUN4KGV/b1883b3231e613b2fd7948c5c6c56644.w400.h400.jpg ' },
    { name: 'Zen Lab', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbGcbWldAl59fdCb6blIM_xlwaZHOdxb7OAkDTVX-qssr1vqtAy7vabyB2jqvmF4vg4E&usqp=CAU ' },
    { name: 'Orison Pharma', logo: 'https://orisonpharmaceutical.com/assets/images/1695753131orison.png ' },
    { name: 'LeeFord', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz1c4_n0smveOSWBIhbl00QfObVGBZyoyGA&s ' },
    { name: 'Elder', logo: 'https://medicaldialogues.in/wp-content/uploads/2015/10/No-plans-to-inv12279.jpg ' },
    { name: 'zydus cadila', logo: 'https://ehealth.eletsonline.com/wp-content/uploads/2019/03/Zydus-Cadila.jpg ' },
    { name: 'Abbot', logo: 'https://www.abbott.in/etc.clientlibs/abbott-platform/clientlibs/clientlib-site/resources/images/abbott-logo.png ' },
    { name: 'Torque', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrRSOWa9_LHTT5ZsMtzck0UYox4CP_UWuag&s ' },
    { name: 'Germed', logo: ' https://www.pharmacompass.com/image/logo/germed-55673.png' },
    { name: 'Khandelwal Laboratories', logo: ' https://media.licdn.com/dms/image/v2/C4D0BAQG7MbK_nYQ7bQ/company-logo_200_200/company-logo_200_200/0/1642426049446/khandelwal_laboratories_privatelimited_logo?e=2147483647&v=beta&t=ayXTcIyBVaIKHvAv0anmV8cUaUNVzSkF2E7-zFDDKF0' },
    { name: 'Glenmark', logo: ' https://upload.wikimedia.org/wikipedia/en/6/62/Glenmark_Pharmaceuticals_logo.png' },
    { name: 'Mankind', logo: 'https://media.licdn.com/dms/image/v2/C560BAQELBuDa-xrYFQ/company-logo_200_200/company-logo_200_200/0/1631313525504?e=2147483647&v=beta&t=thgCGmJkuv1qqLNLVdBBxIKLSiyQA3-Nb4edlbasaf8 ' },
    { name: 'Ranbaxy Lab', logo: 'https://smartisystems.com/wp-content/uploads/2024/05/image1.jpg ' },
    { name: 'IndSwift', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVftkZ50LQZpfSVbAtXSwiBFIrsFElLgvgw&s ' },
    { name: 'Universal', logo: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWKhGczmuGxvfOiTEb9Z9N2-AWlKCtnpGDQ&s' },
    { name: 'Univent', logo: ' https://engexportdirectory.org/wp-content/uploads/2018/08/logo-2-1.png' },
    { name: 'Torrent', logo: ' https://media.licdn.com/dms/image/v2/C560BAQFW13K-6R9CGg/company-logo_200_200/company-logo_200_200/0/1631350983906?e=2147483647&v=beta&t=Y6U60HqfR4NHjIyG0LaUAw9SNW9m4FhtYX2MlnEt_ZE' },
    { name: 'zuventus', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHED04FqHmBFw/company-logo_200_200/company-logo_200_200/0/1665049635256/zuventushealthcarelimited_logo?e=2147483647&v=beta&t=afYkyjYaILqgAmf0TWwOt-L5rVTo2cU-INPB6Q8z1R0 ' },
    { name: 'Laborate', logo: 'https://images.jdmagicbox.com/comp/panipat/35/9999pmuldelstds000635/catalogue/laborate-pharmaceuticals-india-ltd-panipat-allopathic-medicine-manufacturers-hge1h6f1xf.jpg ' },
    

    
    

  ];

    const partners2 = [
    // { name: 'Intas', logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/188d613a288679f1fd181d32eadff902' },
    // { name: 'Abbot', logo: 'https://www.abbott.in/etc.clientlibs/abbott-platform/clientlibs/clientlib-site/resources/images/abbott-logo.png ' },
    { name: 'Mankind', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYNRSB6ys-s0GFZf6fNF6ywgkjpmBgimlLQ&s' },
    { name: 'Virbac', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_Virbac.svg/1200px-Logo_Virbac.svg.png' },
    { name: 'Vetquinol', logo: 'https://www.vetoquinol.in/sites/incountry/files/logo_0.png' },
    { name: 'Wockhardt', logo: 'https://cdn.thepharmaletter.com/files/2024/06/737de020-21d3-11ef-b9fd-3d6df514ffbd-wockhardt-logo-big.jpg' },
    { name: 'Vets Dharma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs4ryVNrwN6TRSpSASQOS0S0K8syh_hb8qQ&s' },
    { name: 'Vetcare', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKwlOg7QjbcnOVwtcidGQqufxsonbdun9WA&s' },
    { name: 'Sushma Pharma', logo: 'https://www.sushima.in/img/logo/logo1.png' },
    { name: 'MSD Animal HealthCare', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jQW6840RBz3MAPhqqMdDv3USzN6xTLCgJw&s' },
    { name: 'Phoenix Pharma', logo: 'https://www.phoenixgroup.eu/fileadmin/media/Logo_PHOENIX_4cc.jpg' },
    { name: 'Natural Remedies', logo: 'https://www.naturalremedy.com/wp-content/uploads/2025/07/NRPL-logo-512x512-px.jpg' },
    { name: 'Himalaya', logo: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207' },
    { name: 'Zenex', logo: 'https://www.ifcamc.org/sites/default/files/zenex.png' },
    { name: 'Alembic Vet', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3biqHGFnXAqKRRerePZtwr4ACyt5lJs8S7QHHsIF2KWc31f6sESWfmNxOA5DqskyIPg&usqp=CAU' },
    { name: 'Animax Pharmna', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mv6lrkcHdjlpOGXjaWC4cMYho5dUTLsn_Q&s' },
    


    
    

  ];

  const content = {
    en: {
      heroTitle: 'Your Partner in',
      heroTitleHighlight: 'Pharmaceutical Excellence',
      heroPara1: 'Abhishek Pharma delivers premium wholesale pharmaceutical services from our offices in India. Our approach is built on trust, quality, and results that matter.',
      heroPara2: 'We specialize in branded medicines, promotional products, and supply chain solutions that help healthcare businesses streamline operations and meet market demands.',
      heroPara3: 'Partnering with pharmacies, hospitals, and distributors, we bring reliable supply practices and products that support health goals.',
      learnMore: 'LEARN MORE',
      productsTitle: 'Our Product Categories',
      productsDesc: 'Abhishek Pharma offers expert-driven pharmaceutical solutions from our offices in India, helping businesses access quality medicines. Our team provides customized supplies to empower healthcare across industries.',
      tablets: 'Humans',
      injections: 'Surgical',
      syrups: 'Veterinary',
      testimonialsTitle: 'What Clients Say About',
      testimonialsHighlight: 'Abhishek Pharma',
      frameworkTitle: 'Abhishek Pharma',
      frameworkHighlight: 'ABCDEF',
      frameworkSubtitle: 'Supply Framework',
      frameworkDesc: 'Empowering pharmaceutical supply across India and beyond — our extended ABCDEF model brings complete supply chain support.',
      assess: 'A — Assess',
      assessDesc: 'We evaluate your supply needs and align with market demands to reveal gaps and opportunities.',
      benchmark: 'B — Benchmark',
      benchmarkDesc: 'We align your sourcing with industry standards and regulations for top-tier compliance.',
      craft: 'C — Craft',
      craftDesc: 'We design supply strategies that resonate with your business and drive performance.',
      deploy: 'D — Deploy',
      deployDesc: 'Implementation done right — with full support, logistics, and collaboration with your team.',
      enhance: 'E — Enhance',
      enhanceDesc: 'We optimize continuously by tracking supply, updating inventory, and scaling improvements.',
      followUp: 'F — Follow-Up',
      followUpDesc: 'We stay connected post-delivery, offering ongoing advice, restocking, and adaptation as your needs grow.',
      whyChooseTitle: 'Your Preferred Pharmaceutical Supplier',
      reason1: 'Extensive Experience in Pharmaceutical Supply',
      reason2: 'Logistics and Delivery Support',
      reason3: 'Tailored Solutions for Client Needs',
      reason4: 'Continuous Research on Market Trends',
      reason5: 'Experienced Team',
      reason6: 'Technical Expertise',
      reason7: 'Business Acumen',
      reason8: 'Strategic Focus & Alignment',
      faqTitle: 'Frequently Asked',
      faqHighlight: 'Questions',
      faq1Q: 'What products does Abhishek Pharma offer?',
      faq1A: 'We specialize in tablets, injections, syrups, Ayurvedic medicines, promotional products, and OTC items for healthcare needs across India.',
      faq2Q: 'Do you provide bulk or promotional supplies?',
      faq2A: 'Yes, we actively supply bulk orders and promotional medicines with competitive pricing and reliable delivery.',
      faq3Q: 'How does Abhishek Pharma ensure product quality?',
      faq3A: 'We follow strict quality checks, source from certified manufacturers, and ensure compliance with regulatory standards before distribution.',
      faq4Q: 'Can you customize supply for my business?',
      faq4A: 'Absolutely. All our supplies are tailor-made to suit your requirements, from bulk to specific product needs.',
      faq5Q: 'Where are your offices located?',
      faq5A: 'We have offices in India, serving clients across the country and beyond.',
      partnersTitle: 'Our Healthcare',
      partnersHighlight: 'Partners'
    },
    hi: {
      heroTitle: 'आपका साझेदार',
      heroTitleHighlight: 'फार्मास्युटिकल उत्कृष्टता में',
      heroPara1: 'अभिषेक फार्मा भारत में हमारे कार्यालयों से प्रीमियम थोक फार्मास्युटिकल सेवाएं प्रदान करता है। हमारा दृष्टिकोण विश्वास, गुणवत्ता और परिणामों पर आधारित है।',
      heroPara2: 'हम ब्रांडेड दवाओं, प्रचार उत्पादों और आपूर्ति श्रृंखला समाधानों में विशेषज्ञ हैं जो स्वास्थ्य सेवा व्यवसायों को संचालन सुव्यवस्थित करने में मदद करते हैं।',
      heroPara3: 'फार्मेसियों, अस्पतालों और वितरकों के साथ साझेदारी करते हुए, हम विश्वसनीय आपूर्ति प्रथाओं और उत्पादों को लाते हैं।',
      learnMore: 'और जानें',
      productsTitle: 'हमारी उत्पाद श्रेणियां',
      productsDesc: 'अभिषेक फार्मा भारत में हमारे कार्यालयों से विशेषज्ञ-संचालित फार्मास्युटिकल समाधान प्रदान करता है। हमारी टीम उद्योगों में स्वास्थ्य सेवा को सशक्त बनाने के लिए अनुकूलित आपूर्ति प्रदान करती है।',
      tablets: 'इंसान',
      injections: 'शल्य चिकित्सा',
      syrups: 'पशु चिकित्सा',
      testimonialsTitle: 'ग्राहक क्या कहते हैं',
      testimonialsHighlight: 'अभिषेक फार्मा के बारे में',
      frameworkTitle: 'अभिषेक फार्मा',
      frameworkHighlight: 'ABCDEF',
      frameworkSubtitle: 'आपूर्ति ढांचा',
      frameworkDesc: 'भारत और उससे आगे फार्मास्युटिकल आपूर्ति को सशक्त बनाना — हमारा विस्तारित ABCDEF मॉडल पूर्ण आपूर्ति श्रृंखला समर्थन लाता है।',
      assess: 'ए — मूल्यांकन',
      assessDesc: 'हम आपकी आपूर्ति आवश्यकताओं का मूल्यांकन करते हैं और अंतराल और अवसरों को प्रकट करने के लिए बाजार की मांगों के साथ संरेखित करते हैं।',
      benchmark: 'बी — बेंचमार्क',
      benchmarkDesc: 'हम शीर्ष-स्तरीय अनुपालन के लिए उद्योग मानकों और नियमों के साथ आपकी सोर्सिंग को संरेखित करते हैं।',
      craft: 'सी — शिल्प',
      craftDesc: 'हम आपूर्ति रणनीतियों को डिजाइन करते हैं जो आपके व्यवसाय के साथ प्रतिध्वनित होती हैं और प्रदर्शन को बढ़ाती हैं।',
      deploy: 'डी — तैनात करें',
      deployDesc: 'सही कार्यान्वयन — पूर्ण समर्थन, रसद और आपकी टीम के साथ सहयोग के साथ।',
      enhance: 'ई — बढ़ाना',
      enhanceDesc: 'हम आपूर्ति को ट्रैक करके, इन्वेंट्री को अपडेट करके और सुधारों को बढ़ाकर लगातार अनुकूलित करते हैं।',
      followUp: 'एफ — फॉलो-अप',
      followUpDesc: 'हम डिलीवरी के बाद जुड़े रहते हैं, चल रही सलाह, रीस्टॉकिंग और आपकी जरूरतों के अनुसार अनुकूलन प्रदान करते हैं।',
      whyChooseTitle: 'आपका पसंदीदा फार्मास्युटिकल आपूर्तिकर्ता',
      reason1: 'फार्मास्युटिकल आपूर्ति में व्यापक अनुभव',
      reason2: 'रसद और वितरण समर्थन',
      reason3: 'ग्राहक की जरूरतों के लिए अनुकूलित समाधान',
      reason4: 'बाजार के रुझानों पर निरंतर अनुसंधान',
      reason5: 'अनुभवी टीम',
      reason6: 'तकनीकी विशेषज्ञता',
      reason7: 'व्यावसायिक कौशल',
      reason8: 'रणनीतिक फोकस और संरेखण',
      faqTitle: 'अक्सर पूछे जाने वाले',
      faqHighlight: 'प्रश्न',
      faq1Q: 'अभिषेक फार्मा कौन से उत्पाद प्रदान करता है?',
      faq1A: 'हम भारत भर में स्वास्थ्य सेवा की जरूरतों के लिए गोलियां, इंजेक्शन, सिरप, आयुर्वेदिक दवाएं, प्रचार उत्पाद और OTC वस्तुओं में विशेषज्ञ हैं।',
      faq2Q: 'क्या आप थोक या प्रचार आपूर्ति प्रदान करते हैं?',
      faq2A: 'हां, हम प्रतिस्पर्धी मूल्य निर्धारण और विश्वसनीय वितरण के साथ थोक ऑर्डर और प्रचार दवाओं की सक्रिय रूप से आपूर्ति करते हैं।',
      faq3Q: 'अभिषेक फार्मा उत्पाद की गुणवत्ता कैसे सुनिश्चित करता है?',
      faq3A: 'हम सख्त गुणवत्ता जांच का पालन करते हैं, प्रमाणित निर्माताओं से स्रोत करते हैं, और वितरण से पहले नियामक मानकों के साथ अनुपालन सुनिश्चित करते हैं।',
      faq4Q: 'क्या आप मेरे व्यवसाय के लिए आपूर्ति को अनुकूलित कर सकते हैं?',
      faq4A: 'बिल्कुल। हमारी सभी आपूर्ति आपकी आवश्यकताओं के अनुरूप बनाई गई है, थोक से लेकर विशिष्ट उत्पाद की जरूरतों तक।',
      faq5Q: 'आपके कार्यालय कहाँ स्थित हैं?',
      faq5A: 'हमारे भारत में कार्यालय हैं, देश भर और उससे आगे के ग्राहकों की सेवा करते हैं।',
      partnersTitle: 'हमारे स्वास्थ्य सेवा',
      partnersHighlight: 'साझेदार'
    }
  };

  const t = content[language];

  return (
    <div className='w-[100vw] overflow-x-hidden bg-gray-50'>
      {/* Language Toggle Button */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-4 h-4" />
          <span className="text-sm">{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Slider */}
      <div className="w-full mb-5 h-full" data-aos="fade-down" data-aos-duration="800">
        <Slider language={language} />
      </div>

      {/* About Section - White & Gray Theme */}
      <div className="w-full h-full py-12 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 items-center">
            <div className='relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group' data-aos="zoom-in" data-aos-duration="800">
              <img 
                className='rounded-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700' 
                src="https://vijay-overseas.vercel.app/img/firm.jpg" 
                alt="Pharmaceutical Excellence" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className='md:space-y-5 space-y-3 order-1 md:order-2 p-4' data-aos="fade-left" data-aos-delay="200">
              <h1 className='font-bold lg:text-4xl text-3xl text-gray-900 leading-tight'>
                {t.heroTitle} <span className='text-gray-600'>{t.heroTitleHighlight}</span>
              </h1>
              <div className='space-y-4'>
                <p className='lg:text-base text-gray-600 leading-relaxed'>
                  {t.heroPara1}
                </p>
                <p className='lg:text-base text-gray-600 leading-relaxed'>
                  {t.heroPara2}
                </p>
                <p className='lg:text-base text-gray-600 leading-relaxed'>
                  {t.heroPara3}
                </p>
              </div>
              <button onClick={() => navigate('/about')} className='bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300'>
                {t.learnMore}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Healthcare Partners Slider */}
      <div className="bg-gray-50 py-12 border-y border-gray-200" data-aos="fade-up">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
            {t.partnersTitle} <span className="text-gray-600">{t.partnersHighlight}</span>
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

           <div className="relative overflow-hidden mt-8">
            <div className="flex animate-scroll2">
              {[...partners2, ...partners2].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Product Categories */}
      <div className="bg-white text-gray-900 lg:py-16 py-10 lg:my-10 my-5" data-aos="fade-up">
        <Container>
          <div className="md:space-y-10 space-y-6">
            <div className='text-center space-y-4' data-aos="zoom-in">
              <h1 className='font-bold lg:text-4xl text-3xl text-gray-900'>{t.productsTitle}</h1>
              <p className='lg:text-base text-gray-600 lg:w-[850px] mx-auto w-full px-4'>
                {t.productsDesc}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4">
              <div className='flex flex-col rounded-lg items-center bg-gray-50 text-gray-900 justify-center p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-500 group' data-aos="flip-left" data-aos-duration="600">
                <div className='bg-white border border-gray-200 p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Tablets" />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>{t.tablets}</h2>
              </div>
              
              <div className='flex flex-col rounded-lg items-center bg-gray-50 text-gray-900 justify-center p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-500 group' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                <div className='bg-white border border-gray-200 p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/2621/2621046.png" alt="Injections" />
                </div>
                <h2 className='text-xl font-bold text-center text-gray-900'>{t.injections}</h2>
              </div>
              
              <div className='flex flex-col rounded-lg items-center bg-gray-50 text-gray-900 justify-center p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-500 group' data-aos="flip-left" data-aos-delay="200" data-aos-duration="600">
                <div className='bg-white border border-gray-200 p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png" alt="Syrups" />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>{t.syrups}</h2>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className='py-10 bg-gray-50'>
        <h1 className='font-bold text-center lg:text-4xl text-3xl mb-8 text-gray-900' data-aos="fade-up">
          {t.testimonialsTitle} <span className='text-gray-600'>{t.testimonialsHighlight}</span>
        </h1>
        <div className="mx-auto w-full lg:mb-5 mb-2 h-full" data-aos="fade-up" data-aos-delay="200">
          <Slider1 language={language} />
        </div>
      </div>

      {/* ABCDEF Framework */}
      <div className='bg-white py-12 border-y border-gray-200' data-aos="fade-up">
        <Container>
          <div className="lg:my-10 my-3 text-center space-y-6">
            <h1 className='text-center lg:text-4xl text-3xl font-bold text-gray-900' data-aos="zoom-in">
              {t.frameworkTitle} <span className='text-gray-600'>{t.frameworkHighlight}</span> {t.frameworkSubtitle}
            </h1>
            <p className="lg:text-lg text-gray-600 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
              {t.frameworkDesc}
            </p>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-8 px-4">
              {[
                { icon: 'data-analysis_12966774.png', title: t.assess, desc: t.assessDesc, delay: 0 },
                { icon: 'benchmarking_11726497.png', title: t.benchmark, desc: t.benchmarkDesc, delay: 100 },
                { icon: 'brilliant_10872503.png', title: t.craft, desc: t.craftDesc, delay: 200 },
                { icon: 'time_11492093.png', title: t.deploy, desc: t.deployDesc, delay: 300 },
                { icon: 'check-list_1721936.png', title: t.enhance, desc: t.enhanceDesc, delay: 400 },
                { icon: 'notes_18594273.png', title: t.followUp, desc: t.followUpDesc, delay: 500 }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 group shadow-sm rounded-lg hover:shadow-md duration-500 flex flex-col items-center justify-center p-8 transform hover:-translate-y-2 border border-gray-200 hover:border-gray-300" 
                  data-aos="zoom-in" 
                  data-aos-delay={item.delay}
                >
                  <div className='bg-white border border-gray-200 p-6 rounded-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                    <img width={80} src={`https://vijay-overseas.vercel.app/img/${item.icon}`} alt={item.title} />
                  </div>
                  <h2 className='lg:text-xl text-lg uppercase font-bold text-gray-900 mb-3'>{item.title}</h2>
                  <p className='text-center lg:text-base text-sm text-gray-600 leading-relaxed'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-800 text-white lg:py-16 py-10 w-full" data-aos="fade-up">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className='font-bold text-center lg:mb-12 mb-8 text-3xl lg:text-4xl' data-aos="zoom-in">
              {t.whyChooseTitle}
            </h1>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-6 w-full px-4">
              {[
                { Icon: FaTools, text: t.reason1, delay: 0 },
                { Icon: HiOutlineWrenchScrewdriver, text: t.reason2, delay: 50 },
                { Icon: FaCogs, text: t.reason3, delay: 100 },
                { Icon: BiSearchAlt, text: t.reason4, delay: 150 },
                { Icon: FaRegHandshake, text: t.reason5, delay: 200 },
                { Icon: GiLaptop, text: t.reason6, delay: 250 },
                { Icon: FaChartLine, text: t.reason7, delay: 300 },
                { Icon: FaBullseye, text: t.reason8, delay: 350 }
              ].map(({ Icon, text, delay }, idx) => (
                <div 
                  key={idx}
                  className='flex flex-col items-center justify-center gap-4 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105' 
                  data-aos="fade-up" 
                  data-aos-delay={delay}
                >
                  <div className='bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all duration-300'>
                    <Icon size={28} />
                  </div>
                  <p className='lg:text-sm text-xs font-medium text-center leading-snug'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className='bg-gray-50 py-12'>
        <h1 className='lg:text-4xl text-center text-3xl font-bold lg:my-10 my-8 text-gray-900' data-aos="fade-up">
          {t.faqTitle} <span className='text-gray-600'>{t.faqHighlight}</span>
        </h1>
        
        <Container>
          <div className="lg:w-[900px] mx-auto w-full space-y-4 px-4">
            {[
              { id: 'one', q: t.faq1Q, a: t.faq1A, delay: 0 },
              { id: 'two', q: t.faq2Q, a: t.faq2A, delay: 100 },
              { id: 'three', q: t.faq3Q, a: t.faq3A, delay: 200 },
              { id: 'four', q: t.faq4Q, a: t.faq4A, delay: 300 },
              { id: 'five', q: t.faq5Q, a: t.faq5A, delay: 400 }
            ].map(({ id, q, a, delay }) => (
              <div 
                key={id}
                className="border border-gray-300 bg-white lg:text-base text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden" 
                data-aos="zoom-in" 
                data-aos-delay={delay}
              >
                <div 
                  onClick={() => toggles(id)} 
                  className="p-4 text-white cursor-pointer font-semibold rounded-t-lg bg-gray-800 hover:bg-gray-900 transition-all duration-300 flex justify-between items-center"
                >
                  <span>{q}</span>
                  <span className={`transform transition-transform duration-300 ${open === id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                <div className={`transition-all duration-500 ease-in-out ${open === id ? "max-h-40 p-4" : 'max-h-0 p-0'} overflow-hidden`}>
                  <p className='text-gray-700 leading-relaxed'>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

         @keyframes scroll2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll2 {
          animation: scroll2 20s linear infinite;
        }
        
        .animate-scroll2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
