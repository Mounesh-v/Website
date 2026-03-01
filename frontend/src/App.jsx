import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home/Home";
import Services from "./Pages/Services";
import OurProjects from "./Pages/OurProjects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolios/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Investment-Partner" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolios" element={<Portfolio />} />
        


          <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
};

export default App;
