import { useState } from "react";
import axios from "axios";

function BookService() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Calibration & Validation",
    instrumentType: "Pressure Transmitter",
    machine: "Pressure Transmitter",
    location: "",
    problem: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };

    if (name === "instrumentType") {
      nextForm.machine = value;
    }

    setForm(nextForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/book", form);
      alert("Quote request submitted successfully.");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        serviceType: "Calibration & Validation",
        instrumentType: "Pressure Transmitter",
        machine: "Pressure Transmitter",
        location: "",
        problem: ""
      });
    } catch (error) {
      alert("Could not submit request. Please try again.");
    }
  };

  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>Request Quote / Service</h1>
        <p>
          Share your instrument type, required service scope, and site details. Our team responds quickly.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="content-card">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Company</label>
                <input
                  className="form-control"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Service Required</label>
                <select
                  className="form-select"
                  name="serviceType"
                  value={form.serviceType}
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

              <div className="col-md-6">
                <label className="form-label">Instrument Type</label>
                <select
                  className="form-select"
                  name="instrumentType"
                  value={form.instrumentType}
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

              <div className="col-12">
                <label className="form-label">Plant Location</label>
                <input
                  className="form-control"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">Issue / Scope Details</label>
                <textarea
                  className="form-control"
                  name="problem"
                  value={form.problem}
                  rows="4"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mt-3 d-flex gap-3 flex-wrap">
                <button className="btn btn-warning fw-semibold" type="submit">
                  Request Service
                </button>
                <a className="btn btn-outline-light" href="tel:+917500050639">
                  Emergency: +917500050639
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-4">
          <aside className="content-card h-100">
            <h5>Optional Client Portal</h5>
            <p>
              Secure access for calibration certificates, maintenance history, and completed work reports.
            </p>
            <button type="button" className="btn btn-outline-warning">
              Request Client Portal Access
            </button>

            <hr className="border-secondary" />

            <h6>Trust Indicators</h6>
            <ul>
              <li>IEC 61508 / 61511 safety compliance alignment</li>
              <li>ISO-style quality documentation workflows</li>
              <li>Detailed calibration and PM reporting</li>
            </ul>

            <hr className="border-secondary" />

            <h6>Emergency Support</h6>
            <p className="mb-1">24/7 critical failure response</p>
            <p className="fw-bold mb-0">+917500050639</p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default BookService;

