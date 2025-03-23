"use client";
import { motion } from "framer-motion";
import ThreeDHero from "@/components/3DHero";
import Image from "next/image";
import { useState, useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <>
      <ScrollSection>
        <motion.section
          className="animated-bg min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10 p-6 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ParticlesBackground />

          {/* Left Section - Floating Profile Image with Glow */}
          <motion.div
            className="relative w-80 h-80 flex-shrink-0 rounded-full bg-white shadow-lg dark:bg-gray-700"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-400 dark:ring-purple-500">
              <Image
                src="/profile.png"
                alt="Prakash Waddar"
                width={288}
                height={288}
                priority
                className="object-cover p-1"
              />
            </div>
          </motion.div>

          {/* Right Section - Text & 3D */}
          <div className="flex flex-col items-center md:items-start max-w-2xl">
            <h1 className="text-5xl font-extrabold text-white dark:text-yellow-400 drop-shadow-lg">
              Hi, I&#39;m Prakash L Waddar 🚀
            </h1>
            <p className="text-xl text-gray-100 dark:text-gray-400">
              Full-Stack Developer | AI & Data Science Enthusiast
            </p>

            <motion.a
              href="/projects"
              className="mt-6 px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 
              rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              🚀 View My Work
            </motion.a>
          </div>

          {/* 3D Hero Section */}
          <div className="hidden md:block w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <ThreeDHero />
          </div>
        </motion.section>
      </ScrollSection>

      {/* About Section */}
      <ScrollSection>
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="mt-4 text-lg">
            I am a Full-Stack Developer with expertise in AI & Data Science...
          </p>
        </div>
      </ScrollSection>

      {/* Projects Section */}
      <ScrollSection>
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="mt-4 text-lg">Here are some of my works...</p>
        </div>
      </ScrollSection>

      {/* Contact Section */}
      <ScrollSection>
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="mt-4 text-lg">
            {`Let's connect and build something amazing!`}
          </p>
        </div>
      </ScrollSection>
    </>
  );
}
