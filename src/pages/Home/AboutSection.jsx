import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="py-12 md:py-40 md:pb-80 bg-[#e7e7e7] relative">
      <div className="relative container mx-auto px-4 md:px-6">
        {/* Mobile Top Image (hidden on desktop) */}
        <motion.div
          className="block lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Stitching Waves factory"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-12">
          {/* Desktop Image (hidden on mobile) */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="z-10 w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Stitching Waves factory"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#436f6e] mb-4">
              Empowerment Through Employment
            </h2>
            <p className="text-[#8d8f8e] mb-4 sm:mb-6 text-sm sm:text-base">
              We are an association of artisans; by the artisans and for the
              artisans. Our primary aim is to be a catalyst for thousands of
              women to express their natural creativity and bring prosperity to
              their families.
            </p>
            <p className="text-[#8d8f8e] mb-6 sm:mb-8 text-sm sm:text-base">
              We train young girls and women on modern machines - from cutting
              to stitching to finishing to packing, even managing our showrooms.
              We are proud that from a small group of three professionals and a
              handful of trainees, we are today 10,000 strong and counting.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Video CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
                onClick={openVideo}
              >
                <div className="flex items-center gap-2 sm:gap-3 bg-[#436f6e] hover:bg-[#3a6261] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors shadow-md text-sm sm:text-base">
                  <div className="bg-white/20 p-1 sm:p-2 rounded-full">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium">Watch Our Story</span>
                </div>
              </motion.div>

              {/* Signature */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-[#d1a375]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    The Stitching Waves Team
                  </p>
                  <p className="text-xs sm:text-sm text-[#d1a375]">
                    Creating Opportunities Since 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Image */}
        <motion.div
          className="relative lg:absolute mx-auto lg:mx-0 mt-8 lg:mt-0 md:-bottom-90 lg:right-10 w-full lg:w-2/3 h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Stitching Waves products"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-[#d1a375] transition-colors"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Stitching Waves Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
