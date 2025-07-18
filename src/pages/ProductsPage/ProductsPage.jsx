import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

function ProductsPage() {
  const categories = [
    {
      name: "Shirts",
      description: "Formal and casual shirts for all occasions",
      image: "https://source.unsplash.com/random/600x400?shirt",
      link: "/category/shirts",
    },
    {
      name: "Kurtas",
      description: "Traditional and contemporary kurtas",
      image: "https://source.unsplash.com/random/600x400?kurta",
      link: "/category/kurtas",
    },
    {
      name: "Palazzo",
      description: "Comfortable and stylish palazzo pants",
      image: "https://source.unsplash.com/random/600x400?palazzo",
      link: "/category/palazzo",
    },
    {
      name: "Home Textiles",
      description: "Blankets, pillows, curtains and more",
      image: "https://source.unsplash.com/random/600x400?home,textile",
      link: "/category/home-textiles",
    },
    {
      name: "Corporate Uniforms",
      description: "Professional attire for businesses",
      image: "https://source.unsplash.com/random/600x400?uniform",
      link: "/category/uniforms",
    },
    {
      name: "Traditional Wear",
      description: "Marathi Poshak and other ethnic wear",
      image: "https://source.unsplash.com/random/600x400?traditional,clothing",
      link: "/category/traditional",
    },
  ];

  return (
    <div className="bg-[#e7e7e7] mt-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#436f6e]">
            Our <span className="text-[#d1a375]">Product Range</span>
          </h1>
          <h3 className="text-xl text-[#8d8f8e] font-medium">
            Quality garments crafted with care and precision
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 rounded-full bg-[#d3a070]"></div>
          </div>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#c5a17f]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#436f6e]">
                  {category.name}
                </h3>
                <p className="text-[#8d8f8e] mb-4">{category.description}</p>
                <Link
                  to={category.link}
                  className="text-[#d3a070] font-medium hover:underline inline-flex items-center"
                >
                  View Collection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#436f6e]">
              Our Quality Promise
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#d3a070]"></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                title: "Premium Materials",
                description: "Only the finest fabrics and threads",
                icon: "🧵",
              },
              {
                title: "Precision Stitching",
                description: "Attention to every detail and seam",
                icon: "🪡",
              },
              {
                title: "Rigorous Testing",
                description: "Multiple quality checks before shipping",
                icon: "🔍",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f0eb] p-6 rounded-lg h-full flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#436f6e]">
                  {item.title}
                </h3>
                <p className="text-[#8d8f8e]">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn}
          className="bg-[#436f6e] text-white p-10 rounded-xl text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Interested in Our Products?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us for bulk orders, custom requirements, or wholesale
            inquiries.
          </p>
          <Link
            to="/contact"
            className="bg-[#d3a070] text-white font-medium py-2 px-6 rounded-md hover:bg-[#c5a17f] transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductsPage;
