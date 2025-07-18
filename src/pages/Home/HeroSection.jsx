import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { first, livehood, second } from "../../assets";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      image_url: first,
      title: "Empowering Women Through Garment Manufacturing",
      description:
        "Stitchers Garments Manufacturing and Home Furnishing Association creates opportunities for thousands of women",
      ctaHighlight: "Our Training Programs",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    },
    {
      id: 2,
      image_url: second,
      title: "Quality Garments & Home Furnishings",
      description: "Manufacturing excellence with 300+ advanced machines",
      ctaHighlight: "View Our Products",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    },
    {
      id: 3,
      image_url: livehood,
      title: "Creating Sustainable Livelihoods",
      description: "10,000+ women empowered through our initiatives",
      ctaHighlight: "Our Impact",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomEffect, setZoomEffect] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setZoomEffect(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      setZoomEffect(false);
    }, 300);
  };

  const prevImage = () => {
    setZoomEffect(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
      );
      setZoomEffect(false);
    }, 300);
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setZoomEffect(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setZoomEffect(false);
      }, 300);
    }
  };

  const currentItem = heroContent[currentIndex] || {};

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative w-full pt-40">
      <div
        className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-white overflow-hidden shadow-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentItem.image_url})`,
            }}
            key={currentItem.id}
            initial={{ opacity: 0, scale: zoomEffect ? 1.1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: zoomEffect ? 0.9 : 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {heroContent.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </>
        )}

        {/* Text Content */}
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto px-4"
          key={currentItem.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentItem.title}
          </motion.h1>

          {currentItem.description && (
            <motion.p
              className="mt-4 text-center text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {currentItem.description}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/about"
              className="bg-[#436f6e] hover:bg-[#3a6261] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Learn More <ArrowRight size={18} />
            </Link>
            <button
              onClick={openVideo}
              className="flex items-center gap-2 text-white hover:text-gray-200 font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play size={16} className="text-white" />
              </div>
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute -mt-18 left-0 right-0 z-10 px-4">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white backdrop-blur-sm rounded-xl p-2 md:p-4 shadow-lg">
            <div className="flex justify-around gap-2">
              {heroContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  onClick={() => selectImage(index)}
                  className={`cursor-pointer w-full h-full group relative rounded-lg overflow-hidden transition-all duration-300 ${
                    currentIndex === index
                      ? "ring-2 ring-[#436f6e]"
                      : "ring-1 ring-gray-200"
                  }`}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-20 w-full md:h-40 md:w-full">
                    <img
                      src={item.image_url}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all ${
                        currentIndex === index
                          ? "bg-black/40"
                          : "bg-black/20 group-hover:bg-black/30"
                      }`}
                    ></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-xs text-white font-medium truncate">
                      {item.ctaHighlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
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
              title="Stitchers Garments Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
