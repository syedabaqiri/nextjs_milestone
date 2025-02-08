"use client"
import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Navigation from '../../components/Navigation';

export default function Blog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Blog Title:', title);
    console.log('Blog Content:', content);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Post a Blog</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter blog content"
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}