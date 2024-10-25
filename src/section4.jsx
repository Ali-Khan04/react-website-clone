import React from "react";
import { useState } from "react";
import SectionWithAnimation from "./animation";

export function Section4() {
  const [initialButton, updatedButton] = useState("");
  function handleClick(buttonData) {
    updatedButton(buttonData);
  }
  return (
    <SectionWithAnimation className="section4">
      {" "}
      <Buttons onClick={() => handleClick("Declarative UI")}>
        Declarative UI
      </Buttons>
      <Buttons onClick={() => handleClick("Imperative UI")}>Hooks</Buttons>
      <Buttons onClick={() => handleClick("React Router")}>
        React Router
      </Buttons>
      <Buttons onClick={() => handleClick("High Performance")}>
        High Performance
      </Buttons>
      <div className="dynamicUI">
        <p>{initialButton}</p>
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
