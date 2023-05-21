import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import Hero from "./assets/components/hero/Hero";
import About from "./assets/components/about/About";
import Projects from "./assets/components/projects/Projects";
import Contact from "./assets/components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About />
      <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
