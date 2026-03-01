import React from "react";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    company: "TWIDHU TECHNOLOGIES",
    review:
      "Good dedicated team for resource outsourcing.",
    author: "Pardeep",
  },
  {
    company: "BEST LABZ",
    review:
      "We got immediate pre-vetted developer from Alagu Tech Solutions.",
    author: "Riyaz",
  },
  {
    company: "PARCEL WALAH",
    review:
      "Fast mobile app development team. They give great response and support.",
    author: "Sahil",
  },
  {
    company: "THIRU KALYANAMALAI MATRIMONY",
    review:
      "They delivered unexpected design quality and excellent delivery for my matrimony website.",
    author: "Guru Karthick",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden text-center">

      {/* ✅ Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 -z-10" />

      {/* Glow Effects */}
      <m.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <m.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-white">
        Client Testimonials
        <span className="block text-gray-300 mt-2">
          What Our Clients Say About Us
        </span>
      </h2>

      {/* Slider */}
      <div className="mt-14 max-w-6xl mx-auto px-6">

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left shadow-xl hover:scale-105 transition">

                {/* Stars */}
                <div className="text-yellow-400 mb-4 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Review */}
                <p className="text-gray-200 italic">
                  "{item.review}"
                </p>

                {/* Client */}
                <div className="mt-6">
                  <h4 className="text-white font-semibold">
                    {item.author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.company}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;