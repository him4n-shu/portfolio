import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navigationbar";
import bgImage from "./assets/slider-bg.jpg";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Works = lazy(() => import("./pages/Works"));

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const contentStyle = {
  position: "relative",
  zIndex: 1,
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
        <Router>
          <Navbar />
          <Suspense fallback={<div style={{ display: 'none' }}></div>}>
            <AnimatedRoutes />
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
