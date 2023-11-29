// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">About Me</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt=""/>
      <p className="content is-italic mt-4">
       I am Madeline and I am studying full stack web development in order to become a full time developer.
      </p>
      <p className="content">
        idk something about me
      </p>
    </div>
  );
}

export default About;