import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import page components
import Home from "./pages/Home";
import MarketAnalysis from "./pages/MarketAnalysis";
import CaseStudies from "./pages/CaseStudies";
import CommunityFeedback from "./pages/CommunityFeedback";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <Router basename="/bailey_park_MA">
      <div className="report-container">
        <aside className="sidebar">
          <h2>McDougall-Hunt</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/market-analysis">Market Analysis</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/community-feedback">Community Feedback</Link>
            <Link to="/recommendation">Our Recommendation</Link>
          </nav>
        </aside>

        <main className="report-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/community-feedback" element={<CommunityFeedback />} />
            <Route path="/recommendation" element={<Recommendation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
