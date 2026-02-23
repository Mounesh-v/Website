import React from "react";

const plans = [
  { name: "Starter", price: "Free", features: ["Basic Features", "Community Support"] },
  { name: "Pro", price: "$19/mo", features: ["All Features", "Priority Support", "Analytics"] },
  { name: "Enterprise", price: "$49/mo", features: ["Unlimited Users", "Dedicated Support"] },
];

export default function Pricing() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-bold">Pricing Plans</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="border rounded-2xl p-10 shadow hover:shadow-xl">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}</p>

            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((f, idx) => (
                <li key={idx}>✓ {f}</li>
              ))}
            </ul>

            <button className="mt-8 bg-black text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}