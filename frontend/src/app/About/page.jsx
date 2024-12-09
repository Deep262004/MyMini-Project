import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      </header>

      <main>
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Who Am I?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm a passionate developer who loves writing about technology, programming, and web development. 
            This blog is where I share my knowledge and experience to help others grow.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;