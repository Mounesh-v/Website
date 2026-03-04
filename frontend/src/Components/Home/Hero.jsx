import React from "react";
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const hadleNavigate = () => {
    navigate("/Investment-Partner");
  };

  const hadleProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="relative -mt-10 h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      {/*  DARK OVERLAY (VERY IMPORTANT)  */}
      <div className="absolute inset-0 bg-black/60 -z-10" />
      {/*  CONTENT  */}
      <div className="relative max-w-7xl mx-auto px-6 h-full grid lg:grid-cols-2 items-center">
        {/* LEFT */}
        <m.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Engineering Digital
            <span className="block text-blue-400">Future Experiences</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-lg">
            Deliver scalable enterprise solutions powered by modern technology,
            intelligent automation, and world-class engineering excellence.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={hadleProjects}
              className="px-7 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Solutions
            </button>

            <button
              onClick={hadleNavigate}
              className="px-7 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
