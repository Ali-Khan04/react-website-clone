import React, { useState } from "react";
import reactImg from "./images/react.jpg";
import "./sections.css";

export function Section1() {
  return (
    <section className="section1">
      <img src={reactImg} alt="react" />
      <p id="title">React</p>
      <br />
      <p>The library for web and native user interfaces</p>
      <br />
      <div className="buttons">
        <button className="button">Learn React</button>
        <button className="button">API References</button>
      </div>
    </section>
  );
}
export default Section1; //Sections
