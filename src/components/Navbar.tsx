import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#home" 
          onClick={closeMenu} 
          className="text-xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
        >
          Harsha.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 -mr-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-xl">
          <div className="flex flex-col px-6 py-8 gap-6 text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <a href="#about" onClick={closeMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</a>
            <a href="#skills" onClick={closeMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Skills</a>
            <a href="#projects" onClick={closeMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#contact" onClick={closeMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;