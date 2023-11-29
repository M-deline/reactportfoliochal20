import React from 'react';
import { Link, useMatch } from 'react-router-dom';

function Nav() {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <div className="cursor">
      <ul className="cursor">
        {tabs.map((tab) => (
          <NavItem key={tab} tab={tab} />
        ))}
      </ul>
    </div>
  );
}

function NavItem({ tab }) {
  const match = useMatch("/" + tab.toLowerCase());

  return (
    <li className={match ? "navlink active-link" : "nav-item"}>
      <Link to={"/" + tab.toLowerCase()} className="nav-link">
        {tab}
      </Link>
    </li>
  );
}

export default Nav;