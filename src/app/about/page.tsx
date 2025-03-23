"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me 👨‍💻
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-lg text-gray-300 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
       {` Hi! I'm **Prakash Waddar**, a passionate **Full-Stack Developer** with experience in **React, Next.js, MongoDB, and AI technologies**.  
        I love building interactive applications, working with **data-driven systems**, and exploring **3D web experiences**. `} 
      </motion.p>

      <motion.a
        href="/projects"
        className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Check Out My Work
      </motion.a>
    </section>
  );
}
