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

function AboutPage() {
  return (
    <div className="mt-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-indigo-800">
          Stitching Waves:{" "}
          <span className="text-indigo-600">Empowering Through Employment</span>
        </h1>
        <h3 className="text-xl text-gray-600 font-medium">
          Creating opportunities through garment manufacturing
        </h3>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-indigo-600"></div>
        </div>
      </motion.div>

      {/* Image Banner */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Stitching Waves factory"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Stitching Waves products"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-100">
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-800">
            Women Empowerment
          </h3>
          <p className="text-gray-600">
            Training young girls and women on modern machines to create
            sustainable employment opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-100">
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-800">
            Quality Production
          </h3>
          <p className="text-gray-600">
            300 advanced machineries with monthly production of 60,000 garment
            units ensuring high quality standards.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-100">
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-800">
            Diverse Products
          </h3>
          <p className="text-gray-600">
            Wide range including shirts, kurtas, palazzo, and home textiles like
            blankets, pillows, and curtains.
          </p>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.div variants={fadeIn} className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">
              About Stitching Waves
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stitching Waves is a newly established garment manufacturing
                company founded in 2025, based in Chalisgaon, Jalgaon District.
                Spread over 20,000 sq. ft., we have a state-of-the-art
                manufacturing facility with around 300 advanced machineries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our primary aim is to be a catalyst for thousands of women to
                express their natural creativity and bring prosperity to their
                families. What began as a small initiative has now grown to
                empower over 10,000 women through employment.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in manufacturing daily wear, office/formal wear,
                school and corporate uniforms, and traditional Marathi Poshak.
                Our home textiles division produces blankets, pillows, curtains
                and more.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a monthly production capacity of 60,000 garment units, we
                combine traditional craftsmanship with modern technology to
                deliver quality products while creating meaningful employment
                opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="p-10 rounded-xl text-white bg-indigo-800"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Vision & Mission</h3>
          <p className="text-indigo-100 leading-relaxed">
            Our vision is centered around achieving profitability through
            productivity and quality while creating employment opportunities. We
            aim to be a vertically integrated operation handling everything from
            yarn to finished garments under one roof.
          </p>
          <p className="text-indigo-100 leading-relaxed mt-4">
            Our mission is to be a proactive organization setting global
            standards through timely delivery of defect-free garments,
            continuous modernization, and innovation. We recognize quality,
            professionalism, and the pursuit of excellence as our foundational
            principles.
          </p>
        </motion.div>
      </motion.div>

      {/* Facilities Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">
            Our Facilities
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-600"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Manufacturing Unit",
              content:
                "20,000 sq. ft. facility in Chalisgaon, Jalgaon with 300 advanced machines",
            },
            {
              title: "Production Capacity",
              content:
                "60,000 garment units per month plus home textiles production",
            },
            {
              title: "Showrooms",
              content:
                "Two showrooms located in Wakad & Pimpri for direct customer access",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-indigo-100">
                <span className="font-semibold text-indigo-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
