import React from "react";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  console.log(import.meta.env.VITE_WHATSAPP_NUMBER);

  return createPortal(
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999999,
      }}
    >
      <div
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "16px",
          borderRadius: "50%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <FaWhatsapp size={28} />
      </div>
    </a>,
    document.body
  );
};

export default Whatsapp;