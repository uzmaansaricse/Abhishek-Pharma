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

  // Human Medicines Partners
  const humanPartners = [
    { name: 'Intas', logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/188d613a288679f1fd181d32eadff902', alt: 'Intas pharmaceutical logo' },
    { name: 'Alkem', logo: 'https://bl-i.thgim.com/public/incoming/8iqg0i/article67888261.ece/alternates/LANDSCAPE_1200/ALKEM.jpg', alt: 'Alkem pharmaceutical logo' },
    { name: 'Alembic', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTKpce6EVMgVuPklFSlotjlQxiACqyTYvRg&s', alt: 'Alembic pharmaceutical logo' },
    { name: 'Cipla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/1200px-Cipla_logo.svg.png', alt: 'Cipla pharmaceutical logo' },
    { name: 'Pil', logo: 'https://pilindia.co.in/cdn/shop/files/logo.webp?crop=center&height=300&v=1746648055&width=300', alt: 'PIL pharmaceutical logo' },
    { name: 'Medley', logo: 'https://medleyhealthcare.in/assets/images/logo.jpg', alt: 'Medley pharmaceutical logo' },
    { name: 'Bestochem', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29mIsOYOFI2IZGxF1x90hr4b1Zp1HkRiaEw&s', alt: 'Bestochem pharmaceutical logo' },
    { name: 'Lupin', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/The_Lupin_Logo.svg', alt: 'Lupin pharmaceutical logo' },
    { name: 'Biochem', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVT8ONYntbhBOSTRmZ0vp-b8MsBuFag7hg06z2hMtfAV6Wjn-5F_WrnY-NkFNJPUBaKjA&usqp=CAU', alt: 'Biochem pharmaceutical logo' },
    { name: 'Morphem', logo: 'https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/A21TJRUUN4KGV/b1883b3231e613b2fd7948c5c6c56644.w400.h400.jpg', alt: 'Morphem pharmaceutical logo' },
    { name: 'Zen Lab', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbGcbWldAl59fdCb6blIM_xlwaZHOdxb7OAkDTVX-qssr1vqtAy7vabyB2jqvmF4vg4E&usqp=CAU', alt: 'Zen Lab pharmaceutical logo' },
    { name: 'Orison Pharma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOkvhwyNZ5QbhldLBrhmYJKI_RUtkUhSEgg&s', alt: 'Orison pharmaceutical logo' },
    { name: 'LeeFord', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz1c4_n0smveOSWBIhbl00QfObVGBZyoyGA&s', alt: 'LeeFord pharmaceutical logo' },
    { name: 'Elder', logo: 'https://medicaldialogues.in/wp-content/uploads/2015/10/No-plans-to-inv12279.jpg', alt: 'Elder pharmaceutical logo' },
    { name: 'Zydus Cadila', logo: 'https://ehealth.eletsonline.com/wp-content/uploads/2019/03/Zydus-Cadila.jpg', alt: 'Zydus Cadila pharmaceutical logo' },
    { name: 'Abbott', logo: 'https://www.abbott.in/etc.clientlibs/abbott-platform/clientlibs/clientlib-site/resources/images/abbott-logo.png', alt: 'Abbott pharmaceutical logo' },
    { name: 'Torque', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrRSOWa9_LHTT5ZsMtzck0UYox4CP_UWuag&s', alt: 'Torque pharmaceutical logo' },
    { name: 'Germed', logo: 'https://www.pharmacompass.com/image/logo/germed-55673.png', alt: 'Germed pharmaceutical logo' },
    { name: 'Khandelwal Laboratories', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDk-q0eO_lmlS_OWo6fhbcBzG5Iybmcux8A&s', alt: 'Khandelwal Laboratories logo' },
    { name: 'Glenmark', logo: 'https://upload.wikimedia.org/wikipedia/en/6/62/Glenmark_Pharmaceuticals_logo.png', alt: 'Glenmark pharmaceutical logo' },
    { name: 'Mankind', logo: 'https://s3-symbol-logo.tradingview.com/mankind-pharma-limited--600.png', alt: 'Mankind pharmaceutical logo' },
    { name: 'Ranbaxy Lab', logo: 'https://smartisystems.com/wp-content/uploads/2024/05/image1.jpg', alt: 'Ranbaxy pharmaceutical logo' },
    { name: 'IndSwift', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVftkZ50LQZpfSVbAtXSwiBFIrsFElLgvgw&s', alt: 'IndSwift pharmaceutical logo' },
    { name: 'Universal', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWKhGczmuGxvfOiTEb9Z9N2-AWlKCtnpGDQ&s', alt: 'Universal pharmaceutical logo' },
    { name: 'Univent', logo: 'https://engexportdirectory.org/wp-content/uploads/2018/08/logo-2-1.png', alt: 'Univent pharmaceutical logo' },
    { name: 'Torrent', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7mnYV7Us2TAfUD6DQAFPG6enoCQa2MwKdg&s', alt: 'Torrent pharmaceutical logo' },
    { name: 'Zuventus', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-TB0o7PBh_mPOHxbkm7AuP5krSUb5R_qTg&s', alt: 'Zuventus pharmaceutical logo' },
    { name: 'Laborate', logo: 'https://images.jdmagicbox.com/comp/panipat/35/9999pmuldelstds000635/catalogue/laborate-pharmaceuticals-india-ltd-panipat-allopathic-medicine-manufacturers-hge1h6f1xf.jpg', alt: 'Laborate pharmaceutical logo' },
  ];

  // Veterinary Medicines Partners
  const vetPartners = [
    { name: 'Mankind', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYNRSB6ys-s0GFZf6fNF6ywgkjpmBgimlLQ&s', alt: 'Mankind veterinary logo' },
    { name: 'Virbac', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_Virbac.svg/1200px-Logo_Virbac.svg.png', alt: 'Virbac veterinary logo' },
    { name: 'Vetquinol', logo: 'https://www.vetoquinol.in/sites/incountry/files/logo_0.png', alt: 'Vetquinol veterinary logo' },
    { name: 'Wockhardt', logo: 'https://cdn.thepharmaletter.com/files/2024/06/737de020-21d3-11ef-b9fd-3d6df514ffbd-wockhardt-logo-big.jpg', alt: 'Wockhardt veterinary logo' },
    { name: 'Vets Dharma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs4ryVNrwN6TRSpSASQOS0S0K8syh_hb8qQ&s', alt: 'Vets Dharma logo' },
    { name: 'Vetcare', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKwlOg7QjbcnOVwtcidGQqufxsonbdun9WA&s', alt: 'Vetcare logo' },
    { name: 'Sushma Pharma', logo: 'https://www.sushima.in/img/logo/logo1.png', alt: 'Sushma Pharma veterinary logo' },
    { name: 'MSD Animal HealthCare', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jQW6840RBz3MAPhqqMdDv3USzN6xTLCgJw&s', alt: 'MSD Animal HealthCare logo' },
    { name: 'Phoenix Pharma', logo: 'https://www.phoenixgroup.eu/fileadmin/media/Logo_PHOENIX_4cc.jpg', alt: 'Phoenix Pharma veterinary logo' },
    { name: 'Natural Remedies', logo: 'https://www.naturalremedy.com/wp-content/uploads/2025/07/NRPL-logo-512x512-px.jpg', alt: 'Natural Remedies veterinary logo' },
    { name: 'Himalaya', logo: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207', alt: 'Himalaya veterinary logo' },
    { name: 'Zenex', logo: 'https://www.ifcamc.org/sites/default/files/zenex.png', alt: 'Zenex veterinary logo' },
    { name: 'Alembic Vet', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3biqHGFnXAqKRRerePZtwr4ACyt5lJs8S7QHHsIF2KWc31f6sESWfmNxOA5DqskyIPg&usqp=CAU', alt: 'Alembic Vet logo' },
    { name: 'Animax Pharma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mv6lrkcHdjlpOGXjaWC4cMYho5dUTLsn_Q&s', alt: 'Animax Pharma veterinary logo' },
  ];

  const content = {
    en: {
      heroTitle: 'Wholesale Branded & Promotional Medicines',
      heroSubtitle: 'Since 2003',
      heroTagline: 'ISO‑certified pan‑India supplier for pharmacies, hospitals & distributors',
      heroCTA: 'Request a Quote',
      heroSecondary: 'View Product Categories',
      heroPara1: 'Abhishek Pharma delivers premium wholesale pharmaceutical services from our offices in India. Our approach is built on trust, quality, and results that matter.',
      heroPara2: 'We specialize in branded medicines, promotional products, and supply chain solutions that help healthcare businesses streamline operations and meet market demands.',
      heroPara3: 'Partnering with pharmacies, hospitals, and distributors, we bring reliable supply practices and products that support health goals.',
      learnMore: 'LEARN MORE',
      productsTitle: 'Our Product Categories',
      productsDesc: 'Abhishek Pharma offers expert-driven pharmaceutical solutions from our offices in India, helping businesses access quality medicines. Our team provides customized supplies to empower healthcare across industries.',
      humanMedicines: 'Human Medicines',
      humanDesc: 'Comprehensive range of tablets, capsules, injections & liquid formulations',
      surgical: 'Surgical & Consumables',
      surgicalDesc: 'Medical devices, surgical instruments & disposable supplies',
      veterinary: 'Veterinary Medicines',
      vetDesc: 'Quality animal healthcare products for livestock & companion animals',
      ayurveda: 'Ayurvedic Products',
      ayurvedaDesc: 'Traditional herbal medicines, wellness supplements & natural formulations',
      generalItems: 'General Medical Items',
      generalItemsDesc: 'IV cannulas, syringes, bandages & essential medical supplies',
      testimonialsTitle: 'What Clients Say About',
      testimonialsHighlight: 'Abhishek Pharma',
      humanPartnersTitle: 'Human Medicines',
      humanPartnersHighlight: 'Partners',
      vetPartnersTitle: 'Veterinary Medicines',
      vetPartnersHighlight: 'Partners',
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
    },
    hi: {
      heroTitle: 'थोक ब्रांडेड और प्रचार दवाएं',
      heroSubtitle: '2003 से',
      heroTagline: 'ISO‑प्रमाणित पैन‑इंडिया आपूर्तिकर्ता फार्मेसियों, अस्पतालों और वितरकों के लिए',
      heroCTA: 'कोटेशन का अनुरोध करें',
      heroSecondary: 'उत्पाद श्रेणियां देखें',
      heroPara1: 'अभिषेक फार्मा भारत में हमारे कार्यालयों से प्रीमियम थोक फार्मास्युटिकल सेवाएं प्रदान करता है।',
      heroPara2: 'हम ब्रांडेड दवाओं, प्रचार उत्पादों और आपूर्ति श्रृंखला समाधानों में विशेषज्ञ हैं।',
      heroPara3: 'फार्मेसियों, अस्पतालों और वितरकों के साथ साझेदारी करते हुए, हम विश्वसनीय उत्पाद लाते हैं।',
      learnMore: 'और जानें',
      productsTitle: 'हमारी उत्पाद श्रेणियां',
      productsDesc: 'अभिषेक फार्मा भारत में विशेषज्ञ-संचालित फार्मास्युटिकल समाधान प्रदान करता है।',
      humanMedicines: 'मानव दवाएं',
      humanDesc: 'गोलियां, कैप्सूल, इंजेक्शन और तरल फॉर्मूलेशन की व्यापक श्रृंखला',
      surgical: 'शल्य चिकित्सा और उपभोग्य सामग्रियां',
      surgicalDesc: 'चिकित्सा उपकरण, शल्य चिकित्सा उपकरण और डिस्पोजेबल आपूर्ति',
      veterinary: 'पशु चिकित्सा दवाएं',
      vetDesc: 'पशुधन और साथी जानवरों के लिए गुणवत्ता पशु स्वास्थ्य उत्पाद',
      ayurveda: 'आयुर्वेदिक उत्पाद',
      ayurvedaDesc: 'पारंपरिक हर्बल दवाएं, वेलनेस सप्लीमेंट्स और प्राकृतिक फॉर्मूलेशन',
      generalItems: 'सामान्य चिकित्सा सामग्री',
      generalItemsDesc: 'IV कैनुला, सीरिंज, पट्टियां और आवश्यक चिकित्सा आपूर्ति',
      testimonialsTitle: 'ग्राहक क्या कहते हैं',
      testimonialsHighlight: 'अभिषेक फार्मा के बारे में',
      humanPartnersTitle: 'मानव दवाएं',
      humanPartnersHighlight: 'साझेदार',
      vetPartnersTitle: 'पशु चिकित्सा दवाएं',
      vetPartnersHighlight: 'साझेदार',
      faqTitle: 'अक्सर पूछे जाने वाले',
      faqHighlight: 'प्रश्न',
      faq1Q: 'अभिषेक फार्मा कौन से उत्पाद प्रदान करता है?',
      faq1A: 'हम गोलियां, इंजेक्शन, सिरप, आयुर्वेदिक दवाएं और OTC वस्तुओं में विशेषज्ञ हैं।',
      faq2Q: 'क्या आप थोक आपूर्ति प्रदान करते हैं?',
      faq2A: 'हां, हम प्रतिस्पर्धी मूल्य निर्धारण के साथ थोक ऑर्डर की आपूर्ति करते हैं।',
      faq3Q: 'गुणवत्ता कैसे सुनिश्चित की जाती है?',
      faq3A: 'हम सख्त गुणवत्ता जांच और नियामक अनुपालन का पालन करते हैं।',
      faq4Q: 'क्या आप अनुकूलित आपूर्ति कर सकते हैं?',
      faq4A: 'बिल्कुल। सभी आपूर्ति आपकी आवश्यकताओं के अनुरूप हैं।',
      faq5Q: 'आपके कार्यालय कहाँ हैं?',
      faq5A: 'हमारे भारत में कार्यालय हैं।',
    }
  };

  const t = content[language];

  return (
    <div className='w-[100vw] overflow-x-hidden bg-[#f8f9fb]'>
      {/* Language Toggle Button - Light Blue */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-[#5BA3EB] hover:bg-[#4A92DA] text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-4 h-4" />
          <span className="text-sm">{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Slider */}
      <div className="w-full mb-5 h-full" data-aos="fade-down" data-aos-duration="800">
        <Slider language={language} />
      </div>

      {/* About Section */}
      <div className="w-full h-full py-12 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 items-center">
            <div className='relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group' data-aos="zoom-in" data-aos-duration="800">
              <img 
                className='rounded-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700' 
                src="https://pdq-funding.co.uk/wp-content/uploads/2022/08/How-to-start-your-own-pharmacy-business.jpg.webp" 
                alt="Pharmaceutical Excellence" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5BA3EB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className='md:space-y-5 space-y-3 order-1 md:order-2 p-4' data-aos="fade-left" data-aos-delay="200">
              <h1 className='font-bold lg:text-4xl text-3xl text-gray-900 leading-tight'>
                {t.heroTitle} <span className='block text-[#5BA3EB] text-2xl mt-2'>{t.heroSubtitle}</span>
              </h1>
              <p className='text-lg font-medium text-gray-700'>{t.heroTagline}</p>
              <div className='space-y-4'>
                <p className='lg:text-base text-gray-600 leading-relaxed'>{t.heroPara1}</p>
                <p className='lg:text-base text-gray-600 leading-relaxed'>{t.heroPara2}</p>
                <p className='lg:text-base text-gray-600 leading-relaxed'>{t.heroPara3}</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => navigate('/request')} className='bg-[#5BA3EB] hover:bg-[#4A92DA] cursor-pointer text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300'>
                  {t.heroCTA}
                </button>
                <button onClick={() => navigate('/products')} className='bg-white border-2 border-[#D1E5F7] hover:bg-[#F0F7FF] cursor-pointer text-gray-800 font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300'>
                  {t.heroSecondary}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Product Categories */}
      <div className="bg-[#F0F7FF] text-gray-900 lg:py-16 py-10 lg:my-10 my-5" data-aos="fade-up">
        <Container>
          <div className="md:space-y-10 space-y-6">
            <div className='text-center space-y-4' data-aos="zoom-in">
              <h2 className='font-bold lg:text-4xl text-3xl text-gray-900'>{t.productsTitle}</h2>
              <p className='lg:text-base text-gray-600 lg:w-[850px] mx-auto w-full px-4'>
                {t.productsDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
              
              {/* Human Medicines */}
              <div className='flex flex-col rounded-lg items-center bg-white text-gray-900 justify-center p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer' data-aos="flip-left" data-aos-duration="600">
                <div className='bg-[#F0F7FF] border-2 border-[#D1E5F7] p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#5BA3EB]'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Human Medicines" loading="lazy" />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 text-center'>{t.humanMedicines}</h3>
                <p className='text-sm text-gray-600 text-center'>{t.humanDesc}</p>
              </div>
              
              {/* Surgical & Consumables */}
              <div className='flex flex-col rounded-lg items-center bg-white text-gray-900 justify-center p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                <div className='bg-[#F0F7FF] border-2 border-[#D1E5F7] p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#5BA3EB]'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/2621/2621046.png" alt="Surgical & Consumables" loading="lazy" />
                </div>
                <h3 className='text-xl font-bold text-center text-gray-900 mb-2'>{t.surgical}</h3>
                <p className='text-sm text-gray-600 text-center'>{t.surgicalDesc}</p>
              </div>
              
              {/* Veterinary Medicines */}
              <div className='flex flex-col rounded-lg items-center bg-white text-gray-900 justify-center p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer' data-aos="flip-left" data-aos-delay="200" data-aos-duration="600">
                <div className='bg-[#F0F7FF] border-2 border-[#D1E5F7] p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#5BA3EB]'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png" alt="Veterinary Medicines" loading="lazy" />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 text-center'>{t.veterinary}</h3>
                <p className='text-sm text-gray-600 text-center'>{t.vetDesc}</p>
              </div>

              {/* Ayurvedic Products */}
              <div className='flex flex-col rounded-lg items-center bg-white text-gray-900 justify-center p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer' data-aos="flip-left" data-aos-delay="300" data-aos-duration="600">
                <div className='bg-[#F0F7FF] border-2 border-[#D1E5F7] p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#5BA3EB]'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/7667/7667708.png" alt="Ayurvedic Products" loading="lazy" />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 text-center'>{t.ayurveda}</h3>
                <p className='text-sm text-gray-600 text-center'>{t.ayurvedaDesc}</p>
              </div>

              {/* General Medical Items */}
              <div className='flex flex-col rounded-lg items-center bg-white text-gray-900 justify-center p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer' data-aos="flip-left" data-aos-delay="400" data-aos-duration="600">
                <div className='bg-[#F0F7FF] border-2 border-[#D1E5F7] p-6 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#5BA3EB]'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/3147/3147072.png" alt="General Medical Items" loading="lazy" />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2 text-center'>{t.generalItems}</h3>
                <p className='text-sm text-gray-600 text-center'>{t.generalItemsDesc}</p>
              </div>
              
            </div>
          </div>
        </Container>
      </div>

      {/* Human Medicines Partners Grid */}
      <div className="bg-white py-12 border-t border-[#D1E5F7]" data-aos="fade-up">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
            {t.humanPartnersTitle} <span className="text-[#5BA3EB]">{t.humanPartnersHighlight}</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
            {humanPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] p-4 h-28"
                data-aos="zoom-in"
                data-aos-delay={index * 30}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Veterinary Medicines Partners Grid */}
      <div className="bg-[#F0F7FF] py-12 border-y border-[#D1E5F7]" data-aos="fade-up">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
            {t.vetPartnersTitle} <span className="text-[#5BA3EB]">{t.vetPartnersHighlight}</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
            {vetPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] p-4 h-28"
                data-aos="zoom-in"
                data-aos-delay={index * 40}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className='py-10 bg-white'>
        <h2 className='font-bold text-center lg:text-4xl text-3xl mb-8 text-gray-900' data-aos="fade-up">
          {t.testimonialsTitle} <span className='text-[#5BA3EB]'>{t.testimonialsHighlight}</span>
        </h2>
        <div className="mx-auto w-full lg:mb-5 mb-2 h-full" data-aos="fade-up" data-aos-delay="200">
          <Slider1 language={language} />
        </div>
      </div>

      {/* FAQ Section */}
      <div className='bg-[#F0F7FF] py-12'>
        <h2 className='lg:text-4xl text-center text-3xl font-bold lg:my-10 my-8 text-gray-900' data-aos="fade-up">
          {t.faqTitle} <span className='text-[#5BA3EB]'>{t.faqHighlight}</span>
        </h2>
        
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
                className="border-2 border-[#D1E5F7] bg-white lg:text-base text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden" 
                data-aos="zoom-in" 
                data-aos-delay={delay}
              >
                <div 
                  onClick={() => toggles(id)} 
                  className="p-4 text-white cursor-pointer font-semibold rounded-t-lg bg-[#5BA3EB] hover:bg-[#4A92DA] transition-all duration-300 flex justify-between items-center"
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
    </div>
  )
}
