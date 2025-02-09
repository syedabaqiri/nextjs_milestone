"use client"
import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Navigation from '../../components/Navigation';
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}