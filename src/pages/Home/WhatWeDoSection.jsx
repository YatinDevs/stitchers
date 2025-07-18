import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Tailoring Training Program",
    description:
      "Sponsor skill development courses for women and girls in garment manufacturing",
    link: "/training",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Indian women learning tailoring",
  },
  {
    title: "Self-Employment Support",
    description:
      "Guidance on setting up small businesses & career opportunities",
    link: "/programs/self-employment",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Indian woman entrepreneur",
  },
  {
    title: "SGAA Fashion Brand",
    description: "Fashion brand by artisans trained by Stitchers Garments",
    link: "/brand",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Indian traditional garments",
  },
  {
    title: "CSR Program",
    description: "CSR initiatives to empower women and support our artisans",
    link: "/csr",
    image:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1702&q=80",
    alt: "Women empowerment in India",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-[#e7e7e7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#d1a375] mb-4"
          >
            Stitchers Garments{" "}
            <span className="text-[#436f6e]">Initiatives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#8d8f8e] max-w-2xl mx-auto"
          >
            Creating meaningful opportunities for women through various
            initiatives
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#436f6e] mb-3">
                  {program.title}
                </h3>
                <p className="text-[#8d8f8e] mb-6 flex-grow">
                  {program.description}
                </p>
                <Link
                  to={program.link}
                  className="text-[#436f6e] hover:text-[#3a6261] font-medium flex items-center gap-1 mt-auto group-hover:underline"
                >
                  Know More{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
