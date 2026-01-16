import { PixelImage } from "../pixel-image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/hero_images/SCEECS24_1.jpg",
    alt: "SCEECS 2024 Gallery Image 1"
  },
  {
    src: "/hero_images/SCEECS24_2.jpg",
    alt: "SCEECS 2024 Gallery Image 2"
  },
  {
    src: "/hero_images/SCEECS24_3.jpg",
    alt: "SCEECS 2024 Gallery Image 3"
  },
  {
    src: "/hero_images/SCEECS24_4.jpg",
    alt: "SCEECS 2024 Gallery Image 4"
  },
  {
    src: "/hero_images/SCEECS24_5.jpg",
    alt: "SCEECS 2024 Gallery Image 5"
  },
  {
    src: "/hero_images/SCEECS24_6.jpg",
    alt: "SCEECS 2024 Gallery Image 6"
  },
  {
    src: "/hero_images/SCEECS24_7.jpg",
    alt: "SCEECS 2024 Gallery Image 7"
  },
  {
    src: "/hero_images/SCEECS24_8.jpg",
    alt: "SCEECS 2024 Gallery Image 8"
  }
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set([...prev, index]));
              observer.unobserve(ref);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px"
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Memories</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Gallery
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-3 mt-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative flex justify-center items-center w-full"
            >
              <div className="relative rounded-xl overflow-hidden w-full aspect-[4/3]">
                <PixelImage
                  src={image.src}
                  grid="6x4"
                  grayscaleAnimation={true}
                  pixelFadeInDuration={2000}
                  maxAnimationDelay={2400}
                  colorRevealDelay={2600}
                  className="w-full h-full"
                  startAnimation={visibleImages.has(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
