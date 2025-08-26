import React from "react";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Spring Boot", level: 70 },
  { name: "SQL / MongoDB", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "Docker", level: 70 },
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl font-semibold text-gray-800 mb-4">
                {skill.name}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-4 bg-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-gray-600 text-sm mt-2 text-right">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
