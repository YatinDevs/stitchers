import React from "react";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import WhatWeDoSection from "./WhatWeDoSection";
import ProductsSection from "./ProductsSection";
import ImpactSection from "./ImpactSection";
import FacilitiesSection from "./FacilitiesSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <ImpactSection />
      <FacilitiesSection />
    </div>
  );
}

export default Home;
