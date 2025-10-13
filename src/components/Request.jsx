import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaPhoneAlt, FaCheckCircle, FaGlobe } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';

export default function Contact() {
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
      heroTitle: 'Get In',
      heroHighlight: 'Touch',
      heroSubtitle: "Have questions? We're here to help with your pharmaceutical needs",
      contactCards: [
        { title: 'Call Manoj Kumar', detail: '+91 9414147250', link: 'tel:+919414147250' },
        { title: 'Call Dinesh Bajaj', detail: '+91 9636302626', link: 'tel:+919636302626' },
        { title: 'Email Us', detail: 'info@abhishekpharma.com', link: 'mailto:info@abhishekpharma.com' }
      ],
      formBadge: 'Send Enquiry',
      formTitle: "Let's Start a",
      formHighlight: 'Conversation',
      formSubtitle: "Fill out the form below and our team will get back to you within 24 hours.",
      nameLabel: 'Name',
      businessLabel: 'Business Name',
      cityLabel: 'City',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      messageLabel: 'Message',
      namePlaceholder: 'Your Name',
      businessPlaceholder: 'Your Business Name',
      cityPlaceholder: 'Your City',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+91 XXXXX XXXXX',
      messagePlaceholder: 'Tell us about your requirements...',
      submitBtn: 'Submit Enquiry',
      loadingMsg: 'Sending your message...',
      successTitle: 'Thank You!',
      successMsg: 'Your enquiry has been sent successfully.',
      successSubMsg: "We'll get back to you within 24 hours.",
      benefits: [
        { title: 'Instant Quotes', desc: 'Receive detailed pricing within 24 hours' },
        { title: 'Fast Delivery', desc: 'Quick dispatch and reliable shipping' },
        { title: 'Best Prices', desc: 'Competitive wholesale rates for bulk orders' },
        { title: 'Custom Lists', desc: 'Tailored product catalogs for your needs' }
      ]
    }
  };

  const t = content[language];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', companyName: '', jobTitle: '', email: '', mobile: '', message: '' });
    })
    .catch(() => alert('Failed to send. Please try again.'))
    .finally(() => setLoading(false));
  };

  const contactInfo = [
    { icon: FaPhoneAlt },
    { icon: FaPhoneAlt },
    { icon: MdEmail }
  ];

  const handleMapClick = () => window.open('https://maps.app.goo.gl/aKTx1nETh1eZMH2b6', '_blank');

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              {t.heroTitle} <span className="text-[#4C9EFF]">{t.heroHighlight}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">{t.heroSubtitle}</p>
          </div>
        </Container>
      </div>

      {/* Contact Cards */}
      <div className="py-10 -mt-12 relative z-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {t.contactCards.map((info, index) => {
              const Icon = contactInfo[index].icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-[#DCEBFF]"
                >
                  <div className="inline-flex p-3 bg-[#E8F2FF] rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-[#4C9EFF]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.detail}</p>
                </a>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-[#f9fcff]">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-[#E4F1FF] p-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.formTitle} <span className="text-[#4C9EFF]">{t.formHighlight}</span></h2>
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
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">{t.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.namePlaceholder}
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">{t.businessLabel}</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder={t.businessPlaceholder}
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">{t.cityLabel}</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder={t.cityPlaceholder}
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">{t.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    required
                    className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">{t.messageLabel}</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    required
                    className="w-full p-4 border border-[#DCEBFF] rounded-lg bg-[#F7FBFF] focus:border-[#A4D3FF] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#BEE3FF] to-[#A4D3FF] hover:from-[#A4D3FF] hover:to-[#8BC9FF] text-gray-800 font-semibold py-4 rounded-full shadow-sm flex items-center justify-center gap-2"
                >
                  <MdSend className="w-5 h-5" /> {t.submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Benefits Section */}
          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[#DCEBFF] hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
}
