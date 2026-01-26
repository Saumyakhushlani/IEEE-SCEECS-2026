import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const baseTestimonials = [
  {
    tempId: 0,
    testimonial: "Becoming who you aspire to be is a journey you'll be repeatedly tempted to abandon, DON'T DO IT.",
    by: "David Meltzer, IEEE Speaker",
    imgSrc: "/testimonial/david_m.jpg"
  },
  {
    tempId: 1,
    testimonial: "Our most valuable resources - creativity, communication, invention, and reinvention - are, in fact, unlimited.",
    by: "David Grinspoon, IEEE Speaker",
    imgSrc: "/testimonial/david.jpg"
  },
  {
    tempId: 2,
    testimonial: "You can have the wrong guy with the right instrument.",
    by: "Peter Schultz, IEEE Speaker",
    imgSrc: "/testimonial/peter.jpg"
  }
];

// Create repeated testimonials for the stagger effect
const createTestimonials = () => {
  const repeated = [];
  for (let i = 0; i < 20; i++) {
    const base = baseTestimonials[i % baseTestimonials.length];
    repeated.push({
      ...base,
      tempId: i,
      themeIndex: i % 3
    });
  }
  return repeated;
};

const testimonials = createTestimonials();

// Theme colors: purple, pink, blue
const getThemeColor = (themeIndex) => {
  const themes = [
    { bg: "bg-purple-500", border: "border-purple-500", text: "text-white", shadow: "rgb(168, 85, 247)" },
    { bg: "bg-pink-500", border: "border-pink-500", text: "text-white", shadow: "rgb(236, 72, 153)" },
    { bg: "bg-blue-500", border: "border-blue-500", text: "text-white", shadow: "rgb(59, 130, 246)" },
  ];
  return themes[themeIndex % 3];
};

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  const themeColor = getThemeColor(testimonial.themeIndex || 0);

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? `${themeColor.bg} ${themeColor.text} ${themeColor.border}` 
          : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        zIndex: isCenter ? 50 : Math.max(10 - Math.abs(position), 1),
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? `0px 8px 0px 4px ${themeColor.shadow}` : "0px 0px 0px 0px transparent"
      }}>
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }} />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-200 object-cover object-top rounded"
        style={{
          boxShadow: "3px 3px 0px white"
        }} />
      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter ? themeColor.text : "text-gray-900"
        )}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-white/80" : "text-gray-600"
        )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
        <div
          className="relative w-full overflow-hidden bg-gray-50"
          style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize} />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial">
          <ChevronRight />
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};
