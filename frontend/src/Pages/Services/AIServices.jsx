import React from "react";
import { m } from "framer-motion";
import { Brain, Cpu } from "lucide-react";

export default function AIServices() {
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

      <div className="max-w-6xl mx-auto px-6 text-white">

        <h1 className="text-4xl font-bold text-center">
          Artificial Intelligence & Automation
        </h1>

        <p className="mt-6 text-gray-300 text-center max-w-3xl mx-auto">
          Transform your business using AI-powered automation,
          predictive analytics and intelligent decision systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white/10 p-8 rounded-xl">
            <Brain size={32} />
            <h3 className="text-xl font-semibold mt-4">
              Machine Learning & AI Model Development
            </h3>
            <p className="text-gray-300 mt-3">
              Custom ML models, predictive analytics,
              neural networks and AI applications designed
              for real business outcomes.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-xl">
            <Cpu size={32} />
            <h3 className="text-xl font-semibold mt-4">
              Intelligent Process Automation (IPA)
            </h3>
            <p className="text-gray-300 mt-3">
              RPA automation, workflow optimization and
              AI-driven operations to reduce manual effort
              and accelerate processes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}