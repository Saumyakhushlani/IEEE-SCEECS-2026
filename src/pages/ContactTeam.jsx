import { PixelImage } from '../components/pixel-image';

const teamMembers = [
  {
    name: "Mr. Vedant Jaiswal",
    role: "Organizing Co-chair",
    image: "https://images.unsplash.com/photo-1752779588144-938ea861bf05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {
    name: "Ms Yashika Lawani",
    role: "Publication Co-chair",
    image: "https://images.unsplash.com/photo-1752779588144-938ea861bf05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {
    name: "Ms. Priyanshi Khandelwal",
    role: "Program Co-chair",
    image: "https://images.unsplash.com/photo-1752779588144-938ea861bf05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Finance Co-chair",
    image: "https://images.unsplash.com/photo-1752779588144-938ea861bf05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  }
];

function ContactTeam() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Welcome To SCEECS'26</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Contact Team
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <PixelImage
                  src={member.image}
                  grid="6x4"
                  grayscaleAnimation={true}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {member.name}
              </h2>
              <p className="text-pink-500 text-center font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactTeam;
