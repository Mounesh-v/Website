import React from "react";
import { m } from "framer-motion";

const brands = [
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix/E50914" },
  { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb/FF5A5F" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
  { name: "DigitalOcean", logo: "https://cdn.simpleicons.org/digitalocean/0080FF" },
];

const Brands = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/*  SAME PROFESSIONAL BG  */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      {/* Floating Glow Effects */}
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

      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white">
          Trusted by Fast-Growing Startups &
          <span className="block text-gray-300 mt-2">
            Forward-Thinking Brands
          </span>
        </h2>
      </div>

      {/*  Glass Logo Strip  */}
      <div className="relative mt-14 h-32 bg-black/30 backdrop-blur-md border-y border-white/10 overflow-hidden flex items-center">

        {/* Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee */}
        <div className="flex w-max animate-marquee gap-20 items-center">
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Brands;