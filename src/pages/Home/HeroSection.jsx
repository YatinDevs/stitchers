import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-[#e0dbdb] to-white overflow-hidden mt-30 md:mt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Empowering Women Through{" "}
            <span className="text-[#436f6e]">Garment Manufacturing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#8d8f8e] mb-8 max-w-lg"
          >
            Stitching Waves creates opportunities for thousands of women through
            skill development and employment in garment production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/about"
              className="bg-[#436f6e] hover:bg-[#3a6261] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Our Story <ArrowRight size={18} />
            </Link>

            <button className="flex items-center gap-2 text-[#436f6e] hover:text-[#3a6261] font-medium">
              <div className="w-10 h-10 rounded-full bg-[#e0dbdb] flex items-center justify-center">
                <Play size={16} className="fill-[#436f6e] text-[#436f6e]" />
              </div>
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Women working at Stitching Waves"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
