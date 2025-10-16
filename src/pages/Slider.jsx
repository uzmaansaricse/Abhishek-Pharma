// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function Slider({ language = 'en' }) {
//     const navigate = useNavigate();

//     const slidesData = {
//         en: [
//             // NEW WELCOME SLIDE - FIRST SLIDE
//             {
//                 image: '/images/gemini.png',
//                 title: 'We Have Moved to a New Location!',
//                 subtitle: 'Serving You Better from Our Expanded Facility',
//                 points: [
//                     'Larger warehouse for faster order fulfillment',
//                     'Enhanced product storage and quality control',
//                     'Same trusted service, better infrastructure',
//                     'Easily accessible location for your convenience',
//                 ],
//                 button: 'See Our New Location',
//                 buttonLink: '/contact',
//                 contentImage: '/images/gemini.png',
//                 badge: 'New Address 2025',
//                 floatingBadge: { title: 'Now Open', subtitle: 'Visit Our New Location' }
//             },
//             {
//                 image: '/images/bannerimg.jpg',
//                 title: 'Effective Medicines at Amazing Prices!',
//                 subtitle: 'Unbeatable Wholesale Rates—We Challenge You to Find Lower!',
//                 points: [
//                     'Best prices guaranteed on all medicines',
//                     'Return if you find cheaper anywhere else',
//                     'Premium quality at wholesale rates',
//                     'Bulk discounts & promotional offers',
//                 ],
//                 button: 'See Our Products',
//                 buttonLink: '/products',
//                 contentImage: '/images/bszw84mq0i.jpg',
//                 badge: 'Best Price Guarantee',
//                 floatingBadge: { title: 'Price Match', subtitle: 'Challenge Accepted!' }
//             },
//             {
//                 image: '/images/large_note012020-570x416.jpg',
//                 title: 'Your Trusted Partner in Pharmaceutical Supply!',
//                 subtitle: 'Comprehensive Healthcare Solutions',
//                 points: [
//                     'Quality, compliance, and timely delivery',
//                     'Wholesale Distribution',
//                     'Customized Supply Chains',
//                     'Competitive Pricing',
//                 ],
//                 button: 'Contact Us',
//                 buttonLink: '/contact',
//                 contentImage: '/images/2dyKZsSUuYtPBByWY3o1rp3WUnAsftE3ogkGN8fY.jpg',
//                 badge: 'Trusted Since 2003',
//                 floatingBadge: { title: 'Certified', subtitle: 'ISO Compliant' }
//             },
//             {
//                 image: '/images/bannerimg.jpg',
//                 title: 'Abhishek Pharma Delivers Excellence!',
//                 subtitle: 'Supporting Healthcare Providers Nationwide',
//                 points: [
//                     'Reliable and authentic pharmaceutical products',
//                     'Promotional Campaigns',
//                     'Healthcare Partnerships',
//                     'Expert Support Team',
//                 ],
//                 button: 'About Us',
//                 buttonLink: '/about',
//                 contentImage: '/images/lois-blog.jpg',
//                 badge: 'Trusted Since 2003',
//                 floatingBadge: { title: 'Certified', subtitle: 'ISO Compliant' }
//             },
//         ],
//         hi: [
//             // NEW WELCOME SLIDE - FIRST SLIDE (HINDI)
//             {
//                 image: '/images/gemini.png',
//                 title: 'हम एक नए स्थान पर स्थानांतरित हो गए हैं!',
//                 subtitle: 'हमारी विस्तारित सुविधा से आपकी बेहतर सेवा',
//                 points: [
//                     'तेज़ ऑर्डर पूर्ति के लिए बड़ा गोदाम',
//                     'उन्नत उत्पाद भंडारण और गुणवत्ता नियंत्रण',
//                     'वही विश्वसनीय सेवा, बेहतर बुनियादी ढांचा',
//                     'आपकी सुविधा के लिए आसानी से सुलभ स्थान',
//                 ],
//                 button: 'आज ही हमसे मिलें',
//                 buttonLink: '/contact',
//                 contentImage: '/images/gemini.png',
//                 badge: 'नया पता 2025',
//                 floatingBadge: { title: 'अब खुला', subtitle: 'हमारे नए स्थान पर जाएं' }
//             },
//             {
//                 image: '/images/bannerimg.jpg',
//                 title: 'अद्भुत कीमतों पर प्रभावी दवाएं!',
//                 subtitle: 'अविश्वसनीय थोक दरें—हम चुनौती देते हैं कि कम कीमत खोजें!',
//                 points: [
//                     'सभी दवाओं पर सर्वोत्तम कीमत की गारंटी',
//                     'कहीं और सस्ता मिले तो वापसी की सुविधा',
//                     'थोक दरों पर प्रीमियम गुणवत्ता',
//                     'थोक छूट और प्रचार प्रस्ताव',
//                 ],
//                 button: 'हमारी कीमतें देखें',
//                 buttonLink: '/products',
//                 contentImage: '/images/bszw84mq0i.jpg',
//                 badge: 'सर्वोत्तम कीमत गारंटी',
//                 floatingBadge: { title: 'मूल्य मिलान', subtitle: 'चुनौती स्वीकार!' }
//             },
//             {
//                 image: '/images/large_note012020-570x416.jpg',
//                 title: 'फार्मास्युटिकल आपूर्ति में आपका विश्वसनीय साझेदार!',
//                 subtitle: 'व्यापक स्वास्थ्य सेवा समाधान',
//                 points: [
//                     'गुणवत्ता, अनुपालन और समय पर डिलीवरी',
//                     'थोक वितरण',
//                     'अनुकूलित आपूर्ति श्रृंखला',
//                     'प्रतिस्पर्धी मूल्य निर्धारण',
//                 ],
//                 button: 'संपर्क करें',
//                 buttonLink: '/contact',
//                 contentImage: '/images/2dyKZsSUuYtPBByWY3o1rp3WUnAsftE3ogkGN8fY.jpg',
//                 badge: '2003 से विश्वसनीय',
//                 floatingBadge: { title: 'प्रमाणित', subtitle: 'आईएसओ अनुरूप' }
//             },
//             {
//                 image: '/images/bannerimg.jpg',
//                 title: 'अभिषेक फार्मा उत्कृष्टता प्रदान करता है!',
//                 subtitle: 'देशभर के स्वास्थ्य सेवा प्रदाताओं का समर्थन',
//                 points: [
//                     'विश्वसनीय और प्रामाणिक फार्मास्युटिकल उत्पाद',
//                     'प्रचार अभियान',
//                     'स्वास्थ्य सेवा साझेदारी',
//                     'विशेषज्ञ सहायता टीम',
//                 ],
//                 button: 'कोट प्राप्त करें',
//                 buttonLink: '/request',
//                 contentImage: '/images/lois-blog.jpg',
//                 badge: '2003 से विश्वसनीय',
//                 floatingBadge: { title: 'प्रमाणित', subtitle: 'आईएसओ अनुरूप' }
//             },
//         ]
//     };

