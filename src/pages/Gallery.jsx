import { PixelImage } from '../components/pixel-image';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';


// Guest Lecturers Images
const guestImages = [
  { src: "/guest/striver.jpeg", alt: "Striver" },
  { src: "/guest/sunchit_dudeja.jpeg", alt: "Sunchit Dudeja" },
  { src: "/guest/kamran_ali.jpeg", alt: "Kamran Ali" },
  { src: "/guest/love_babbar.jpg", alt: "Love Babbar" },
  { src: "/guest/lakshya_kumar.jpeg", alt: "Lakshya Kumar" },
  { src: "/guest/02.jpg", alt: "Guest Lecturer" },
  { src: "/guest/03.jpg", alt: "Guest Lecturer" },
  { src: "/guest/04.jpg", alt: "Guest Lecturer" },
];

// Conference Images
const conferenceImages = [
  { src: "/gallery/conference1.jpg", alt: "Conference" },
  { src: "/gallery/conference2.jpg", alt: "Conference" },
  { src: "/gallery/conference3.jpg", alt: "Conference" },
  { src: "/gallery/conference31.jpg", alt: "Conference" },
  { src: "/gallery/conference4.jpg", alt: "Conference" },
  { src: "/gallery/conference5.jpg", alt: "Conference" },
  { src: "/gallery/conference6.jpg", alt: "Conference" },
  { src: "/gallery/conference7.jpg", alt: "Conference" },
  { src: "/gallery/congference1.jpg", alt: "Conference" },
  { src: "/gallery/inauguration.jpg", alt: "Conference Inauguration" },
  { src: "/gallery/crowd.jpg", alt: "Conference Crowd" },
  { src: "/gallery/distribution.jpg", alt: "Award Distribution" },
];

// Workshop Images
const workshopImages = [
  { src: "/gallery/workshop.jpg", alt: "Workshop" },
  { src: "/gallery/workshop1.jpg", alt: "Workshop" },
  { src: "/gallery/workshop11.jpg", alt: "Workshop" },
  { src: "/gallery/workshop2.jpg", alt: "Workshop" },
  { src: "/gallery/workshop3.jpg", alt: "Workshop" },
  { src: "/gallery/babbarSeminar.jpg", alt: "Seminar" },
  { src: "/gallery/babbarSeminar1.jpg", alt: "Seminar" },
  { src: "/gallery/lakshaySeminar.jpg", alt: "Seminar" },
  { src: "/gallery/seminar2.jpg", alt: "Seminar" },
];

// Team Images
const teamImages = [
  { src: "/gallery/team.jpg", alt: "Team" },
  { src: "/gallery/team1.jpg", alt: "Team" },
  { src: "/gallery/team2.JPG", alt: "Team" },
  { src: "/gallery/team3.jpg", alt: "Team" },
  { src: "/gallery/team4.jpg", alt: "Team" },
  { src: "/gallery/team5.jpg", alt: "Team" },
  { src: "/gallery/teams.jpg", alt: "Teams" },
];

const GallerySection = ({ images }) => {
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="relative flex justify-center items-center w-full group cursor-pointer"
        >
          <div className="relative rounded-xl overflow-hidden w-full aspect-[5/4] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <PixelImage
              src={image.src}
              grid="6x4"
              grayscaleAnimation={true}
              pixelFadeInDuration={1000}
              maxAnimationDelay={1600}
              colorRevealDelay={1800}
              className="w-full h-full group-hover:scale-110 transition-transform duration-300"
              startAnimation={visibleImages.has(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const allImages = [...conferenceImages, ...workshopImages, ...teamImages, ...guestImages,];

const tabs = [
  { id: 'all', label: 'All', images: allImages },
  { id: 'guests', label: 'Guest Lecturers', images: guestImages },
  { id: 'conference', label: 'Conference', images: conferenceImages },
  { id: 'workshop', label: 'Workshop', images: workshopImages },
  { id: 'team', label: 'Team', images: teamImages },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Hero src="/background/7.jpg" content="Gallery"/>
      <div className="min-h-screen bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-purple-600 text-lg font-medium mb-2">Memories</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <div className="flex justify-center mb-8">
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

          {/* Tabs Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold text-base md:text-lg rounded-lg transition-all duration-200 ${activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {activeTabData && <GallerySection images={activeTabData.images} />}
        </div>
      </div>
    </>

  );
}

export default Gallery;
