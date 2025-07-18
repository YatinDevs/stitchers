import React from "react";
import { motion } from "framer-motion";

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

function TrainingPage() {
  const programs = [
    {
      title: "Basic Tailoring",
      description: "6-week course covering fundamental stitching techniques",
      duration: "6 weeks",
      icon: "✂️",
    },
    {
      title: "Advanced Garment Construction",
      description: "Master complex garment assembly and finishing",
      duration: "8 weeks",
      icon: "👗",
    },
    {
      title: "Machine Operation",
      description: "Training on industrial sewing machines and equipment",
      duration: "4 weeks",
      icon: "🖥️",
    },
    {
      title: "Quality Control",
      description: "Learn inspection techniques and quality standards",
      duration: "3 weeks",
      icon: "🔍",
    },
    {
      title: "Pattern Making",
      description: "From basic patterns to advanced design adaptations",
      duration: "10 weeks",
      icon: "📐",
    },
    {
      title: "Entrepreneurship",
      description: "Business skills for starting your own tailoring business",
      duration: "5 weeks",
      icon: "💼",
    },
  ];

  return (
    <div className="training-page bg-[#e7e7e7] mt-50 ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#436f6e]">
            Empowering Through{" "}
            <span className="text-[#d1a375]">Skills Training</span>
          </h1>
          <h3 className="text-xl text-[#8d8f8e] font-medium">
            Comprehensive programs to build careers in garment manufacturing
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 rounded-full bg-[#d3a070]"></div>
          </div>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#c5a17f]"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#436f6e]">
                {program.title}
              </h3>
              <p className="text-[#8d8f8e] mb-4 leading-relaxed">
                {program.description}
              </p>
              <div className="text-sm text-[#d3a070] font-medium">
                Duration: {program.duration}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#436f6e]">
              Our Training Impact
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#d3a070]"></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="grid md:grid-cols-4 gap-6 text-center"
          >
            <div className="bg-[#f5f0eb] p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-[#436f6e]">1,000+</h3>
              <p className="text-[#8d8f8e]">Women Trained</p>
            </div>
            <div className="bg-[#f5f0eb] p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-[#436f6e]">85%</h3>
              <p className="text-[#8d8f8e]">Employment Rate</p>
            </div>
            <div className="bg-[#f5f0eb] p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-[#436f6e]">50+</h3>
              <p className="text-[#8d8f8e]">Businesses Started</p>
            </div>
            <div className="bg-[#f5f0eb] p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-[#436f6e]">10+</h3>
              <p className="text-[#8d8f8e]">Villages Reached</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#436f6e]">
            Success Stories
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 rounded-full bg-[#d3a070]"></div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {[
            {
              name: "Priya Sharma",
              role: "Master Tailor",
              quote:
                "The training gave me skills to support my family and even start my own small business.",
            },
            {
              name: "Anjali Patel",
              role: "Quality Inspector",
              quote:
                "From being a homemaker to becoming a professional, this program changed my life.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#c5a17f]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f0eb] flex items-center justify-center text-[#436f6e] font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#436f6e]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#8d8f8e]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#8d8f8e] italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn}
          className="bg-[#436f6e] text-white p-10 rounded-xl text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our next training batch and gain skills that can transform your
            life.
          </p>
          <button className="bg-[#d3a070] text-white font-medium py-2 px-6 rounded-md hover:bg-[#c5a17f] transition-colors">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default TrainingPage;
