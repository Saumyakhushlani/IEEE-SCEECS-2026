import { GraduationCap, Users, MessageSquare } from 'lucide-react';
import { Card } from '../ui/card';

const features = [
  {
    icon: GraduationCap,
    title: "Conference",
    description: "A mind-boggling conference is conducted to help you keep pace with the world-trends and certainly take you to extra miles, making you conquer the world with enormous capabilities.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-600"
  },
  {
    icon: Users,
    title: "Talented Speakers",
    description: "IEEE brings together prominent personalities from various disciplines under one roof, an astonishing series of lectures to benefit you from the breadth of knowledge and depth of expertise. An experience that will enlighten your mind with innovations and creativity.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    borderColor: "border-pink-600"
  },
  {
    icon: MessageSquare,
    title: "Paper Discussions",
    description: "IEEE helps to publish research papers on a platform called IEEE Xplore, thus, providing the researchers with a plethora from where their work could be accessed worldwide.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-600"
  }
];

function FeatureCards() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                variant="neubrutalism"
                className={`${feature.bgColor} p-8 h-full  hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200`}
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full ${feature.bgColor} border-4 ${feature.borderColor} flex items-center justify-center`}>
                    <IconComponent className={`w-10 h-10 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
