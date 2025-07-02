import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const menu = (
    <>
      <NavLink to={"/"} className="text-gray-700 hover:text-indigo-600">
        Home
      </NavLink>
      <NavLink to={"/users"} className="text-gray-700 hover:text-indigo-600">
        Users
      </NavLink>
      <NavLink to={"/"} className="text-gray-700 hover:text-indigo-600">
        Tasks
      </NavLink>
    </>
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-md  w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            ToDo Apps
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex ">
            <div className="space-x-8">{menu}</div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2">{menu}</div>
      )}
    </nav>
  );
};

export default Navbar;
