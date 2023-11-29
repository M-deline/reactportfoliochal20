// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <h4>About Me</h4>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt=""/>
      <p>
      <br></br>
       I am Madeline and I am studying full stack web development in order to become a full time developer. I am almost finished with the FullStack Developer BootCamp from University of Denver. 
      </p>
      <p>
        <br></br>
        <br></br>
        Outside of the bootcamp, I love to practice coding for personal apps and connect wiht other people to practice Spanish. I love to read and go on hikes all over Colorado. 
      </p>
      <br></br>
      <br></br>
    </div>
  );
}

export default About;