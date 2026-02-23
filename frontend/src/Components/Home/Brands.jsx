import React from "react";

const brands = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Airbnb",
  "Stripe",
  "Shopify",
  "Notion",
  "Slack",
  "OpenAI",
];

const Brands = () => {
  return (
    <section className="py-16 bg-[#dfdddd] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Trusted By Fast-Growing Startups &
          <span className="block text-gray-500">
            Forward-Thinking Brands
          </span>
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative mt-12">
        <div className="flex w-max animate-marquee gap-16">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-gray-400 whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;