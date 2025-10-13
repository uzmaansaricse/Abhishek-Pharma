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
      formHeader: 'Request Your Quote',
      formSubtitle: "We'll respond within 24 hours with detailed pricing",
      personalDetails: 'Personal Details',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      businessInfo: 'Business Information',
      businessName: 'Business/Pharmacy Name',
      cityLocation: 'City/Location',
      productReq: 'Product Requirements',
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
      successSubMsg:
        'Our team will contact you within 24 hours with a detailed quotation and product catalog.',
      anotherRequest: 'Submit Another Request',
      whyTitle: 'Why Request a Quote from',
      whyHighlight: 'Abhishek Pharma?',
      whyChoose: [
        { icon: '✅', title: 'Verified Quality', desc: 'ISO certified products' },
        { icon: '💰', title: 'Best Wholesale Rates', desc: 'Competitive bulk pricing' },
        { icon: '🚀', title: 'Fast Processing', desc: '24-hour quote delivery' }
      ]
    }
  };

  const t = content[language];
  const benefitIcons = [FaFileInvoice, FaTruck, FaPercent, FaClipboardList];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send('service_kux7h0v', 'template_4niwlml', formData, 'bdV9UA-HJSui3W7Pp')
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', businessName: '', city: '', phone: '', products: '', message: '' });
      })
      .catch(() => alert('Failed to send. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
<<<<<<< HEAD
    <div className="w-[100vw] overflow-x-hidden bg-[#f9fcff] min-h-screen text-gray-800">
      {/* Language Toggle */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-2 bg-[#B0D8FF] hover:bg-[#8BC9FF] text-gray-800 font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all"
=======
    <div className="w-[100vw] overflow-x-hidden bg-white min-h-screen">
      {/* Language Toggle Button - blue Theme */}
      <div className="fixed top-24 right-4 z-50" data-aos="fade-left">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="group flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>>>>>>> e7f6647 (push)
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

<<<<<<< HEAD
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f2f8ff] via-[#e8f4ff] to-[#e9fff2] py-20">
=======
      {/* Hero Section - Clean blue */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
>>>>>>> e7f6647 (push)
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-6">
              <FaFileInvoice className="w-8 h-8 text-[#4C9EFF]" />
            </div>
<<<<<<< HEAD
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              {t.heroTitle}{' '}
              <span className="bg-gradient-to-r from-[#4C9EFF] to-[#46C47E] bg-clip-text text-transparent">
                {t.heroHighlight}
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-4">{t.heroSubtitle}</p>
            <p className="text-gray-500">{t.heroDesc}</p>
=======
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              {t.heroTitle} <span className="text-blue-300">{t.heroHighlight}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-300 mb-4" data-aos="fade-up" data-aos-delay="200">
              {t.heroSubtitle}
            </p>
            
            <p className="text-lg text-blue-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              {t.heroDesc}
            </p>
>>>>>>> e7f6647 (push)
          </div>
        </Container>
      </div>

<<<<<<< HEAD
      {/* Benefits */}
      <div className="py-10 -mt-12 relative z-10">
=======
      {/* Benefits Section - blue Theme */}
      <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
>>>>>>> e7f6647 (push)
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#DCEBFF]"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-[#E8F2FF] to-[#E8FFF2] rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-[#46C47E]" />
=======
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-400"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <div className="inline-flex p-3 bg-blue-200 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-blue-700" />
>>>>>>> e7f6647 (push)
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-blue-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

<<<<<<< HEAD
      {/* Form */}
      <div className="py-16 bg-[#f9fcff]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md border border-[#E4F1FF]">
              <div className="bg-gradient-to-r from-[#D8EAFF] to-[#D8FFE5] p-8 text-center rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">{t.formHeader}</h2>
                <p className="text-gray-600">{t.formSubtitle}</p>
=======
      {/* Main Form Section - Light blue Background */}
      <div className="py-16 bg-blue-50" data-aos="fade-up">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200">
              {/* Form Header - blue Theme */}
              <div className="bg-blue-800 p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">{t.formHeader}</h2>
                <p className="text-blue-300">{t.formSubtitle}</p>
>>>>>>> e7f6647 (push)
              </div>

              <div className="p-8 lg:p-10">
                {loading ? (
                  <div className="text-center text-gray-600">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#4C9EFF] mx-auto mb-4"></div>
                    <p>{t.loadingMsg}</p>
                  </div>
                ) : submitted ? (
                  <div className="text-center">
                    <FaCheckCircle className="text-[#46C47E] text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.successTitle}</h3>
                    <p className="text-gray-600 mb-2">{t.successMsg}</p>
                    <p className="text-gray-500 mb-6">{t.successSubMsg}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-[#C7F5D9] hover:bg-[#8DE4AF] text-gray-800 rounded-full font-semibold transition-all"
                    >
                      {t.anotherRequest}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
<<<<<<< HEAD
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">{t.fullName}</label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#8DE4AF] outline-none"
                          placeholder={t.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">{t.phoneNumber}</label>
                        <input
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#8DE4AF] outline-none"
                          placeholder={t.phonePlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">{t.businessName}</label>
                        <input
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#8DE4AF] outline-none"
                          placeholder={t.businessPlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">{t.cityLocation}</label>
                        <input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#8DE4AF] outline-none"
                          placeholder={t.cityPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">{t.additionalReq}</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#8DE4AF] outline-none resize-none"
                        placeholder={t.messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#BEE3FF] via-[#A4D3FF] to-[#C7F5D9] hover:from-[#A4D3FF] hover:to-[#8DE4AF] text-gray-800 font-semibold py-4 rounded-full shadow-sm transition-all"
=======
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
>>>>>>> e7f6647 (push)
                    >
                      <span className="flex items-center justify-center gap-2">
                        <MdSend className="w-5 h-5" /> {t.submitBtn}
                      </span>
                    </button>
<<<<<<< HEAD
=======

                    {/* Privacy Note */}
                    <p className="text-center text-sm text-blue-500 mt-4">
                      {t.privacyNote}
                    </p>
>>>>>>> e7f6647 (push)
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
<<<<<<< HEAD
=======

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
>>>>>>> e7f6647 (push)
    </div>
  );
}
