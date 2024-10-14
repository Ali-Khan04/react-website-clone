import React, { useState } from "react";
import reactImg from "./images/react.jpg";
import codeImg from "./images/code.png";
import videoImg from "./images/video.png";
import "./sections.css";

export function Section1() {
  return (
    <div>
      <section className="section1">
        <img className="react_img" src={reactImg} alt="react" />
        <p id="title">React</p>
        <br />
        <p>The library for web and native user interfaces</p>
        <br />
        <div className="buttons">
          <button className="button">Learn React</button>
          <button className="button">API References</button>
        </div>
      </section>
      <section className="section2">
        <div className="user_Interfaces">
          <h1>
            Create user interfaces <br />
            from components
          </h1>
          <p>
            React lets you build user interfaces out of individual pieces called
            components.
            <br /> Create your own React components like Thumbnail , LikeButton,
            and Video. <br />
            Then combine them into entire screens, pages, and apps.
          </p>

          <div class name="sec2_img">
            <img className="section_img" src={codeImg} alt="" />
            <img className="section_img" src={videoImg} alt="" />
          </div>
          <p>
            Whether you work on your own or with thousands of other developers,
            using <br />
            React feels the same. It is designed to let you seamlessly combine
            components <br />
            written by independent people, teams, and organizations.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Section1; //Sections
