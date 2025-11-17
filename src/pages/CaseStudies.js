import React from "react";

function CaseStudies() {
  return (
    <div>
      <header className="report-header">
        <h1>Case Studies</h1>
        <p className="subtitle">Comparable Community Development Projects</p>
      </header>

      <section id="case-studies">
        <h2>Overview</h2>
        <p>
          Explore detailed case studies of similar community development projects
          that have successfully balanced historic preservation, community needs,
          and sustainable growth. These examples provide valuable insights and
          lessons learned from comparable neighborhood transformations.
        </p>
        <div className="case-studies-button-container">
          <a
            href="https://drive.google.com/file/d/1NslEhY0BCIpLBq0WeAvdlmE21umRHzd5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="case-studies-button"
          >
            View Case Studies PDF
          </a>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
