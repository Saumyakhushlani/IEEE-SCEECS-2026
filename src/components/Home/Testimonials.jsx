import { useState } from "react";
import { cn } from "../../lib/utils";

const testimonials = [
  {
    quote: "Becoming who you aspire to be is a journey you'll be repeatedly tempted to abandon, DON'T DO IT.",
    name: "David Meltzer",
    affiliation: "IEEE Speaker",
    image: "/testimonial/david_m.jpg"
  },
  {
    quote: "Our most valuable resources - creativity, communication, invention, and reinvention - are, in fact, unlimited.",
    name: "David Grinspoon",
    affiliation: "IEEE Speaker",
    image: "/testimonial/david.jpg"
  },
  {
    quote: "You can have the wrong guy with the right instrument.",
    name: "Peter Schultz",
    affiliation: "IEEE Speaker",
    image: "/testimonial/peter.jpg"
  }
];

const themeColors = [
  { bg: "bg-purple-500", border: "border-purple-500", text: "text-white" },
  { bg: "bg-pink-500", border: "border-pink-500", text: "text-white" },
  { bg: "bg-blue-500", border: "border-blue-500", text: "text-white" },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMove = (steps) => {
    setActiveIndex((prev) => {
      const newIndex = prev + steps;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Welcome to SCEECS'26</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Precious remarks by Past Speakers
          </h1>
          <div className="flex justify-center">
            <svg
              className="w-32 h-2 text-pink-400"
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
        </div>

        {/* Testimonials Section */}
        <div className="relative w-full min-h-[600px] flex items-center justify-center mt-16">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const themeColor = themeColors[activeIndex % themeColors.length];

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative cursor-pointer transition-all duration-500 ease-in-out",
                      isActive ? "z-10 transform scale-105" : "z-0 opacity-80 hover:opacity-100"
                    )}
                  >
                    {/* Speech Bubble Card */}
                    <div
                      className={cn(
                        "relative rounded-2xl p-6 md:p-8 transition-all duration-500 mx-auto",
                        isActive 
                          ? `${themeColor.bg} ${themeColor.text} shadow-2xl z-50` 
                          : "bg-white text-gray-900 border-2 border-gray-200 shadow-lg z-10"
                      )}
                      style={{
                        minHeight: "280px",
                        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(50% + 15px) calc(100% - 20px), 50% 100%, calc(50% - 15px) calc(100% - 20px), 0 calc(100% - 20px))"
                      }}
                    >
                      {/* Quote Icon */}
                      <div className={cn(
                        "absolute bottom-6 right-6 text-5xl md:text-6xl font-bold opacity-20",
                        isActive ? themeColor.text : "text-gray-400"
                      )}>
                        "
                      </div>
                      
                      {/* Quote Text */}
                      <p className={cn(
                        "text-base md:text-lg font-medium leading-relaxed mb-6 relative z-10",
                        isActive ? themeColor.text : "text-gray-900"
                      )}>
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Profile Section */}
                    <div className="mt-6 flex flex-col items-center">
                      <div className={cn(
                        "relative rounded-full overflow-hidden border-4 transition-all duration-500",
                        isActive 
                          ? `${themeColor.border} shadow-lg` 
                          : "border-gray-300"
                      )}
                      style={{
                        width: "100px",
                        height: "100px"
                      }}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className={cn(
                        "mt-4 text-lg md:text-xl font-bold text-center",
                        isActive ? "text-gray-900" : "text-gray-900"
                      )}>
                        {testimonial.name}
                      </h3>
                      <p className="text-pink-500 font-medium text-sm mt-1">
                        {testimonial.affiliation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
            <button
              onClick={() => handleMove(-1)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                "bg-white border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              )}
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => handleMove(1)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                "bg-white border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              )}
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
