import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../space-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClassName = "text-blue-600 font-semibold";

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Space Travelers Hub
          </h2>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : "hover:text-blue-500 transition"
              }
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) =>
                isActive ? activeClassName : "hover:text-blue-500 transition"
              }
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeClassName : "hover:text-blue-500 transition"
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="relative z-50 w-full sm:w-64 bg-white dark:bg-gray-900 shadow-lg h-full flex flex-col p-6 transition-transform transform animate-slide-in">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end mb-6 text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              ×
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 text-lg">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500 transition"
                  }
                >
                  Rockets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/missions"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500 transition"
                  }
                >
                  Missions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500 transition"
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
