import React from "react";

const stack = {
  Frontend: ["React", "Angular", "Vue"],
  Backend: ["Node.js", "Express", "Python", "PHP", ".NET"],
  Mobile: ["Flutter", "React Native", "Kotlin"],
  Database: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  Cloud: ["AWS", "Google Cloud", "Azure"],
};

export default function TechnologyStack() {
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
          Our Technology Stack
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {Object.entries(stack).map(([key, values]) => (
            <div key={key} className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{key}</h3>
              {values.map((v, i) => (
                <p key={i} className="text-gray-300">{v}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}