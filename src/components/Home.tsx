import React from 'react';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-[80vh] flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Hi, I'm Harsha.
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-medium text-neutral-600 dark:text-neutral-400 mb-8 leading-snug">
            A software engineer focused on building robust backend architectures and clean, responsive interfaces.
          </h2>
          
          <p className="text-base text-neutral-500 dark:text-neutral-400 mb-10 leading-relaxed max-w-xl">
            I specialize in full-stack development, leveraging tools like React, Java Spring Boot, Node.js, and relational databases to design scalable systems and resolve complex engineering challenges.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors rounded-sm"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors rounded-sm"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;