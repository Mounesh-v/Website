import React from "react";
import { m } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TechnologyStack from "./Services/TechnologyStack";
import Industries from "./Services/Industries";
import DigitalMarketing from "./Services/DigitalMarketing";


const projects = [
  {
    title: "AI SaaS Dashboard",
    description:
      "Analytics platform helping businesses monitor performance using AI insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable online store with secure payments and modern shopping experience.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Landing Page",
    description:
      "High-converting landing page optimized for marketing and growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mobile Finance App",
    description:
      "Smart finance management application with intuitive UX design.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Learning Platform",
    description:
      "Interactive e-learning system with video streaming and dashboards.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cloud Management Tool",
    description:
      "Cloud deployment and monitoring solution for modern teams.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
];

const OurProjects = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/*  Professional Background  */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      {/* Floating Glow */}
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
          <h2 className="text-4xl font-bold text-white">
            Our Projects
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore some of the innovative products and solutions
            we've built for startups and growing businesses.
          </p>
        </m.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
transition={{ type: "spring", stiffness: 250 }}
              className="
                group
                bg-white/10
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:bg-white/20
                transition
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">
                  {project.description}
                </p>

                <button className="flex items-center gap-2 mt-5 text-white font-medium hover:gap-3 transition">
                  View Project <ExternalLink size={18} />
                </button>
              </div>
            </m.div>
          ))}
        </div>

      </div>
      <Industries/>
      <TechnologyStack/>
      <DigitalMarketing/>
    </section>
  );
};

export default OurProjects;