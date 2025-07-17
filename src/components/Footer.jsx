import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import Logo from "../components/Logo";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Facilities", path: "/facilities" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Training", path: "/training" },
    { label: "Contact Us", path: "/contact" },
  ];

  const productCategories = [
    { label: "Shirts", path: "/products/shirts" },
    { label: "Kurtas", path: "/products/kurtas" },
    { label: "Palazzo", path: "/products/palazzo" },
    { label: "Home Textiles", path: "/products/home-textiles" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://facebook.com/stitchingwaves",
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      url: "https://twitter.com/stitchingwaves",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://linkedin.com/company/stitchingwaves",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://instagram.com/stitchingwaves",
    },
  ];

  return (
    <footer className="bg-rose-800 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <Logo white />
          </div>
          <p className="text-pink-100 mb-6">
            Stitching Waves empowers women through garment manufacturing,
            creating opportunities and sustainable livelihoods.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-pink-200">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <span className="text-pink-300 mr-2">•</span>
                <Link
                  to={link.path}
                  className="text-pink-100 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-pink-200">Products</h3>
          <ul className="space-y-3">
            {productCategories.map((category, index) => (
              <li key={index} className="flex items-center">
                <span className="text-pink-300 mr-2">•</span>
                <Link
                  to={category.path}
                  className="text-pink-100 hover:text-white transition-colors"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-pink-200">
            Contact Us
          </h3>
          <ul className="space-y-4 text-pink-100">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-pink-300 mt-1 flex-shrink-0" />
              <span>
                Gate No. 10/2, Plot No. 1+2+3, Khadaki Bk, Taluka Chalisgaon,
                Jalgaon, Maharashtra 424101
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-pink-300" />
              <a
                href="mailto:info@stitchingwaves.com"
                className="hover:text-white transition-colors"
              >
                info@stitchingwaves.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-pink-300" />
              <a
                href="tel:+918788493783"
                className="hover:text-white transition-colors"
              >
                +91 8788493783
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-pink-300" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-pink-200 border-t border-rose-700 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Stitching Waves</span>. All
          Rights Reserved.{" "}
          <Link to="/privacy-policy" className="text-pink-300 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-pink-300 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
