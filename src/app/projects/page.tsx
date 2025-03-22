"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SmartCity Transport & Logistics Hub",
    description: "AI-powered platform optimizing urban transport using real-time data.",
    link: "#",
  },
  {
    title: "Next.js Authentication System",
    description: "Secure authentication system using NextAuth & MongoDB.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio with Next.js, animations, and 3D elements.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects 💡
      </motion.h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a href={project.link} className="mt-4 inline-block text-blue-400 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
