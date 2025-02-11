import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEnvelope, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
import { ImFacebook2 } from "react-icons/im";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const activeClass = "text-blue-600 font-semibold";

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div
        className="text-white text-sm py-3.5 px-4 md:px-8 lg:px-40 flex justify-between items-center"
        style={{ backgroundColor: "#0984dd" }}
      >
        <div className="flex items-center gap-6 font-normal text-base">
          <div className="mailto flex items-center gap-1">
            <FaEnvelope />
            <a href="mailto:cachapter@nrnusa.org" className="email-link">
              <span>cachapter@nrnusa.org</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <ImFacebook2 />
            <a href="https://www.facebook.com/nrnca">
              <span>NRNA CA</span>
            </a>
          </div>
        </div>

        <div className="hidden   md:flex gap-4 md:gap-10">
          <button className="bg-blue-700 hover:bg-black px-4 py-1.5 w-45 rounded-full text-sm">
            Register Yourself
          </button>
          <button className="bg-blue-700 hover:bg-black px-4 py-1.5 w-45 rounded-full text-sm">
            Register Business
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white w-full relative">
        <div className="container mx-4 flex justify-between items-center py-8 px-8 md:px-12 lg:px-40">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="NRNACA" className="h-25 w-25" />
            <span className="font-[vollkorn] text-4xl font-bold text-[#0884dc]">
              <Link className="" to="/home">
                NRNA CA
              </Link>
            </span>
          </div>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Menu */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-40 left-0 w-full bg-white shadow-lg md:shadow-none z-10 md:flex md:relative md:top-0 md:w-auto md:bg-transparent gap-10 text-gray-700 text-lg text-[1.2rem] font-medium`}
          >
            <li className="p-4 md:p-0">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-4 md:p-0">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-blue-600"
                }
              >
                Events
              </NavLink>
            </li>
            <li className="p-4 md:p-0">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-blue-600"
                }
              >
                News
              </NavLink>
            </li>

            {/* Dropdown for Executive Members */}
            <li
              className="relative  group p-4 md:p-0"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <button className="cursor-pointer flex items-center hover:text-blue-600">
                Executive Members <FaChevronDown className="ml-1 text-sm" />
              </button>
              <div
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg z-10 `}
              >
                <ul>
                  <li>
                    <NavLink
                      to="/Executive-Board"
                      className="block px-4 py-4 hover:bg-gray-100"
                    >
                      Executive Board
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Advisors"
                      className="block px-4 py-4 hover:bg-gray-100"
                    >
                      Advisors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/RCC-West-Coast-Region"
                      className="block px-4 py-4 hover:bg-gray-100"
                    >
                      RCC-West Coast Region
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Past-President"
                      className="block px-4 py-4 hover:bg-gray-100"
                    >
                      Past President
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/General-Members"
                      className="block px-4 py-4 hover:bg-gray-100"
                    >
                      General Members
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="p-4 md:p-0">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-blue-600"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="p-4 md:p-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-blue-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
