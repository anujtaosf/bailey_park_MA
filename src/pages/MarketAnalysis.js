import React from "react";
import mapImage from "../McDougall-Hunt-Info-Map.png";

function MarketAnalysis() {
  return (
    <div>
      <header className="report-header">
        <h1>Market Analysis</h1>
        <p className="subtitle">McDougall-Hunt Neighborhood Overview</p>
      </header>

      <section id="demographics">
        <h2>Neighborhood Demographics</h2>
        <ul>
          <li>Population (2023): 1,328</li>
          <li>Median Age: 56</li>
          <li>Median Income: $36,078</li>
          <li>Female Residents: 740</li>
          <li>Male Residents: 588</li>
          <li>Median Household Rent: $424</li>
          <li>Median Commercial Rent: $4,500/month</li>
        </ul>
      </section>

      <section id="neighborhood-context">
        <h2>Neighborhood Context</h2>
        <div className="figure-container">
          <img src={mapImage} alt="McDougall-Hunt Neighborhood Map" />
          <p className="figure-caption"><strong>Figure 1:</strong> McDougall-Hunt Neighborhood Context Map</p>
        </div>
      </section>

      <section id="history">
        <h2>Neighborhood History</h2>
        <p>
          McDougall-Hunt is undergoing a period of transformation driven by
          public and private redevelopment projects. The neighborhood's
          history of disinvestment has made way for strategic reinvestment
          through housing, education, and food-based community programs.
        </p>
      </section>

      <section id="quantitative">
        <h2>Quantitative Trends</h2>
        <p>
          Average total project cost: ~<strong>$9.3M</strong> <br />
          Average renovation cost: ~<strong>$560/SF</strong> <br />
          Average completion timeline: ~<strong>4–5 years</strong>
        </p>
        <p>
          The average renovation costs in the area of historic and civic
          buildings tend to be over $500/SF and are often funded by federal
          historic tax credits, community development grants, and
          philanthropic support. There is also a relatively long development
          cycle across projects. Projects have taken anywhere from four to
          eight years to complete due to environmental remediation, historic
          preservation requirements, and financial barriers.
        </p>
        <p>
          There are many smaller-scale community projects, such as Detroit
          Food Academy's renovation at 3442 McDougall ($360,000) and Brilliant
          Detroit's McDougall-Hunt Hub ($20,000). These have a large financial
          gap compared to large adaptive reuse efforts like 1337 Division
          ($15.5M) or The Assembly in Corktown ($39M). This disparity
          highlights two parallel investment pathways in the neighborhood. The
          first is mission-driven renovations with smaller budgets that meet
          immediate community needs. The second being capital-intensive
          adaptive reuse projects that aim to attract creative or new
          industries and new residents.
        </p>
        <p>
          The data we've gathered indicates that while Mcdougall-Hunt remains
          an affordable and community-centered neighborhood, it is also set up
          for steady growth. Property values appear to be subtly increasing,
          and long-term capital is beginning to take off through investment
          and federal infrastructure projects. Mcdougall-Hunt's future
          development projects will likely depend on balancing affordability
          with reinvestment. We should ensure that projects benefit existing
          residents while also attracting new economic opportunities and
          bringing money into the neighborhood.
        </p>
      </section>

      <section id="infrastructure">
        <h2>Infrastructure Trends</h2>
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
