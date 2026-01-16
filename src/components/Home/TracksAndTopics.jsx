import { Card } from '../ui/card';
import { Cpu, Zap, Code2 } from 'lucide-react';

const tracks = [
  {
    title: "ELECTRONICS",
    iconBg: "bg-purple-500",
    titleColor: "#9333ea",
    hoverColor: "hover:border-purple-500",
    dotColor: "bg-purple-500",
    icon: <Cpu className="w-8 h-8 text-white" />,
    topics: [
      "EC01: Optical and Wireless Communication & Networking",
      "EC02: Signal, Image, and Video Processing",
      "EC03: Robotics and Autonomous Systems",
      "EC04: Communication Systems",
      "EC05: VLSI and Embedded Systems",
      "EC06: Control, Instrumentation, and Power Electronics",
      "EC07: Neural Networking",
      "EC08: Ad-hoc, Mesh and Sensor Networks",
      "EC09: Pattern Recognition and Object Tracking Processing",
      "EC10: RF Circuits, Systems, and Antenna Processing",
      "EC11: Pattern Recognition and Object Tracking",
      "EC12: RF Circuits, Systems and Antennas",
      "EC13: Electronic Devices and Circuits and Fabrication Processes",
      "EC14: Mobile sensing",
      "EC15: Satellite Communication",
      "EC16: Internet of Things"
    ]
  },
  {
    title: "ELECTRICAL",
    iconBg: "bg-blue-500",
    titleColor: "#3b82f6",
    hoverColor: "hover:border-blue-500",
    dotColor: "bg-blue-500",
    icon: <Zap className="w-8 h-8 text-white" />,
    topics: [
      "EE01: Power Electronics, Machines & Drives",
      "EE02: Power Generation, Transmission, and Distribution",
      "EE03: Renewable Energy Sources",
      "EE04: High Voltage and Insulation Engineering",
      "EE05: Sensors and Signal Conditioning",
      "EE06: Soft Computing in Electrical Power and Energy System",
      "EE07: Electric Machines and Drives",
      "EE08: Advanced Propulsion Science",
      "EE09: Smart Grid and Smart Technologies",
      "EE10: Smart Sensors and Sensor Networks",
      "EE11: Cyber-Physical Systems",
      "EE12: Sustainable Engineering"
    ]
  },
  {
    title: "COMPUTER SCIENCE",
    iconBg: "bg-pink-500",
    titleColor: "#ec4899",
    hoverColor: "hover:border-pink-500",
    dotColor: "bg-pink-500",
    icon: <Code2 className="w-8 h-8 text-white" />,
    topics: [
      "CS01: Big Data Analytics and High-Performance Computing",
      "CS02: Computing Technologies",
      "CS03: Artificial Intelligence/Machine Learning",
      "CS04: Network Security and Cryptography",
      "CS05: Natural Language Processing",
      "CS06: Biomedical and Health Informatics",
      "CS07: Cybersecurity",
      "CS08: Biometrics and Data Privacy",
      "CS09: Blockchain",
      "CS10: Human-Computer Interaction",
      "CS11: Computer Vision, Graphics, and Animation",
      "CS12: Computing Architectures and Systems",
      "CS13: Augmented Reality/Virtual Reality",
      "CS14: Quantum Computing",
      "CS15: Edge Computing"
    ]
  }
];

function TracksAndTopics() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-purple-500 rounded-full p-3 shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="bg-blue-500 rounded-full p-3 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="bg-pink-500 rounded-full p-3 shadow-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#9333ea' }}>
            Tracks and Topics
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          ORIGINAL AND UNPUBLISHED RESEARCH PAPERS ARE INVITED FOR PRESENTATION ON THE FOLLOWING THEME AREAS, BUT NOT RESTRICTED TO THE FOLLOWING VERTICALS.

          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tracks.map((track, index) => (
            <div key={index} className="group">
              <Card 
                variant="dots" 
                className="max-w-full bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                dotColor={track.dotColor}
              >
                {/* Icon Section - Above Title */}
                <div className="flex justify-center mb-4">
                  <div className={`${track.iconBg} rounded-full p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {track.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: track.titleColor }}>
                  {track.title}
                </h3>

                {/* Topics List */}
                <div className="mt-4 space-y-3">
                  {track.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex} 
                      className={`text-sm text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-3 ${track.hoverColor} transition-colors duration-200`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TracksAndTopics;
