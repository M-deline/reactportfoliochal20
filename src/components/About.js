// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// Recent Photo or Avatar
// Short Biography
import React from "react";
// import placeholder from '../images/placeholder.jpeg';
function About() {
  return (
    <div>
      <h4 className="about-text">About Me</h4>
      <hr />
      <div className="content">
        <img className="images" src={process.env.PUBLIC_URL + '/images/placeholder.jpeg'} alt=""/>
        <div>
          <p className="about-text">
            <br></br>
            I am Madeline and I am studying full stack web development in order to become a full time developer. I am almost finished with the FullStack Developer BootCamp from University of Denver. 
          </p>
          <p className="about-text">
            <br></br>
            <br></br>
            Outside of the bootcamp, I love to practice coding for personal apps and connect with other people to practice Spanish. I love to read and go on hikes all over Colorado. 
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default About;