import React, { Component } from "react";
import "./styles.scss";

export default class CabrioVideo extends Component {
  render() {
    return (
      <div className="cabrio-video-wrapper wrapper">
        <h2>Conheça o BMW Série 4 Cabrio</h2>
        <iframe
          className="cabrio-video"
          src="https://www.youtube.com/embed/cFyrTEYyq64"
          title="The BMW Concept Z4 (2017)."
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="end"></div>
      </div>
    );
  }
}
