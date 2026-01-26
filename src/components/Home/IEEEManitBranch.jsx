import React from 'react';

const IEEEManitBranch = () => {
  const members = [
    {
      name: "Dr. Dheeraj Kumar Agarwal",
      role: "Organizing Chair",
      membershipNo: "92205335",
      image: "/About_Images/Dheeraj_Agrawal_Sir2.jpg"
    },
    {
      name: "Dr. Atul Kumar",
      role: "Publication Chair",
      membershipNo: "94817808",
      image: "/About_Images/Dr.Atul.Kumar.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Text Section */}
        <div className="mb-12">
          <p className="text-pink-500 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide mb-2 sm:mb-3">
            About IEEE-MSB
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            IEEE MANIT STUDENT BRANCH
          </h2>
          
          {/* Decorative Wavy Line */}
          <div className="mb-4 sm:mb-6">
            <svg
              className="w-24 sm:w-32 h-2 text-pink-400"
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

          {/* Description Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            The IEEE Student Branch at MANIT endeavours to promote awareness among students about the opportunities that exist in the field of electronics, electrical and computer science engineering. Our objective is to bridge the gap between industry and students, while promoting and providing an intellectually stimulating university environment for all students. Since the inception, it has been at the helm directing and promoting technical expertise by organising various events all round the year with well defined objectives.
          </p>

          {/* Read More Button */}
          <div>
            <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm md:text-base font-semibold uppercase py-2 px-4 sm:py-3 sm:px-6 md:px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              READ MORE
            </button>
          </div>
        </div>

        {/* Profile Images Section - Below Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-12 justify-items-center">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Profile Image - Rectangular */}
              <div className="mb-6 w-72 h-72 md:w-84 md:h-84 rounded-xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 text-center mb-1 sm:mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-pink-500 text-sm sm:text-base font-medium text-center mb-1 sm:mb-2">
                {member.role}
              </p>

              {/* Membership Number */}
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                Membership No - {member.membershipNo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IEEEManitBranch;
