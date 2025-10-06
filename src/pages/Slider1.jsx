import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slider1() {
    const slides = [
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
    ];

    const [open, setOpen] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [open, isPaused]);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setOpen((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setOpen((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating && index !== open) {
            setIsAnimating(true);
            setOpen(index);
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    return (
        <div 
            className="relative w-full py-8 px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Container - Reduced max width */}
            <div className="relative max-w-4xl mx-auto overflow-hidden">
                
                {/* Main Card Container - Reduced padding */}
                <div className="relative px-4 md:px-8 lg:px-12 overflow-hidden">
                    
                    {/* Background Gradient Card - Compact design */}
                    <div className="relative bg-gradient-to-br from-white via-teal-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden">
                        
                        {/* Decorative Background Elements - Smaller */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

                        {/* Large Quote Icon Background - Smaller */}
                        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 opacity-5 pointer-events-none">
                            <svg className="w-16 h-16 lg:w-24 lg:h-24 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                            </svg>
                        </div>

                        {/* Slider Content Wrapper - Reduced padding */}
                        <div className="relative z-10 overflow-hidden py-12 px-4 md:px-8">
                            {/* Inner container for slides */}
                            <div className="">
                                <div
                                    style={{ transform: `translateX(-${open * 100}%)` }}
                                    className="flex transition-transform duration-700 ease-in-out"
                                >
                                    {slides.map((slide, index) => (
                                        <div 
                                            key={index} 
                                            className="w-full min-w-full flex-shrink-0 flex flex-col items-center justify-center text-center"
                                        >
                                            
                                            {/* Reviewer Image Section - Smaller */}
                                            <div className="relative mb-5 group">
                                                {/* Animated Gradient Ring */}
                                                <div className="absolute -inset-1.5 bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-500 rounded-full animate-spin-slow blur-md opacity-75"></div>
                                                
                                                {/* Main Image Container */}
                                                <div className="relative">
                                                    <img
                                                        src={slide.image}
                                                        alt={slide.name}
                                                        className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    
                                                    {/* Verified Badge - Smaller */}
                                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full p-2 shadow-lg animate-bounce-slow border-3 border-white">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Star Rating - Smaller */}
                                            <div className="flex gap-1 mb-4 animate-fadeIn">
                                                {[...Array(slide.rating)].map((_, i) => (
                                                    <svg 
                                                        key={i} 
                                                        className="w-5 h-5 text-yellow-400 fill-current drop-shadow-md"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Testimonial Text - Smaller */}
                                            <div className="max-w-2xl mb-5 px-2 animate-fadeIn">
                                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium italic">
                                                    "{slide.text}"
                                                </p>
                                            </div>

                                            {/* Reviewer Info - Compact */}
                                            <div className="animate-slideUp">
                                                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                                                    {slide.name}
                                                </h3>
                                                <p className="text-teal-700 font-semibold text-base lg:text-lg mb-2">
                                                    {slide.position}
                                                </p>
                                                <div className="flex items-center justify-center gap-1.5 text-gray-600">
                                                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm lg:text-base font-medium">{slide.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows - Smaller */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-teal-100 hover:border-transparent hover:scale-110"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-teal-100 hover:border-transparent hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>

            {/* Dot Indicators - Smaller */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 rounded-full ${
                            open === index
                                ? 'w-8 h-2.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 shadow-md'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-teal-400 hover:scale-110'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>

            {/* Trust Badge - Removed for compact design */}
            
            
        </div>
    );
}
