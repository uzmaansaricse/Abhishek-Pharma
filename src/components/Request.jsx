import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaFileInvoice, FaCheckCircle, FaTruck, FaPercent, FaClipboardList, FaGlobe } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

export default function Request() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    phone: '',
    products: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      heroTitle: 'Request',
      heroHighlight: 'Quote',
      heroSubtitle: 'Get instant access to our product catalog and competitive pricing',
      heroDesc: 'Fill out the form below and receive detailed quotations within 24 hours',
      benefits: [
        { title: 'Instant Quotes', desc: 'Receive detailed pricing within 24 hours' },
        { title: 'Fast Delivery', desc: 'Quick dispatch and reliable shipping' },
        { title: 'Best Prices', desc: 'Competitive wholesale rates for bulk orders' },
        { title: 'Custom Lists', desc: 'Tailored product catalogs for your needs' }
      ],
      productCategories: [
        { value: 'Tablets', icon: '💊' },
        { value: 'Syrups', icon: '🧪' },
        { value: 'Injections', icon: '💉' },
        { value: 'Ayurvedic Medicines', icon: '🌿' },
        { value: 'Promotional Products', icon: '🎁' },
        { value: 'OTC Products', icon: '🏥' },
        { value: 'All Products', icon: '📋' },
        { value: 'Other', icon: '📦' }
      ],
      formHeader: 'Request Your Quote',
      formSubtitle: "We'll respond within 24 hours with detailed pricing",
      personalDetails: 'Personal Details',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      businessInfo: 'Business Information',
      businessName: 'Business/Pharmacy Name',
      cityLocation: 'City/Location',
      productReq: 'Product Requirements',
      selectCategory: 'Select Product Category',
      additionalReq: 'Additional Requirements',
      namePlaceholder: 'Enter your full name',
      phonePlaceholder: '+91 XXXXX XXXXX',
      businessPlaceholder: 'Your business name',
      cityPlaceholder: 'Your city',
      messagePlaceholder: 'Please specify quantities, brands, or any special requirements...',
      submitBtn: 'Submit Quote Request',
      loadingMsg: 'Processing your request...',
      loadingSubMsg: 'Please wait while we submit your quotation request',
      successTitle: 'Request Submitted Successfully!',
      successMsg: 'Thank you for your interest in Abhishek Pharma',
      successSubMsg: 'Our team will contact you within 24 hours with a detailed quotation and product catalog.',
      anotherRequest: 'Submit Another Request',
      privacyNote: '🔒 Your information is secure and will only be used to process your quote request',
      whyTitle: 'Why Request a Quote from',
      whyHighlight: 'Abhishek Pharma?',
      whyChoose: [
        { icon: '✅', title: 'Verified Quality', desc: 'ISO certified products' },
        { icon: '💰', title: 'Best Wholesale Rates', desc: 'Competitive bulk pricing' },
        { icon: '🚀', title: 'Fast Processing', desc: '24-hour quote delivery' }
      ]
    },
    hi: {
      heroTitle: 'कोट का',
      heroHighlight: 'अनुरोध करें',
      heroSubtitle: 'हमारी उत्पाद कैटलॉग और प्रतिस्पर्धी मूल्य निर्धारण तक त्वरित पहुंच प्राप्त करें',
      heroDesc: 'नीचे दिया गया फॉर्म भरें और 24 घंटे के भीतर विस्तृत कोटेशन प्राप्त करें',
      benefits: [
        { title: 'त्वरित कोट', desc: '24 घंटे के भीतर विस्तृत मूल्य निर्धारण प्राप्त करें' },
        { title: 'तेज डिलीवरी', desc: 'त्वरित डिस्पैच और विश्वसनीय शिपिंग' },
        { title: 'सर्वोत्तम मूल्य', desc: 'थोक ऑर्डर के लिए प्रतिस्पर्धी दरें' },
        { title: 'कस्टम सूची', desc: 'आपकी जरूरतों के लिए अनुकूलित उत्पाद कैटलॉग' }
      ],
      productCategories: [
        { value: 'गोलियां', icon: '💊' },
        { value: 'सिरप', icon: '🧪' },
        { value: 'इंजेक्शन', icon: '💉' },
        { value: 'आयुर्वेदिक दवाएं', icon: '🌿' },
        { value: 'प्रचार उत्पाद', icon: '🎁' },
        { value: 'ओटीसी उत्पाद', icon: '🏥' },
        { value: 'सभी उत्पाद', icon: '📋' },
        { value: 'अन्य', icon: '📦' }
      ],
      formHeader: 'अपना कोट अनुरोध करें',
      formSubtitle: 'हम 24 घंटे के भीतर विस्तृत मूल्य निर्धारण के साथ जवाब देंगे',
      personalDetails: 'व्यक्तिगत विवरण',
      fullName: 'पूरा नाम',
      phoneNumber: 'फोन नंबर',
      businessInfo: 'व्यवसाय की जानकारी',
      businessName: 'व्यवसाय/फार्मेसी का नाम',
      cityLocation: 'शहर/स्थान',
      productReq: 'उत्पाद आवश्यकताएं',
      selectCategory: 'उत्पाद श्रेणी चुनें',
      additionalReq: 'अतिरिक्त आवश्यकताएं',
      namePlaceholder: 'अपना पूरा नाम दर्ज करें',
      phonePlaceholder: '+91 XXXXX XXXXX',
      businessPlaceholder: 'आपके व्यवसाय का नाम',
      cityPlaceholder: 'आपका शहर',
      messagePlaceholder: 'कृपया मात्रा, ब्रांड, या किसी विशेष आवश्यकताओं को निर्दिष्ट करें...',
      submitBtn: 'कोट अनुरोध सबमिट करें',
      loadingMsg: 'आपका अनुरोध संसाधित किया जा रहा है...',
      loadingSubMsg: 'कृपया प्रतीक्षा करें जबकि हम आपका कोटेशन अनुरोध सबमिट करते हैं',
      successTitle: 'अनुरोध सफलतापूर्वक सबमिट किया गया!',
      successMsg: 'अभिषेक फार्मा में आपकी रुचि के लिए धन्यवाद',
      successSubMsg: 'हमारी टीम 24 घंटे के भीतर विस्तृत कोटेशन और उत्पाद कैटलॉग के साथ आपसे संपर्क करेगी।',
      anotherRequest: 'एक और अनुरोध सबमिट करें',
      privacyNote: '🔒 आपकी जानकारी सुरक्षित है और केवल आपके कोट अनुरोध को संसाधित करने के लिए उपयोग की जाएगी',
      whyTitle: 'क्यों कोट का अनुरोध करें',
      whyHighlight: 'अभिषेक फार्मा से?',
      whyChoose: [
        { icon: '✅', title: 'सत्यापित गुणवत्ता', desc: 'आईएसओ प्रमाणित उत्पाद' },
        { icon: '💰', title: 'सर्वोत्तम थोक दरें', desc: 'प्रतिस्पर्धी थोक मूल्य निर्धारण' },
        { icon: '🚀', title: 'तेज प्रसंस्करण', desc: '24-घंटे कोट वितरण' }
      ]
    }
  };

  const t = content[language];
  const benefitIcons = [FaFileInvoice, FaTruck, FaPercent, FaClipboardList];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    emailjs.send(
      'service_kux7h0v',
      'template_4niwlml',
      formData,
      'bdV9UA-HJSui3W7Pp'
    )
      .then((result) => {
        setSubmitted(true);
        setFormData({
          name: '',
          businessName: '',
          city: '',
          phone: '',
          products: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error.text);
        alert('Failed to send. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-[100vw] overflow-x-hidden bg-white min-h-screen">
      {/* Language Toggle Button - blue Theme */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section - Clean blue */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <FaFileInvoice className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              {t.heroTitle} <span className="text-blue-300">{t.heroHighlight}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-300 mb-4" data-aos="fade-up" data-aos-delay="200">
              {t.heroSubtitle}
            </p>
            
            <p className="text-lg text-blue-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              {t.heroDesc}
            </p>
          </div>
        </Container>
      </div>

      {/* Benefits Section - blue Theme */}
      <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-400"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-flex p-3 bg-blue-200 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-blue-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Main Form Section - Light blue Background */}
      <div className="py-16 bg-blue-50" data-aos="fade-up">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200">
              {/* Form Header - blue Theme */}
              <div className="bg-blue-800 p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">{t.formHeader}</h2>
                <p className="text-blue-300">{t.formSubtitle}</p>
              </div>

              {/* Form Content */}
              <div className="p-8 lg:p-12">
                {loading ? (
                  <div className="bg-yellow-50 border-2 border-yellow-300 text-yellow-800 p-8 rounded-xl shadow-sm text-center" data-aos="zoom-in">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-yellow-600 mx-auto mb-4"></div>
                    <p className="font-semibold text-lg">{t.loadingMsg}</p>
                    <p className="text-sm mt-2">{t.loadingSubMsg}</p>
                  </div>
                ) : submitted ? (
                  <div className="bg-green-50 border-2 border-green-300 text-green-800 p-8 rounded-xl shadow-sm text-center" data-aos="zoom-in">
                    <div className="inline-flex p-4 bg-green-500 rounded-full mb-4">
                      <FaCheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t.successTitle}</h3>
                    <p className="text-lg mb-4">{t.successMsg}</p>
                    <p className="text-sm mb-6">{t.successSubMsg}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      {t.anotherRequest}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details Section */}
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-300">
                        {t.personalDetails}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                            {t.fullName} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                            placeholder={t.namePlaceholder}
                          />
                        </div>

                        <div className="group">
                          <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                            {t.phoneNumber} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                            placeholder={t.phonePlaceholder}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Business Details Section */}
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-300">
                        {t.businessInfo}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                            {t.businessName}
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                            placeholder={t.businessPlaceholder}
                          />
                        </div>

                        <div className="group">
                          <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                            {t.cityLocation}
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                            placeholder={t.cityPlaceholder}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Selection Section */}
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-300">
                        {t.productReq}
                      </h3>
                      
                      <div className="group mb-6">
                        <label className="block text-blue-700 font-semibold mb-3 group-focus-within:text-blue-900 transition-colors">
                          {t.selectCategory} <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {t.productCategories.map((category, index) => (
                            <label
                              key={index}
                              className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                                formData.products === category.value
                                  ? 'bg-blue-800 border-blue-800 text-white shadow-md'
                                  : 'bg-white border-blue-200 hover:border-blue-400'
                              }`}
                            >
                              <input
                                type="radio"
                                name="products"
                                value={category.value}
                                checked={formData.products === category.value}
                                onChange={handleChange}
                                required
                                className="hidden"
                              />
                              <span className="text-2xl">{category.icon}</span>
                              <span className={`text-sm font-medium ${formData.products === category.value ? 'text-white' : 'text-blue-700'}`}>
                                {category.value}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                          {t.additionalReq}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white resize-none"
                          placeholder={t.messagePlaceholder}
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button - blue Theme */}
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white py-4 px-8 hover:bg-blue-900 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <MdSend className="w-6 h-6" />
                      {t.submitBtn}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-center text-sm text-blue-500 mt-4">
                      {t.privacyNote}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Section - White Background */}
      <div className="py-16 bg-white" data-aos="fade-up">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              {t.whyTitle} <span className="text-blue-700">{t.whyHighlight}</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {t.whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-blue-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
