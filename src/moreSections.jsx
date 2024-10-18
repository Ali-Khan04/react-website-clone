import React from "react";
import codeSec3 from "./images/code2.png";
import videoSec3 from "./images/video2.png";
import SectionWithAnimation from "./animation";
import "./CSS/moreSection.css";
import "./CSS/sections.css";

export default function Section3() {
  return (
    <SectionWithAnimation className="section3">
      <div className="sec3_container">
        <h1>Write components with code and markup</h1>
        <p>
          React components are JavaScript functions. Learn programming through
          React.
        </p>
        <div className="sec3_img">
          <img className="section3_img" src={codeSec3} alt="" />
          <img className="section3_img" src={videoSec3} alt="" />
        </div>
        <p>
          JSX makes it easy to create, maintain, and delete React components by
          combining markup with logic.
        </p>
      </div>
    </SectionWithAnimation>
  );
}
