import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6"; // Correct import path
//import logo from "../assets/download.png"; // Ensure this path is correct
import { SOCIAL_LINKS } from '../Constant/Constant.jsx';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIAL_LINKS.INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
