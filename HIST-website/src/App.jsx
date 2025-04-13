import React from "react";
import Flag from "react-world-flags";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DirectorWord from "./components/DirectorWord";
import AboutUs from "./components/AboutUs";
import Partners from "./components/Partners";
import WhyUs from "./components/WhyUs";
import ContactUs from "./components/ContactUs";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <button className="fixed bottom-4 right-8 bg-[#c9ab88] text-2xl text-white z-50 w-fit !px-4 !py-2 rounded-full shadow-xl hover:bg-[#b89a77] transition">
        <div className="flex items-center justify-center gap-1">
          <Flag code="GB" className=" h-5" />
          <span className="flex-shrink-0">EN</span>
        </div>
      </button>

      <NavBar />
      <Hero />
      <DirectorWord />
      <AboutUs />
      <Partners />
      <WhyUs />
      <ContactUs />
      <ContactSection />
    </div>
  );
};

export default App;
