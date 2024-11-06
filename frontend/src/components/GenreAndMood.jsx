// components/SuggestedContent.js
import React from "react";
import "./SectionStyles.css";

const SuggestedContent = () => {
  return (
    <section className="section">
      <h2>Suggested Content</h2>
      <div className="section-content">
        <div className="item">Popular Album</div>
        <div className="item">Trending Playlist</div>
        <div className="item">New Releases</div>
      </div>
    </section>
  );
};

export default SuggestedContent;
