import { PixelImage } from '../pixel-image';

const teamMembers = [
  {
    name: "Dr. Vijay Bhaskar Semwal",
    role: "Finance Chair",
    image: "/About_Images/VijayBhaskarSemwal.jpg",
    membershipNo: null
  },
  {
    name: "Dr. Priyanka Paliwal",
    role: "Program Chair",
    image: "/About_Images/priyanka.jpeg",
    membershipNo: "92215569"
  },
  {
    name: "Mr. Vedant Jaiswal",
    role: "Organizing Co-Chair",
    image: "/About_Images/vedant.jpg",
    membershipNo: "101392018"
  },
  {
    name: "Ms. Yashika Lawani",
    role: "Publication Co-Chair",
    image: "/About_Images/Yashika.jpg",
    membershipNo: "101217691"
  },
  {
    name: "Ms. Priyanshi Khandelwal",
    role: "Program Co-Chair",
    image: "/About_Images/priyanshi_khandelwal.jpg",
    membershipNo: null
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Finance Co-Chair",
    image: "/About_Images/vvk.jpg",
    membershipNo: null
  }
];

function Team() {
  return (
    <div className="mt-16">
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mt-12 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center px-6">
            <div className="mb-6 w-72 h-72 md:w-84 md:h-84 rounded-xl overflow-hidden">
              <img src={member.image}  alt="Image" className='h-full w-full object-cover' />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2">
              {member.name}
            </h3>
            <p className="text-purple-600 text-center font-medium mb-2">
              {member.role}
            </p>
            {member.membershipNo && (
              <p className="text-gray-600 text-center text-sm">
                Membership No - {member.membershipNo}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
