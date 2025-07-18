import React from "react";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import WhatWeDoSection from "./WhatWeDoSection";
import ProductsSection from "./ProductsSection";
import ImpactSection from "./ImpactSection";
import FacilitiesSection from "./FacilitiesSection";
import VisionMissionGallery from "./VisionMissionGallery";
import GalleryGrid from "./GalleryGrid";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <ImpactSection />
      <FacilitiesSection />
      <VisionMissionGallery />
      <GalleryGrid />{" "}
    </div>
  );
}

export default Home;
