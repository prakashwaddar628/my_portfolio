"use client"; // Enables useState and useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[60%] flex justify-between items-center px-6 py-3 
      bg-white/10 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">Prakash Waddar</h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 text-lg font-semibold rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black 
        transition-all duration-300 hover:scale-110"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </motion.nav>
  );
}
