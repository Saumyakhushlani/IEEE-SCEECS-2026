import React from 'react'

const Hero = ({ src, alt = "Hero Image", content, dates, buttonContent }) => {
    return (
        <div className='w-full bg-white relative'>
            <div className='relative w-full h-[40vh] sm:h-[50vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] overflow-hidden'>
                <img
                    src={src}
                    alt={alt}
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 w-full h-full bg-[#090822c8] z-10'></div>
                {content && (
                    <div className='absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-30'>
                        <div className='text-white max-w-2xl sm:max-w-3xl text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight'>
                            {content}
                        </div>
                        {dates && (
                            <div className='text-white max-w-3xl sm:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 sm:mt-4 md:mt-5 leading-relaxed'>
                                {dates}
                            </div>
                        )}
                        {buttonContent && Array.isArray(buttonContent) && buttonContent.length > 0 && (
                            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8'>
                                {buttonContent.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.link}
                                        target={button.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className='inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
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
