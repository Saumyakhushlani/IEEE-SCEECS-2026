import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const dotColors = ['bg-purple-500', 'bg-pink-500', 'bg-blue-400', 'bg-purple-500', 'bg-pink-500', 'bg-blue-400'];
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-0 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-0">
          <h2 className="text-lg md:text-2xl font-semibold text-purple-600 mb-2">
            SCEECS'26 Call For Paper
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How it Works
          </h1>
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className={`flex justify-start md:gap-10 ${index === 0 ? 'pt-0 md:pt-0' : 'pt-10 md:pt-40'}`}>
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div
                  className={`h-4 w-4 rounded-full ${dotColors[index % dotColors.length]} border-2 border-white shadow-lg p-2`} />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-pink-500 text-sm md:text-base font-medium">
                    {item.date}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                <h3 className="text-2xl text-left font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-pink-500 text-sm font-medium">
                    {item.date}
                  </p>
                )}
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        {/* Final dot at bottom */}
        <div className="absolute md:left-3 left-3 bottom-0">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-blue-400 border-2 border-white shadow-lg" />
          </div>
        </div>
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-gray-300">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-pink-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
        <div className="flex justify-center">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg">
            Get More Details
          </button>
        </div>
      </div>
    </div>
  );
};
