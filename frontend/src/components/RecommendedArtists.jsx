// components/RecommendedArtists.js
import React from "react";
import "./SectionStyles.css";

const RecommendedArtists = () => {
  return (
    <section className="section">
      <h2>Recommended Artists</h2>
      <div className="section-content">
        <div className="item">Artist 1</div>
        <div className="item">Artist 2</div>
        <div className="item">Artist 3</div>
      </div>
    </section>
  );
};

export default RecommendedArtists;
