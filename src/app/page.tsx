"use client"

import { useState } from "react";
import styles from '../../styles/Home.module.css';


export default function Home() {
  const [name, setName] = useState("");
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800" id="message">
          {name ? `Hello, ${name}!` : "Hello, World!"}
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="mt-4 p-2 border rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
