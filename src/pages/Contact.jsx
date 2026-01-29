import { PixelImage } from '../components/pixel-image';
import Hero from '@/components/Hero';

const teamMembers = [
  {
    name: "Mr. Vedant Jaiswal",
    role: "Organizing Co-chair",
    image: "/contactTeam/vedant.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-jaiswal"
  },
  {
    name: "Ms Yashika Lawani",
    role: "Publication Co-chair",
    image: "/contactTeam/Yashika.jpeg",
    linkedin: "https://www.linkedin.com/in/yashika-lawani"
  },
  {
    name: "Ms. Priyanshi Khandelwal",
    role: "Program Co-chair",
    image: "/contactTeam/priyanshi_khandelwal.jpg",
    linkedin: "https://www.linkedin.com/in/priyanshi-khandelwal"
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Finance Co-chair",
    image: "/contactTeam/vvk.jpg",
    linkedin: "https://www.linkedin.com/in/vivek-kumar"
  }
];

function Contact() {
  return (
    <>
      <Hero src="/background/11.jpg" content="Contact" />
      
      <div className="min-h-screen bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Get In Touch With Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            IEEE SCEECS 2026
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          {/* Left Card - Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-purple-600 text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700 text-base">Bhopal, MP</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 text-base">ieeemanitstudentbranch@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Middle Card - IEEE - MSB */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-pink-600 text-2xl font-semibold mb-6">IEEE - MSB</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              c/o Dr. Dheeraj Kumar Agarwal, Branch Counsellor Professor, Department of Electronics and Communication Engineering.
            </p>
          </div>

          {/* Right Card - Email Us */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-blue-600 text-2xl font-semibold mb-6">Email Us</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We reply to Emails within 1-2 working days
            </p>
          </div>
        </div>

        {/* Contact Team Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <p className="text-purple-600 text-lg font-medium mb-2">Welcome To SCEECS'26</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Contact Team
            </h2>
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

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center px-6">
                <div className="mb-6 w-64 h-64 md:w-72 md:h-72">
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
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
    </>
  );
}

export default Contact;
