import React from "react";
import { m } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Phone, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300">

      {/*  SAME PROFESSIONAL BG  */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black -z-10" />

      {/* Floating Glow Effects */}
      <m.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <m.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/*  TOP GRID  */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* BRAND */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <h2 className="text-2xl font-bold text-white">
                 Alagu Tech Solution
              </h2>
            </Link>

            <p className="mt-5 text-base text-gray-300 max-w-sm">
              Building modern digital experiences for startups,
              innovators, and forward-thinking businesses.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-7">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <m.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon size={20} />
                </m.a>
              ))}
            </div>
          </m.div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-base">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Features</Link></li>
              <li><Link to="/projects" className="hover:text-white">Integrations</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-base">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          {/* CONTACT INFO */}
<m.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-white font-semibold text-lg mb-6">
    Contact Us
  </h3>

  <div className="space-y-4 text-base">

    <p className="flex items-start gap-3">
      <Mail size={18} />
      info@alaguts.com
    </p>

    <p className="flex items-start gap-3">
      <Phone size={18} />
      +91-9751339617
    </p>

    <p className="flex items-start gap-3">
      <Globe size={18} />
      www.alaguts.com
    </p>

    <p className="flex items-start gap-3">
      <MapPin size={18} />
      9/i-1, KTR Complex,
      Agraharam Street, Near MSB Nadar Bus Stand,
      Virudhunagar - 626001, India.
    </p>

  </div>
</m.div>

        </div>

        {/*  BOTTOM BAR  */}
        <div className="border-t border-white/10 mt-16 pt-7 flex flex-col md:flex-row justify-between items-center text-base text-gray-400">

          <p>
            © {new Date().getFullYear()} Startup. All rights reserved.
          </p>

          <div className="flex gap-7 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;