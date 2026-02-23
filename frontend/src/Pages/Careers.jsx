import React from "react";

const jobs = [
  "Frontend Developer",
  "Backend Engineer",
  "UI/UX Designer",
  "Product Manager",
];

export default function Careers() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-bold">Join Our Team</h1>

      <div className="mt-16 max-w-3xl mx-auto space-y-6">
        {jobs.map((job, i) => (
          <div key={i} className="border p-6 rounded-xl flex justify-between">
            <span>{job}</span>
            <button className="bg-black text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}