import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaEnvelope, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Top Bar */}
      <div
        className="text-white text-sm py-3.5 px-40 flex justify-between items-center"
        style={{ backgroundColor: "#0984dd" }}
      >
        <div className="flex items-center gap-4 font-normal text-base">
          <div className="mailto flex items-center gap-1">
            <FaEnvelope />
            <a
              href="mailto:someone@example.com?subject=Hello&body=How are you?"
              className="email-link"
            >
              <span> cachapter@nrnusa.org</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <FaFacebookF />
            <a href="https://www.facebook.com/nrnca">
              <span>NRNA CA</span>
            </a>
          </div>
        </div>
        <div className="flex gap-10">
          <button className="bg-blue-700 hover:bg-black px-4 py-1.5 rounded-full">
            Register Yourself
          </button>
          <button className="bg-blue-700 hover:bg-black px-4 py-1.5 rounded-full">
            Register Business
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-4 flex justify-around items-center py-7 px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="NRNACA" className="h-25 w-25" />
            <span
              className="font-[vollkorn] text-4xl font-bold"
              style={{ color: "#0884dc" }}
            >
              NRNA CA
            </span>
          </div>

          {/* Menu */}
          <div>
            <ul className="font-medium hidden md:flex gap-12 text-gray-700 text-[1.2rem]">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  News
                </NavLink>
              </li>

              {/* Dropdown for Executive Members */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center hover:text-blue-600"
                >
                  Executive Members <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                    <ul className="navbar-dropdown">
                      <li>
                        <NavLink
                          to="/Executive-Board"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Executive Board
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Advisors"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Advisors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/RCC-West-Coast-Region"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          RCC-West Coast Region
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Past-President"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Past President
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/General-Members"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          General Members
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
