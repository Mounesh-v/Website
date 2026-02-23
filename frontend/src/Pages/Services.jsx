import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern scalable web applications built with React, Node.js and cloud technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications delivering smooth user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Deploy, scale and manage applications securely on modern cloud infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful and user-centered interfaces focused on engagement and usability.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Growth-driven marketing strategies powered by analytics and automation.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Protect your business with enterprise-grade security and monitoring solutions.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions helping startups
            and businesses launch, scale and succeed faster.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-white mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {service.desc}
                </p>

                <button className="mt-5 font-medium text-black hover:underline">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;