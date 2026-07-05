import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  highlights: string[];
  tags: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  const mainProjects: Project[] = [
    {
      title: "CitySprout",
      subtitle: "Full-Stack Urban Farming Platform",
      highlights: [
        "Built a responsive React interface integrating a rule-based recommendation engine for space optimization.",
        "Engineered scalable REST APIs with Node.js and Express, secured via custom JWT authentication.",
        "Designed and deployed a structured database schema using MongoDB Atlas."
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      links: { github: "https://github.com/Harshavbb/CitySprout_pro", live: "https://city-sprout-pro.vercel.app/" }
    },
    {
      title: "Quick Eats",
      subtitle: "Institutional Food Ordering System",
      highlights: [
        "Developed a responsive web application to streamline food ordering workflows for campus and corporate canteens.",
        "Engineered an order management backend to handle concurrent request processing, cart state synchronization, and menu updates.",
        "Designed a relational database schema to efficiently track user sessions, active orders, and transaction histories."
      ],
      tags: ["React", "Node.js", "PostgreSQL", "REST API"],
      links: { github: "https://github.com/Harshavbb/quickeats_pro", live: "https://quickeats-pro.vercel.app/" }
    },
    {
      title: "Civix AI",
      subtitle: "AI-Powered RAG Backend",
      highlights: [
        "Architected a Retrieval-Augmented Generation (RAG) backend to synthesize domain-specific civic datasets.",
        "Implemented a high-performance vector search pipeline utilizing FastAPI and PostgreSQL (pgvector).",
        "Optimized async data ingestion and API endpoints to reduce latency and mitigate LLM hallucinations."
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Vector Search", "RAG"],
      links: { github: "#", live: "#" }
    },
    
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Projects
          </h2>
          <div className="mt-2 h-1 w-8 bg-neutral-900 dark:bg-neutral-100"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {mainProjects.map((project, index) => (
            <div 
              key={index}
              className="group border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 py-2 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300"
            >
              {/* Header & Links Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>
                
                <div className="flex gap-4 text-sm font-medium">
                  {project.links?.github && (
                    <a 
                      href={project.links.github}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.links?.live && (
                    <a 
                      href={project.links.live}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-5">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed flex items-start">
                    <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;