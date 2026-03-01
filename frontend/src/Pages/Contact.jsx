import { useState } from "react";
import { m } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import InvestmentPartner from "./InvestmentPartner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mouneshv696@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,

            _subject: "🚀 New Contact Message - Alagu Tech Solutions",

            _template: "table",
          }),
        },
      );

      const data = await response.json();

      if (data.success === "true" || data.success) {
        alert("Message Sent Successfully ✅");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };
  return (
    <>
      <InvestmentPartner />
      <section className="relative py-24 overflow-hidden">
        {/*  SAME GLOBAL BACKGROUND  */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

        {/* Glow Effects */}
        <m.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <m.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full -z-10"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/*  Heading  */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>

            <p className="mt-4 text-gray-300">
              Have a project in mind? Let's build something amazing together.
            </p>
          </m.div>

          {/*  Content  */}
          <div className="grid lg:grid-cols-2 gap-14 mt-16">
            {/* Contact Form */}
            <m.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              p-10
              rounded-2xl
              shadow-lg
              space-y-6
            "
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Alagu Tech Solutions. Our team will reach you soon."
              />
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>
            </m.form>

            {/* Contact Info */}
            <m.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center space-y-8 text-white"
            >
              <h2 className="text-2xl font-semibold">Get in Touch</h2>

              <p className="text-gray-300">
                We'd love to hear from you. Reach out to us through any of the
                following ways.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" />
                  <span>info@alaguts.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-400" />
                  <span>
                    9/i-1, KTR Complex, Agraharam Street,
                    <br />
                    Near MSB Nadar Bus Stand,
                    <br /> Virudhunagar - 626001, India.
                  </span>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
