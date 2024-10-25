import React from "react";
import Section1 from "./Sections";
import Header from "./header";
import Section3 from "./moreSections";
import "./CSS/global.css";
import { Section4 } from "./section4";

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default App;