//     const trustIndicators = {
//         en: [
//             { icon: '🏆', text: '200+ Partners', subtext: 'Nationwide' },
//             { icon: '✅', text: 'ISO Certified', subtext: 'Quality Assured' },
//             { icon: '📦', text: '10K+ Products', subtext: 'In Stock' },
//             { icon: '⚡', text: '24/7 Support', subtext: 'Always Available' }
//         ],
//         hi: [
//             { icon: '🏆', text: '200+ साझेदार', subtext: 'देशव्यापी' },
//             { icon: '✅', text: 'आईएसओ प्रमाणित', subtext: 'गुणवत्ता आश्वासन' },
//             { icon: '📦', text: '10K+ उत्पाद', subtext: 'स्टॉक में' },
//             { icon: '⚡', text: '24/7 सहायता', subtext: 'हमेशा उपलब्ध' }
//         ]
//     };

//     const slides = slidesData[language];
//     const indicators = trustIndicators[language];

//     const [open, setOpen] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
// useEffect(() => {
//     const interval = setInterval(() => {
//         handleNext();
//     }, 4000);
//     return () => clearInterval(interval);
// }, []); 


//     const handleNext = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setOpen((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//             setTimeout(() => setIsAnimating(false), 500);
//         }
//     };

//     const handlePrev = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setOpen((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//             setTimeout(() => setIsAnimating(false), 500);
//         }
//     };

