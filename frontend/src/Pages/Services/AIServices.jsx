import React from "react";
import { Brain, Cpu, Megaphone } from "lucide-react";
import ai from "../../assets/ai.png"
import ml from "../../assets/ml.png"
import market from "../../assets/market.png"

export default function AIServices() {
  return (
    <section className="relative py-24 overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Artificial Intelligence & Automation
        </h1>

        <p className="mt-6 text-gray-300 text-center max-w-4xl mx-auto">
          Transform your business with cutting-edge AI and automation solutions.
          We help organizations leverage artificial intelligence to streamline
          operations, enhance decision-making, and drive innovation. Our
          comprehensive solutions deliver measurable results and sustainable
          competitive advantages.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* ML SERVICE */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition">

            <img
              src={ai}
              alt="Machine Learning"
              className="rounded-lg mb-6"
            />

            <Brain size={32} />

            <h3 className="text-xl font-semibold mt-4">
              Machine Learning & AI Model Development
            </h3>

            <p className="text-gray-300 mt-3">
              Build intelligent systems that learn from data and improve over
              time. We develop custom machine learning models, predictive
              analytics solutions, and AI-powered applications tailored to your
              business goals.
            </p>

            <p className="text-gray-400 mt-3">
              From supervised learning to deep neural networks, we implement
              advanced algorithms that deliver actionable insights and automated
              decision-making.
            </p>
          </div>

          {/* AUTOMATION SERVICE */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition">

            <img
              src={ml}
              alt="Automation"
              className="rounded-lg mb-6"
            />

            <Cpu size={32} />

            <h3 className="text-xl font-semibold mt-4">
              Intelligent Process Automation (IPA)
            </h3>

            <p className="text-gray-300 mt-3">
              Streamline operations using intelligent automation solutions. We
              implement RPA, workflow automation, and AI-driven process
              optimization to reduce manual effort and minimize errors.
            </p>

            <p className="text-gray-400 mt-3">
              Our automation integrates seamlessly with existing systems to
              accelerate processes and deliver immediate efficiency gains.
            </p>
          </div>

          {/* DIGITAL MARKETING */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition">

            <img
              src={market}
              alt="Digital Marketing"
              className="rounded-lg mb-6"
            />

            <Megaphone size={32} />

            <h3 className="text-xl font-semibold mt-4">
              Digital Marketing Solutions
            </h3>

            <p className="text-gray-300 mt-3">
              Amplify your brand's online presence using data-driven digital
              marketing strategies. We combine creativity, analytics, and
              performance optimization to drive measurable business growth.
            </p>

            <ul className="text-gray-400 mt-4 space-y-1 text-sm">
              <li>✔ Search Engine Optimization (SEO)</li>
              <li>✔ Pay-Per-Click Advertising (PPC)</li>
              <li>✔ Social Media Marketing & Management</li>
              <li>✔ Content Marketing Strategy</li>
              <li>✔ Email Marketing Campaigns</li>
              <li>✔ Brand Development & Reputation Management</li>
              <li>✔ Analytics & Performance Tracking</li>
              <li>✔ Conversion Rate Optimization (CRO)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}