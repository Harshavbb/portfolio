import React from "react";

const projects = [
  {
    name: "SkillSwap",
    description: "A peer-to-peer skill exchange platform connecting learners and teachers.",
    techStack: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://github.com/yourusername/SkillSwap",
    image: "/images/skillswap.png", // optional screenshot
  },
  {
    name: "CitySprout",
    description: "Community-based urban agriculture hub for sustainable city farming.",
    techStack: ["React", "Spring Boot", "MongoDB"],
    link: "https://github.com/yourusername/CitySprout",
    image: "/images/citysprout.png",
  },
  {
    name: "TrashIQQ",
    description: "Intelligent waste management system with optimized collection routes.",
    techStack: ["Node.js", "Express", "MongoDB", "Google Maps API"],
    link: "https://github.com/yourusername/TrashIQQ",
    image: "/images/trashiqq.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Optional project image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
