function AboutUs() {
  return (
    <main className="container py-5">
      <div className="section-head mb-4">
        <h1>About Us</h1>
        <p>
          PrimeLoop Instrumentation delivers uptime-focused maintenance and instrumentation
          reliability programs for process industries.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <article className="content-card h-100">
            <h5>Certifications & Standards</h5>
            <p>
              Our procedures are built around IEC and ISO-aligned practices for plants with strict
              safety and quality expectations.
            </p>
            <ul>
              <li>IEC 61508 / IEC 61511 safety lifecycle awareness in service execution</li>
              <li>Safety compliance focus: IEC 61508 / IEC 61511</li>
              <li>ISO-style quality and documentation discipline</li>
              <li>Traceable calibration certificate and maintenance record control</li>
            </ul>
          </article>
        </div>

        <div className="col-lg-4">
          <article className="content-card h-100">
            <h5>Technician Expertise</h5>
            <p>
              Skilled technicians with commissioning, troubleshooting, and turnaround
              maintenance experience across instrument and control loops.
            </p>
            <ul>
              <li>Pressure, temperature, flow, and level instrumentation</li>
              <li>Control valve diagnostics, PID loop tuning, and optimization</li>
              <li>PLC / DCS I/O and loop troubleshooting</li>
              <li>Skilled, trained, and certified field personnel</li>
            </ul>
          </article>
        </div>

        <div className="col-lg-4">
          <article className="content-card h-100">
            <h5>Industry Experience</h5>
            <p>
              We support both continuous and batch process plants with reliability-centered
              programs that reduce unplanned shutdowns.
            </p>
            <ul>
              <li>Oil & gas, chemicals, and manufacturing operations</li>
              <li>Pharmaceutical, food & beverage, and water treatment facilities</li>
              <li>Commissioning support for expansions and brownfield upgrades</li>
              <li>Detailed reporting for audit, quality, and maintenance governance</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
