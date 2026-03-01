import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "TechVentures Capital",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400",
    desc: "Supporting innovative startups with strategic investments.",
  },
  {
    name: "Future Growth Fund",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    desc: "Accelerating scalable technology solutions worldwide.",
  },
  {
    name: "Global Innovation Hub",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    desc: "Empowering next-generation digital transformation.",
  },
  {
    name: "AI Venture Labs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    desc: "Investing in AI-driven products and intelligent systems.",
  },
];

export default function InvestmentPartner() {
  return (
    <section className="w-full  py-30 bg-gradient-to-r from-[#081c2c] via-[#0b2e4a] to-[#140b2e] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Investment Partners</h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Collaborating with visionary investors who help us build, scale, and
            deliver innovative digital solutions worldwide.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:border-cyan-400"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-40 w-full object-cover"
              />

              <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {partner.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
