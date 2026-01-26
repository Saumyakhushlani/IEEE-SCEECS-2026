import { motion } from 'framer-motion';

const sponsors = [
  { image: "/About_Images/2.png", alt: "Sponsor 2" },
  { image: "/About_Images/5.png", alt: "Sponsor 5" },
  { image: "/About_Images/6.png", alt: "Sponsor 6" },
  { image: "/About_Images/7.png", alt: "Sponsor 7" },
  { image: "/About_Images/16.png", alt: "Sponsor 16" },
];

function SponsorsSection() {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg md:text-xl font-medium mb-2">
            Welcome to SCEECS 2026
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Sponsors
          </h2>
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

        {/* Sponsors Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="relative group">
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
