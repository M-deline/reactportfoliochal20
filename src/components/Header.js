// WHEN I view the header
// THEN I am presented with the developer's name and Nav with titles corresponding to different sections of the portfolio
import React, { useState } from 'react';
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
// must have default be about 
      default:
        return <About />;
    }
  };

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
            <span className="content is-large">Madeline Kovanda</span>
          </a>
        </div>
      </nav>
      {/* {renderPage(currentPage)} */}
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* pass in currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;