import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "./logo.jpg";

const HOME_SECTION_IDS = [
  "hero",
  "services",
  "industries",
  "resources",
  "request-quote",
  "contact"
];

function Navbar() {
  const location = useLocation();
  const [activeHomeSection, setActiveHomeSection] = useState("");
  const tickingRef = useRef(false);
  const activeSectionRef = useRef("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHomeSection("");
      activeSectionRef.current = "";
      return;
    }

    const computeActiveSection = () => {
      const nav = document.querySelector(".nav-shell");
      const offset = nav ? nav.getBoundingClientRect().height + 24 : 24;
      let current = "";

      for (const id of HOME_SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const top = section.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }

      if (!current && location.hash) {
        current = location.hash.replace("#", "");
      }

      if (current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveHomeSection(current);
      }
    };

    const requestSectionUpdate = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        computeActiveSection();
        tickingRef.current = false;
      });
    };

    requestSectionUpdate();
    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);

    return () => {
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
    };
  }, [location.pathname, location.hash]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-shell px-4 shadow-sm">
      <Link className="navbar-brand fw-bold brand-mark" to="/">
        <img src={logo} alt="PrimeLoop logo" className="brand-logo" />
        Jitender Kumar
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "hero" ? "nav-link-active" : ""}`}
              to="/#hero"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "services" ? "nav-link-active" : ""}`}
              to="/#services"
            >
              Services & About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "industries" ? "nav-link-active" : ""}`}
              to="/#industries"
            >
              Industries
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "resources" ? "nav-link-active" : ""}`}
              to="/#resources"
            >
              Resources
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "request-quote" ? "nav-link-active" : ""}`}
              to="/#request-quote"
            >
              Request Quote
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${activeHomeSection === "contact" ? "nav-link-active" : ""}`}
              to="/#contact"
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/book" ? "nav-link-active" : ""}`}
              to="/book"
            >
              Book Service
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
