import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  BookOpen,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useCart } from "../context/CartContext";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Products",
    path: "/products",
    // submenu: [
    //   { label: "All Products", path: "/products" },
    //   { label: "Bio-Fungicides", path: "/category/bio-fungicides" },
    //   { label: "Bio-Fertilizers", path: "/category/bio-fertilizer" },
    //   { label: "Bio-Pesticides", path: "/category/bio-pesticides" },
    //   { label: "Organic Inputs", path: "/category/organic-inputs" },
    // ],
  },
  {
    label: "Blog",
    path: "/blogs",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { itemCount, isCartOpen, toggleCart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavItemClick = (item, index) => {
    if (item.submenu) {
      toggleDropdown(index);
    } else {
      navigate(item.path);
      setIsMenuOpen(false);
    }
  };

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
      <div className="bg-[#1A317F] text-white text-sm px-4 fixed top-0 left-0 w-full z-[100]">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@philippine.in"
              className="hover:text-[#C4CBD3] text-xs md:text-sm transition-colors flex items-center"
            >
              <Mail size={14} className="mr-1" />
              info@philippine.in
            </a>
            <a
              href="tel:+917038970271"
              className="hover:text-[#C4CBD3] text-xs md:text-sm transition-colors flex items-center"
            >
              <Phone size={14} className="mr-1" />
              +91 70389 70271
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
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                  onMouseLeave={() => item.submenu && setOpenDropdown(null)}
                >
                  <button
                    onClick={() => handleNavItemClick(item, index)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all ${
                      openDropdown === index
                        ? `text-[#1A317F] bg-[#E8EBF5]`
                        : "hover:text-[#1A317F] hover:bg-[#E8EBF5]/50"
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === index && item.submenu && (
                    <div className="absolute top-12 left-0 bg-white rounded-lg shadow-xl py-2 min-w-[220px] z-[120] border border-gray-100">
                      {item.submenu.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => {
                            navigate(subItem.path);
                            setOpenDropdown(null);
                          }}
                          className="px-4 py-2 text-sm text-gray-700 cursor-pointer transition-all hover:bg-[#E8EBF5] hover:text-[#1A317F] hover:pl-5"
                        >
                          {subItem.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-[#1A317F] transition-colors"
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#48A93B] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-[#1A317F] transition-colors"
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
              className="text-gray-800 hover:text-[#1A317F] p-2"
            >
              <X size={28} />
            </button>
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => handleNavItemClick(item, index)}
                  className={`w-full text-left font-medium text-gray-800 py-3 flex justify-between items-center ${
                    item.submenu ? "" : "hover:text-[#1A317F]"
                  }`}
                >
                  <div className="flex items-center">{item.label}</div>
                  {item.submenu && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {/* Mobile Submenu */}
                {item.submenu && openDropdown === index && (
                  <div className="ml-4 space-y-2 mb-2">
                    {item.submenu.map((sub, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          navigate(sub.path);
                          setIsMenuOpen(false);
                        }}
                        className="pl-3 py-2 text-gray-700 hover:text-[#1A317F] cursor-pointer flex items-center"
                      >
                        <span className="text-[#48A93B] mr-2">•</span>
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@philippine.in"
                className="text-gray-700 hover:text-[#1A317F] flex items-center"
              >
                <Mail size={16} className="mr-2" />
                info@philippine.in
              </a>
              <a
                href="tel:+917038970271"
                className="text-gray-700 hover:text-[#1A317F] flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +91 70389 70271
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
