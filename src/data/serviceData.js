import digital from "../assets/digital.jpg";
import component from "../assets/component.jpg";
import innovation from "../assets/innovation.jpg";
import cryo from "../assets/cryo.jpg";
import hero3 from "../assets/hero3.png";

export const services = [
  {
    id: "calibration-validation",
    title: "Calibration & Validation",
    image: digital,
    summary:
      "In-situ and laboratory calibration for pressure, temperature, flow, and level instrumentation.",
    details: [
      "Traceable calibration workflows aligned with IEC and ISO quality systems.",
      "As-found / as-left data capture for compliance and audit readiness.",
      "Validation support for regulated production lines and batch records."
    ]
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    image: component,
    summary:
      "Scheduled inspections, cleaning, and functional testing that reduce unplanned downtime.",
    details: [
      "Condition-based checks for transmitters, analyzers, and final control elements.",
      "Shutdown-ready PM plans with turnaround support teams.",
      "Failure trend tracking to improve maintenance intervals."
    ]
  },
  {
    id: "repair-troubleshooting",
    title: "Repair & Troubleshooting",
    image: innovation,
    summary:
      "Rapid response for control failures, faulty sensors, signal loop issues, and communication faults.",
    details: [
      "24/7 response workflow for critical instrument and control outages.",
      "Root-cause diagnostics for process drift, bad actors, and intermittent faults.",
      "Loop integrity testing from sensor to DCS/PLC and HMI."
    ]
  },
  {
    id: "installation-commissioning",
    title: "Installation & Commissioning",
    image: hero3,
    summary:
      "Structured setup of new instrumentation and control systems for greenfield and brownfield sites.",
    details: [
      "Instrument mounting, impulse line checks, and termination verification.",
      "I/O checkout, loop checks, SAT support, and commissioning punch closure.",
      "Handover packages including redlines, records, and startup logs."
    ]
  },
  {
    id: "loop-tuning-optimization",
    title: "Control Loop Tuning & Optimization",
    image: digital,
    summary:
      "PID and valve performance optimization to stabilize process variation and reduce energy losses.",
    details: [
      "Baseline loop performance testing and oscillation diagnostics.",
      "PID retuning with response validation under live process conditions.",
      "Valve friction, stiction, and travel assessment for control reliability."
    ]
  },
  {
    id: "asset-management-documentation",
    title: "Asset Management & Documentation",
    image: cryo,
    summary:
      "Digital maintenance records, calibration certificates, and lifecycle visibility for instrument assets.",
    details: [
      "Tag-based history for calibration, PM, corrective actions, and change records.",
      "Certificate issue and retrieval workflows for audits and quality checks.",
      "KPI dashboards for maintenance backlog, criticality, and repeat failures."
    ]
  }
];

export const capabilityMatrix = [
  { instrument: "Pressure Transmitter", services: "Calibration, Validation, PM, Repair" },
  { instrument: "Temperature Transmitter", services: "Calibration, PM, Installation" },
  { instrument: "Flowmeter", services: "Calibration, Commissioning, Troubleshooting" },
  { instrument: "Level Transmitter", services: "Calibration, PM, Troubleshooting" },
  { instrument: "Control Valve", services: "Loop Tuning, Repair, Commissioning" },
  { instrument: "Positioner", services: "Loop Tuning, Diagnostics, Repair" },
  { instrument: "pH / Conductivity Analyzer", services: "Validation, PM, Repair" },
  { instrument: "PLC / DCS I/O Loop", services: "Troubleshooting, Commissioning, Documentation" }
];
