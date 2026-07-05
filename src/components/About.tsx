import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            About
          </h2>
          <div className="mt-2 h-1 w-8 bg-neutral-900 dark:bg-neutral-100"></div>
        </div>

        {/* Bio Content */}
        <div className="text-lg text-neutral-600 dark:text-neutral-300 space-y-6 leading-relaxed">
          <p>
            I am a Computer Science undergraduate specializing in the Internet of Things, focused on full-stack software engineering. My work centers on designing scalable backend systems and bridging them with intuitive, high-performance frontends.
          </p>
          <p>
            With a strong foundation in Data Structures and Algorithms, I approach problem-solving systematically. I specialize in building robust APIs using Java Spring Boot and Node.js, managing complex data states in PostgreSQL and MySQL, and delivering clean user interfaces with React.
          </p>
          <p>
            I am driven by the challenge of optimizing database queries, architecting efficient microservices, and writing maintainable, production-ready code.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;