import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Harsha Vardhan</span> 👋
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            A passionate <span className="font-medium text-gray-900">Software Engineer</span> 
            specialized in building scalable web apps with{" "}
            <span className="text-blue-600">React, Node.js, and Spring Boot</span>.  
            I love solving problems and bringing ideas to life.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-400 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Illustration / Profile */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" // temporary image, replace with your photo
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-600 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
