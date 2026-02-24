import React from "react";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* ===== SAME GLOBAL BACKGROUND ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=60&w=1400&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      {/* Glow Effects */}
      <m.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <m.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          bg-white/10
          backdrop-blur-lg
          border border-white/10
          rounded-3xl
          p-12
          shadow-xl
          text-white
          max-w-lg
        "
      >
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Go Back Home
          </button>
        </Link>
      </m.div>

    </section>
  );
}