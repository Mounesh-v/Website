import React from "react";
import { BarChart3, Megaphone } from "lucide-react";

const services = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising",
  "Social Media Marketing",
  "Content Marketing & Strategy",
  "Email Marketing Campaigns",
  "Brand Development & Reputation Management",
  "Analytics & Performance Tracking",
  "Conversion Rate Optimization (CRO)",
];

export default function DigitalMarketing() {
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
          Digital Marketing Services
        </h1>

        <p className="mt-6 text-gray-300 text-center max-w-3xl mx-auto">
          Amplify your brand with data-driven marketing strategies,
          analytics and high-performance campaigns.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {services.map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl">
              <Megaphone className="mb-3" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}