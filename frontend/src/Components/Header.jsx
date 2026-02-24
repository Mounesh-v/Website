import React, { useState } from "react";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Careers", path: "/careers" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 h-20">

      {/* SAME BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl -z-10" />

      {/* Glow */}
      <m.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* NAV CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-white border-b border-white/10">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer whitespace-nowrap"
          >
            Alagu Tech Solution
          </m.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              <m.span whileHover={{ y: -2 }}>
                {link.name}
              </m.span>
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <Link to="/contact">
            <button className="px-4 lg:px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </m.div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <m.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="relative md:hidden overflow-hidden"
        >

          {/* SAME BG */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-black/85 backdrop-blur-xl -z-10" />

          <m.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="flex flex-col px-6 py-6 gap-5 text-white border-b border-white/10">

            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/contact">
              <button className="mt-3 w-full px-6 py-3 rounded-xl bg-white text-black font-semibold">
                Get Started
              </button>
            </Link>

          </div>
        </m.div>
      )}
    </header>
  );
};

export default Header;