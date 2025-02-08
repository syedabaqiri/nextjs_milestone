import React from 'react';
import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our website! We are dedicated to providing the best service possible.
        </p>
        <p className="mb-4">
          Our team is composed of experienced professionals who are passionate about what they do.
        </p>
        <p className="mb-4">
          We believe in continuous improvement and always strive to exceed our customers' expectations.
        </p>
        <p className="mb-4">
          Thank you for visiting our site. We hope you find what you're looking for and enjoy your stay.
        </p>
      </div>
    </div>
  );
}