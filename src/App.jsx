import React from "react";
import Section1 from "./Sections";
import Header from "./header";
import Section3 from "./moreSections";
import "./CSS/global.css";

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section3 />
    </div>
  );
};

export default App;
