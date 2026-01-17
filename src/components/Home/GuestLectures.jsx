import { FeatureSteps } from '../feature-section';

const speakers = [
  {
    title: "Striver",
    step: "Expert Speaker",
    content: "Renowned expert in technology and innovation, bringing years of industry experience and cutting-edge insights to inspire the next generation of engineers and researchers.",
    image: "/guest/striver.jpeg" // Placeholder - will be updated when image is provided
  },
  {
    title: "Sunchit Dudeja",
    step: "Expert Speaker",
    content: "Renowned expert in technology and innovation, bringing years of industry experience and cutting-edge insights to inspire the next generation of engineers and researchers.",
    image: "/guest/sunchit_dudeja.jpeg"
  },
  {
    title: "Kamran Ali",
    step: "Industry Leader",
    content: "Distinguished professional with extensive expertise in engineering and research, sharing valuable knowledge and practical insights from years of groundbreaking work.",
    image: "/guest/kamran_ali.jpeg"
  },
  {
    title: "Many More",
    step: "Distinguished Speakers",
    content: "Join us for an exciting lineup of distinguished speakers and industry leaders who will share their expertise and insights at SCEECS 2026.",
    image: "/guest/final.webp"
  }
];

function GuestLectures() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Welcome to SCEECS'26</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Guest Lectures
          </h1>
          <div className="flex justify-center mb-6">
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
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            IEEE brings together prominent personalities from various disciplines under one roof, an astonishing series of lectures to benefit you from the breadth of knowledge and depth of expertise. An experience that will enlighten your mind with innovations and creativity.
          </p>
        </div>

        {/* Know our Speakers Button */}
        <div className="text-center mb-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg">
            Know our Speakers
          </button>
        </div>

        {/* Speakers Section using FeatureSteps */}
        <FeatureSteps
          features={speakers}
          title=""
          autoPlayInterval={4000}
          className="bg-white"
        />
      </div>
    </div>
  );
}

export default GuestLectures;
