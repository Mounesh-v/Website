import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#dfdddd] ">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Build Your Startup
            <span className="block text-blue-600">
              Faster Than Ever 🚀
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Launch modern products with powerful tools, scalable
            architecture, and beautiful user experiences designed
            for growth-driven startups.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
            >
              Live Demo
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-500 text-sm">Active Users</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
              <p className="text-gray-500 text-sm">Uptime</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE / MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 border">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="dashboard"
              className="rounded-xl"
            />
          </div>

          {/* Floating Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;