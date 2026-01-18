import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { id: 1, title: "Home", url: "/" },
      { id: 2, title: "About", url: "/about" },
      { id: 3, title: "Call for Paper", url: "/callforpaper" },
      { id: 4, title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { id: 5, title: "IEEE Xplore", url: "https://ieeexplore.ieee.org" },
      { id: 6, title: "IEEE Website", url: "https://www.ieee.org" },
      { id: 7, title: "IEEE MSB", url: "#" },
      { id: 8, title: "Registration", url: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col items-start justify-start gap-6 max-w-md">
            {/* Logos */}
            <div className="flex items-center gap-6">
              <img 
                src="/IEEE.png" 
                alt="IEEE Logo" 
                className="h-12 md:h-16 object-contain"
              />
              <img 
                src="/logo2026_dark.png" 
                alt="SCEECS 2026 Logo" 
                className="h-12 md:h-16 object-contain"
              />
            </div>
            
            {/* IEEE Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              IEEE is the world's largest technical professional organization. It is dedicated to the advancement of technology for the betterment of humanity.
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-3">
                <li className="mb-2 text-base font-semibold text-blue-900">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    {link.url.startsWith('http') ? (
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        {link.title}
                        <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <Link 
                        to={link.url}
                        className="flex items-center gap-1"
                      >
                        {link.title}
                        <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2026 SCEECS. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm text-center md:text-right">
              IEEE Student Branch, MANIT Bhopal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
