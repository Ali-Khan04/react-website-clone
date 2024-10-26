import React, { useState } from "react";
import SectionWithAnimation from "./animation";
import data from "./data";
import "./CSS/Section4.css";

export function Section4() {
  const [buttonData, setButtonData] = useState({
    title: "",
    description: "",
    keyPoints: [],
  });

  const [heading, setHeading] = useState("Select a topic to learn more");

  function handleClick(title, description, keyPoints) {
    setButtonData({ title, description, keyPoints });
    setHeading(title);
  }

  return (
    <SectionWithAnimation className="section4">
      <h1 className="section-title">Learn About React Features</h1>{" "}
      {/* Normal heading for the section */}
      <div className="sec4_buttons">
        <Buttons
          onClick={() =>
            handleClick(data[0].title, data[0].description, data[0].keyPoints)
          }
        >
          Declarative UI
        </Buttons>
        <Buttons
          onClick={() =>
            handleClick(data[3].title, data[3].description, data[3].keyPoints)
          }
        >
          Hooks
        </Buttons>
        <Buttons
          onClick={() =>
            handleClick(data[1].title, data[1].description, data[1].keyPoints)
          }
        >
          React Router
        </Buttons>
        <Buttons
          onClick={() =>
            handleClick(data[2].title, data[2].description, data[2].keyPoints)
          }
        >
          High Performance
        </Buttons>
      </div>
      <div className="dynamicUI">
        <h2>{heading}</h2>
        <p>{buttonData.description}</p>
        <ul>
          {buttonData.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </SectionWithAnimation>
  );
}

export function Buttons({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
