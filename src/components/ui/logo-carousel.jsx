import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const shuffleArray = array => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 4000
  const columnDelay = index * 400
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

  return (
    <motion.div
      className="relative h-32 w-36 overflow-hidden sm:h-36 sm:w-40 md:h-40 md:w-72 flex-shrink-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}>
          <CurrentLogo
            className="h-32 w-32 max-h-[90%] max-w-[90%] object-contain sm:h-36 sm:w-36 md:h-52 md:w-52" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
})

export function LogoCarousel({
  columnCount = 2,
  logos,
  mobileColumnCount = 2
}) {
  const [logoSets, setLogoSets] = useState([])
  const [mobileLogoSets, setMobileLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId);
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
    
    // For mobile, use fewer columns
    const mobileDistributedLogos = distributeLogos(logos, mobileColumnCount)
    setMobileLogoSets(mobileDistributedLogos)
  }, [logos, columnCount, mobileColumnCount])

  return (
    <>
      {/* Mobile: Animated Carousel with 2 columns */}
      <div className="flex md:hidden space-x-2 justify-center max-w-full overflow-hidden px-2">
        {mobileLogoSets.map((logos, index) => (
          <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
        ))}
      </div>
      
      {/* Desktop: Animated Carousel */}
      <div className="hidden md:flex space-x-2 md:space-x-4 flex-wrap justify-center max-w-full">
        {logoSets.map((logos, index) => (
          <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
        ))}
      </div>
    </>
  );
}

export { LogoColumn };
