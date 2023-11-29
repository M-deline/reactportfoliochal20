import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <a
          className="button is-primary"
          href={"placeholder"} // link to resume}
          target="_blank" rel="noreferrer"
        >
          <h4 className="resume-view">Click Here to View My Resume</h4>
        </a>
      </div>
      <div className="column">
        <p className="content-resume">Proficiencies</p>
        <hr />
        <ul className="proficiency-list">
            <li className="proficiency">HTML</li>
            <li className="proficiency">CSS</li>
            <li className="proficiency">JavaScript</li>
            <li className="proficiency">jQuery</li>
            <li className="proficiency">Node</li>
            <li className="proficiency">Express</li>
            <li className="proficiency">React</li>
            <li className="proficiency">MySQL</li>
            <li className="proficiency">MongoDB</li>
            <li className="proficiency">Sequelize</li>
            <li className="proficiency">MVC</li>
            <li className="proficiency">APIs</li>
            <li className="proficiency">Git</li>
            <li className="proficiency">GitHub</li>

        </ul>
      </div>
    </div>
  );
}

export default Resume;