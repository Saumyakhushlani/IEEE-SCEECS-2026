import React from 'react';

const ManitAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Section - Image */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <img
              src="/manit.jpg"
              alt="Maulana Azad National Institute of Technology, Bhopal"
              className="w-full h-full object-cover  shadow-lg"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="lg:w-3/5 bg-[#100A3A] p-8 sm:p-10 lg:p-12 flex flex-col justify-center  shadow-lg">
            {/* Small Heading */}
            <p className="text-pink-500 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide mb-3 sm:mb-4">
              ABOUT MANIT
            </p>

            {/* Main Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white uppercase mb-4 sm:mb-6 leading-tight">
              MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY, BHOPAL
            </h2>

            {/* Decorative Wavy Lines */}
            <div className="mb-4 sm:mb-6 space-y-1">
              <svg
                className="w-24 sm:w-32 h-2 text-cyan-400"
                viewBox="0 0 128 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="w-24 sm:w-32 h-2 text-cyan-400"
                viewBox="0 0 128 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="w-24 sm:w-32 h-2 text-cyan-400"
                viewBox="0 0 128 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Description Paragraph */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Maulana Azad National Institute of Technology is an Institute of National Importance. The Institute is successfully meeting the objective of producing skilled Technocrats of the highest quality who are able to take up the challenges of the industries and Research organizations of the country. MANIT has a rich culture of research and innovation and has been the venue of many conferences and symposia over the years.
            </p>

            {/* Read More Button */}
            <div>
              <a href="http://www.manit.ac.in/about-us" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm md:text-base font-semibold uppercase py-2 px-4 sm:py-3 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                READ MORE
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManitAbout;
