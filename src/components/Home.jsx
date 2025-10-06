import React, { useState } from 'react'
import Slider from '../pages/Slider'
import Container from '../pages/Container'
import Slider1 from '../pages/Slider1'
import { FaTools, FaCogs, FaRegHandshake, FaChartLine, FaBullseye } from 'react-icons/fa'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { BiSearchAlt } from 'react-icons/bi'
import { GiLaptop } from 'react-icons/gi'
import { useNavigate } from 'react-router'

export default function Home() {
  const [open, setOpen] = useState(null);
  const toggles = (val) => { setOpen(val == open ? null : val) }
  
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Slider with Enhanced Animation */}
      <div className="w-full mb-5 h-full" data-aos="fade-down" data-aos-duration="800">
        <Slider />
      </div>

      {/* About Section with Soft Pastel Theme */}
      <div className="w-full h-full py-8 bg-gradient-to-br from-teal-50 via-white to-emerald-50" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 items-center">
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group' data-aos="zoom-in" data-aos-duration="800">
              <img 
                className='rounded-2xl w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                src="https://vijay-overseas.vercel.app/img/firm.jpg" 
                alt="Pharmaceutical Excellence" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className='md:space-y-5 space-y-3 order-1 md:order-2 p-4' data-aos="fade-left" data-aos-delay="200">
              <h1 className='font-bold lg:text-5xl text-3xl text-gray-800 leading-tight'>
                Your Partner in <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500'>Pharmaceutical Excellence</span>
              </h1>
              <div className='space-y-4'>
                <p className='lg:text-lg text-gray-700 leading-relaxed'>
                  Abhishek Pharma delivers premium wholesale pharmaceutical services from our offices in India. Our approach is built on trust, quality, and results that matter.
                </p>
                <p className='lg:text-lg text-gray-700 leading-relaxed'>
                  We specialize in branded medicines, promotional products, and supply chain solutions that help healthcare businesses streamline operations and meet market demands.
                </p>
                <p className='lg:text-lg text-gray-700 leading-relaxed'>
                  Partnering with pharmacies, hospitals, and distributors, we bring reliable supply practices and products that support health goals.
                </p>
              </div>
              <button  onClick={() => navigate('/about')} className='bg-gradient-to-r from-teal-500 to-emerald-500 cursor-pointer text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-teal-600 hover:to-emerald-600'>
                LEARN MORE
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Product Categories with Soft Green Gradient */}
      <div className="bg-gradient-to-br from-teal-100 via-emerald-50 to-teal-50 text-gray-800 lg:py-16 py-10 lg:my-10 my-5" data-aos="fade-up">
        <Container>
          <div className="md:space-y-10 space-y-6">
            <div className='text-center space-y-4' data-aos="zoom-in">
              <h1 className='font-bold lg:text-5xl text-3xl text-gray-800'>Our Product Categories</h1>
              <p className='lg:text-lg text-gray-700 lg:w-[850px] mx-auto w-full px-4'>
                <strong className='text-teal-700'>Abhishek Pharma</strong> offers expert-driven pharmaceutical solutions from our offices in India, helping businesses access quality medicines. Our team provides customized supplies to empower healthcare across industries.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4">
              <div className='flex flex-col rounded-2xl items-center bg-white text-gray-800 justify-center p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 group' data-aos="flip-left" data-aos-duration="600">
                <div className='bg-gradient-to-br from-teal-100 to-emerald-100 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Tablets" />
                </div>
                <h2 className='text-xl font-bold text-teal-700'>Tablets</h2>
              </div>
              
              <div className='flex flex-col rounded-2xl items-center bg-white text-gray-800 justify-center p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 group' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                <div className='bg-gradient-to-br from-teal-100 to-emerald-100 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/2621/2621046.png" alt="Injections" />
                </div>
                <h2 className='text-xl font-bold text-center text-teal-700'>Injections & Vaccines</h2>
              </div>
              
              <div className='flex flex-col rounded-2xl items-center bg-white text-gray-800 justify-center p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 group' data-aos="flip-left" data-aos-delay="200" data-aos-duration="600">
                <div className='bg-gradient-to-br from-teal-100 to-emerald-100 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img width={80} src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png" alt="Syrups" />
                </div>
                <h2 className='text-xl font-bold text-teal-700'>Syrups & Liquids</h2>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className='py-10 bg-white'>
        <h1 className='font-bold text-center lg:text-5xl text-3xl mb-8 text-gray-800' data-aos="fade-up">
          What Clients Say About <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500'>Abhishek Pharma</span>
        </h1>
        <div className=" mx-auto w-full lg:mb-5 mb-2 h-full" data-aos="fade-up" data-aos-delay="200">
          <Slider1 />
        </div>
      </div>

      {/* ABCDEF Framework with Light Theme */}
      <div className='bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-12' data-aos="fade-up">
        <Container>
          <div className="lg:my-10 my-3 text-center space-y-6">
            <h1 className='text-center lg:text-5xl text-3xl font-bold text-gray-800' data-aos="zoom-in">
              Abhishek Pharma <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500'>ABCDEF</span> Supply Framework
            </h1>
            <p className="lg:text-xl text-gray-700 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
              Empowering pharmaceutical supply across India and beyond — our extended ABCDEF model brings complete supply chain support.
            </p>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-8 px-4">
              {[
                { icon: 'data-analysis_12966774.png', title: 'A — Assess', desc: 'We evaluate your supply needs and align with market demands to reveal gaps and opportunities.', delay: 0 },
                { icon: 'benchmarking_11726497.png', title: 'B — Benchmark', desc: 'We align your sourcing with industry standards and regulations for top-tier compliance.', delay: 100 },
                { icon: 'brilliant_10872503.png', title: 'C — Craft', desc: 'We design supply strategies that resonate with your business and drive performance.', delay: 200 },
                { icon: 'time_11492093.png', title: 'D — Deploy', desc: 'Implementation done right — with full support, logistics, and collaboration with your team.', delay: 300 },
                { icon: 'check-list_1721936.png', title: 'E — Enhance', desc: 'We optimize continuously by tracking supply, updating inventory, and scaling improvements.', delay: 400 },
                { icon: 'notes_18594273.png', title: 'F — Follow-Up', desc: 'We stay connected post-delivery, offering ongoing advice, restocking, and adaptation as your needs grow.', delay: 500 }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white group shadow-md rounded-2xl hover:shadow-2xl duration-500 flex flex-col items-center justify-center p-8 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200" 
                  data-aos="zoom-in" 
                  data-aos-delay={item.delay}
                >
                  <div className='bg-gradient-to-br from-teal-100 to-emerald-100 p-6 rounded-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                    <img width={80} src={`https://vijay-overseas.vercel.app/img/${item.icon}`} alt={item.title} />
                  </div>
                  <h2 className='lg:text-2xl text-xl uppercase font-bold text-teal-700 mb-3'>{item.title}</h2>
                  <p className='text-center lg:text-base text-gray-700 leading-relaxed'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Us - Enhanced Light Theme */}
      <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 text-white lg:py-16 py-10 w-full shadow-xl" data-aos="fade-up">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className='font-bold text-center lg:mb-12 mb-8 text-3xl lg:text-5xl' data-aos="zoom-in">
              Your Preferred Pharmaceutical Supplier
            </h1>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-6 w-full px-4">
              {[
                { Icon: FaTools, text: 'Extensive Experience in Pharmaceutical Supply', delay: 0 },
                { Icon: HiOutlineWrenchScrewdriver, text: 'Logistics and Delivery Support', delay: 50 },
                { Icon: FaCogs, text: 'Tailored Solutions for Client Needs', delay: 100 },
                { Icon: BiSearchAlt, text: 'Continuous Research on Market Trends', delay: 150 },
                { Icon: FaRegHandshake, text: 'Experienced Team', delay: 200 },
                { Icon: GiLaptop, text: 'Technical Expertise', delay: 250 },
                { Icon: FaChartLine, text: 'Business Acumen', delay: 300 },
                { Icon: FaBullseye, text: 'Strategic Focus & Alignment', delay: 350 }
              ].map(({ Icon, text, delay }, idx) => (
                <div 
                  key={idx}
                  className='flex flex-col items-center justify-center gap-4 p-6 rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105' 
                  data-aos="fade-up" 
                  data-aos-delay={delay}
                >
                  <div className='bg-white/20 p-4 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300'>
                    <Icon size={32} />
                  </div>
                  <p className='lg:text-base text-sm font-semibold text-center leading-snug'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ Section - Light & Clean */}
      <div className='bg-gradient-to-br from-white via-teal-50 to-emerald-50 py-12'>
        <h1 className='lg:text-5xl text-center text-3xl font-bold lg:my-10 my-8 text-gray-800' data-aos="fade-up">
          Frequently Asked <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500'>Questions</span>
        </h1>
        
        <Container>
          <div className="lg:w-[900px] mx-auto w-full space-y-4 px-4">
            {[
              { id: 'one', q: 'What products does Abhishek Pharma offer?', a: 'We specialize in tablets, injections, syrups, Ayurvedic medicines, promotional products, and OTC items for healthcare needs across India.', delay: 0 },
              { id: 'two', q: 'Do you provide bulk or promotional supplies?', a: 'Yes, we actively supply bulk orders and promotional medicines with competitive pricing and reliable delivery.', delay: 100 },
              { id: 'three', q: 'How does Abhishek Pharma ensure product quality?', a: 'We follow strict quality checks, source from certified manufacturers, and ensure compliance with regulatory standards before distribution.', delay: 200 },
              { id: 'four', q: 'Can you customize supply for my business?', a: 'Absolutely. All our supplies are tailor-made to suit your requirements, from bulk to specific product needs.', delay: 300 },
              { id: 'five', q: 'Where are your offices located?', a: 'We have offices in India, serving clients across the country and beyond.', delay: 400 }
            ].map(({ id, q, a, delay }) => (
              <div 
                key={id}
                className="border-2 border-teal-200 bg-white lg:text-lg text-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden" 
                data-aos="zoom-in" 
                data-aos-delay={delay}
              >
                <div 
                  onClick={() => toggles(id)} 
                  className="p-4 text-white cursor-pointer font-semibold rounded-t-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 flex justify-between items-center"
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
    </>
  )
}
