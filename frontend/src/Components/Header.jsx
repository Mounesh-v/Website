import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed p-4 top-0 left-0 z-50 bg-gradient-to-br from-[#7b95cd] via-[#7888cc] to-[#637eb9] text-white backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white cursor-pointer"
          >
            Startup
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              <motion.span whileHover={{ y: -2 }}>
                {link.name}
              </motion.span>
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <Link to="/contact">
            <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden  bg-gradient-to-br from-[#8ca7e1] via-[#7888cc] to-[#638de6] border-gray-200"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-white font-medium hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/contact">
              <button className="mt-2 px-5 py-2 rounded-xl bg-black text-white font-medium">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;