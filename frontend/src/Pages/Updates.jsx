import React from "react";

const updates = [
  { date: "Jan 2026", text: "AI Dashboard Released" },
  { date: "Dec 2025", text: "Performance Upgrade" },
  { date: "Nov 2025", text: "New Analytics System" },
];

export default function Updates() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-bold text-center">Product Updates</h1>

      <div className="mt-16 space-y-8">
        {updates.map((u, i) => (
          <div key={i} className="border-l-4 border-black pl-6">
            <p className="font-semibold">{u.date}</p>
            <p className="text-gray-600">{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}