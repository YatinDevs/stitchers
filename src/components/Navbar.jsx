import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useCart } from "../context/CartContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Facilities", path: "/facilities" },
  { label: "Training", path: "/training" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { itemCount, toggleCart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-rose-800 text-white text-sm px-4 fixed top-0 left-0 w-full z-[100]">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@stitchingwaves.com"
              className="hover:text-pink-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Mail size={14} className="mr-1" />
              info@stitchingwaves.com
            </a>
            <a
              href="tel:+918788493783"
              className="hover:text-pink-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Phone size={14} className="mr-1" />
              +91 8788493783
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Clock size={14} className="mr-1" />
            <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full pt-6 left-0 transition-all duration-300 z-[90] ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ top: scrolled ? "0" : "30px" }}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 font-medium text-gray-800 relative">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => navigate(item.path)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all ${
                      window.location.pathname === item.path
                        ? `text-rose-600 bg-pink-50`
                        : "hover:text-rose-600 hover:bg-pink-50/50"
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                {/* <ShoppingCart size={20} /> */}
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <Logo />
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-rose-600 p-2"
            >
              <X size={28} />
            </button>
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left font-medium text-gray-800 py-3 flex justify-between items-center hover:text-rose-600`}
                >
                  <div className="flex items-center">{item.label}</div>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 p-4 bg-pink-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@stitchingwaves.com"
                className="text-gray-700 hover:text-rose-600 flex items-center"
              >
                <Mail size={16} className="mr-2" />
                info@stitchingwaves.com
              </a>
              <a
                href="tel:+918788493783"
                className="text-gray-700 hover:text-rose-600 flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +91 8788493783
              </a>
              <div className="text-gray-700 flex items-center">
                <Clock size={16} className="mr-2" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
