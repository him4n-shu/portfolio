import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const observerRef = useRef(null); // Ref to store the observer instance
  const sectionsRef = useRef([]); // Ref to store observed sections

  // Memoize navigation data to prevent unnecessary re-renders
  const navigation = useMemo(() => [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Works", href: "/#works" },
    { name: "Contact", href: "/#contact" },
  ], []);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px", // Adjusted for earlier detection
      threshold: 0.1, // Lower threshold for sensitivity
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          console.log(`Intersecting: ${sectionId}`); // Debug log
          const navItem = navigation.find(item => item.href === `/#${sectionId}`);
          if (navItem) {
            setActive(navItem.name);
          } else if (sectionId === "hero") {
            setActive("Home");
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe sections when they become available
    const observeSections = () => {
      const sections = ['hero', 'about', 'works', 'contact'];
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && !sectionsRef.current.includes(id)) {
          observerRef.current.observe(section);
          sectionsRef.current.push(id);
          console.log(`Observing section: ${id}`); // Debug log
        } else if (!section) {
          console.warn(`Section with id "${id}" not found. Ensure it exists in your components.`); // Debug warning
        }
      });
    };

    // Initial observation
    observeSections();

    // Re-observe on route changes, scroll, or DOM updates
    const observerCallback = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      sectionsRef.current = []; // Reset observed sections
      observeSections();
    };

    // Trigger re-observation on route changes, scroll, and window resize
    const handleEvents = () => observerCallback();
    window.addEventListener('resize', handleEvents);
    window.addEventListener('scroll', handleEvents); // Re-observe on scroll
    const unlisten = () => {
      window.removeEventListener('resize', handleEvents);
      window.removeEventListener('scroll', handleEvents);
    };

    // Clean up observer and event listeners
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      unlisten();
      sectionsRef.current = []; // Clean up observed sections
    };
  }, [navigation, location]); // Re-run on route changes

  const handleDownload = () => {
    setIsLoading(true);
    // The CV file is in public as Himanshu_CV.pdf
    const cvFile = '/Himanshu_CV.pdf'; // Points to your CV in the public directory
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Himanshu_CV.pdf'; // Matches the file name for clarity
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleNavClick = (item) => {
    setActive(item.name);
    setMenuOpen(false);
    
    if (item.href.startsWith('/#')) {
      const targetId = item.href.substring(2);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const navHeight = document.querySelector("nav").offsetHeight;
        const targetOffset = targetSection.offsetTop - navHeight;
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
      }
    } else {
      navigate(item.href);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActive("Home"); // Ensure Home is active on root path
    } else if (path === '/works') {
      setActive("Works"); // Ensure Works is active on /works route
    } else {
      const currentNav = navigation.find(item => item.href === path);
      if (currentNav) {
        setActive(currentNav.name);
      }
    }
  }, [location, navigation]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 shadow-xl' : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1" onClick={() => handleNavClick({ name: "Home", href: "/#hero" })} aria-label="Home">
              <img src={logo} alt="H Logo" className="w-12 h-12" loading="lazy" />
              <span className="text-white text-2xl font-semibold">Himanshu</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNavClick(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover-underline ${
                    active === item.name
                      ? "text-[#4ADE80] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleDownload}
              className="border border-[#4ADE80] text-white px-4 py-2 rounded-md hover:bg-[#4ADE80] hover:text-black transition disabled:cursor-not-allowed"
              disabled={isLoading}
              aria-label="Download CV"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  </svg>
                  Downloading...
                </span>
              ) : "DOWNLOAD CV"}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden flex flex-col items-center py-4 border-t border-[#2A2A2A] shadow-md ${
                scrolled ? 'bg-black' : 'bg-[#1A1A2A]'
              }`}
              style={{ maxHeight: 'calc(100vh - 80px)' }}
              id="mobile-menu"
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
                  onClick={() => handleNavClick(item)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNavClick(item)}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleDownload}
                className="mt-4 border border-[#4ADE80] text-white px-4 py-2 rounded-md hover:bg-[#4ADE80] hover:text-black transition disabled:cursor-not-allowed"
                disabled={isLoading}
                aria-label="Download CV"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    </svg>
                    Downloading...
                  </span>
                ) : "DOWNLOAD CV"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;