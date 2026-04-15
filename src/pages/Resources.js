const resources = [
  {
    title: "5 Tips for Pressure Transmitter Maintenance",
    type: "Troubleshooting Guide",
    summary:
      "Practical checks to reduce drift, impulse line issues, and unplanned instrument swaps."
  },
  {
    title: "Case Study: Reducing Loop Oscillation in a Distillation Unit",
    type: "Case Study",
    summary:
      "How targeted PID retuning and valve diagnostics improved process stability and product consistency."
  },
  {
    title: "Instrumentation PM Checklist for Annual Shutdown",
    type: "Best Practice",
    summary:
      "A field-ready checklist for planning calibration windows, spares, and workpack documentation."
  },
  {
    title: "Level Measurement Fault-Finding in Harsh Service",
    type: "Troubleshooting Guide",
    summary:
      "Step-by-step approach to isolate sensor, wiring, and logic-side faults quickly."
  },
  {
    title: "Calibration Documentation Best Practices for Audit Readiness",
    type: "Best Practice",
    summary:
      "How to structure calibration records, certificates, and maintenance histories for smoother audits."
  },
  {
    title: "Case Study: PM Program Reduced Instrument Failures by 32%",
    type: "Case Study",
    summary:
      "How scheduled inspections and focused corrective actions lowered repeat failures at a process plant."
  }
];

function Resources() {
  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>Resources & Blog</h1>
        <p>
          Case studies, technical guides, and practical field knowledge for instrumentation teams.
        </p>
      </div>

      <div className="row g-4">
        {resources.map((resource) => (
          <div className="col-md-6" key={resource.title}>
            <article className="content-card h-100">
              <p className="kicker mb-2">{resource.type}</p>
              <h5>{resource.title}</h5>
              <p>{resource.summary}</p>
              <button type="button" className="btn btn-sm btn-outline-warning">
                Read article
              </button>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Resources;
