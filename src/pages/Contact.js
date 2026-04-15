import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [quickForm, setQuickForm] = useState({
    name: "",
    serviceType: "Calibration & Validation",
    instrumentType: "Pressure Transmitter",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuickForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/book", {
        name: quickForm.name,
        company: "Quick Request",
        email: "",
        serviceType: quickForm.serviceType,
        instrumentType: quickForm.instrumentType,
        machine: quickForm.instrumentType,
        phone: quickForm.phone,
        location: "Not provided",
        problem: "Quick request submitted from Contact page."
      });

      alert("Quick request submitted. Our team will contact you shortly.");
      setQuickForm({
        name: "",
        serviceType: "Calibration & Validation",
        instrumentType: "Pressure Transmitter",
        phone: ""
      });
    } catch (error) {
      alert("Could not submit quick request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>Contact / Request Quote</h1>
        <p>
          Reach our instrumentation support team for planned maintenance, urgent breakdowns, or service coverage checks.
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12">
          <div className="content-card">
            <h5>Quick Request Form</h5>
            <form onSubmit={handleQuickSubmit}>
              <div className="row g-3">
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={quickForm.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    name="serviceType"
                    value={quickForm.serviceType}
                    onChange={handleChange}
                  >
                    <option>Calibration & Validation</option>
                    <option>Preventive Maintenance</option>
                    <option>Repair & Troubleshooting</option>
                    <option>Installation & Commissioning</option>
                    <option>Control Loop Tuning & Optimization</option>
                    <option>Asset Management & Documentation</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    name="instrumentType"
                    value={quickForm.instrumentType}
                    onChange={handleChange}
                  >
                    <option>Pressure Transmitter</option>
                    <option>Temperature Transmitter</option>
                    <option>Flowmeter</option>
                    <option>Level Transmitter</option>
                    <option>Control Valve</option>
                    <option>Analyzer</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={quickForm.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-3 d-flex gap-2 flex-wrap">
                <button className="btn btn-warning fw-semibold" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Service"}
                </button>
                <Link to="/book" className="btn btn-outline-light">
                  Open Full Quote Form
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="content-card h-100">
            <h5>Contact Us</h5>
            <p className="mb-1">24/7 Critical Instrument Failure Response</p>
            <p className="fw-bold fs-4 mb-1">+917500050639</p>
            <a className="btn btn-warning btn-sm fw-semibold mb-3" href="tel:+917500050639">
              Emergency Repair
            </a>

            <h5 className="mt-4">General Contact</h5>
            <p className="mb-1"><strong>Phone:</strong> 917500050639</p>
            <p className="mb-1"><strong>Email:</strong> Satyamkumar3329@gmail.com</p>
            <p className="mb-3"><strong>Hours:</strong> Mon-Sat, 6:00 AM - 8:00 PM</p>

            <h5>Service Areas</h5>
            <p>Delhi NCR Region, Gujarat, Punjab, and Pan India service coverage.</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="content-card h-100">
            <h5>Service Area Map</h5>
            <iframe
              title="Service area map"
              src="https://maps.google.com/maps?q=Delhi%20NCR%20Region&t=&z=6&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/btPqEp2NSzkw36ccA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm mt-3"
            >
              Open Exact Location
            </a>
            <p className="small mt-3 mb-0 text-light-emphasis">
              Need a quote? Use the Request Quote page with your instrument type and required service scope.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
