import { Link, useParams } from "react-router-dom";
import { services } from "../data/serviceData";

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <main className="container py-5">
        <div className="content-card">
          <h1>Service Not Found</h1>
          <p>The requested service page is not available.</p>
          <Link to="/services" className="btn btn-warning">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
      </div>

      <article className="content-card mb-4">
        <h4>Detailed Scope</h4>
        <ul>
          {service.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </article>

      <article className="content-card mb-4">
        <h4>Execution Approach</h4>
        <p>
          Each engagement starts with instrument criticality review, safety permitting requirements,
          and a documented test plan. Field findings are captured in traceable records and handed over
          with completion notes.
        </p>
      </article>

      <div className="d-flex gap-3 flex-wrap">
        <Link to="/book" className="btn btn-warning fw-semibold">
          Request This Service
        </Link>
        <Link to="/services" className="btn btn-outline-light">
          Back to All Services
        </Link>
      </div>
    </main>
  );
}

export default ServiceDetail;
