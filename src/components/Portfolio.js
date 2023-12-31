import Project from './Project';
import React from "react";

function Portfolio() {

const projects = [
  {
    id: 0,
    title: "Social Network API",
    description: "This app uses node.js, mongoose, express, and JS to create a social network API where users can post, comment, and react to other people's posts as well as friend another user.", 
    repo: "https://github.com/M-deline/chal18socialnetapi",
  },
  {
    id: 1,
    title: "Note Taker",
    description: "This app uses node.js, express, and JS to create a note taking app where users can write, save, and delete notes.",
    repo: "https://github.com/M-deline/notetakerwexpresschal11",
  },
  {
    id: 2,
    title: "Employee Tracker",
    description: "This app uses node.js, express, and JS to create an employee tracker where users can add, update, and delete employees.",
    repo: "https://github.com/M-deline/chal12-employee_tracker",
  },
  {
    id: 3,
    title: "SVG Logo Generator",
    description: "This app uses node.js and JS to create an SVG logo generator.",
    repo: "https://github.com/M-deline/svg-logo",
  },
  {
    id: 4,
    title: "Cocktail Search App",
    description: "This project uses JS, CSS, HTML, Sequelize, Express, Handlebars, Node.js, and authentication to make an app where users can look through cocktails and save or delete cocktails from their profile.",
    repo: "https://github.com/M-deline/project-two",
  },
  {
    id: 5,
    title: "Weather API",
    description: "This app is used to show the current weather in any city in the world.",
    repo: "https://github.com/M-deline/api-weather-challenge",
  },
  {
    id: 6,
    title: "Password Generator",
    description: "This is a simple app that generates a random password.",
    repo: "https://github.com/M-deline/Secure-Password-Generator",
  },
  
];
  return (
    <div>
      <h4 className="portfolio">Portfolio</h4>
      <hr />

      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Portfolio;