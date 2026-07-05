import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      skills: ["Java Spring Boot", "Node.js", "Express", "FastAPI", "RESTful APIs"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript / TypeScript", "Tailwind CSS", "HTML5 / CSS3"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases (pgvector)"]
    },
    {
      title: "Core Competencies",
      skills: ["Data Structures & Algorithms", "System Design", "Git Version Control", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Technical Proficiencies
          </h2>
          <div className="mt-2 h-1 w-8 bg-neutral-900 dark:bg-neutral-100"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="border-t border-neutral-200 dark:border-neutral-800 pt-6"
            >
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx} 
                    className="text-neutral-600 dark:text-neutral-400 font-medium text-base flex items-center"
                  >
                    <span className="mr-3 h-1 w-1 bg-neutral-400 dark:bg-neutral-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;