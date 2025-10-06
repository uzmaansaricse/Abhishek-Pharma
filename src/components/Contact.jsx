import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaClock, FaHeadset } from 'react-icons/fa';
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
            title: 'Call Us',
            detail: '+91 98765 43210',
            link: 'tel:+919876543210',
            color: 'from-teal-500 to-emerald-500'
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            detail: 'info@abhishekpharma.com',
            link: 'mailto:info@abhishekpharma.com',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Us',
            detail: '123 Medical Plaza, Mumbai',
            link: '#location',
            color: 'from-teal-600 to-cyan-600'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
                
                <Container>
                    <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
                            Get In <span className="text-yellow-300">Touch</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-teal-100" data-aos="fade-up" data-aos-delay="200">
                            Have questions? We're here to help with your pharmaceutical needs
                        </p>
                    </div>
                </Container>
            </div>

            {/* Quick Contact Cards */}
            <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
                <Container>
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200"
                                data-aos="flip-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                                <p className="text-teal-600 font-medium">{info.detail}</p>
                            </a>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <div className="py-16" data-aos="fade-up">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl" data-aos="fade-right">
                            <div className="mb-8">
                                <div className="inline-block mb-4">
                                    <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Send Enquiry
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                                    Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Conversation</span>
                                </h2>
                                <p className="text-gray-600">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            {loading ? (
                                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 text-yellow-800 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
                                    <span className="font-medium">Sending your message...</span>
                                </div>
                            ) : submitted ? (
                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-emerald-300 text-emerald-800 p-6 rounded-2xl shadow-lg" data-aos="zoom-in">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-emerald-500 rounded-full">
                                            <FaCheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">Thank You!</h3>
                                            <p className="text-sm">Your enquiry has been sent successfully.</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div className="group">
                                            <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                                Business Name
                                            </label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                                                placeholder="Your Business Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                                                placeholder="Your City"
                                            />
                                        </div>

                                        <div className="group">
                                            <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 px-8 hover:from-teal-600 hover:to-emerald-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <MdSend className="w-5 h-5" />
                                        Submit Enquiry
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Office Info Section */}
                        <div className="space-y-8" data-aos="fade-left">
                            {/* Office Details Card */}
                            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Office</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                                <FaMapMarkerAlt className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold mb-2">Abhishek Pharma</p>
                                                <p className="text-teal-100">
                                                    123 Medical Plaza,<br />
                                                    Mumbai, Maharashtra,<br />
                                                    India - 400001
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                                <FaPhoneAlt className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-teal-100 text-sm mb-1">Phone</p>
                                                <a href="tel:+919876543210" className="font-semibold hover:text-yellow-300 transition-colors">
                                                    +91 98765 43210
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                                <FaEnvelope className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-teal-100 text-sm mb-1">Email</p>
                                                <a href="mailto:info@abhishekpharma.com" className="font-semibold hover:text-yellow-300 transition-colors break-all">
                                                    info@abhishekpharma.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why Contact Us Cards */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: FaClock, title: '24-Hour Response', desc: 'Quick reply guaranteed' },
                                    { icon: FaHeadset, title: 'Expert Support', desc: 'Professional assistance' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="inline-flex p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl mb-4">
                                            <item.icon className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
