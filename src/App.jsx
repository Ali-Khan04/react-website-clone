import React from "react";
import FirstSection from "./components/FirstSections";
import Header from "./components/header";
import ThirdSecttion from "./components/ThirdSections";
import "./CSS/global.css";
import FourthSection from "./components/FourthSection";

const App = () => {
  return (
    <div>
      <Header />
      <FirstSection />
      <ThirdSecttion />
      <FourthSection />
    </div>
  );
};

export default App;
