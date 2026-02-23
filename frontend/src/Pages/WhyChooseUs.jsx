import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-24 bg-[#dfdddd]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We help startups and businesses grow faster with scalable
            technology, modern design, and performance-focused solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-white mb-5 mx-auto">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;