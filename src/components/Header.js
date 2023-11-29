import React from 'react';
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/M-deline"
          >
            <span className="header-name">Madeline Kovanda</span>
          </a>
        </div>
      </nav>
      <Nav />
    </div>
  );
}

export default Header;