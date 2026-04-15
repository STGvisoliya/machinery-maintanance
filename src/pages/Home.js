import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/serviceData";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const HERO_SLIDES = [hero1, hero2, hero3];

const industries = [
  "Oil & Gas",
  "Chemicals",
  "Pharmaceutical",
  "Food & Beverage",
  "Manufacturing",
  "Water Treatment"
];

const resources = [
  "5 Tips for Pressure Transmitter Maintenance",
  "Case Study: Reducing Loop Oscillation in a Distillation Unit",
  "Instrumentation PM Checklist for Annual Shutdown"
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home">
      <section id="hero" className="hero-band hero-slider-shell">
        <div className="hero-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {HERO_SLIDES.map((slide, index) => (
            <div className="hero-slide" key={slide}>
              <img
                src={slide}
                alt={`Instrumentation service ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="hero-slider-overlay"></div>
        <div className="container hero-content-wrap">
          <div className="hero-panel hero-panel-featured">
            <p className="kicker mb-2">24/7 Instrument Reliability Partner</p>
            <h1>Maximizing Uptime. Ensuring Process Reliability.</h1>
            <p>
              Certified calibration, preventive maintenance, and emergency repair for industrial
              instrumentation across critical process plants.
            </p>
            <div className="d-flex gap-2 flex-wrap mt-3">
              <Link to="/book" className="btn btn-warning fw-semibold">
                Request Service
              </Link>
              <Link to="/book" className="btn btn-outline-light">
                Schedule Maintenance
              </Link>
              <a href="tel:917500050639" className="btn btn-outline-warning">
                Emergency Repair
              </a>
            </div>
          </div>
        </div>
        <div className="hero-dots">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide}
              type="button"
              className={`hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="services" className="container pb-4">
        <div className="section-head mb-3">
          <h2>Services & About</h2>
          <p>
            IEC-aligned instrumentation services delivered by trained technicians with
            process-industry field experience.
          </p>
        </div>
        <div className="content-card mb-4">
          <ul className="mb-3">
            <li>IEC 61508 / 61511 safety compliance focus</li>
            <li>Qualified and certified field technicians</li>
            <li>Detailed reporting and audit-ready documentation</li>
          </ul>
          <Link to="/about" className="btn btn-outline-light">
            Open About Page
          </Link>
        </div>
        <div className="section-head mb-3">
          <p>
            Calibration & validation, preventive maintenance, repair & troubleshooting,
            installation & commissioning, loop optimization, and documentation.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <article className="content-card h-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-image mb-3"
                  loading="lazy"
                  decoding="async"
                />
                <h5>{service.title}</h5>
                <p>{service.summary}</p>
                <Link to={`/services/${service.id}`} className="text-link">
                  View service details
                </Link>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="industries" className="container pb-4">
        <div className="section-head mb-3">
          <h2>Industries</h2>
        </div>
        <div className="row g-4">
          {industries.map((industry) => (
            <div className="col-sm-6 col-lg-4" key={industry}>
              <div className="trust-card h-100">
                <h6>{industry}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="section-head mb-3 mt-4">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="trust-card h-100">
              <h6>Reduce Downtime</h6>
              <p>Prevent failures before they create costly process interruptions.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trust-card h-100">
              <h6>Safety Compliance</h6>
              <p>Execution aligned with IEC 61508 / IEC 61511 safety expectations.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trust-card h-100">
              <h6>Qualified Technicians</h6>
              <p>Skilled, trained, and certified instrumentation field specialists.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trust-card h-100">
              <h6>Detailed Reporting</h6>
              <p>Complete maintenance documentation and calibration records for audits.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="container pb-4">
        <div className="section-head mb-3">
          <h2>Resources</h2>
        </div>
        <div className="row g-4">
          {resources.map((title) => (
            <div className="col-md-4" key={title}>
              <article className="content-card">
                <h6>{title}</h6>
              </article>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Link to="/resources" className="btn btn-outline-light">
            Open Resources Page
          </Link>
        </div>
      </section>

      <section id="request-quote" className="container pb-4">
        <div className="content-card d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h2 className="mb-1">Request Quote</h2>
            <p className="mb-0">Share instrument type, service scope, and site details.</p>
          </div>
          <Link to="/book" className="btn btn-warning fw-semibold">
            Open Quote Form
          </Link>
        </div>
      </section>

      <section id="contact" className="container pb-5">
        <div className="section-head mb-3">
          <h2>Contact</h2>
        </div>
        <div className="content-card">
          <p className="mb-1"><strong>Emergency Hotline:</strong> 7500050639</p>
          <p className="mb-3"><strong>Email:</strong> satyamkumar3329@gmail.com</p>
          <Link to="/contact" className="btn btn-outline-light">
            Open Contact Page
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
