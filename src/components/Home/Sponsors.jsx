import { LogoCarousel } from '../ui/logo-carousel';

const sponsorImages = [
  "/sponsors/1.png",
  "/sponsors/2.png",
  "/sponsors/3.png",
  "/sponsors/4.png",
  "/sponsors/5.png",
  "/sponsors/6.png",
  "/sponsors/7.png",
  "/sponsors/balsamiq2.png",
  "/sponsors/coding-thinker-logo.png",
  "/sponsors/codingNinjas.png",
  "/sponsors/EDtimes.png",
  "/sponsors/hitbullseye-logo.png",
  "/sponsors/ibuddy2.png",
  "/sponsors/RagaAI.png",
];

// Convert image paths to logo objects with img components
const sponsorLogos = sponsorImages.map((src, index) => ({
  id: index,
  img: ({ className }) => (
    <img
      src={src}
      alt={`Sponsor ${index + 1}`}
      className={className}
    />
  ),
}));

// Split logos into two halves
const firstHalf = sponsorLogos.slice(0, Math.ceil(sponsorLogos.length / 2));
const secondHalf = sponsorLogos.slice(Math.ceil(sponsorLogos.length / 2));

function Sponsors() {
  return (
    <div className=" bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-600">
            Past Technical Sponsors
          </h2>
        </div>

        {/* Logo Carousels - Top and Bottom */}
        <div className="mt-12 flex flex-col gap-8 md:gap-12 justify-center items-center overflow-hidden">
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={firstHalf} columnCount={4} mobileColumnCount={2} />
          </div>
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={secondHalf} columnCount={4} mobileColumnCount={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
