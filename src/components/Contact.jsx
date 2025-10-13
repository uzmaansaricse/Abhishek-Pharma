import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaClock, FaHeadset, FaGlobe } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { MdSend } from 'react-icons/md';

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
            officeTitle: 'Our Office',
            officeAddress: 'Abhishek Pharma',
            phoneText: 'Contact Numbers',
            emailText: 'Email',
            locationText: 'Location',
            viewMap: 'View on Google Maps',
            whyContact: [
                { title: '24-Hour Response', desc: 'Quick reply guaranteed' },
                { title: 'Expert Support', desc: 'Professional assistance' }
            ]
        },
        hi: {
            heroTitle: 'संपर्क',
            heroHighlight: 'करें',
            heroSubtitle: 'कोई प्रश्न हैं? हम आपकी फार्मास्युटिकल जरूरतों में मदद के लिए यहां हैं',
            contactCards: [
                { title: 'मनोज कुमार को कॉल करें', detail: '+91 9414147250', link: 'tel:+919414147250' },
                { title: 'दिनेश बजाज को कॉल करें', detail: '+91 9636302626', link: 'tel:+919636302626' },
                { title: 'हमें ईमेल करें', detail: 'info@abhishekpharma.com', link: 'mailto:info@abhishekpharma.com' }
            ],
            formBadge: 'पूछताछ भेजें',
            formTitle: 'आइए शुरू करें',
            formHighlight: 'बातचीत',
            formSubtitle: 'नीचे दिया गया फॉर्म भरें और हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।',
            nameLabel: 'नाम',
            businessLabel: 'व्यवसाय का नाम',
            cityLabel: 'शहर',
            emailLabel: 'ईमेल',
            phoneLabel: 'फोन',
            messageLabel: 'संदेश',
            namePlaceholder: 'आपका नाम',
            businessPlaceholder: 'आपके व्यवसाय का नाम',
            cityPlaceholder: 'आपका शहर',
            emailPlaceholder: 'your@email.com',
            phonePlaceholder: '+91 XXXXX XXXXX',
            messagePlaceholder: 'हमें अपनी आवश्यकताओं के बारे में बताएं...',
            submitBtn: 'पूछताछ सबमिट करें',
            loadingMsg: 'आपका संदेश भेजा जा रहा है...',
            successTitle: 'धन्यवाद!',
            successMsg: 'आपकी पूछताछ सफलतापूर्वक भेज दी गई है।',
            successSubMsg: 'हम 24 घंटे के भीतर आपसे संपर्क करेंगे।',
            officeTitle: 'हमारा कार्यालय',
            officeAddress: 'अभिषेक फार्मा',
            phoneText: 'संपर्क नंबर',
            emailText: 'ईमेल',
            locationText: 'स्थान',
            viewMap: 'गूगल मैप्स पर देखें',
            whyContact: [
                { title: '24-घंटे प्रतिक्रिया', desc: 'त्वरित उत्तर की गारंटी' },
                { title: 'विशेषज्ञ सहायता', desc: 'पेशेवर सहायता' }
            ]
        }
    };

    const t = content[language];

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
                    companyName: '',
                    jobTitle: '',
                    email: '',
                    mobile: '',
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

    const contactInfo = [
        {
            icon: FaPhoneAlt,
            color: 'blue-800'
        },
        {
            icon: FaPhoneAlt,
            color: 'blue-700'
        },
        {
            icon: MdEmail,
            color: 'blue-800'
        }
    ];

    const handleMapClick = () => {
        window.open('https://maps.app.goo.gl/aKTx1nETh1eZMH2b6', '_blank');
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
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
                            {t.heroTitle} <span className="text-blue-300">{t.heroHighlight}</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-blue-300" data-aos="fade-up" data-aos-delay="200">
                            {t.heroSubtitle}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Quick Contact Cards - Updated with 3 cards */}
            <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
                <Container>
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.contactCards.map((info, index) => {
                            const IconComponent = contactInfo[index].icon;
                            return (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-400"
                                    data-aos="flip-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className={`inline-flex p-4 bg-${contactInfo[index].color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">{info.title}</h3>
                                    <p className="text-blue-700 font-medium">{info.detail}</p>
                                </a>
                            );
                        })}
                    </div>
                </Container>
            </div>

            {/* Main Content - Light blue Background */}
            <div className="py-16 bg-blue-50" data-aos="fade-up">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-200" data-aos="fade-right">
                            <div className="mb-8">
                                <div className="inline-block mb-4">
                                    <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                        {t.formBadge}
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                                    {t.formTitle} <span className="text-blue-700">{t.formHighlight}</span>
                                </h2>
                                <p className="text-blue-600">
                                    {t.formSubtitle}
                                </p>
                            </div>

                            {loading ? (
                                <div className="bg-yellow-50 border-2 border-yellow-300 text-yellow-800 p-6 rounded-xl shadow-sm flex items-center gap-4">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
                                    <span className="font-medium">{t.loadingMsg}</span>
                                </div>
                            ) : submitted ? (
                                <div className="bg-green-50 border-2 border-green-300 text-green-800 p-6 rounded-xl shadow-sm" data-aos="zoom-in">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-green-500 rounded-full">
                                            <FaCheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{t.successTitle}</h3>
                                            <p className="text-sm">{t.successMsg}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">{t.successSubMsg}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                                                {t.nameLabel} <span className="text-red-500">*</span>
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
                                                {t.businessLabel}
                                            </label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                                                placeholder={t.businessPlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                                                {t.cityLabel}
                                            </label>
                                            <input
                                                type="text"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                                                placeholder={t.cityPlaceholder}
                                            />
                                        </div>

                                        <div className="group">
                                            <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                                                {t.emailLabel} <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                                                placeholder={t.emailPlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                                            {t.phoneLabel} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white"
                                            placeholder={t.phonePlaceholder}
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-blue-700 font-semibold mb-2 group-focus-within:text-blue-900 transition-colors">
                                            {t.messageLabel} <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            required
                                            className="w-full p-4 border-2 border-blue-200 focus:border-blue-800 focus:outline-none rounded-lg transition-all duration-300 bg-blue-50 focus:bg-white resize-none"
                                            placeholder={t.messagePlaceholder}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-800 text-white py-4 px-8 hover:bg-blue-900 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <MdSend className="w-5 h-5" />
                                        {t.submitBtn}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Office Info Section - Updated */}
                        <div className="space-y-8" data-aos="fade-left">
                            {/* Office Details Card - blue Theme */}
                            <div className="bg-blue-800 text-white rounded-2xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">{t.officeTitle}</h3>
                                    
                                    <div className="space-y-6">
                                        {/* Contact Numbers Section */}
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                                                <FaPhoneAlt className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-3">
                                                <p className="text-blue-300 text-sm mb-2">{t.phoneText}</p>
                                                <div>
                                                    <p className="font-semibold">Manoj Kumar Bajaj</p>
                                                    <a href="tel:+919414147250" className="text-blue-300 hover:text-white transition-colors">
                                                        +91 9414147250
                                                    </a>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Dinesh Bajaj</p>
                                                    <a href="tel:+919636302626" className="text-blue-300 hover:text-white transition-colors">
                                                        +91 9636302626
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email Section */}
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                                                <MdEmail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-blue-300 text-sm mb-1">{t.emailText}</p>
                                                <a href="mailto:info@abhishekpharma.com" className="font-semibold hover:text-blue-300 transition-colors break-all">
                                                    info@abhishekpharma.com
                                                </a>
                                            </div>
                                        </div>

                                        {/* Location with Map Link */}
                                        <div 
                                            onClick={handleMapClick}
                                            className="flex items-start gap-4 cursor-pointer group/map"
                                        >
                                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover/map:bg-white/20 transition-colors">
                                                <FaMapMarkerAlt className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-blue-300 text-sm mb-1">{t.locationText}</p>
                                                <p className="font-semibold mb-2">{t.officeAddress}</p>
                                                <p className="text-blue-300 hover:text-blue-200 text-sm flex items-center gap-1">
                                                    {t.viewMap} →
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Embedded Map */}
                                    <div className="mt-6 rounded-lg overflow-hidden border-2 border-white/10">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8429547668985!2d75.81674231504473!3d26.918854983135827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c6b5b5b5b5%3A0x0!2zMjbCsDU1JzA3LjkiTiA3NcKwNDknMDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                            width="100%"
                                            height="200"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Abhishek Pharma Location"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Why Contact Us Cards - blue Theme */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {t.whyContact.map((item, index) => {
                                    const icons = [FaClock, FaHeadset];
                                    const Icon = icons[index];
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-blue-200"
                                            data-aos="zoom-in"
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="inline-flex p-3 bg-blue-200 rounded-xl mb-4">
                                                <Icon className="w-6 h-6 text-blue-700" />
                                            </div>
                                            <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                                            <p className="text-blue-600 text-sm">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
