const industries = [
  {
    name: "Oil & Gas",
    description:
      "Hazardous area instrumentation support, shutdown calibration, and rapid fault isolation."
  },
  {
    name: "Chemicals",
    description:
      "Corrosive service measurement reliability, analyzer upkeep, and loop stability improvements."
  },
  {
    name: "Pharmaceutical",
    description:
      "Validation-focused calibration and documentation for quality-critical manufacturing."
  },
  {
    name: "Food & Beverage",
    description:
      "Hygienic process instrumentation checks and preventive programs for continuous uptime."
  },
  {
    name: "Manufacturing",
    description:
      "Utility and production line instrumentation service for repeatable process control."
  },
  {
    name: "Water Treatment",
    description:
      "Flow, level, and analyzer performance support for municipal and industrial water systems."
  }
];

function Industries() {
  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>Industries Served</h1>
        <p>
          We tailor maintenance scope, safety requirements, and response workflows to each process environment.
        </p>
      </div>

      <div className="row g-4">
        {industries.map((industry) => (
          <div className="col-md-6 col-lg-4" key={industry.name}>
            <article className="content-card h-100">
              <h5>{industry.name}</h5>
              <p>{industry.description}</p>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Industries;
