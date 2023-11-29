import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-wrap">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
          <a href="https://stackoverflow.com/users/23009808/madeline-kovanda" target="_blank" rel="noreferrer">
            StackOverflow
          </a>
      </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;