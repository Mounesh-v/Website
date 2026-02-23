import React from "react";

const posts = [
  { title: "How Startups Scale Fast", date: "Feb 2026" },
  { title: "Building Modern SaaS Apps", date: "Jan 2026" },
  { title: "Design Systems for Developers", date: "Dec 2025" },
];

export default function Blog() {
  return (
    <section className="py-24">
      <h1 className="text-5xl font-bold text-center">Blog</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto px-6">
        {posts.map((post, i) => (
          <div key={i} className="border rounded-xl p-6 shadow hover:shadow-lg">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="font-semibold text-xl mt-2">{post.title}</h3>
            <button className="mt-4 text-black font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}