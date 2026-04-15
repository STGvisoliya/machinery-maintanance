import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { capabilityMatrix, services } from "../data/serviceData";

function Services() {
  const [search, setSearch] = useState("");

  const filteredMatrix = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return capabilityMatrix;
    }

    return capabilityMatrix.filter(
      (item) =>
        item.instrument.toLowerCase().includes(query) ||
        item.services.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>Service Offerings</h1>
        <p>
          Detailed support for calibration, maintenance, troubleshooting, commissioning, and reliability optimization.
        </p>
      </div>

      <div className="row g-4 mb-5">
        {services.map((service) => (
          <div className="col-md-6" key={service.id}>
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
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <Link to={`/services/${service.id}`} className="text-link">
                Open detailed page
              </Link>
            </article>
          </div>
        ))}
      </div>

      <section className="matrix-shell">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <h3 className="m-0">Service Capability Matrix</h3>
          <input
            type="text"
            className="form-control matrix-search"
            placeholder="Search instrument or service"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-dark table-striped align-middle mb-0">
            <thead>
              <tr>
                <th>Instrument Type</th>
                <th>Supported Service Scope</th>
              </tr>
            </thead>
            <tbody>
              {filteredMatrix.map((item) => (
                <tr key={item.instrument}>
                  <td>{item.instrument}</td>
                  <td>{item.services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Services;
