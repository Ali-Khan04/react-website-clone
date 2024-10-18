import React from "react";
import reactImg from "./images/react-1.png";
import codeImg from "./images/code.png";
import videoImg from "./images/video.png";
import SectionWithAnimation from "./animation";
import "./CSS/sections.css";

export function Section1() {
  return (
    <div>
      <SectionWithAnimation className="section1">
        <img className="react_img" src={reactImg} alt="react" />
        <p id="title">React</p>
        <p>The library for web and native user interfaces</p>
        <div className="buttons">
          <button className="button">Learn React</button>
          <button className="button">API References</button>
        </div>
      </SectionWithAnimation>

      <SectionWithAnimation className="section2">
        <div className="user_Interfaces">
          <h1>
            Create user interfaces <br />
            from components
          </h1>
          <p>
            React lets you build user interfaces out of individual pieces called
            components.
          </p>
          <div className="sec2_img">
            <img className="section_img" src={codeImg} alt="" />
            <img className="section_img" src={videoImg} alt="" />
          </div>
          <p>
            Whether you work alone or with others, React makes building
            components easy.
          </p>
        </div>
      </SectionWithAnimation>
    </div>
  );
}
export default Section1; //Sections
