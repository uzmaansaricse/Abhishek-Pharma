import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../pages/Container';
import { FaFileInvoice, FaCheckCircle, FaTruck, FaPercent, FaClipboardList } from 'react-icons/fa';
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

  const benefits = [
    { icon: FaFileInvoice, title: 'Instant Quotes', desc: 'Receive detailed pricing within 24 hours' },
    { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick dispatch and reliable shipping' },
    { icon: FaPercent, title: 'Best Prices', desc: 'Competitive wholesale rates for bulk orders' },
    { icon: FaClipboardList, title: 'Custom Lists', desc: 'Tailored product catalogs for your needs' }
  ];

  const productCategories = [
    { value: 'Tablets', icon: '💊' },
    { value: 'Syrups', icon: '🧪' },
    { value: 'Injections', icon: '💉' },
    { value: 'Ayurvedic Medicines', icon: '🌿' },
    { value: 'Promotional Products', icon: '🎁' },
    { value: 'OTC Products', icon: '🏥' },
    { value: 'All Products', icon: '📋' },
    { value: 'Other', icon: '📦' }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <FaFileInvoice className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-aos="zoom-in">
              Request <span className="text-yellow-300">Quote</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-teal-100 mb-4" data-aos="fade-up" data-aos-delay="200">
              Get instant access to our product catalog and competitive pricing
            </p>
            
            <p className="text-lg text-teal-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              Fill out the form below and receive detailed quotations within 24 hours
            </p>
          </div>
        </Container>
      </div>

      {/* Benefits Section */}
      <div className="py-10 -mt-16 relative z-10" data-aos="fade-up">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Form Section */}
      <div className="py-16" data-aos="fade-up">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">Request Your Quote</h2>
                <p className="text-teal-100">We'll respond within 24 hours with detailed pricing</p>
              </div>

              {/* Form Content */}
              <div className="p-8 lg:p-12">
                {loading ? (
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 text-yellow-800 p-8 rounded-2xl shadow-lg text-center" data-aos="zoom-in">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-yellow-600 mx-auto mb-4"></div>
                    <p className="font-semibold text-lg">Processing your request...</p>
                    <p className="text-sm mt-2">Please wait while we submit your quotation request</p>
                  </div>
                ) : submitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-emerald-300 text-emerald-800 p-8 rounded-2xl shadow-lg text-center" data-aos="zoom-in">
                    <div className="inline-flex p-4 bg-emerald-500 rounded-full mb-4">
                      <FaCheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Request Submitted Successfully!</h3>
                    <p className="text-lg mb-4">Thank you for your interest in Abhishek Pharma</p>
                    <p className="text-sm mb-6">Our team will contact you within 24 hours with a detailed quotation and product catalog.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details Section */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
                        Personal Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Business Details Section */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
                        Business Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                            Business/Pharmacy Name
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Your business name"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                            City/Location
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Your city"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Selection Section */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-200">
                        Product Requirements
                      </h3>
                      
                      <div className="group mb-6">
                        <label className="block text-gray-700 font-semibold mb-3 group-focus-within:text-teal-600 transition-colors">
                          Select Product Category <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {productCategories.map((category, index) => (
                            <label
                              key={index}
                              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                                formData.products === category.value
                                  ? 'bg-gradient-to-br from-teal-500 to-emerald-500 border-teal-500 text-white shadow-lg'
                                  : 'bg-white border-gray-200 hover:border-teal-300'
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
                              <span className={`text-sm font-medium ${formData.products === category.value ? 'text-white' : 'text-gray-700'}`}>
                                {category.value}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-gray-700 font-semibold mb-2 group-focus-within:text-teal-600 transition-colors">
                          Additional Requirements
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full p-4 border-2 border-gray-200 focus:border-teal-500 focus:outline-none rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                          placeholder="Please specify quantities, brands, or any special requirements..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 px-8 hover:from-teal-600 hover:to-emerald-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <MdSend className="w-6 h-6" />
                      Submit Quote Request
                    </button>

                    {/* Privacy Note */}
                    <p className="text-center text-sm text-gray-500 mt-4">
                      🔒 Your information is secure and will only be used to process your quote request
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50/50" data-aos="fade-up">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Why Request a Quote from <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Abhishek Pharma?</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: '✅', title: 'Verified Quality', desc: 'ISO certified products' },
                { icon: '💰', title: 'Best Wholesale Rates', desc: 'Competitive bulk pricing' },
                { icon: '🚀', title: 'Fast Processing', desc: '24-hour quote delivery' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
