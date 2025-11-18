import React from "react";
import mapImage from "../McDougall-Hunt-Info-Map.png";
import infographicImage from "../neighborhood_demographics.png";

function MarketAnalysis() {
  return (
    <div>
      <header className="report-header">
        <h1>Market Analysis</h1>
        <p className="subtitle">Bailey Park Neighborhood overview</p>
        <p className="subtitle">McDougall-Hunt, Detroit</p>
      </header>

      <section id="demographics" className="two-column-section">
        <div className="section-content">
          <h2>Neighborhood Demographics</h2>
          <p>
            The demographic indicators show an <strong>older, low-income</strong> population with a <strong>higher share of female residents</strong> than male residents.
          </p>
        </div>

        <div className="section-visual">
          <img
            src={infographicImage}
            alt="McDougall-Hunt Neighborhood Infographic"
          />
        </div>
      </section>

      <section id="neighborhood-context" className="two-column-section">
        <div className="section-visual">
          <img src={mapImage} alt="McDougall-Hunt Neighborhood Map" />
          <p className="figure-caption"><strong>Figure 1:</strong> McDougall-Hunt Neighborhood Context Map</p>
        </div>

        <div className="section-content">
          <h2>Neighborhood History</h2>
          <p>
            McDougall-Hunt is undergoing a period of transformation driven by
            public and private redevelopment projects. The neighborhood's
            history of disinvestment has made way for strategic reinvestment
            through housing, education, and food-based community programs.
          </p>
        </div>
      </section>

      <section id="quantitative">
        <h2>Market Quantitative Trends</h2>

        <div className="trends-grid">
          <div className="trend-box">
            <h4>Average renovation cost</h4>
            <p className="trend-value">$560/SF</p>
            <p className="trend-description">
              Historic & civic renovations often <strong>exceed $500/SF and rely on federal historic tax credits,</strong> community development grants, and philanthropy.
            </p>
          </div>

          <div className="trend-box">
            <h4>Average completion timeline</h4>
            <p className="trend-value">4–5 years</p>
            <p className="trend-description">
              Project timelines range usually from <strong>four to eight years</strong> due to environmental remediation, preservation, and financing complexity.
            </p>
          </div>

          <div className="trend-box">
            <h4>Average total project cost</h4>
            <p className="trend-value">$9.3M</p>
            <p className="trend-description">
              Based on calculations, <strong>the average total project cost is about $9.3M.</strong>
            </p>
          </div>
        </div>

        <p>
          Smaller, mission-driven projects (e.g., Detroit Food Academy at $360k; Brilliant Detroit at $20k) contrast with capital-intensive
          adaptive reuse (e.g., 1337 Division at $15.5M; Assembly at $39M), revealing two parallel investment pathways. As the
          neighborhood remains affordable and community-centered while positioned for steady growth, future projects will need to
          balance affordability with reinvestment to ensure benefits for existing residents.
        </p>
      </section>

      <section id="quantitative-text">
        <h2>Market Quantitative Trends</h2>
        <p>
          The usages of newly renovated buildings show a rise in
          community-driven infrastructure that focuses on local engagement
          instead of commercial spaces. One example of this is the renovation
          of 3442 McDougall Street into the Detroit Food Academy. In this
          redevelopment, a former Heidelberg Project facility is being
          converted into teaching kitchens, youth cafés, and classrooms for
          culinary and career development. This reuse of the space follows the
          pattern of McDougall-Hunt's redevelopment priorities to develop
          educational, social, and nonprofit spaces that directly serve
          neighborhood residents.
        </p>
        <p>
          Similarly, the Brilliant Detroit Hub at 2706 Charlevoix repurposed
          an existing home to provide early childhood education and family
          support services. While this was a smaller-scale, low-cost project,
          it still promotes greater accessibility and social infrastructure in
          the neighborhood, reflecting the community's values and demographic
          needs.
        </p>
        <p>
          Beyond local renovations, major infrastructure investments like the
          I-375 Reconnecting Communities project are reshaping the physical
          make-up of McDougall-Hunt. The conversion of this freeway into a
          boulevard will reestablish street connectivity between the
          neighborhood, Eastern Market, and downtown Detroit. This improved
          accessibility is expected to increase property visibility and
          long-term land value. This will not only bring more foot traffic
          into the neighborhood, but it will also encourage small business
          activity along Gratiot Avenue.
        </p>
        <p>
          In general, the redevelopment of Mcdougall-Hunt is trending towards
          community-service buildings and away from large-scale commercial
          investment. The layering of community hubs and educational programs
          signals a gradual but steady reinvestment trend focused on residents
          first.
        </p>
      </section>

      <section id="developments">
        <h2>Current and Recent Developments</h2>

        <h3>HUD Choice Neighborhoods</h3>
        <p>
          A transformative redevelopment led by the Detroit Housing and
          Revitalization Department and Detroit Housing Authority. The project
          revitalizes the Forest Park Apartments and Diggs Housing Complex,
          introducing new mixed-income housing near Eastern Market with up to
          <strong> $40 million in federal funding</strong>. Expected
          completion in 2026.
        </p>

        <h3>I-375 Reconnecting Communities</h3>
        <p>
          The I-375 freeway is being converted into a boulevard designed to
          reconnect communities and increase accessibility. The project's
          estimated cost is around <strong>$500 million</strong> with
          approximately <strong>$104.6 million</strong> in federal funding.
        </p>

        <h3>Detroit Food Academy</h3>
        <p>
          Located at <strong>3442 McDougall Street</strong>, this renovation
          transforms a former Heidelberg Project headquarters into teaching
          kitchens and youth café spaces. The goal is to empower Detroit youth
          through culinary education and entrepreneurship. Total investment:
          <strong> $360,000</strong>.
        </p>

        <h3>Brilliant Detroit Hub</h3>
        <p>
          A repurposed home at <strong>2706 Charlevoix</strong> provides early
          childhood education and family support services. Though a smaller
          project (~<strong>$20,000</strong>), it contributes significantly to
          social infrastructure.
        </p>

        <h3>1337 Division St Adaptive Reuse</h3>
        <p>
          A mixed-use creative commercial redevelopment of a 1922 warehouse
          near Eastern Market. The project includes kitchens, event spaces,
          and public gathering areas, with a total cost of
          <strong> $15.5 million</strong>.
        </p>

        <h3>The Assembly Apartments</h3>
        <p>
          A $39 million adaptive reuse of the historic Edson, Moore & Company
          warehouse in Corktown, now offering apartments and creative
          workspace.
        </p>

        <h3>Hunt Street Station</h3>
        <p>
          The former Third Precinct Police Station at 2200 Hunt Street was
          transformed into coworking offices for small businesses and creative
          professionals. Renovation completed in 2018.
        </p>

        <h3>Vacant Land Transformation</h3>
        <p>
          Detroit Land Lab and local residents converted vacant lots near the
          Heidelberg Project into eco-literacy and community garden spaces.
          This project improved local engagement and land reuse capacity.
        </p>
      </section>

      <section id="properties">
        <h2>Local Properties on the Market</h2>
        <p>
          Below are commercial properties currently listed for lease within
          and just outside the McDougall-Hunt neighborhood. Data compiled
          November 2025 from LoopNet and CREXi listings.
        </p>

        <h3>Within McDougall-Hunt</h3>
        <table className="property-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Type</th>
              <th>Size (SF)</th>
              <th>Rate ($/SF/YR)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3317 Benson St (William Nursery School)</td>
              <td>Religious Facility</td>
              <td>3,800</td>
              <td>$12</td>
              <td>Former daycare, gated parking, garden-level classroom space</td>
            </tr>
            <tr>
              <td>3111 Elmwood St</td>
              <td>School / Special Purpose</td>
              <td>13,300</td>
              <td>$22</td>
              <td>Single-tenant, secured parking, previously elementary school</td>
            </tr>
            <tr>
              <td>2601 Gratiot Ave</td>
              <td>Retail / Office</td>
              <td>3,300</td>
              <td>Undisclosed</td>
              <td>Multiple tenancy, secured parking, event/flex space</td>
            </tr>
            <tr>
              <td>2055 Gratiot Ave</td>
              <td>Retail / Office</td>
              <td>3,000</td>
              <td>$18</td>
              <td>Second-floor office, open layout, fits 8–24 people</td>
            </tr>
          </tbody>
        </table>

        <h3>Just Outside McDougall-Hunt</h3>
        <table className="property-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Type</th>
              <th>Size (SF)</th>
              <th>Rate ($/SF/YR)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1525 Adelaide St (Detroit Wholesale Produce)</td>
              <td>Industrial</td>
              <td>2,050</td>
              <td>Upon Request</td>
              <td>2 drive-in bays, dock doors, shared with food wholesaler</td>
            </tr>
            <tr>
              <td>2362 Russell St, Suite 301 (Dinan Building)</td>
              <td>Retail / Office</td>
              <td>2,832</td>
              <td>$22</td>
              <td>Renovated third floor, shared building with restaurant</td>
            </tr>
            <tr>
              <td>2501 Russell St, Ste B</td>
              <td>Retail / Office</td>
              <td>2,000</td>
              <td>$12</td>
              <td>Lower-level storefront, flexible small retail use</td>
            </tr>
            <tr>
              <td>2501 Russell St, Ste 200</td>
              <td>Retail / Office</td>
              <td>2,100</td>
              <td>$19</td>
              <td>Second floor, open loft-style space</td>
            </tr>
            <tr>
              <td>2501 Russell St, 4th Floor</td>
              <td>Retail / Office</td>
              <td>2,100</td>
              <td>$20</td>
              <td>Top floor suite, natural light, shared entry</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="print-button-container">
        <button className="print-button" onClick={() => window.print()}>
          Export to PDF
        </button>
      </div>
    </div>
  );
}

export default MarketAnalysis;