//     const handleButtonClick = (link) => {
//         navigate(link);
//     };

//     return (
//         <div className="w-full relative h-auto min-h-[600px] md:min-h-[700px] lg:min-h-screen overflow-hidden bg-[#F0F7FF]">
//             {/* Background Decorative Elements - Light Blue */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//                 <div className="absolute top-0 left-0 w-96 h-96 bg-[#D1E5F7]/30 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E0EFFF]/30 rounded-full blur-3xl"></div>
//             </div>

//             {/* Slides Container */}
//             <div 
//                 style={{ transform: `translateX(-${open * 100}%)` }}
//                 className="flex transition-transform duration-700 ease-in-out w-full h-full relative z-10"
//             >
//                 {slides.map((slide, index) => (
//                     <div key={index} className="w-full h-full shrink-0 relative pb-32 lg:pb-40">
//                         {/* Background overlay for contrast */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/95 to-white/90 z-10"></div>
                        
//                         {/* Content Container */}
//                         <div className="relative z-20 w-full h-full flex items-center lg:px-16 md:px-10 px-6 py-12">
//                             <div className='grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 w-full items-center max-w-7xl mx-auto'>
                                
//                                 {/* Left Content */}
//                                 <div className='space-y-6 animate-fadeInLeft'>
//                                     {/* Subtitle Badge - Light Blue */}
//                                     <div className='inline-block'>
//                                         <span className={`px-5 py-2 rounded-lg text-sm font-semibold shadow-md ${
//                                             index === 0 || index === 1
//                                                 ? 'bg-[#5BA3EB] text-white' 
//                                                 : 'bg-[#E0EFFF] text-gray-700'
//                                         }`}>
//                                             {index === 0 ? '🎉 ' : index === 1 ? '💰 ' : '✨ '}{slide.badge}
//                                         </span>
//                                     </div>

//                                     {/* Main Title - LIGHTER Blue for ALL slides */}
//                                     <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight animate-slideInUp text-[#333333]">
//                                         {slide.title.split('!')[0]}
//                                         <span className="text-[#333333]">!</span>
//                                     </h1>

//                                     {/* Subtitle - Lighter gray */}
//                                     <p className='text-lg md:text-xl text-gray-500 font-medium animate-fadeIn'>
//                                         {slide.subtitle}
//                                     </p>

//                                     {/* Points List - Light Blue Checkmarks */}
//                                     <div className='space-y-3 mt-6'>
//                                         {slide.points.map((point, i) => (
//                                             <div 
//                                                 key={i}
//                                                 className='flex items-start gap-3 animate-slideInLeft'
//                                                 style={{ animationDelay: `${i * 100}ms` }}
//                                             >
//                                                 <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 shadow-sm bg-[#9BCBF5]">
//                                                     <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                                                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
//                                                     </svg>
//                                                 </div>
//                                                 <p className='text-gray-600 lg:text-lg font-normal'>{point}</p>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     {/* CTA Button - Light Blue */}
//                                     <button 
//                                         onClick={() => handleButtonClick(slide.buttonLink)}
//                                         className="group font-bold px-8 py-4 rounded-lg lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mt-8 bg-[#5BA3EB] hover:bg-[#4A92DA] text-white"
//                                     >
//                                         {slide.button}
//                                         <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                                             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
//                                         </svg>
//                                     </button>
//                                 </div>

//                                 {/* Right Content - Image */}
//                                 {/* <div className='relative animate-fadeInRight hidden md:block'> */}
//                                     <div className='relative animate-fadeInRight block'>
//                                     <div className='absolute inset-0 bg-[#D1E5F7]/20 rounded-2xl blur-xl'></div>
//                                     <img 
//                                         src={slide.contentImage} 
//                                         alt="Healthcare Solutions" 
//                                         className='relative w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 border-4 border-white' 
//                                     />
                                    
