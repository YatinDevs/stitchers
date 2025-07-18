import React from "react";
import { motion } from "framer-motion";
import GalleryGrid from "../Home/GalleryGrid";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function FacilitiesPage() {
  const facilities = [
    {
      title: "Manufacturing Unit",
      description:
        "20,000 sq. ft. facility in Chalisgaon, Jalgaon with 300 advanced machines",
      icon: "🏭",
    },
    {
      title: "Embroidery Machines",
      description:
        "State-of-the-art computerized embroidery machines for intricate designs",
      icon: "🧵",
    },
    {
      title: "Air Blown Auto Spreader",
      description: "30 meter air blower table for efficient fabric spreading",
      icon: "🌬️",
    },
    {
      title: "Cutting Tables",
      description: "Precision cutting tables for accurate fabric cutting",
      icon: "✂️",
    },
    {
      title: "Quilting Machines",
      description:
        "Rich Pace computerized quilting machines for high-quality output",
      icon: "🖥️",
    },
    {
      title: "Production Lines",
      description: "4 dedicated production lines with 220 machines total",
      icon: "🏗️",
    },
  ];

  return (
    <div className="mt-50 bg-[#e7e7e7] ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#436f6e]">
            Our <span className="text-[#d1a375]">World-Class Facilities</span>
          </h1>
          <h3 className="text-xl text-[#8d8f8e] font-medium">
            Modern infrastructure enabling high-quality production
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 rounded-full bg-[#d1a375]"></div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#c5a17f]/30"
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#436f6e]">
                {facility.title}
              </h3>
              <p className="text-[#8d8f8e] leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Production Capacity */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#436f6e]">
              Production Capacity
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#d1a375]"></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-[#436f6e] p-6 rounded-lg text-white">
              <h3 className="text-4xl font-bold">60,000+</h3>
              <p>Garment units per month</p>
            </div>
            <div className="bg-[#d1a375] p-6 rounded-lg text-white">
              <h3 className="text-4xl font-bold">300+</h3>
              <p>Advanced machines</p>
            </div>
            <div className="bg-[#8d8f8e] p-6 rounded-lg text-white">
              <h3 className="text-4xl font-bold">4</h3>
              <p>Production lines</p>
            </div>
          </motion.div>
        </motion.div>

        <GalleryGrid />
      </div>
    </div>
  );
}

export default FacilitiesPage;
