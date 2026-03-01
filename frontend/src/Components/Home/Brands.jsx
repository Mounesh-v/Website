import React from "react";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import svj from "../../assets/ourClients/svj.jpeg";
import At from "../../assets/ourClients/At.jpeg";
import travox from "../../assets/ourClients/travox.jpeg";
import p from "../../assets/ourClients/p.jpeg";
import lncubuslogo from "../../assets/ourClients/lncubuslogo.png";
import FlyawayLogo from "../../assets/ourClients/FlyawayLogo.png";
import thiru from "../../assets/ourClients/thiru.png";
import twindu from "../../assets/ourClients/twindu.webp";

import "swiper/css";

const clients = [
  { name: "SVJ", image: svj },
  { name: "AT", image: At },
  { name: "Travox", image: travox },
  { name: "P", image: p },
  { name: "Incubus", image: lncubuslogo },
  { name: "Flyaway", image: FlyawayLogo },
  { name: "Thiru", image: thiru },
  { name: "Twindu", image: twindu },
];

const OurClients = () => {
  return (
    <section className="relative py-24 overflow-hidden text-center">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 -z-10" />

      {/* Floating Glow */}
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
        Our Clients
        <span className="block text-gray-300 mt-2">
          Trusted Brands We Work With
        </span>
      </h2>

      {/* Carousel */}
      <div className="mt-14 max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={40}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 h-28 flex items-center justify-center shadow-xl hover:scale-105 transition">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-16 object-contain  transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
