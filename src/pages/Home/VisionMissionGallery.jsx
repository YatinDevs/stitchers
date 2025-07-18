import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Users,
  Clock,
  CheckCircle,
  Truck,
  RefreshCw,
  Award,
  Scissors,
  CircleDollarSign,
  Play,
} from "lucide-react";
import { abouthome1, abouthome2, abouthome3 } from "../../assets";
import { RxSewingPin } from "react-icons/rx";

const VisionMissionGallery = () => {
  const galleryImages = [abouthome1, abouthome2, abouthome3];

  return (
    <section className="py-16 bg-[#e7e7e7]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#436f6e]"
          >
            <div className="flex items-center mb-6">
              <Target className="text-[#436f6e] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-[#436f6e]">Our Vision</h3>
            </div>
            <ul className="space-y-4 text-[#6d6d6d]">
              <li className="flex items-start">
                <CheckCircle
                  className="text-[#436f6e] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Profitability through quality & productivity
              </li>
              <li className="flex items-start">
                <Users
                  className="text-[#436f6e] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Create employment opportunities
              </li>
              <li className="flex items-start">
                <RefreshCw
                  className="text-[#436f6e] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Vertical integration from yarn to garment
              </li>
              <li className="flex items-start">
                <Clock
                  className="text-[#436f6e] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Timely delivery guarantee
              </li>
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#d1a375]"
          >
            <div className="flex items-center mb-6">
              <Rocket className="text-[#d1a375] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-[#d1a375]">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-[#6d6d6d] mb-8">
              <li className="flex items-start">
                <Award
                  className="text-[#d1a375] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Set global quality standards
              </li>
              <li className="flex items-start">
                <Truck
                  className="text-[#d1a375] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                On-time defect-free deliveries
              </li>
              <li className="flex items-start">
                <RefreshCw
                  className="text-[#d1a375] mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                Continuous modernization
              </li>
            </ul>

            <div className="bg-[#f9f5f0] p-5 rounded-lg">
              <h4 className="flex items-center text-lg font-semibold text-[#d1a375] mb-4">
                <Users className="mr-2" size={20} />
                Women Empowerment
              </h4>
              <ul className="space-y-3 text-[#6d6d6d]">
                <li className="flex items-start">
                  <Scissors
                    className="text-[#d1a375] mr-3 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  Skill development programs
                </li>
                <li className="flex items-start">
                  <RxSewingPin
                    className="text-[#d1a375] mr-3 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  Job placement support
                </li>
                <li className="flex items-start">
                  <CircleDollarSign
                    className="text-[#d1a375] mr-3 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  Entrepreneurial guidance
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#436f6e] mb-2"
            >
              Our <span className="text-[#d1a375]"> Work Gallery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#436f6e] max-w-3xl mx-auto"
            >
              Empowered women create circles of prosperity that transform
              families and communities
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={img}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="flex items-center gap-2 text-white bg-[#436f6e] hover:bg-[#3a6261] px-4 py-2 rounded-full transition-colors">
                    <Play size={16} />
                    <span className="text-sm">View</span>
                  </button>
                </div>
              </motion.div>
            ))}
            {/* Additional placeholder if needed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#f0f0f0] rounded-xl aspect-square flex items-center justify-center"
            >
              <span className="text-[#8d8f8e]">More Coming Soon</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionGallery;
