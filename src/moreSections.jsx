import React, { useState } from "react";
import codeSec3 from "./images/code2.png";
import videoSec3 from "./images/video2.png";
import "./moreSection.css";
export default function Section3() {
  return (
    <div>
      <section className="section3 ">
        <div className="sec3_container">
          <h1>
            Write components <br /> with code and markup
          </h1>
          <p>
            React components are JavaScript functions. Want to show some content{" "}
            <br />
            conditionally? Use an if statement. Displaying a list? Try array
            map(). Learning <br />
            React is learning programming.
          </p>
          <div className="sec3_img">
            <img className="section3_img" src={codeSec3} alt="" />
            <img className="section3_img" src={videoSec3} alt="" />
          </div>
          <p>
            This markup syntax is called JSX. It is a JavaScript syntax
            extension popularized <br />
            by React. Putting JSX markup close to related rendering logic makes
            React <br />
            components easy to create, maintain, and delete.
          </p>
        </div>
      </section>
    </div>
  );
}
