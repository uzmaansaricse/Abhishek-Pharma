import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

export default function Slider1({ language = 'en' }) {
    const slidesData = {
        en: [
            {
                name: 'Dr. Rajesh Sharma',
                position: 'Pharmacy Owner',
                location: 'Mumbai',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                rating: 5,
                text: 'Abhishek Pharma has been our reliable supplier for branded medicines. Their quality and timely delivery are unmatched!',
            },
            {
                name: 'Dr. Priya Singh',
                position: 'Medical Distributor',
                location: 'Delhi',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                rating: 5,
                text: 'We appreciate their bulk supply options and promotional products. Great service and competitive pricing!',
            },
            {
                name: 'Dr. Anil Kumar',
                position: 'Hospital Manager',
                location: 'Bangalore',
                image: 'https://randomuser.me/api/portraits/men/52.jpg',
                rating: 5,
                text: 'Abhishek Pharma ensures authentic medicines and excellent support. Highly recommended for healthcare providers.',
            },
            {
                name: 'Dr. Sunita Verma',
                position: 'Clinical Director',
                location: 'Chennai',
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
                rating: 5,
                text: 'Outstanding pharmaceutical solutions with genuine products. Their team is professional, responsive, and always reliable.',
            },
            {
                name: 'Vikram Patel',
                position: 'Pharmacy Chain Owner',
                location: 'Pune',
                image: 'https://randomuser.me/api/portraits/men/71.jpg',
                rating: 5,
                text: 'Working with Abhishek Pharma for 5+ years. Their consistency in quality and delivery makes them our trusted partner.',
            },
            {
                name: 'Meera Reddy',
                position: 'Medical Store Owner',
                location: 'Hyderabad',
                image: 'https://randomuser.me/api/portraits/women/28.jpg',
                rating: 5,
                text: 'Excellent service with authentic products. The team is always responsive and delivery is always on time.',
            },
        ],
        hi: [
            {
                name: 'डॉ. राजेश शर्मा',
                position: 'फार्मेसी मालिक',
                location: 'मुंबई',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                rating: 5,
                text: 'अभिषेक फार्मा ब्रांडेड दवाओं के लिए हमारा विश्वसनीय आपूर्तिकर्ता रहा है। उनकी गुणवत्ता और समय पर डिलीवरी बेजोड़ है!',
            },
            {
                name: 'डॉ. प्रिया सिंह',
                position: 'चिकित्सा वितरक',
                location: 'दिल्ली',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                rating: 5,
                text: 'हम उनके थोक आपूर्ति विकल्पों और प्रचार उत्पादों की सराहना करते हैं। बढ़िया सेवा और प्रतिस्पर्धी मूल्य निर्धारण!',
            },
            {
                name: 'डॉ. अनिल कुमार',
                position: 'अस्पताल प्रबंधक',
                location: 'बैंगलोर',
                image: 'https://randomuser.me/api/portraits/men/52.jpg',
                rating: 5,
                text: 'अभिषेक फार्मा प्रामाणिक दवाएं और उत्कृष्ट सहायता सुनिश्चित करता है। स्वास्थ्य सेवा प्रदाताओं के लिए अत्यधिक अनुशंसित।',
            },
            {
                name: 'डॉ. सुनीता वर्मा',
                position: 'क्लिनिकल निदेशक',
                location: 'चेन्नई',
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
                rating: 5,
                text: 'वास्तविक उत्पादों के साथ उत्कृष्ट फार्मास्युटिकल समाधान। उनकी टीम पेशेवर, उत्तरदायी और हमेशा विश्वसनीय है।',
            },
            {
                name: 'विक्रम पटेल',
                position: 'फार्मेसी चेन मालिक',
                location: 'पुणे',
                image: 'https://randomuser.me/api/portraits/men/71.jpg',
                rating: 5,
                text: '5+ वर्षों से अभिषेक फार्मा के साथ काम कर रहे हैं। गुणवत्ता और वितरण में उनकी स्थिरता उन्हें हमारा विश्वसनीय साझेदार बनाती है।',
            },
            {
                name: 'मीरा रेड्डी',
                position: 'मेडिकल स्टोर मालिक',
                location: 'हैदराबाद',
                image: 'https://randomuser.me/api/portraits/women/28.jpg',
                rating: 5,
                text: 'प्रामाणिक उत्पादों के साथ उत्कृष्ट सेवा। टीम हमेशा उत्तरदायी है और डिलीवरी हमेशा समय पर होती है।',
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
                                        <div className="relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-[#D1E5F7] rounded-full blur-sm opacity-40"></div>
                                            <img
                                                src={slide.image}
                                                alt={slide.name}
                                                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#D1E5F7]"
                                                loading="lazy"
                                            />
                                        </div>

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
