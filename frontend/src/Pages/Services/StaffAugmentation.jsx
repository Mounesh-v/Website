import React from "react";
import { m } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";

const benefits = [
  "Flexible hiring (hourly, monthly, project-based)",
  "Access to a wide talent pool of IT professionals",
  "Seamless integration with your workflow",
  "Transparent communication and reporting",
  "Cost-effective and fast onboarding",
];

export default function StaffAugmentation() {
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      <m.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 text-white">

        <h1 className="text-4xl font-bold text-center">
          Staff Augmentation Services
        </h1>

        <p className="mt-6 text-gray-300 text-center max-w-3xl mx-auto">
          Boost your in-house capabilities with skilled developers,
          designers, testers and project managers available for
          short-term or long-term engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 flex gap-4"
            >
              <CheckCircle />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}