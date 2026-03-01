import React from "react";
import { m } from "framer-motion";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    desc: "Build modern scalable UI using React, Tailwind and modern frontend architecture.",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    desc: "Design secure APIs, scalable services and cloud infrastructure.",
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    desc: "Create intuitive product experiences focused on usability and design systems.",
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full Time",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    desc: "Lead product strategy, roadmap planning and cross-team collaboration.",
  },
];

export default function Careers() {
  const navigate = useNavigate();

  const handleCarrer = () => {
    navigate("/Investment-Partner");
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/*  BACKGROUND  */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=60&w=1400&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 -z-10" />

      {/*  HERO  */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <m.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Build The Future With Us
        </m.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          We are a team of engineers, designers and innovators building
          world-class digital products. Join us and help shape the next
          generation of technology.
        </p>
      </div>

      {/*  BENEFITS  */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-20 px-6 text-center">
        {["Remote Friendly", "Growth Culture", "Competitive Salary"].map(
          (benefit, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-semibold">{benefit}</h3>
            </m.div>
          ),
        )}
      </div>

      {/*  JOB LIST  */}
      <div className="max-w-5xl mx-auto mt-24 px-6 space-y-10">
        {jobs.map((job, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="
        bg-white/10
        backdrop-blur-md
        border border-white/10
        rounded-2xl
        overflow-hidden
        text-white
        shadow-lg
        hover:bg-white/20
        transition
      "
          >
            {/* Job Image */}
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">{job.title}</h3>

                <p className="text-gray-300 mt-2">{job.desc}</p>

                <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <Briefcase size={16} /> {job.type}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={16} /> Immediate
                  </span>
                </div>
              </div>

              <button
                onClick={handleCarrer}
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Apply Now
              </button>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
