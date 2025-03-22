"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me 📩
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-lg text-gray-300 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Feel free to reach out for collaborations, projects, or just to say hi!  
      </motion.p>

      <motion.a
        href="mailto:prakashwaddar628@gmail.com"
        className="mt-6 px-6 py-3 text-lg font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Email Me
      </motion.a>
    </section>
  );
}
