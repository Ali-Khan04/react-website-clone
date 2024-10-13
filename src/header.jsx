import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>React</h1>
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
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
