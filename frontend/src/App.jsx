import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home/Home";
import Services from "./Pages/Services";
import OurProjects from "./Pages/OurProjects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Updates from "./Pages/Updates";
import Careers from "./Pages/Careers";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
