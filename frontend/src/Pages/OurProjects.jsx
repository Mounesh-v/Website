import React from "react";
import { m } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TechnologyStack from "./Services/TechnologyStack";
import Industries from "./Services/Industries";
import DigitalMarketing from "./Services/DigitalMarketing";
import { portfolioData } from "./Portfolios/portfolioData.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const OurProjects = () => {
  const handleNavigateToPortfolio = () => {
    window.location.href = "/portfolios";
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      {/* Glow Effects */}
      <m.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <m.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">Our Projects</h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore some of the innovative products and solutions we've built
            for startups and growing businesses.
          </p>
        </m.div>

        {/* Project Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-16"
        >
          {portfolioData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    className="flex items-center gap-2 mt-6 hover:underline text-white"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Read More Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleNavigateToPortfolio}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Read More Projects
          </button>
        </div>
      </div>

      <Industries />
      <TechnologyStack />
      <DigitalMarketing />
    </section>
  );
};

export default OurProjects;