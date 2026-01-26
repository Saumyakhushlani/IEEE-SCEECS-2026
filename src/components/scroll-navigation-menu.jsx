import * as React from "react"
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Home, User, FileText, Users, Image, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const defaultMenuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <Home className="w-5 h-5" />
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: <User className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Call for Paper",
    url: "/callforpaper",
    icon: <FileText className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Guest Lecturers",
    url: "/guestlecturers",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Gallery",
    url: "/gallery",
    icon: <Image className="w-5 h-5" />
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
    icon: <Mail className="w-5 h-5" />
  }
]

function ScrollNavigationMenu({ 
  menuItems = defaultMenuItems,
  className = ""
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100)
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Variant 5 for the popup menu
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      y: 20,
      opacity: 0,
      scale: 0.8
    },
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  const hamburgerVariants = {
    normal: { rotate: 0, scale: 1 },
    scrolled: { rotate: 360, scale: 1.1 }
  }

  return (
    <>
      {/* Full Navbar - visible when not scrolled */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                SCEECS 2026
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.url}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                    {hoveredItem === item.id && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 bg-muted rounded-md -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Floating Hamburger - visible when scrolled */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={toggleMenu}
          className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center"
          variants={hamburgerVariants}
          animate={isScrolled ? "scrolled" : "normal"}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}>
          <Menu className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      </motion.div>
      {/* Floating Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40"
              onClick={toggleMenu} />

            {/* Menu Container */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <div
                className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl min-w-[300px]">
                {/* Close Button */}
                <motion.button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}>
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Menu Items */}
                <div className="space-y-4 mt-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}>
                      <Link
                        to={item.url}
                        onClick={toggleMenu}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-colors group">
                        <motion.div
                          className="text-indigo-600"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}>
                          {item.icon}
                        </motion.div>
                        <span className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                          {item.title}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScrollNavigationMenu;