//                                     {/* Floating Badge - Light Blue */}
//                                     <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float border-2 border-[#D1E5F7]">
//                                         <div className='flex items-center gap-3'>
//                                             <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9BCBF5]">
//                                                 <span className='text-white font-bold text-xl'>
//                                                     {index === 0 ? '📍' : index === 1 ? '💰' : '✓'}
//                                                 </span>
//                                             </div>
//                                             <div>
//                                                 <p className='font-bold text-gray-700'>{slide.floatingBadge.title}</p>
//                                                 <p className='text-sm text-gray-500'>{slide.floatingBadge.subtitle}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows - Light Blue */}
//             <button 
//                 onClick={handlePrev}
//                 className='absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/95 hover:bg-[#F0F7FF] p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-[#D1E5F7]'
//                 aria-label="Previous slide"
//             >
//                 <svg className='w-6 h-6 text-gray-700 group-hover:text-[#5BA3EB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                     <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
//                 </svg>
//             </button>

//             <button 
//                 onClick={handleNext}
//                 className='absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/95 hover:bg-[#F0F7FF] p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-[#D1E5F7]'
//                 aria-label="Next slide"
//             >
//                 <svg className='w-6 h-6 text-gray-700 group-hover:text-[#5BA3EB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                     <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
//                 </svg>
//             </button>

