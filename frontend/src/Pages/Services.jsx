import React from "react";
import { m } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import StaffAugmentation from "./Services/StaffAugmentation";
import AIServices from "./Services/AIServices";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom web & desktop applications, enterprise software solutions, and API integrations with automation workflows.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User research, wireframing, interactive prototypes, and complete product design with branding strategy.",
  },
  {
    icon: Smartphone,
    title: "Web Development",
    desc: "Responsive websites, scalable e-commerce platforms, and CMS solutions using WordPress, React and modern stacks.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud migration, CI/CD pipeline setup, infrastructure automation, and secure server & database management.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native Android & iOS applications and cross-platform apps built with React Native and Flutter.",
  },
  {
    icon: BarChart3,
    title: "Digital Solutions",
    desc: "ERP & CRM systems, SaaS product development, and business automation tools to accelerate growth.",
  },
];

const Services = () => {
  return (
    <section className="relative -mt-10 py-24 overflow-hidden">
      {/*  SAME BACKGROUND  */}
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
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <m.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full -z-10"
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
          <h1 className="text-4xl font-bold text-white">Our Services</h1>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end digital solutions helping startups and
            businesses launch, scale and succeed faster.
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/10
                  p-8
                  rounded-2xl
                  shadow-lg
                  hover:bg-white/20
                  transition
                "
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 text-white mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">{service.desc}</p>

                <button className="mt-5 font-medium text-white hover:underline">
                  Learn More →
                </button>
              </m.div>
            );
          })}
        </div>
      </div>
      <StaffAugmentation/>
      <AIServices/>
    </section>
  );
};

export default Services;
