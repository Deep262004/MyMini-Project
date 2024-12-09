import React from 'react';

const BlogUI = () => {
  return (
    <div className="min-h-screen">
    
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">
          Hi, I am Deep Nandan singh.
           <div>
             <span className="text-blue-600">Blog Developer</span>
             </div>
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
          Hand-picked professionals and expertly crafted components, designed
          for any kind of entrepreneur.
        </p>
        {/* Buttons */}
        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Get started
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            Blog Developer team
          </a>
        </div>
        {/* End Buttons */}
         
      </div>
      {/* End Col */}
      <div className="relative ms-4">
        <img
          className="w-full rounded-md py-10"
          src="https://t3.ftcdn.net/jpg/07/13/35/82/360_F_713358254_pM12hayFvGkMbXwU1wERawwC2Tu3Mfpy.jpg"
          alt="Hero Image"
        />
         
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
      
      {/* Main Content */}
      <main className="flex flex-1 container mx-auto p-4 space-x-6">
        {/* Blog Posts */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Blog Posts</h2>
          
          <div className="space-y-6">
            {/* Blog Post 1 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Understanding React Hooks</h3>
              <p className="text-gray-700">In this post, we'll dive into the world of React Hooks and explore how they simplify state management...</p>
              <a href="/post/react-hooks" className="text-blue-600 mt-2 inline-block">Read More</a>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Building a Full-Stack Application</h3>
              <p className="text-gray-700">In this post, I’ll show you how to build a full-stack app with Node.js, Express, and React...</p>
              <a href="/post/full-stack" className="text-blue-600 mt-2 inline-block">Read More</a>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Tailwind CSS for Beginners</h3>
              <p className="text-gray-700">Tailwind CSS is a utility-first CSS framework that makes it easy to design custom layouts...</p>
              <a href="/post/tailwind" className="text-blue-600 mt-2 inline-block">Read More</a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
               
              <li><a href="/category/react" className="text-blue-600 hover:underline">React</a></li> 
              <li><a href="/category/javascript" className="text-blue-600 hover:underline">JavaScript</a></li>
              <li><a href="/category/css" className="text-blue-600 hover:underline">CSS</a></li>
              <li><a href="/category/nodejs" className="text-blue-600 hover:underline">Node.js</a></li>
              <li><a href="/category/tutorials" className="text-blue-600 hover:underline">Tutorials</a></li>
              
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 rounded-lg">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dev Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogUI;