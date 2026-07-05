import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Harshavbb" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/harshavardhan-bandarupalli-a5641b247/" },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:harsha.vbb@gmail.com" },

];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Harsha Vardhan. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-500 transition-colors text-2xl"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
