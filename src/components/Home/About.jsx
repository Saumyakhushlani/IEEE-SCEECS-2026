function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-lg font-medium mb-2">Welcome to SCEECS'26</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            About SCEECS
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
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl p-8 md:p-12 shadow-lg border-2 border-purple-200">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 text-center">
                Conference
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                SCEECS produces bright young minds that keep the scintillating flame glimmering by instilling the importance of research. SCEECS, a yearly event that lures young trailblazers from across the nation and provides them with an opportunity and a platform to showcase their brilliance, through a merge of technical workshops, conferences, and guest lectures by prominent personalities.
              </p>
              <p>
                The main directive of the event is the research paper conference, with a prime objective is to facilitate research work and promote researchers for the development of our country. It felicitates accessibility and availability of the original work, publishing it and uploading it on the world wide web, making it more portable to anyone in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
