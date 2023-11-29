// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Portfolio</strong>
          <div>
          <hr />
          <a href="https://github.com/M-deline" target="_blank" rel="noreferrer">
            GitHub 
          </a>{" "}
          |{" "}{" "}
          <a
            href="https://www.linkedin.com/in/madeline-kovanda-22399627b/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="placeholder" target="_blank" rel="noreferrer">
            PlaceHolder
          </a>
      </div>
        </p>
      </div>
    </footer>
  );
}

export default Footer;