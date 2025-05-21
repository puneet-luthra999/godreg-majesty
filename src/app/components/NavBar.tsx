'use client';

import React, { useState } from 'react';
import Container from './Container';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'pricelist', label: 'Price List' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="relative shadow-lg">
      <Container>
        <nav className="flex items-center w-full  justify-between py-4 relative z-20">
          <h1 className="text-2xl  font-bold text-gray-800 uppercase">Godrej Majesty</h1>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden focus:outline-none z-30"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-3xl font-bold">&times;</span>
            ) : (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </div>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-auto gap-2">
            {menuItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="menuItem"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </Container>

      {/* Sliding Mobile Menu */}
      <div
        className={`
          fixed top-[67px] left-0 h-auto bg-amber-800 w-full z-40 md:hidden
          transform transition-transform duration-300 ease-in-out text-center 
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          shadow-lg
          overflow-auto
          py-4
          `}
      >
        <Container>
          <div className="flex flex-col gap-1">
            {menuItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`menuItem ${menuOpen ? 'text-white' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
