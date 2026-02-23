import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link to="/">
              <h2 className="text-2xl font-bold text-white cursor-pointer">
                🚀 Startup
              </h2>
            </Link>

            <p className="mt-4 text-sm text-gray-400">
              Building modern digital experiences for startups and innovators.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a href="https://twitter.com" target="_blank">
                <Twitter />
              </a>
              <a href="https://github.com" target="_blank">
                <Github />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:hello@startup.com">
                <Mail />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/projects" className="hover:text-white">Integrations</Link></li>
              <li><Link to="/updates" className="hover:text-white">Updates</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>

            <p className="text-sm text-gray-400 mb-4">
              Get product updates and startup news.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-900 border border-gray-700 focus:outline-none"
              />
              <button className="bg-white text-black px-4 rounded-r-lg font-medium hover:bg-gray-200 transition">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Startup. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
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