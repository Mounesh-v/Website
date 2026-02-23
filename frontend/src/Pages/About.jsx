import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our Company
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            We are a technology-driven startup focused on building modern
            digital solutions that empower businesses to grow faster,
            innovate smarter, and scale globally.
          </p>
        </motion.div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-3xl shadow-xl"
            alt="team"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">
              Building Future-Ready Products
            </h2>

            <p className="mt-4 text-gray-600">
              Our mission is to simplify technology and create impactful
              products that solve real-world problems. From startups to
              enterprises, we deliver scalable solutions powered by
              innovation and design excellence.
            </p>

            <p className="mt-4 text-gray-600">
              We combine creativity, engineering, and strategy to help
              organizations transform digitally and achieve long-term success.
            </p>
          </motion.div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "Empower businesses through innovative technology solutions.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "Become a global leader in digital innovation and transformation.",
            },
            {
              icon: Rocket,
              title: "Our Goal",
              desc: "Deliver scalable, reliable and high-performance products.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-black text-white rounded-xl mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "10+", label: "Team Members" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-4xl font-bold text-black">
                {stat.number}
              </h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;