// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">My Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={"placeholder"} // link to resume}
          target="_blank" rel="noreferrer"
        >
          <h4>View My Resume</h4>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Proficiencies</p>
        <hr />
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Node</li>
            <li>Express</li>
            <li>React</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Sequelize</li>
            <li>MVC</li>
            <li>APIs</li>
            <li>Git</li>
            <li>GitHub</li>

        </ul>
      </div>
    </div>
  );
}

export default Resume;