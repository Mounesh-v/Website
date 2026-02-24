import React from "react";
import { m } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research & Planning",
    desc: "We analyze business goals, audience needs, and project requirements before starting development.",
  },
  {
    icon: Lightbulb,
    title: "Design & Strategy",
    desc: "Our team designs intuitive user experiences and defines scalable technical architecture.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "We build high-performance applications using modern technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    desc: "After deployment, we optimize performance and help your product scale successfully.",
  },
];

const WorkProcess = () => {
  return (
    <section className="relative py-24 overflow-hidden">

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

        {/*  Heading  */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Our Work Process
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A proven workflow designed to deliver scalable,
            innovative, and high-quality digital solutions.
          </p>
        </m.div>

        {/*  Steps  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
transition={{ type: "spring", stiffness: 250 }}
                className="
                  relative
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/10
                  p-8
                  rounded-2xl
                  shadow-lg
                  hover:bg-white/20
                  transition
                  text-center
                "
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-sm text-gray-400">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/20 text-white rounded-xl mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">
                  {step.desc}
                </p>
              </m.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;