import React, { useState } from "react";
import "./header.css";
import reactLogo from "./images/react-1.png";

const Header = () => {
  const [hover, setHover] = useState(false);

  return (
    <header className="header">
      <div
        className="logo"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundImage: hover ? `url(${reactLogo})` : "none",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: "background-image 1ms ease",
        }}
      >
        <h1
          style={{
            opacity: hover ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        >
          React
        </h1>
      </div>
      <nav className="links">
        <ul>
          <li>Home</li>
          <li>Docs</li>
          <li>Blog</li>
          <li>Community</li>
        </ul>
      </nav>
      <div className="header_buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
