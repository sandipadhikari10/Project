import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0884dc] text-white px-6 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-white text-sm">
            Non-profit representative organization of the people of Nepalese
            origin living in US California
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          {/* <div className="grid grid-cols-2 gap-4"> */}
          <ul className="grid grid-cols-2 gap-2 ">
            <li>
              <Link className="hover:text-white transition" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link className="hover:text-white transition" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a
                href="https://www.facebook.com/nrnca"
                className="flex items-center space-x-2  hover:text-blue-200 transition duration-300"
              >
                <FaFacebook className="text-2xl" />
                <span>NRNA CA</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2  hover:text-blue-200 transition duration-300"
              >
                <FaTwitter className="text-2xl" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="flex items-center space-x-2  hover:text-orange-200 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t-2  mt-6 pt-4 text-center  text-sm">
        <p>Copyright © 2025 NRNA CA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
