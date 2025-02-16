import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Simulate download
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} alt="H Logo" className="w-13 h-10" />
              <span className="text-white text-2xl font-semibold">Himanshu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover-underline ${
                    active === item.name
                      ? "text-[#4ADE80] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <button
              onClick={handleDownload}
              className="border border-[#4ADE80] text-white px-4 py-2 rounded-md hover:bg-[#4ADE80] hover:text-black transition"
              disabled={isLoading}
            >
              {isLoading ? "Downloading..." : "DOWNLOAD CV"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden flex flex-col items-center bg-[#1A1A1A] py-4 border-t border-[#2A2A2A]"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 text-lg font-medium transition-colors ${
                    active === item.name
                      ? "text-[#4ADE80] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setActive(item.name);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleDownload}
                className="mt-4 border border-[#4ADE80] text-white px-4 py-2 rounded-md hover:bg-[#4ADE80] hover:text-black transition"
                disabled={isLoading}
              >
                {isLoading ? "Downloading..." : "DOWNLOAD CV"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;