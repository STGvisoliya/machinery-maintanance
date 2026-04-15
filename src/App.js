import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./Navbar";

const Contact = lazy(() => import("./pages/Contact"));
const BookService = lazy(() => import("./pages/BookService"));
const Services = lazy(() => import("./pages/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    const getNavbarOffset = () => document.querySelector(".nav-shell")?.getBoundingClientRect().height ?? 0;

    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.replace("#", ""));
      let attempts = 0;
      const maxAttempts = 20;

      const scrollToSection = () => {
        const section = document.getElementById(sectionId);
        if (!section && attempts < maxAttempts) {
          attempts += 1;
          window.setTimeout(scrollToSection, 50);
          return;
        }

        if (!section) {
          return;
        }

        const offset = getNavbarOffset();
        const y = section.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top: Math.max(0, y), behavior: scrollBehavior });
      };

      scrollToSection();
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<main className="container py-5"><p>Loading...</p></main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
