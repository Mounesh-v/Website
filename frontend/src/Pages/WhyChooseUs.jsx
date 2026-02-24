import React from "react";
import { m } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Performance",
    desc: "Optimized architecture ensuring lightning-fast loading and seamless user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Enterprise-grade security protecting your data and customer information.",
  },
  {
    icon: Zap,
    title: "Easy Integration",
    desc: "Connect tools and services effortlessly with powerful APIs and automation.",
  },
  {
    icon: Users,
    title: "User Focused",
    desc: "Designed with real user behavior in mind for maximum engagement.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    desc: "Advanced analytics help you make smarter business decisions.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated support team ready anytime your business needs help.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/*  Background Image  */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/*  Overlay  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      {/*  Floating Glow Animation  */}
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

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/*  Heading  */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We help startups and businesses grow faster with scalable
            technology, modern design, and performance-focused solutions.
          </p>
        </m.div>

        {/*  Features Grid  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
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
                <div className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  mb-5 mx-auto
                ">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">
                  {feature.desc}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;