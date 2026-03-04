import React from "react";
import { m } from "framer-motion";

const InvestmentPartner = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-[#081c2c] via-[#0b2e4a] to-[#140b2e] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <m.form
          action="https://formsubmit.co/mouneshv776@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-lg"
        >
          <h2 className="text-2xl  font-bold text-center mb-4">
            Strategic Investment Partnership
          </h2>

          <p className="text-gray-300 text-center mb-10">
            Partner with us to expand digital services, build innovative
            products, and scale global technology solutions together.
          </p>

          {/* FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/*  CONTACT INFO  */}
          <h3 className="formHeading">Contact Information</h3>

          <input
            name="name"
            required
            placeholder="Full Name"
            className="inputStyle"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Business Email"
            className="inputStyle"
          />
          <input
            name="company"
            placeholder="Company / Organization"
            className="inputStyle"
          />

          {/*  PARTNERSHIP TYPE  */}
          <h3 className="formHeading mt-8 text-white">Partnership Type</h3>

          <select
            name="partnershipType"
            className="w-full mb-4 p-3 rounded-lg 
  bg-white/10 border border-white/20 
  text-white outline-none focus:border-cyan-400"
          >
            <option value="" className="text-black">
              Select Partnership Type
            </option>
            <option className="text-black">Investment Partner</option>
            <option className="text-black">Business Collaboration</option>
            <option className="text-black">Technology Partner</option>
            <option className="text-black">Channel / Sales Partner</option>
            <option className="text-black">Joint Venture</option>
          </select>

          <input
            name="investmentRange"
            placeholder="Investment / Collaboration Budget"
            className="inputStyle"
          />

          <select
            name="interestArea"
            className="w-full mb-4 p-3 rounded-lg 
  bg-white/10 border border-white/20 
  text-white outline-none focus:border-cyan-400"
          >
            <option value="" className="text-black">
              Area of Interest
            </option>

            <option className="text-black">Web Development</option>
            <option className="text-black">Mobile App Development</option>
            <option className="text-black">AI Solutions</option>
            <option className="text-black">Product Development</option>
            <option className="text-black">Startup Collaboration</option>
          </select>

          {/*  MESSAGE  */}
          <h3 className="formHeading mt-8">Proposal</h3>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your partnership or investment proposal..."
            className="inputStyle"
          />

          <button className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-lg font-semibold">
            Submit Partnership Request
          </button>
        </m.form>
      </div>
    </section>
  );
};

export default InvestmentPartner;
