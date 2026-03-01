import React from "react";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "./portfolioData.js";

export default function Portfolio() {
  return (
    <section className="relative py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0b1f3a] to-[#020617] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Our Portfolio</h2>

        <p className="text-gray-400 text-center mt-4">
          Take a look at some of the projects we've crafted with innovation,
          precision, and cutting-edge technology.
        </p>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="flex items-center gap-2 mt-6 hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
