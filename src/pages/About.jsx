import { PixelImage } from '../components/pixel-image';

const teamMembers = [
  {
    name: "Mr. Vedant Jaiswal",
    role: "Organizing Co-chair",
    image: "/contactTeam/vedant.jpg"
  },
  {
    name: "Ms Yashika Lawani",
    role: "Publication Co-chair",
    image: "/contactTeam/Yashika.jpg"
  },
  {
    name: "Ms. Priyanshi Khandelwal",
    role: "Program Co-chair",
    image: "/contactTeam/priyanshi_khandelwal.jpg"
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Finance Co-chair",
    image: "/contactTeam/vvk.jpg"
  }
];

function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">About Us</h1>
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
        </div>

        {/* Support Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Support Team
          </h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center px-6">
                <div className="mb-6 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
                  <PixelImage
                    src={member.image}
                    grid="6x4"
                    grayscaleAnimation={true}
                    pixelFadeInDuration={2000}
                    maxAnimationDelay={2400}
                    colorRevealDelay={2600}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-pink-500 text-center font-medium mb-4">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
