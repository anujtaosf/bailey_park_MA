import React from "react";
import img1 from "../1.png";
import img2 from "../2.png";
import img3 from "../3.png";
import img4 from "../4.png";

function CommunityFeedback() {
  return (
    <div>
      <header className="report-header">
        <h1>Community Feedback</h1>
        <p className="subtitle">Direct Survey Results and Community Engagement</p>
      </header>

      <section id="community-feedback">
        <h2>Our Approach</h2>
        <p>
          Our team conducted multiple site visits to the Bailey Park neighborhood and
          engaged directly with residents through surveys and conversations. We attended
          the McDougall-Hunt Neighborhood Association monthly meeting and distributed
          surveys to gather authentic community input. This page presents our findings
          from direct community engagement, including quantitative survey data and
          qualitative feedback from neighborhood meetings.
        </p>

        <h2>Survey Results</h2>

        <div className="survey-section">
          <h3>Top Neighborhood Priorities</h3>
          <div className="figure-container">
            <img src={img1} alt="Top Neighborhood Priorities Survey Results" />
            <p className="figure-caption"><strong>Figure 1:</strong> Top Neighborhood Priorities</p>
          </div>
          <p>
            In our community survey given to Bailey Park residents, we included a question
            regarding the respondent's top priorities for the neighborhood, and allowed them
            to select from a list of options which ones they prioritize regarding neighborhood
            development. As shown in Figure 1, the 2 options of highest priority are <strong>more
            community gathering spaces (35% of residents)</strong> and <strong>more affordable
            housing options (30%)</strong>. Another priority frequently indicated was that of
            more food and drink spaces in the neighborhood (20%).
          </p>
        </div>

        <div className="survey-section">
          <h3>Top Concerns About Shady Grove Church Repurposing</h3>
          <div className="figure-container">
            <img src={img2} alt="Top Concerns Survey Results" />
            <p className="figure-caption"><strong>Figure 2:</strong> Top Concerns About Shady Grove Church Repurposing</p>
          </div>
          <p>
            In addition to resident priorities, we included a question in our survey regarding
            residents' top concerns regarding the repurposing of Shady Grove Church. This
            question was asked to ensure that our final recommendation does not violate any
            resident concerns regarding the property and its use. As illustrated in Figure 2, <strong>40% of residents
            indicated that they have no concerns</strong> with the repurposing of the building.
            The biggest concern that was indicated was that the repurposing of the building
            would have a <strong>lack of resident benefits (30% of residents)</strong>. 15% of
            residents indicated public safety was a top concern, and 7% of residents indicated
            that their top concern was either noise from events or minority accessibility and
            inclusion. This signifies that residents care deeply about resident wellbeing and
            benefits, and that an ideal repurposing of the church would be one that provides
            direct benefit to residents in a safe manner.
          </p>
        </div>

        <div className="survey-section">
          <h3>Support for Non-Church Use</h3>
          <div className="figure-container">
            <img src={img3} alt="Support for Non-Church Use Survey Results" />
            <p className="figure-caption"><strong>Figure 3:</strong> Support for Non-Church Use</p>
          </div>
          <p>
            To ensure that the community supported the idea of the Shady Grove Church
            potentially no longer being a place of worship, we asked residents if they
            supported the use of the building for something other than a church.
            Figure 3 demonstrates that <strong>80% of respondents indicated that they would support a non-church
            use</strong> of the building, 10% of respondents were unsure, and 10% said
            that they would oppose this use case.
          </p>
        </div>

        <div className="survey-section">
          <h3>Recommended Building Uses</h3>
          <div className="figure-container">
            <img src={img4} alt="Recommended Building Uses Survey Results" />
            <p className="figure-caption"><strong>Figure 4:</strong> Recommended Building Uses</p>
          </div>
          <p>
            Lastly, to help our team make our final recommendations for the building's
            future use, we wanted to hear directly from residents what they think the
            building should be used for. This was a free response question where residents
            could type in anything they wanted. All responses fit into one of the categories
            shown in Figure 4. <strong>44% of respondents recommended the building be used
            as a community center</strong>, 22% of respondents recommended the building be
            used as a grocery store, 11% recommended it stays used for its current purpose,
            11% recommend the building be used for affordable housing, and 11% recommended
            the building be used as a free health and wellness community center (which could
            potentially be considered a community center as well).
          </p>
          <p>
            <em>*It is important to note here that while affordable housing was the second
            most popular priority for the neighborhood among respondents, turning the church
            into affordable housing was not a popular recommendation. We considered this
            during our brainstorming of potential building use cases.</em>
          </p>
        </div>

        <h2>Community Meeting Analysis</h2>
        <p>
          Our team attended the monthly McDougall-Hunt Neighborhood Association meeting,
          led by president Dwayne, with approximately 25 community members in attendance.
          The vision and mission of the monthly meeting is to "engage and inform the
          neighborhood of things going on."
        </p>

        <h3>Key Takeaways from Community Engagement</h3>
        <div className="feedback-highlights">
          <div className="feedback-item">
            <h3>Need for Teen Spaces</h3>
            <p>
              Multiple residents emphasized the critical need for a space for teens to
              gather and engage in activities. One community member (Chris) specifically
              recommended video games and supervised recreational activities with basic
              rules (no drugs, no smoking). The goal is to provide teens with safe,
              constructive activities and prevent gang involvement. An adult staff or
              guard was recommended to supervise such a space.
            </p>
          </div>

          <div className="feedback-item">
            <h3>Land Use and Ownership Concerns</h3>
            <p>
              The way in which land is used emerged as a VERY important topic for the
              neighborhood. There is significant concern about "outsiders coming in and
              buying up all the land." Community members are deeply invested in what
              happens in the neighborhood and who is coming and going. A substantial
              portion of the meeting was dedicated to the Detroit Land Bank Authority
              discussing Land Reuse Programs.
            </p>
          </div>

          <div className="feedback-item">
            <h3>Public Safety and Crime Prevention</h3>
            <p>
              Community members expressed strong concerns about keeping crime down in
              the neighborhood and controlling "riff raff." Residents were appreciative
              of increased traffic law enforcement near the neighborhood and reported
              it has helped significantly. Police officers provided updates during the
              meeting, reflecting the community's prioritization of safety.
            </p>
          </div>

          <div className="feedback-item">
            <h3>Ideas for Shady Grove Site</h3>
            <p>
              Community members suggested the following uses for the site:
            </p>
            <ul>
              <li><strong>Community Center:</strong> Conference rooms, board room, stage with sound equipment, and teen center</li>
              <li><strong>Neighborhood Kitchen:</strong> Rotating families providing low-cost food options</li>
              <li><strong>Classes and Programs:</strong> CPR classes, martial arts for teens, general skills training, neighborhood patrol meetings</li>
            </ul>
          </div>
        </div>

        <h3>Future Community Engagement Opportunities</h3>
        <p>
          For additional future research and ongoing community engagement, the best
          resource for obtaining community feedback is the <strong>McDougall-Hunt
          Neighborhood Association meeting, which happens monthly on the first Saturday
          of the month, from 11am-12:30pm</strong>.
        </p>
      </section>

      <div className="print-button-container">
        <button className="print-button" onClick={() => window.print()}>
          Export to PDF
        </button>
      </div>
    </div>
  );
}

export default CommunityFeedback;
