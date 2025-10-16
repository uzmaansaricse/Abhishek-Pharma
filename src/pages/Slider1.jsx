import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

export default function Slider1({ language = 'en' }) {
  const slidesData = {
    en: [
        {
            name: 'Dr. Rajesh Sharma',
            position: 'Pharmacy Owner',
            location: 'Jaipur',
            rating: 5,
            text: 'Abhishek Pharma has been our reliable supplier for high-quality medicines. Their timely delivery and service are excellent!',
        },
        {
            name: 'Dr. Priya Meena',
            position: 'Medical Distributor',
            location: 'Ajmer',
            rating: 5,
            text: 'We appreciate their bulk supply options and smooth service. Always professional and trustworthy.',
        },
        {
            name: 'Dr. Anil Choudhary',
            position: 'Hospital Manager',
            location: 'Bikaner',
            rating: 5,
            text: 'Abhishek Pharma ensures genuine medicines and quick support. Highly recommended for healthcare providers.',
        },
        {
            name: 'Dr. Sunita Rathore',
            position: 'Clinical Director',
            location: 'Udaipur',
            rating: 5,
            text: 'They provide excellent pharmaceutical products with great consistency and care. Very satisfied with their service.',
        },
        {
            name: 'Vikram Singh',
            position: 'Pharmacy Chain Owner',
            location: 'Jodhpur',
            rating: 5,
            text: 'Working with Abhishek Pharma for years. Their quality and reliability make them our trusted partner.',
        },
        {
            name: 'Meera Sharma',
            position: 'Medical Store Owner',
            location: 'Kota',
            rating: 5,
            text: 'Authentic products, quick delivery, and supportive team. Highly reliable supplier.',
        },
    ],
    hi: [
        {
            name: 'डॉ. राजेश शर्मा',
            position: 'फार्मेसी मालिक',
            location: 'जयपुर',
            rating: 5,
            text: 'अभिषेक फार्मा हमारे लिए उच्च गुणवत्ता वाली दवाओं का विश्वसनीय आपूर्तिकर्ता रहा है। उनकी समय पर डिलीवरी और सेवा उत्कृष्ट है!',
        },
        {
            name: 'डॉ. प्रिया मीणा',
            position: 'चिकित्सा वितरक',
            location: 'अजमेर',
            rating: 5,
            text: 'हम उनकी थोक आपूर्ति और सुचारू सेवा की सराहना करते हैं। हमेशा पेशेवर और भरोसेमंद टीम।',
        },
        {
            name: 'डॉ. अनिल चौधरी',
            position: 'अस्पताल प्रबंधक',
            location: 'बीकानेर',
            rating: 5,
            text: 'अभिषेक फार्मा प्रामाणिक दवाएं और त्वरित सहायता सुनिश्चित करता है। स्वास्थ्य सेवा प्रदाताओं के लिए अत्यधिक अनुशंसित।',
        },
        {
            name: 'डॉ. सुनीता राठौर',
            position: 'क्लिनिकल निदेशक',
            location: 'उदयपुर',
            rating: 5,
            text: 'वे उत्कृष्ट गुणवत्ता और निरंतरता के साथ दवाएं प्रदान करते हैं। उनकी सेवा से हम बहुत संतुष्ट हैं।',
        },
        {
            name: 'विक्रम सिंह',
            position: 'फार्मेसी चेन मालिक',
            location: 'जोधपुर',
            rating: 5,
            text: 'हम कई वर्षों से अभिषेक फार्मा के साथ काम कर रहे हैं। उनकी गुणवत्ता और विश्वसनीयता उन्हें हमारा भरोसेमंद साझेदार बनाती है।',
        },
        {
            name: 'मीरा शर्मा',
            position: 'मेडिकल स्टोर मालिक',
            location: 'कोटा',
            rating: 5,
            text: 'प्रामाणिक उत्पाद, त्वरित डिलीवरी और सहायक टीम। अत्यंत विश्वसनीय आपूर्तिकर्ता।',
        },
    ]
};


    const slides = slidesData[language];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate max index based on screen size
    const getMaxIndex = () => {
        return isMobile ? slides.length - 1 : slides.length - 3;
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused, isMobile]);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            const maxIndex = getMaxIndex();
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            const maxIndex = getMaxIndex();
            setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    // Calculate the translate value
    const getTranslateValue = () => {
        if (isMobile) {
            return `translateX(-${currentIndex * 100}%)`;
        } else {
            // On desktop, shift by one card width (33.333%)
            return `translateX(-${currentIndex * 33.333}%)`;
        }
    };

    return (
        <div 
            className="relative w-full py-8 md:py-12 bg-[#F0F7FF]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Container */}
            <div className="relative max-w-7xl mx-auto px-4">
                
                {/* Slider Wrapper */}
                <div className="relative overflow-hidden mx-8 md:mx-16">
                    
                    {/* Cards Container */}
                    <div
                        style={{ transform: getTranslateValue() }}
                        className="flex transition-transform duration-700 ease-in-out"
                    >
                        {slides.map((slide, index) => (
                            <div 
                                key={index} 
                                className="w-full md:w-1/3 flex-shrink-0 px-3 md:px-4"
                            >
                                {/* Individual Testimonial Card - Light Blue Theme */}
                                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6 md:p-8 border-2 border-[#D1E5F7] hover:border-[#5BA3EB] h-full flex flex-col group">
                                    
                                    {/* Quote Icon - Light Blue */}
                                    <div className="mb-4">
                                        <div className="inline-flex p-3 bg-[#F0F7FF] rounded-lg group-hover:bg-[#E0EFFF] transition-all duration-300">
                                            <FaQuoteLeft className="w-8 h-8 md:w-10 md:h-10 text-[#5BA3EB]" />
                                        </div>
                                    </div>

                                    {/* Testimonial Text with proper wrapping */}
                                    <div className="flex-grow mb-6">
                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic break-words whitespace-normal">
                                            "{slide.text}"
                                        </p>
                                    </div>

                                    {/* Star Rating - Yellow/Gold */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: slide.rating }).map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">★</span>
                                        ))}
                                    </div>

                                    {/* Divider - Light Blue */}
                                    <div className="w-16 h-1 bg-[#5BA3EB] mb-6 rounded-full"></div>

                                    {/* Reviewer Info */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar with Light Blue Border */}
                                     

                                        {/* Name & Position */}
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1">
                                                {slide.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                {slide.position}
                                            </p>
                                            <p className="text-gray-500 text-xs md:text-sm">
                                                {slide.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows - Light Blue Theme */}
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-[#F0F7FF] disabled:opacity-50 disabled:cursor-not-allowed p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D1E5F7] group"
                    aria-label="Previous testimonials"
                >
                    <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#5BA3EB] transition-colors" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-[#F0F7FF] disabled:opacity-50 disabled:cursor-not-allowed p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D1E5F7] group"
                    aria-label="Next testimonials"
                >
                    <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#5BA3EB] transition-colors" />
                </button>
            </div>

            {/* Dot Indicators - Light Blue */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (!isAnimating) {
                                setIsAnimating(true);
                                setCurrentIndex(index);
                                setTimeout(() => setIsAnimating(false), 700);
                            }
                        }}
                        className={`transition-all duration-500 rounded-full ${
                            currentIndex === index
                                ? 'w-8 h-3 bg-[#5BA3EB] shadow-sm'
                                : 'w-3 h-3 bg-[#D1E5F7] hover:bg-[#5BA3EB]'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
