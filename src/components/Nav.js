// WHEN I view the Nav titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a Nav title
// THEN I am presented with the corresponding section below the Nav without the page reloading and that title is highlighted
import React from "react";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="cursor">
      <ul className="cursor">
        {tabs.map((tab) => (
          
          <li
            className={
              props.currentPage === tab ? "navlink" : "nav-item"
            } 
            key={tab}
          > 
          
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
              >
              {tab}
            
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;