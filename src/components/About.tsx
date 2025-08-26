import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
  src="/profile.png"
  alt="Profile"
  className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-blue-600"
/>

        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold text-gray-900">Harsha Vardhan</span>, 
            a passionate <span className="text-blue-600 font-medium">Software Engineer</span> 
            with expertise in building scalable applications and solving 
            real-world problems. I love working with{" "}
            <span className="font-semibold">JavaScript, React, Node.js</span> and 
            exploring backend technologies like{" "}
            <span className="font-semibold">Spring Boot</span>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond coding, I’m interested in <span className="font-semibold">AI, 
            IoT, and DevOps</span>. My goal is to build impactful products 
            that make people’s lives better.
          </p>

          {/* Highlight boxes */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-white shadow-md rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-600">6+</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-600">∞</h3>
              <p className="text-gray-600 text-sm">Learning Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
