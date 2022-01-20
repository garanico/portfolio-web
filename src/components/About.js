import React from "react";
import "../App.css";
import grace from "../img/grace.jpg";

function About() {
  return (

    // Profile Section
    <div className="pt-5 mb-4 border border-dark rounded-3">
      <div className="container border border-primary">
        <div className="row rounded-3 p-3">
          <div className="col-md-8 border border-danger">
            <h1 className="display-5 fw-bold h2-custom">Oh hey! I'm Grace.</h1>

            <p className="fs-4 p-custom">
              Insert cleverly worded info about me that takes up at least 2-4
              lines of text here. Font size will likely need to be adjusted.
            </p>
            <a href="https://docs.google.com/document/d/18B1npZHOXn3Nf14tNUh4L3ckASPbNT3-sL3aNJ3FAOQ/edit?usp=sharing"><button className="p-custom font-weight-bold">View My Resume</button></a>
          </div>

          <div className="col-md-4 border border-secondary">
            <img className="w-100 rounded" src={grace} alt="Grace profile photo" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="border border-warning mt-5 p-5">
        <h2 className="h2-custom">Skills</h2>
        <div className="skills-icons d-flex flex-wrap justify-content-center">
          <div className="icon-container">
            <i class="fab fa-html5 skill-icon">
              <p className="skill-text p-custom">HTML</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-css3-alt skill-icon">
              <p className="skill-text p-custom">CSS</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-js-square skill-icon">
              <p className="skill-text p-custom">JavaScript</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-react skill-icon">
              <p className="skill-text p-custom">React</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-git-square skill-icon">
              <p className="skill-text p-custom">Git</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-github skill-icon">
              <p className="skill-text p-custom">GitHub</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="far fa-chart-bar skill-icon">
              <p className="skill-text p-custom">Google Analytics</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fas fa-search skill-icon">
              <p className="skill-text p-custom">Google Ads</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-facebook-square skill-icon">
              <p className="skill-text p-custom">Facebook Business Manager</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-linkedin-in skill-icon">
              <p className="skill-text p-custom">LinkedIn Ads</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fas fa-desktop skill-icon">
              <p className="skill-text p-custom">Programmatic Display</p>
            </i>
          </div>
        </div>
      </div>
        {/* Contact Section */}
    <div className="contact-container bg-contact border border-info pt-5 my-0">
        <h2 className="h2-custom">Let's Connect! </h2>
        <div className="connect-text d-flex flex-wrap justify-content-center">
            <p className="p-custom text-left">
              If you ever want to have a fun discussion about Harry Potter or just want a quick chat, you can find me on social media or you can send me an email.
            </p>
            <div className="social-icons border border-success">
                <div className="d-flex flex-wrap justify-content-center">
                    <button className="d-flex mb-4 justify-content-center p-custom font-weight-bold">Email Me!</button>
                </div>

                <a href="https://github.com/garanico">
                    <i className="fab fa-github-square"></i>
                </a>

                <a href="https://linkedin.com/in/gracearanico/">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://instagram.com/gracieissoamzin">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
          </div>
        </div>


    </div>
  );
}

export default About;
