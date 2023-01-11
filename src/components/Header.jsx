import React from "react";
import logo from "./photo/react-logo.png"

function HeaderList() {
  return (
    <ul className="nav-items">
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

export default function Header() {
  return (
    <header>
      <Nav>
        <HeaderList />
      </Nav>
    </header>
  );
}

function Nav({ children }) {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      <h1>ReactFacts</h1>
      {children}
    </nav>
  );
}