//             {/* Dots Navigation - Light Blue */}
//             <div className='absolute bottom-32 lg:bottom-36 left-1/2 -translate-x-1/2 z-40 flex gap-3'>
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => {
//                             if (!isAnimating) {
//                                 setIsAnimating(true);
//                                 setOpen(index);
//                                 setTimeout(() => setIsAnimating(false), 700);
//                             }
//                         }}
//                         className={`transition-all duration-300 rounded-full ${
//                             open === index 
//                                 ? 'w-12 h-3 bg-[#5BA3EB]' 
//                                 : 'w-3 h-3 bg-[#D1E5F7] hover:bg-[#5BA3EB]'
//                         } shadow-md hover:scale-110`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>

//             {/* Trust Indicators - Bottom Bar */}
//             <div className='hidden lg:flex absolute bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-sm border-t border-[#D1E5F7] py-6 shadow-md'>
//                 <div className='max-w-7xl mx-auto px-4 lg:px-16'>
//                     <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
//                         {indicators.map((item, idx) => (
//                             <div key={idx} className='text-center group cursor-pointer'>
//                                 <div className='text-2xl lg:text-3xl mb-2 group-hover:scale-125 transition-transform'>{item.icon}</div>
//                                 <p className='font-bold text-gray-700 text-sm lg:text-base'>{item.text}</p>
//                                 <p className='text-xs lg:text-sm text-gray-500'>{item.subtext}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* CSS Animations */}
//             <style jsx>{`
//                 @keyframes fadeInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes fadeInRight {
//                     from {
//                         opacity: 0;
//                         transform: translateX(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes slideInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slideInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 @keyframes fadeIn {
//                     from {
//                         opacity: 0;
//                     }
//                     to {
//                         opacity: 1;
//                     }
//                 }

//                 @keyframes float {
//                     0%, 100% {
//                         transform: translateY(0px);
//                     }
//                     50% {
//                         transform: translateY(-10px);
//                     }
//                 }

//                 .animate-fadeInLeft {
//                     animation: fadeInLeft 0.8s ease-out forwards;
//                 }

//                 .animate-fadeInRight {
//                     animation: fadeInRight 0.8s ease-out forwards;
//                 }

//                 .animate-slideInUp {
//                     animation: slideInUp 0.6s ease-out forwards;
//                 }

//                 .animate-slideInLeft {
//                     animation: slideInLeft 0.5s ease-out forwards;
//                 }

//                 .animate-fadeIn {
//                     animation: fadeIn 0.8s ease-out forwards;
//                 }

//                 .animate-float {
//                     animation: float 3s ease-in-out infinite;
//                 }
//             `}</style>
//         </div>
//     );
// }



import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Slider({ language = 'en' }) {
    const navigate = useNavigate();

    const slidesData = {
        en: [
            {
                image: '/images/gemini.png',
                title: 'We Have Moved to a New Location!',
                subtitle: 'Serving You Better from Our Expanded Facility',
                points: [
                    'Larger warehouse for faster order fulfillment',
                    'Enhanced product storage and quality control',
                    'Same trusted service, better infrastructure',
                    'Easily accessible location for your convenience',
                ],
                button: 'See Our New Location',
                buttonLink: '/contact',
                contentImage: '/images/gemini.png',
                badge: 'New Address 2025',
                floatingBadge: { title: 'Now Open', subtitle: 'Visit Our New Location' }
            },
            {
                image: '/images/bannerimg.jpg',
                title: 'Effective Medicines at Amazing Prices!',
                subtitle: 'Unbeatable Wholesale Rates—We Challenge You to Find Lower!',
                points: [
                    'Best prices guaranteed on all medicines',
                    'Return if you find cheaper anywhere else',
                    'Premium quality at wholesale rates',
                    'Bulk discounts & promotional offers',
                ],
                button: 'See Our Products',
                buttonLink: '/products',
                contentImage: '/images/bszw84mq0i.jpg',
                badge: 'Best Price Guarantee',
                floatingBadge: { title: 'Price Match', subtitle: 'Challenge Accepted!' }
            },
            {
                image: '/images/large_note012020-570x416.jpg',
                title: 'Your Trusted Partner in Pharmaceutical Supply!',
                subtitle: 'Comprehensive Healthcare Solutions',
                points: [
                    'Quality, compliance, and timely delivery',
                    'Wholesale Distribution',
                    'Customized Supply Chains',
                    'Competitive Pricing',
                ],
                button: 'Contact Us',
                buttonLink: '/contact',
                contentImage: '/images/2dyKZsSUuYtPBByWY3o1rp3WUnAsftE3ogkGN8fY.jpg',
                badge: 'Trusted Since 2003',
                floatingBadge: { title: 'Certified', subtitle: 'ISO Compliant' }
            },
            {
                image: '/images/bannerimg.jpg',
                title: 'Abhishek Pharma Delivers Excellence!',
                subtitle: 'Supporting Healthcare Providers Nationwide',
                points: [
                    'Reliable and authentic pharmaceutical products',
                    'Promotional Campaigns',
                    'Healthcare Partnerships',
                    'Expert Support Team',
                ],
                button: 'About Us',
                buttonLink: '/about',
                contentImage: '/images/lois-blog.jpg',
                badge: 'Trusted Since 2003',
                floatingBadge: { title: 'Certified', subtitle: 'ISO Compliant' }
            },
        ],
        hi: [
            {
                image: '/images/gemini.png',
                title: 'हम एक नए स्थान पर स्थानांतरित हो गए हैं!',
                subtitle: 'हमारी विस्तारित सुविधा से आपकी बेहतर सेवा',
                points: [
                    'तेज़ ऑर्डर पूर्ति के लिए बड़ा गोदाम',
                    'उन्नत उत्पाद भंडारण और गुणवत्ता नियंत्रण',
                    'वही विश्वसनीय सेवा, बेहतर बुनियादी ढांचा',
                    'आपकी सुविधा के लिए आसानी से सुलभ स्थान',
                ],
                button: 'आज ही हमसे मिलें',
                buttonLink: '/contact',
                contentImage: '/images/gemini.png',
                badge: 'नया पता 2025',
                floatingBadge: { title: 'अब खुला', subtitle: 'हमारे नए स्थान पर जाएं' }
            },
            {
                image: '/images/bannerimg.jpg',
                title: 'अद्भुत कीमतों पर प्रभावी दवाएं!',
                subtitle: 'अविश्वसनीय थोक दरें—हम चुनौती देते हैं कि कम कीमत खोजें!',
                points: [
                    'सभी दवाओं पर सर्वोत्तम कीमत की गारंटी',
                    'कहीं और सस्ता मिले तो वापसी की सुविधा',
                    'थोक दरों पर प्रीमियम गुणवत्ता',
                    'थोक छूट और प्रचार प्रस्ताव',
                ],
                button: 'हमारी कीमतें देखें',
                buttonLink: '/products',
                contentImage: '/images/bszw84mq0i.jpg',
                badge: 'सर्वोत्तम कीमत गारंटी',
                floatingBadge: { title: 'मूल्य मिलान', subtitle: 'चुनौती स्वीकार!' }
            },
            {
                image: '/images/large_note012020-570x416.jpg',
                title: 'फार्मास्युटिकल आपूर्ति में आपका विश्वसनीय साझेदार!',
                subtitle: 'व्यापक स्वास्थ्य सेवा समाधान',
                points: [
                    'गुणवत्ता, अनुपालन और समय पर डिलीवरी',
                    'थोक वितरण',
                    'अनुकूलित आपूर्ति श्रृंखला',
                    'प्रतिस्पर्धी मूल्य निर्धारण',
                ],
                button: 'संपर्क करें',
                buttonLink: '/contact',
                contentImage: '/images/2dyKZsSUuYtPBByWY3o1rp3WUnAsftE3ogkGN8fY.jpg',
                badge: '2003 से विश्वसनीय',
                floatingBadge: { title: 'प्रमाणित', subtitle: 'आईएसओ अनुरूप' }
            },
            {
                image: '/images/bannerimg.jpg',
                title: 'अभिषेक फार्मा उत्कृष्टता प्रदान करता है!',
                subtitle: 'देशभर के स्वास्थ्य सेवा प्रदाताओं का समर्थन',
                points: [
                    'विश्वसनीय और प्रामाणिक फार्मास्युटिकल उत्पाद',
                    'प्रचार अभियान',
                    'स्वास्थ्य सेवा साझेदारी',
                    'विशेषज्ञ सहायता टीम',
                ],
                button: 'कोट प्राप्त करें',
                buttonLink: '/request',
                contentImage: '/images/lois-blog.jpg',
                badge: '2003 से विश्वसनीय',
                floatingBadge: { title: 'प्रमाणित', subtitle: 'आईएसओ अनुरूप' }
            },
        ]
    };

    const trustIndicators = {
        en: [
            { icon: '🏆', text: '200+ Partners', subtext: 'Nationwide' },
            { icon: '✅', text: 'ISO Certified', subtext: 'Quality Assured' },
            { icon: '📦', text: '10K+ Products', subtext: 'In Stock' },
            { icon: '⚡', text: '24/7 Support', subtext: 'Always Available' }
        ],
        hi: [
            { icon: '🏆', text: '200+ साझेदार', subtext: 'देशव्यापी' },
            { icon: '✅', text: 'आईएसओ प्रमाणित', subtext: 'गुणवत्ता आश्वासन' },
            { icon: '📦', text: '10K+ उत्पाद', subtext: 'स्टॉक में' },
            { icon: '⚡', text: '24/7 सहायता', subtext: 'हमेशा उपलब्ध' }
        ]
    };

    const slides = slidesData[language];
    const indicators = trustIndicators[language];

    const [open, setOpen] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => handleNext(), 4000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setOpen(prev => (prev === slides.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setOpen(prev => (prev === 0 ? slides.length - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const handleButtonClick = (link) => {
        navigate(link);
    };

    return (
        <div className="w-full relative h-auto min-h-[600px] md:min-h-[700px] lg:min-h-screen overflow-hidden bg-[#F0F7FF]">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#D1E5F7]/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E0EFFF]/30 rounded-full blur-3xl"></div>
            </div>

            {/* Slides Container */}
            <div 
                style={{ transform: `translateX(-${open * 100}%)` }}
                className="flex transition-transform duration-700 ease-in-out w-full h-full relative z-10"
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full shrink-0 relative pb-32 lg:pb-40">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/95 to-white/90 z-10"></div>
                        
                        <div className="relative z-20 w-full h-full flex items-center lg:px-16 md:px-10 px-6 py-12">
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 w-full items-center max-w-7xl mx-auto'>
                                
                                {/* Left Content */}
                                <div className='space-y-6 animate-fadeInLeft'>
                                    <div className='inline-block'>
                                        <span className={`px-5 py-2 rounded-lg text-sm font-semibold shadow-md ${
                                            index === 0 || index === 1
                                                ? 'bg-[#5BA3EB] text-white' 
                                                : 'bg-[#E0EFFF] text-gray-700'
                                        }`}>{slide.badge}</span>
                                    </div>

                                    <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight animate-slideInUp text-[#333333]">
                                        {slide.title}
                                    </h1>

                                    <p className='text-lg md:text-xl text-gray-500 font-medium animate-fadeIn'>
                                        {slide.subtitle}
                                    </p>

                                    <div className='space-y-3 mt-6'>
                                        {slide.points.map((point, i) => (
                                            <div key={i} className='flex items-start gap-3 animate-slideInLeft' style={{ animationDelay: `${i * 100}ms` }}>
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 shadow-sm bg-[#9BCBF5]">
                                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                                                    </svg>
                                                </div>
                                                <p className='text-gray-600 lg:text-lg font-normal'>{point}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button onClick={() => handleButtonClick(slide.buttonLink)}
                                        className="group font-bold px-8 py-4 rounded-lg lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mt-8 bg-[#5BA3EB] hover:bg-[#4A92DA] text-white">
                                        {slide.button}
                                        <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                        </svg>
                                    </button>
                                </div>

                                {/* Right Content (Image) - HIDDEN ON MOBILE */}
                                <div className='relative animate-fadeInRight hidden md:block'>
                                    <div className='absolute inset-0 bg-[#D1E5F7]/20 rounded-2xl blur-xl'></div>
                                    <img src={slide.contentImage} alt="Healthcare Solutions" className='relative w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 border-4 border-white' />
                                    
                                    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float border-2 border-[#D1E5F7]">
                                        <div className='flex items-center gap-3'>
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9BCBF5]">
                                                <span className='text-white font-bold text-xl'>{index === 0 ? '📍' : index === 1 ? '💰' : '✓'}</span>
                                            </div>
                                            <div>
                                                <p className='font-bold text-gray-700'>{slide.floatingBadge.title}</p>
                                                <p className='text-sm text-gray-500'>{slide.floatingBadge.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button onClick={handlePrev} className='absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/95 hover:bg-[#F0F7FF] p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-[#D1E5F7]' aria-label="Previous slide">
                <svg className='w-6 h-6 text-gray-700 group-hover:text-[#5BA3EB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
            </button>

            <button onClick={handleNext} className='absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/95 hover:bg-[#F0F7FF] p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-[#D1E5F7]' aria-label="Next slide">
                <svg className='w-6 h-6 text-gray-700 group-hover:text-[#5BA3EB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
            </button>

            {/* Dots */}
            <div className='absolute bottom-32 lg:bottom-36 left-1/2 -translate-x-1/2 z-40 flex gap-3'>
                {slides.map((_, index) => (
                    <button key={index} onClick={() => { if(!isAnimating){ setIsAnimating(true); setOpen(index); setTimeout(() => setIsAnimating(false), 700); } }}
                        className={`transition-all duration-300 rounded-full ${open === index ? 'w-12 h-3 bg-[#5BA3EB]' : 'w-3 h-3 bg-[#D1E5F7] hover:bg-[#5BA3EB]'} shadow-md hover:scale-110`} aria-label={`Go to slide ${index + 1}`}/>
                ))}
            </div>

            {/* Trust Indicators */}
            <div className='hidden lg:flex absolute bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-sm border-t border-[#D1E5F7] py-6 shadow-md'>
                <div className='max-w-7xl mx-auto px-4 lg:px-16'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
                        {indicators.map((item, idx) => (
                            <div key={idx} className='text-center group cursor-pointer'>
                                <div className='text-2xl lg:text-3xl mb-2 group-hover:scale-125 transition-transform'>{item.icon}</div>
                                <p className='font-bold text-gray-700 text-sm lg:text-base'>{item.text}</p>
                                <p className='text-xs lg:text-sm text-gray-500'>{item.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
                .animate-slideInUp { animation: slideInUp 0.6s ease-out forwards; }
                .animate-slideInLeft { animation: slideInLeft 0.5s ease-out forwards; }
                .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                .animate-float { animation: float 3s ease-in-out infinite; }
            `}</style>
        </div>
    );
}
