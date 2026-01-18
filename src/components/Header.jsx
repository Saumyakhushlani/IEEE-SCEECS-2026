import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
            SCEECS 2026
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/callforpaper" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Call for Paper
              </Link>
            </li>
            <li>
              <Link 
                to="/guestlecturers" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Guest Lecturers
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
