import * as React from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";

import { cn } from "../lib/utils"

const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
}
const useAnimationVariants = (animate) =>
  React.useMemo(() => ({
    hidden: {
      x: animate === "left" ? "-100%" : animate === "right" ? "100%" : 0,
      y: animate === "top" ? "-100%" : animate === "bottom" ? "100%" : 0,
      scale: animate === "z" ? 0 : 1,
      filter: animate === "blur" ? "blur(10px)" : "blur(0px)",
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
    },
  }), [animate])

const ContainerStagger = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true || props.viewport?.once, ...props.viewport }}
      transition={{
        staggerChildren: props.transition?.staggerChildren || 0.2,
        ...props.transition,
      }}
      {...props}>
      {children}
    </motion.div>
  );
})
ContainerStagger.displayName = "ContainerStagger"

const ContainerScrollContext = React.createContext(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within <ContainerScroll> component"
    )
  }
  return context
}

const ContainerScroll = ({
  children,
  className,
  ...props
}) => {
  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <section
        className={cn("relative min-h-[300vh] md:min-h-[250vh] w-full pb-[30%] pt-8 ", className)}
        {...props}
        ref={scrollRef}>
        {children}
      </section>
    </ContainerScrollContext.Provider>
  );
}
ContainerScroll.displayName = "ContainerScroll"
const ContainerAnimated = React.forwardRef(({ animation, children, className, ...props }, ref) => {
  const variants = useAnimationVariants(animation)

  return (
    <motion.div
      transition={SPRING_CONFIG || props.transition}
      ref={ref}
      variants={variants}
      className={className}
      {...props}>
      {children}
    </motion.div>
  );
})
ContainerAnimated.displayName = "ContainerAnimated"

const ContainerInset = React.forwardRef((
  {
    translateYRange = ["-25%", "50%"],
    insetYRange = [35, 0],
    insetXRange = [42, 0],
    roundednessRange = [1000, 16],
    children,
    className,
    ...props
  },
  ref
) => {
  const { scrollYProgress } = useContainerScrollContext()
  const y = useTransform(scrollYProgress, [0, 1], translateYRange)

  // Adjust the ranges so video expands when going out of view
  // Video stays normal size until 50% scroll, then expands gradually
  const adjustedProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
  const insetY = useTransform(adjustedProgress, [0, 1], insetYRange)
  const insetX = useTransform(adjustedProgress, [0, 1], insetXRange)
  const roundedness = useTransform(adjustedProgress, [0, 1], roundednessRange)

  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`

  const style = React.useMemo(() => ({ y, clipPath, ...props.style }), [y, clipPath, props.style])
  return (
    <motion.div
      transition={SPRING_CONFIG || props.transition}
      ref={ref}
      className={cn("origin-top overflow-hidden", className)}
      style={style}
      {...props}>
      {children}
    </motion.div>
  );
})
ContainerInset.displayName = "ContainerInset"

export { ContainerAnimated, ContainerStagger, ContainerScroll, ContainerInset }

// Hero Video Component
function HeroVideo({ videoSrc, title, subtitle, description, className, showHeader = true }) {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Video expands when going out of view - starts at 50% scroll
  const adjustedProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
  const insetY = useTransform(adjustedProgress, [0, 1], [35, 0])
  const insetX = useTransform(adjustedProgress, [0, 1], [42, 0])
  const roundedness = useTransform(adjustedProgress, [0, 1], [1000, 16])
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`

  return (
    <div ref={containerRef} className={cn("relative h-[200vh] md:h-[250vh] bg-white", className)}>
      <div className="sticky top-0  overflow-hidden flex items-center justify-center px-4 md:px-8 py-0">
        {showHeader && (
          <ContainerStagger className="absolute top-0 left-0 right-0 text-center z-10">
            <ContainerAnimated animation="bottom" className="mb-4">
              <p className="text-purple-600 text-sm md:text-lg font-medium uppercase tracking-wide">
                {subtitle || "ABOUT SCEECS"}
              </p>
            </ContainerAnimated>
            <ContainerAnimated animation="bottom" className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                {title || "SCEECS 2026"}
              </h1>
            </ContainerAnimated>
            <ContainerAnimated animation="bottom" className="mb-8">
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
            </ContainerAnimated>
            {description && (
              <ContainerAnimated animation="bottom" className="mb-12">
                <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              </ContainerAnimated>
            )}
          </ContainerStagger>
        )}

        <motion.div
          style={{ clipPath }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroVideo;