import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI SaaS Dashboard",
    description:
      "Analytics platform helping businesses monitor performance using AI insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable online store with secure payments and modern shopping experience.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Startup Landing Page",
    description:
      "High-converting landing page optimized for marketing and growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Mobile Finance App",
    description:
      "Smart finance management application with intuitive UX design.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Learning Platform",
    description:
      "Interactive e-learning system with video streaming and dashboards.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  },
  {
    title: "Cloud Management Tool",
    description:
      "Cloud deployment and monitoring solution for modern teams.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
];

const OurProjects = () => {
  return (
    <section className="py-24 bg-[#dfdddd]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore some of the innovative products and solutions
            we've built for startups and growing businesses.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
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
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {project.description}
                </p>

                <button className="flex items-center gap-2 mt-5 text-black font-medium hover:gap-3 transition">
                  View Project <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProjects;