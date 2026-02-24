import React from "react";
import { m } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";
import { Search, Lightbulb, Code2 } from "lucide-react";
import about from "../assets/about.png"

const About = () => {
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

  return (
    <section className="relative py-24 overflow-hidden">
      {/*  SAME GLOBAL BACKGROUND  */}
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
        {/*  HERO INTRO  */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Our Company
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
            We are a technology-driven startup focused on building modern
            digital solutions that empower businesses to grow faster, innovate
            smarter, and scale globally.
          </p>
        </m.div>

        {/*  IMAGE + CONTENT  */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <m.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={about}
            className="rounded-3xl shadow-xl"
            alt="team"
          />

          <m.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white">
              Building Future-Ready Products
            </h2>

            <p className="mt-4 text-gray-300">
              Alagu Tech Solutions is a full-service software development
              company dedicated to transforming ideas into intelligent digital
              solutions. We specialize in delivering high-quality, scalable, and
              secure applications that empower businesses to grow in the digital
              era. Our team combines innovation, technology, and strategy to
              help clients achieve their business goals efficiently.
            </p>

            <p className="mt-4 text-gray-300">
              We combine creativity, engineering, and strategy to help
              organizations transform digitally and achieve long-term success.
            </p>
          </m.div>
        </div>

        {/*  MISSION / VISION  */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower businesses through cutting-edge technology, creative design, and seamless user experiences that drive success and growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become a trusted global technology partner delivering innovative and result-driven IT solutions that make a meaningful impact.",
            },
            {
              icon: Rocket,
              title: "Our Goal",
              desc: "Deliver scalable, reliable and high-performance products.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <m.div
                key={index}
                whileHover={{ y: -8 }}
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/10
                  p-8
                  rounded-2xl
                  text-center
                  shadow-lg
                  hover:bg-white/20
                  transition
                "
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/20 text-white rounded-xl mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">{item.desc}</p>
              </m.div>
            );
          })}
        </div>

        {/*  STATS  */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "10+", label: "Team Members" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-4xl font-bold text-white">{stat.number}</h3>

              <p className="text-gray-400 mt-2">{stat.label}</p>
            </m.div>
          ))}
        </div>
      </div>
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

      <div className="max-w-7xl mx-auto px-6 mt-20">
        {/*  Heading  */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">Our Work Process</h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A proven workflow designed to deliver scalable, innovative, and
            high-quality digital solutions.
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
                // transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative  bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition text-center"
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

                <p className="text-gray-300 mt-3 text-sm">{step.desc}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
