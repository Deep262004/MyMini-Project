import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Developer Blog</h1>
        <p className="text-lg text-gray-600 mt-2">A place to share knowledge, tips, and tutorials</p>
      </header>

      <main>
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Latest Posts</h2>
          <p className="text-gray-600 mt-4">Stay tuned for new articles and tutorials!</p>
        </section>
      </main>
    </div>
  );
};

export default Home;