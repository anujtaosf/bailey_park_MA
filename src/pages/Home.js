import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../shady_grove_cover_edited.jpg";

function Home() {
  return (
    <div>
      <header className="report-header">
        <h1>Bailey Park Shady Grove Church Report and Recommendation</h1>
        <p className="subtitle">U-M Team Bailey • November 2025</p>
      </header>

      <section>
        <div className="figure-container">
          <img
            src={coverImage}
            alt="Shady Grove Church Exterior"
            style={{ maxWidth: "45%" }}
          />
          <p className="figure-caption">
            Exterior of Shady Grove Church, McDougall-Hunt Neighborhood
          </p>
        </div>
      </section>

      <section>
        <h2>About This Report</h2>
        <p>
          Bailey Park Neighborhood Development Corporation requested that our
          team research and analyze the uses of an abandoned church located in
          the McDougall-Hunt neighborhood of Detroit. We present our findings
          here and propose different use-cases for the church once it is
          purchased and renovated. Our analysis covered multiple fronts,
          including case studies, a market analysis, community surveys, and our
          own research around the area.
        </p>

        <h2>About Team Bailey</h2>
        <p>
          Team Bailey is a group of University of Michigan students dedicated to
          supporting community-driven development in Detroit's McDougall-Hunt
          neighborhood. Our team gathered data through direct community
          engagement, comprehensive market research, and case studies of similar
          projects. We then developed recommendations that prioritize resident
          voices and sustainable neighborhood growth. This report represents
          details our research on multiple fronts, recommendations that we have
          for the Shady Grove Church, and justification for why we think this is
          the best course of action.
        </p>

        <p>
          Also, we want to thank the Bailey Park Neighborhood Association
          (specifically Robert Siporin and Katrina Watkins) and McDougall-Hunt
          residents for helping us gather the research that informs this report
        </p>
      </section>

      <section id="table-of-contents">
        <h2>Table of Contents</h2>
        <div className="toc-grid">
          <Link to="/market-analysis" className="toc-item">
            <h3>Market Analysis</h3>
            <p>Comprehensive analysis of McDougall-Hunt neighborhood demographics, trends, infrastructure, and current developments</p>
          </Link>

          <Link to="/case-studies" className="toc-item">
            <h3>Case Studies</h3>
            <p>Examination of comparable adaptive reuse projects and successful community development initiatives</p>
          </Link>

          <Link to="/community-feedback" className="toc-item">
            <h3>Community Feedback</h3>
            <p>Direct survey results, community meeting insights, and resident priorities from our neighborhood engagement</p>
          </Link>

          <Link to="/recommendation" className="toc-item">
            <h3>Our Recommendation</h3>
            <p>Detailed evaluation of seven concepts, decision matrix analysis, and our final recommendation for Shady Grove Church</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
