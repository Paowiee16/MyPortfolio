import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import Hero from "./assets/components/hero/Hero";
import About from "./assets/components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
