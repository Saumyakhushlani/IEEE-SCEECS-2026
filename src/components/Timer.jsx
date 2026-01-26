import { useEffect, useState } from "react";

const EventTimerSection = () => {
  const targetDate = new Date("2026-01-31T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#090822] -mt-20 sm:-mt-32 md:-mt-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Timer Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Blue Gradient */}
            <div className="lg:w-2/5 bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-50 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Diagonal gradient accent */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Until Event Start
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl">
                  Time Remaining
                </p>
              </div>
            </div>

            {/* Right Section - White Background with Timer */}
            <div className="lg:w-3/5 bg-white p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8">
                {timeUnits.map((unit, index) => (
                  <div key={unit.label} className="flex items-center">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-2">
                        {String(unit.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg font-medium text-pink-500">
                        {unit.label}
                      </div>
                    </div>
                    {index < timeUnits.length - 1 && (
                      <span className="text-4xl sm:text-5xl md:text-6xl text-gray-300 mx-2 sm:mx-4">
                        :
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimerSection;
