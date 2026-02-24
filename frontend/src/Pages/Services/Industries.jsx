import React from "react";
import { m } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Truck,
  Rocket,
} from "lucide-react";

const industries = [
  { name: "Fintech & Banking", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Education & E-learning", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Logistics & Transport", icon: Truck },
  { name: "Startups & SMEs", icon: Rocket },
];

export default function Industries() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* SAME BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-white">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Industries We Serve
        </h1>

        {/* Horizontal Scroll */}
        <div className="mt-16 overflow-hidden">

          <m.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...industries, ...industries].map((industry, i) => {
              const Icon = industry.icon;

              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-4
                    bg-white/10
                    backdrop-blur-lg
                    px-8 py-5
                    rounded-xl
                    border border-white/10
                    whitespace-nowrap
                  "
                >
                  <Icon size={28} />
                  <span className="text-lg font-medium">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </m.div>

        </div>

      </div>
    </section>
  );
}