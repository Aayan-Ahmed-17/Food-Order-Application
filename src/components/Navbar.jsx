import React from "react";

const Navbar = () => {
  const navLinks = ["Home", "Restaurants", "Page", "Contact", "Profile"];
  return (
    <nav
      className="
      h-16 px-4 bg-white shadow-sm
      sm:h-18 sm:px-6
      md:h-[85px] md:px-8
      lg:px-12"
    >
      {/* Logo */}
      <div className="h-full flex items-center justify-between max-w-[1300px] mx-auto">
        <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto ">
          <img
            src="../src/images/logo.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {/* <a href="#" className="text-sm md:text-base hover:text-primary transition-colors">
          Home
        </a>
        
        <a href="#" className="text-sm md:text-base hover:text-primary transition-colors">
        About
        </a>
        
        <a href="#" className="text-sm md:text-base hover:text-primary transition-colors">
        Services
        </a> */}
          {navLinks.map((link) => {
            return (
              <a
                key={link}
                href="#"
                className="hover:text-primary transition-colors text-lg lg:text-xl"
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Search and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div
            className="
          hidden md:block 
          w-48 lg:w-64
          "
          >
            <input
              type="text"
              placeholder="Search..."
              className="
            w-full 
            px-3 py-2 
            text-sm 
            border rounded-md 
              focus:outline-none focus:ring-2
              "
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="
          md:hidden 
          hamburger-icon
          "
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
