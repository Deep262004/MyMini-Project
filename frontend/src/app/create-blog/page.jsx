'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import MDEditor from '@uiw/react-md-editor';
import { IconLoader3 } from '@tabler/icons-react';
import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateBlog = () => {

  const [blogContent, setBlogContent] = useState('');

  const router = useRouter();

  // initializing formik
  const blogForm = useFormik({
    initialValues: {
      title: '',
      content: '',
      description: '',
      developer: '',
      tags: ''
    },

    OnSubmit: (values, { resetForm, setSubmitting }) => {
      values.content = blogContent;
      axios.post('http://localhost:5000/blog/add', values)
        .then((result) => {
          toast.success('Blog Registered successfully');
          router.push('/browse-blogs')
          resetForm();
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'Something went wrong');
          setSubmitting(false);
        });

      // send values to backend
    }
  })


  return (
    <div className="min-h-screen pt-5 bg-gray-100 flex justify-center">

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Create Your Blog</h1>
        <div className='p-5 border-b-2'>

          <form onSubmit={blogForm.handleSubmit}>


            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="blogName">
                Enter the Title:
              </label>
              <input
                type="text"
                id="title"
                value={blogForm.values.title}
                onChange={blogForm.handleChange}
                placeholder=""
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="blogName">
                Developer
              </label>
              <input
                type="text"
                id="developer"
                value={blogForm.values.developer}
                onChange={blogForm.handleChange}
                placeholder=""
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="blogName">
                Content
              </label>
              <MDEditor
                value={blogContent}
                onChange={setBlogContent}
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="blogName">
                Enter the Description:
              </label>
              <textarea
                type="text"
                id="description"
                value={blogForm.values.blogAddress}
                onChange={blogForm.handleChange}
                placeholder=""
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>


            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="blogAddress">
                Enter the Tags:
              </label>
              <input
                type="text"
                id="tags"
                value={blogForm.values.tags}
                onChange={blogForm.handleChange}
                placeholder=""
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={CreateBlog.isSubmitting}
                className="flex items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                {CreateBlog.isSubmitting ? <IconLoader3 className='animate-spin' /> : <IconCheck />}
                {CreateBlog.isSubmitting ? 'Submitting...' : 'Save'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;