import React from "react";
import "../App.css";
import grace from "../img/grace.jpg";

function About() {
  return (
    // Profile Section
    <div className="about-container pt-5 mb-4 rounded-3 overflow-hidden">
      <div className="container">
        <div className="row rounded-3 p-3">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold font-playfair color-hotpink">
              about me
            </h1>

            <p className="fs-5 font-lato">
              I'm a front-end developer with a background in digital marketing
              and project management. My 10+ years in digital marketing has
              shaped how I approach programming.
            </p>

            <p className="fs-5 font-lato">
              It's important to me that technology nurtures community,
              inclusivity, and knowledge. My goal is to make beautifully
              designed applications that create meaningful change in people's
              lives.
            </p>

            <p className="fs-5 font-lato">
              Outside of coding,you can find me spending time with my family, my pup Bruno, and exploring new skills.  My latest venture is learning how to skateboard.
              </p>
            <a href="https://docs.google.com/document/d/18B1npZHOXn3Nf14tNUh4L3ckASPbNT3-sL3aNJ3FAOQ/edit?usp=sharing">
              <button className="font-lato">view my resume</button>
            </a>
          </div>

          <div className="col-md-4">
            <img
              className="w-100 rounded"
              src={grace}
              alt="Grace profile photo"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-5 p-5">
        <h2 className="font-playfair color-hotpink text-center">Skills</h2>
        <div className="skills-icons d-flex flex-wrap justify-content-center">
          <div className="icon-container">
            <i class="fab fa-html5 skill-icon">
              <p className="skill-text font-lato">HTML</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-css3-alt skill-icon">
              <p className="skill-text font-lato">CSS</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-js-square skill-icon">
              <p className="skill-text font-lato">JavaScript</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-react skill-icon">
              <p className="skill-text font-lato">React</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-git-square skill-icon">
              <p className="skill-text font-lato">Git</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-github skill-icon">
              <p className="skill-text font-lato">GitHub</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="far fa-chart-bar skill-icon">
              <p className="skill-text font-lato">Google Analytics</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fas fa-search skill-icon">
              <p className="skill-text font-lato">Google Ads</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-facebook-square skill-icon">
              <p className="skill-text font-lato">Facebook Business Manager</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fab fa-linkedin-in skill-icon">
              <p className="skill-text font-lato">LinkedIn Ads</p>
            </i>
          </div>

          <div className="icon-container">
            <i class="fas fa-desktop skill-icon">
              <p className="skill-text font-lato">Programmatic Display</p>
            </i>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="contact-container bg-contact pt-5 my-0">
        <h2 className="font-playfair color-hotpink text-center">
          Let's Connect!{" "}
        </h2>
        <div className="connect-text d-flex flex-wrap justify-content-center">
          <p className="font-lato text-left">
            If you ever want to have a fun discussion about Harry Potter or just
            want a quick chat, you can find me on social media or you can send
            me an email.
          </p>
          <div className="connect-container border border-success">
            <div>
              <button className="mb-4 font-lato fw-bold text-center">
                email me
              </button>
            </div>

            <div className="social-icons d-flex flex-wrap">
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
    </div>
  );
}

export default About;
