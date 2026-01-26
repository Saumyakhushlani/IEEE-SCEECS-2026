import React from 'react'

const Hero = ({ src, alt = "Hero Image", content, dates, buttonContent }) => {
    return (
        <div className='w-full bg-white relative'>
            <div className='relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden'>
                <img
                    src={src}
                    alt={alt}
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 w-full h-full bg-[#090822c8] z-10'></div>
                {content && (
                    <div className='absolute inset-0 top-40 left-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-30'>
                        <div className='text-white max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
                            {content}
                        </div>
                        {dates && (
                            <div className='text-white max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4'>
                                {dates}
                            </div>
                        )}
                        {buttonContent && Array.isArray(buttonContent) && buttonContent.length > 0 && (
                            <div className='flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8'>
                                {buttonContent.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.link}
                                        target={button.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className='inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                    >
                                        {button.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[80px] md:h-[100px] lg:h-[150px] xl:h-[175px] transform rotate-y-180"
                    style={{ transform: 'rotate(180deg)' }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Hero
