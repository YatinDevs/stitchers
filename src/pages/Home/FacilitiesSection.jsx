import React from "react";
import { motion } from "framer-motion";
import { Factory, Scissors, LayoutGrid } from "lucide-react";
import { RxSewingPin } from "react-icons/rx";

const facilities = [
  {
    icon: <Factory size={40} className="text-[#436f6e]" />,
    title: "20,000 Sq. Ft. Facility",
    description:
      "Our manufacturing unit in Chalisgaon, Jalgaon spans 20,000 square feet with advanced infrastructure",
  },
  {
    icon: <Scissors size={40} className="text-[#436f6e]" />,
    title: "Air Blown Auto Spreader",
    description:
      "Advanced cutting tables and spreading machines for precision fabric handling",
  },
  {
    icon: <RxSewingPin size={40} className="text-[#436f6e]" />,
    title: "220+ Machines",
    description:
      "Including 137 single needle, 8 edge cutters, and 10 overlock machines",
  },
  {
    icon: <LayoutGrid size={40} className="text-[#436f6e]" />,
    title: "45,000 Pcs/Month",
    description:
      "Production capacity with 4 line outputs for efficient manufacturing",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-[#e7e7e7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#436f6e] mb-4"
          >
            Stitchers Garments{" "}
            <span className="text-[#c5a17f]">Facilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#8d8f8e] max-w-2xl mx-auto"
          >
            We combine traditional craftsmanship with modern technology to
            deliver quality garments and home furnishings
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all border border-[#d3a070]/20"
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className="text-xl font-bold text-[#436f6e] mb-2">
                {facility.title}
              </h3>
              <p className="text-[#8d8f8e]">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
