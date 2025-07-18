import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

// Category Icons
const categoryIcons = {
  All: "👕",
  Shirts: "👔",
  Kurtis: "👘",
  Pillows: "🛏️",
  Curtains: "🪟",
  "Bed Spreads": "🛌",
  "Corporate Uniforms": "👩‍💼",
  "Traditional Wear": "🥻",
};

// Product Data
const products = [
  // Shirts (5 items)
  {
    id: 1,
    category: "Shirts",
    title: "Formal Cotton Shirt",
    description: "Premium cotton fabric with slim fit",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=80",
    price: "₹799",
  },
  {
    id: 2,
    category: "Shirts",
    title: "Casual Linen Shirt",
    description: "Breathable linen fabric for summer",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=80",
    price: "₹899",
  },
  // Kurtis (4 items)
  {
    id: 3,
    category: "Kurtis",
    title: "Printed Cotton Kurti",
    description: "Hand-block printed traditional design",
    image:
      "https://images.unsplash.com/photo-1595341595379-cf0f2a5d643a?w=500&auto=format&fit=crop&q=80",
    price: "₹599",
  },
  // Pillows (5 items)
  {
    id: 4,
    category: "Pillows",
    title: "Embroidered Cushion Cover",
    description: "Hand-embroidered cotton pillow covers",
    image:
      "https://images.unsplash.com/photo-1600369672771-985b9b3418a1?w=500&auto=format&fit=crop&q=80",
    price: "₹349/pair",
  },
  // Curtains (3 items)
  {
    id: 5,
    category: "Curtains",
    title: "Linen Window Curtains",
    description: "Premium linen fabric curtains",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=80",
    price: "₹1,299/pair",
  },
  // Bed Spreads (3 items)
  {
    id: 6,
    category: "Bed Spreads",
    title: "Cotton Queen Size Bedspread",
    description: "100% cotton with traditional motifs",
    image:
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=500&auto=format&fit=crop&q=80",
    price: "₹1,899",
  },
  // Corporate Uniforms (3 items)
  {
    id: 7,
    category: "Corporate Uniforms",
    title: "Office Shirt-Blouse Set",
    description: "Formal corporate wear for women",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=80",
    price: "₹999/set",
  },
  // Traditional Wear (3 items)
  {
    id: 8,
    category: "Traditional Wear",
    title: "Marathi Nauvari Saree",
    description: "Authentic Maharashtrian style",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=80",
    price: "₹1,499",
  },

  {
    id: 9,
    category: "Shirts",
    title: "Denim Shirt",
    description: "Classic denim shirt for casual wear",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=80",
    price: "₹849",
  },
  {
    id: 10,
    category: "Kurtis",
    title: "Anarkali Style Kurti",
    description: "Elegant floor-length design",
    image:
      "https://images.unsplash.com/photo-1595341595379-cf0f2a5d643a?w=500&auto=format&fit=crop&q=80",
    price: "₹699",
  },
];

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique categories
  const categories = Object.keys(categoryIcons);

  // Filter products
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section
      className="mt-50  bg-[#e7e7e7] py-16 px-4 sm:px-6 lg:px-8"
      id="products"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#436f6e] mb-3">
            Our Product Range
          </h2>
          <motion.div
            className="h-1 w-16 bg-[#d1a375] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-[#8d8f8e] max-w-2xl mx-auto">
            Explore our premium garments and home furnishings crafted by skilled
            artisans
          </p>
        </motion.div>

        {/* Desktop Filter Bar */}
        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-[#436f6e] text-white shadow-md"
                  : "bg-[#f5f0eb] text-[#436f6e] hover:bg-[#e0dbdb]"
              }`}
            >
              <span className="text-lg">{categoryIcons[category]}</span>
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mobile Filter */}
        <div className="md:hidden mb-6 relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full max-w-xs mx-auto bg-[#436f6e] text-white px-5 py-3 rounded-full shadow"
          >
            <div className="flex items-center gap-2">
              <FiFilter />
              <span>
                {activeFilter === "All" ? "All Categories" : activeFilter}
              </span>
            </div>
            <FiChevronDown
              className={`transition-transform ${
                showMobileFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mobile Dropdown */}
          {showMobileFilters && (
            <motion.div
              className="absolute z-10 w-full max-w-xs mx-auto mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowMobileFilters(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                    activeFilter === category
                      ? "bg-[#f5f0eb] text-[#436f6e]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">{categoryIcons[category]}</span>
                  <span>{category}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#c5a17f]/20 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {categoryIcons[product.category]}
                  </span>
                  <span className="text-sm font-medium text-[#d1a375]">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#436f6e] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#8d8f8e] mb-4">{product.description}</p>
                <Link
                  to="/contact"
                  className="w-full bg-[#436f6e] hover:bg-[#3a6261] text-white font-medium py-2 px-4 rounded-lg transition block text-center"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-[#8d8f8e] text-lg">
              No products found in this category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-[#436f6e] font-medium hover:text-[#3a6261]"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="bg-[#436f6e] text-white p-10 rounded-xl text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Custom Orders & Bulk Enquiries
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-pink-100">
            We specialize in customized solutions for businesses and
            institutions
          </p>
          <Link
            to="/contact"
            className="bg-[#d1a375] hover:bg-[#c5a17f] text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Contact Our Sales Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPage;
