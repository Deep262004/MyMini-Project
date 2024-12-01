import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About Me</h1>
      </header>
      <section className="bio">
        <p>
          Hello! I'm [Deep Nandan Singh], a passionate FullStack developer and technical writer. I started this blog to share my experiences, lessons learned, and insights from my journey in web development, programming languages, and tech trends. Here, you can find articles on topics ranging from front-end frameworks like React and Vue, to back-end technologies, algorithms, and software design.
        </p>
        <p>
          I have a strong interest in clean code, performance optimization, and keeping up with the ever-evolving landscape of technology. When I'm not coding or writing, you can find me exploring new tools, collaborating with other developers, or contributing to open-source projects.
        </p>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <p>If you'd like to get in touch, feel free to reach out to me via:</p>
        <ul>
          <li>Email: <a href="deepnandansingh381@gmail.com">deepnandansingh381@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/Deep262004">github.com/Deep262004</a></li>
        </ul>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} [Deep Nandan Singh].</p>
      </footer>
    </div>
  );
};

export default AboutPage;