import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Contact
          </h2>
          <div className="mt-2 h-1 w-8 bg-neutral-900 dark:bg-neutral-100"></div>
        </div>

        {/* Contact Container */}
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-10 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl leading-relaxed">
            Whether you want to discuss full-stack architecture, potential engineering roles, or software development in general, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:harsha.vbb@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/harshavardhan-bandarupalli-a5641b247/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-semibold uppercase tracking-wider rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Harshavbb" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-semibold uppercase tracking-wider rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;