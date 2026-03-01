import React from "react";
import Hero from "./Hero";
import Brands from "./Brands";
import WhyChooseUs from "../../Pages/WhyChooseUs";
import OurProjects from "../../Pages/OurProjects";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Testimonials/>
      <WhyChooseUs />
      <OurProjects />
    </>
  );
};

export default Home;
