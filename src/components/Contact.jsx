import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaFileInvoice, FaTruck, FaPercent, FaClipboardList, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

export default function RequestContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    jobTitle: '',
    email: '',
    mobile: '',
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
      formBadge: 'Send Enquiry',
      formTitle: "Let's Start a",
      formHighlight: 'Conversation',
      formSubtitle: "Fill out the form below and our team will get back to you within 24 hours.",
      fields: {
        name: 'Name',
        companyName: 'Business Name',
        jobTitle: 'City',
        email: 'Email',
        mobile: 'Phone',
        message: 'Message'
      },
      placeholders: {
        name: 'Your Name',
        companyName: 'Your Business Name',
        jobTitle: 'Your City',
        email: 'your@email.com',
        mobile: '+91 XXXXX XXXXX',
        message: 'Tell us about your requirements...'
      },
      submitBtn: 'Submit Enquiry',
      loadingMsg: 'Sending your message...',
      successTitle: 'Thank You!',
      successMsg: 'Your enquiry has been sent successfully.',
      successSubMsg: "We'll get back to you within 24 hours."
    },
    hi: {
      heroTitle: 'कोट',
      heroHighlight: 'का अनुरोध करें',
      heroSubtitle: 'हमारे उत्पाद कैटलॉग और प्रतिस्पर्धी मूल्य निर्धारण तक तत्काल पहुंच प्राप्त करें',
      heroDesc: 'नीचे दिया गया फॉर्म भरें और 24 घंटों के भीतर विस्तृत कोटेशन प्राप्त करें',
      benefits: [
        { title: 'तत्काल कोटेशन', desc: '24 घंटों के भीतर विस्तृत मूल्य निर्धारण प्राप्त करें' },
        { title: 'तेज डिलीवरी', desc: 'त्वरित प्रेषण और विश्वसनीय शिपिंग' },
        { title: 'सर्वोत्तम मूल्य', desc: 'थोक ऑर्डर के लिए प्रतिस्पर्धी थोक दरें' },
        { title: 'कस्टम सूचियां', desc: 'आपकी आवश्यकताओं के लिए तैयार उत्पाद कैटलॉग' }
      ],
      formBadge: 'पूछताछ भेजें',
      formTitle: "आइए एक",
      formHighlight: 'बातचीत शुरू करें',
      formSubtitle: "नीचे दिया गया फॉर्म भरें और हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी।",
      fields: {
        name: 'नाम',
        companyName: 'व्यापार का नाम',
        jobTitle: 'शहर',
        email: 'ईमेल',
        mobile: 'फोन',
        message: 'संदेश'
      },
      placeholders: {
        name: 'आपका नाम',
        companyName: 'आपका व्यापार नाम',
        jobTitle: 'आपका शहर',
        email: 'your@email.com',
        mobile: '+91 XXXXX XXXXX',
        message: 'हमसे अपनी आवश्यकताओं के बारे में बताएं...'
      },
      submitBtn: 'पूछताछ सबमिट करें',
      loadingMsg: 'आपका संदेश भेजा जा रहा है...',
      successTitle: 'धन्यवाद!',
      successMsg: 'आपकी पूछताछ सफलतापूर्वक भेजी गई है।',
      successSubMsg: "हम 24 घंटों के भीतर आपसे संपर्क करेंगे।"
    }
  };

  const t = content[language];
  const benefitIcons = [FaFileInvoice, FaTruck, FaPercent, FaClipboardList];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_kux7h0v', 'template_4niwlml', formData, 'bdV9UA-HJSui3W7Pp')
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', companyName: '', jobTitle: '', email: '', mobile: '', message: '' });
      })
      .catch(() => alert('Failed to send. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-[100vw] overflow-x-hidden bg-[#f9fcff] min-h-screen text-gray-800">
      
      {/* Language Toggle */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-2 bg-[#B0D8FF] hover:bg-[#8BC9FF] text-gray-800 font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all"
        >
          <FaGlobe className="w-5 h-5" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f2f8ff] via-[#e8f4ff] to-[#f2f8ff] py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-6">
              <FaFileInvoice className="w-8 h-8 text-[#4C9EFF]" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              {t.heroTitle} <span className="text-[#4C9EFF]">{t.heroHighlight}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-4">{t.heroSubtitle}</p>
            <p className="text-gray-500">{t.heroDesc}</p>
          </div>
        </Container>
      </div>

      {/* Benefits */}
      <div className="py-10 -mt-12 relative z-10">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#DCEBFF]">
                  <div className="inline-flex p-3 bg-[#E8F2FF] rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-[#4C9EFF]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Single Unified Form */}
      <div className="py-16 bg-[#f9fcff]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md border border-[#E4F1FF] p-8 lg:p-10">
              <div className="mb-8 text-center">
                <span className="bg-gradient-to-r from-[#BEE3FF] to-[#A4D3FF] text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow-sm inline-block mb-4">
                  {t.formBadge}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  {t.formTitle} <span className="text-[#4C9EFF]">{t.formHighlight}</span>
                </h2>
                <p className="text-gray-600">{t.formSubtitle}</p>
              </div>

              {loading ? (
                <div className="text-center text-gray-600">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#4C9EFF] mx-auto mb-4"></div>
                  <p>{t.loadingMsg}</p>
                </div>
              ) : submitted ? (
                <div className="text-center">
                  <FaCheckCircle className="text-[#4C9EFF] text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.successTitle}</h3>
                  <p className="text-gray-600 mb-2">{t.successMsg}</p>
                  <p className="text-gray-500 mb-6">{t.successSubMsg}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#A4D3FF] hover:bg-[#8BC9FF] text-gray-800 rounded-full font-semibold transition-all"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">{t.fields.name}</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none"
                        placeholder={t.placeholders.name}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">{t.fields.mobile}</label>
                      <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none"
                        placeholder={t.placeholders.mobile}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">{t.fields.companyName}</label>
                      <input
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none"
                        placeholder={t.placeholders.companyName}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">{t.fields.jobTitle}</label>
                      <input
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none"
                        placeholder={t.placeholders.jobTitle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">{t.fields.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none"
                      placeholder={t.placeholders.email}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">{t.fields.message}</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] outline-none resize-none"
                      placeholder={t.placeholders.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#BEE3FF] to-[#A4D3FF] hover:from-[#A4D3FF] hover:to-[#8BC9FF] text-gray-800 font-semibold py-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <MdSend className="w-5 h-5" /> {t.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
