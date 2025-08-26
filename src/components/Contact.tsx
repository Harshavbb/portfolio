import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Harshavbb" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/harshavardhan-bandarupalli-a5641b247/" },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:harsha.vbb@gmail.com" },
  { name: "X", icon: <FaXTwitter />, link: "https://twitter.com/yourusername" },
];

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Connect with Me
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="text-4xl mb-2">{social.icon}</div>
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
