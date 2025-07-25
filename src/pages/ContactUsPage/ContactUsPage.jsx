import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mt-50 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div variants={fadeIn} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#436f6e] mb-4">
          Contact{" "}
          <span className="text-[#d1a375]">
            Stitchers Garments Manufacturing
          </span>{" "}
          and Home Furnishing Association
        </h1>
        <div className="w-24 h-1 bg-[#d1a375] mx-auto"></div>
        <p className="text-[#8d8f8e] mt-4 max-w-2xl mx-auto">
          Get in touch for garment manufacturing inquiries, product details, or
          partnership opportunities
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn}
          className="bg-[#e7e7e7] p-8 rounded-xl shadow-md border border-[#c5a17f]/30"
        >
          <h2 className="text-2xl font-bold text-[#436f6e] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#436f6e] mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[#8d8f8e] rounded-md focus:ring-[#d1a375] focus:border-[#d1a375] bg-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#436f6e] mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#8d8f8e] rounded-md focus:ring-[#d1a375] focus:border-[#d1a375] bg-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#436f6e] mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-[#8d8f8e] rounded-md focus:ring-[#d1a375] focus:border-[#d1a375] bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-[#436f6e] mb-1"
              >
                Product Interest *
              </label>
              <select
                id="product"
                className="w-full px-4 py-2 border border-[#8d8f8e] rounded-md focus:ring-[#d1a375] focus:border-[#d1a375] bg-white"
                required
              >
                <option value="">Select a product category</option>
                <option value="shirts">Shirts</option>
                <option value="kurtas">Kurtas</option>
                <option value="palazzo">Palazzo</option>
                <option value="home-textiles">Home Textiles</option>
                <option value="uniforms">Uniforms</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#436f6e] mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-[#8d8f8e] rounded-md focus:ring-[#d1a375] focus:border-[#d1a375] bg-white"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#436f6e] hover:bg-[#3a6261] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn}>
          {/* Contact Details */}
          <div className="bg-[#e7e7e7] p-8 rounded-xl shadow-sm mb-8 border border-[#c5a17f]/30">
            <h2 className="text-2xl font-bold text-[#436f6e] mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#436f6e] p-2 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#436f6e]">Phone</h3>
                  <p className="text-[#8d8f8e]">8788493783</p>
                  <p className="text-[#8d8f8e]">878875799</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#436f6e] p-2 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#436f6e]">Email</h3>
                  <p className="text-[#8d8f8e]">
                    info@stitchersgarmentsand
                    <br />
                    homefurnishing.com
                  </p>
                  <p className="text-[#8d8f8e]">
                    sales@stitchersgarmentsand <br />
                    homefurnishing.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#436f6e] p-2 rounded-full text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#436f6e]">WhatsApp</h3>
                  <p className="text-[#8d8f8e]">8788493783</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#436f6e] p-2 rounded-full text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#436f6e]">
                    Working Hours
                  </h3>
                  <p className="text-[#8d8f8e]">Monday - Friday: 9AM to 6PM</p>
                  <p className="text-[#8d8f8e]">Saturday: 9AM to 1PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-[#e7e7e7] p-6 rounded-xl shadow-sm border border-[#c5a17f]/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#436f6e] p-2 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-semibold text-[#436f6e]">
                Manufacturing Unit
              </h3>
            </div>
            <address className="text-[#8d8f8e] not-italic pl-11">
              Gate No. 10/2, Plot No. 1+2+3
              <br />
              Khadaki Bk, Taluka Chalisgaon
              <br />
              Jalgaon, Maharashtra - 424101
              <br />
              India
            </address>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn}
        className="mt-16 bg-[#e7e7e7] rounded-xl overflow-hidden border border-[#c5a17f]/30"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#436f6e] mb-2">
            Our Location
          </h2>
          <p className="text-[#8d8f8e] mb-6">
            Visit our manufacturing unit to see our facilities and products
          </p>
        </div>
        <div className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.715061381521!2d75.8243143153774!3d21.04172265800083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9c3a1e9e8e5d9%3A0x3e5a6f196c7a7a2a!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Stitching Waves Location"
          ></iframe>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;
