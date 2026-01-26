import Gallery from '../components/Home/Gallery';
import Team from '../components/Home/Team';
import HeroVideo from '../components/hero-video';
import SponsorsSection from '../components/Home/SponsorsSection';
import { Presentation, Users, FileText, Laptop } from 'lucide-react';

const features = [
  {
    icon: Presentation,
    title: "Conference",
    description: "IEEE entices young minds to showcase their brilliance and pursue the research field by orchestrating a Research Paper Conference.",
    bgColor: "bg-white",
    iconColor: "text-pink-600",
    borderColor: "border-pink-600",
    cardShadow: "shadow-md"
  },
  {
    icon: Users,
    title: "Guest Lectures",
    description: "An experience that will enlighten your mind with innovations and creativity.",
    bgColor: "bg-white",
    iconColor: "text-orange-600",
    borderColor: "border-orange-600",
    cardShadow: "shadow-md"
  },
  {
    icon: FileText,
    title: "Research Papers",
    description: "IEEE helps to publish research papers on a platform called IEEE Xplore, thus, providing the researchers with a plethora from where their work could be accessed worldwide.",
    bgColor: "bg-white",
    iconColor: "text-blue-600",
    borderColor: "border-blue-600",
    cardShadow: "shadow-md"
  },
  {
    icon: Laptop,
    title: "Workshops",
    description: "A mind-boggling concatenation of workshops is conducted to help you keep pace with the world-trends.",
    bgColor: "bg-white",
    iconColor: "text-purple-600",
    borderColor: "border-purple-600",
    cardShadow: "shadow-md"
  }
];

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-purple-600 text-sm md:text-lg font-medium uppercase tracking-wide mb-4">
              ABOUT SCEECS
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              SCEECS 2026
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
            <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              IEEE International Students' Conference on Electrical, Electronics and Computer Sciences (SCEECS) is flagship conference of IEEE-MSB featuring comprehensive technical programs including paper presentations, workshops and expert guest lectures.
            </p>
          </div>

          {/* Feature Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.cardShadow} p-8 h-full rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <IconComponent className={`w-16 h-16 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Video Section - Below Feature Cards */}
      <HeroVideo
        videoSrc="/video/recap-2025.mp4"
        showHeader={false}
      />

      {/* Team and Gallery Section */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Team Members Section */}
          <Team />

          {/* Gallery Section */}
          <div className="mt-24">
            <Gallery />
          </div>
        </div>
      </div>

      {/* Sponsors Section - At Bottom */}
      <SponsorsSection />
    </div>
  );
}

export default About;
