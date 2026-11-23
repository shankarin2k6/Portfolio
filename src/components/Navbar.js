import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  // Mobile menu open/closed
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['about', 'languages', 'experience', 'projects', 'achievements', 'education', 'contact'];

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close the mobile menu if the screen is resized up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const navBgClass = theme === 'dark'
    ? 'bg-gray-800 border-b border-gray-700'
    : 'bg-sky-50 border-b border-sky-100';

  const navTextColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const navHoverColor = theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-600';
  const portfolioTitleColor = theme === 'dark' ? 'text-cyan-400' : 'text-blue-600';

  const buttonClasses = `
    p-2 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300
    ${theme === 'light'
      ? 'text-gray-800 hover:bg-sky-200 focus:ring-blue-500'
      : 'text-yellow-400 hover:bg-gray-700 focus:ring-cyan-400'
    }
  `;

  const menuButtonClasses = `
    p-2 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300
    ${theme === 'light'
      ? 'text-gray-800 hover:bg-sky-200 focus:ring-blue-500'
      : 'text-gray-200 hover:bg-gray-700 focus:ring-cyan-400'
    }
  `;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${navBgClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className={`text-xl sm:text-2xl font-semibold transition-colors duration-500 ${portfolioTitleColor}`}>
          My Portfolio
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          {/* Desktop links */}
          <ul className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`font-medium transition-colors duration-300 capitalize ${navTextColor} ${navHoverColor}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={buttonClasses}
          >
            {theme === 'light' ? (
              <FiMoon className="w-5 h-5" />
            ) : (
              <FiSun className="w-5 h-5" />
            )}
          </button>

          {/* Hamburger (mobile / tablet) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`lg:hidden ${menuButtonClasses}`}
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden flex flex-col px-4 pb-4 max-w-6xl mx-auto"
        >
          {navItems.map((item) => (
            <li key={item} className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-sky-100'}`}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-medium capitalize transition-colors duration-300 ${navTextColor} ${navHoverColor}`}
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
