import React from 'react';
import '../App.css';
import grace from "../img/grace.jpg";

function Homepage() {
  return (
  <div className="homepage-container pt-5 rounded-3">
      <div className="container">
        <div className="row rounded-3 p-3">
          <div className="col-md-8">
            <h5 className="font-lato">Oh hey! <h1 className="display-5 fw-bold font-playfair color-hotpink">I'm Grace.</h1></h5>

            <p className="fs-4 font-lato">
              A Front-End Web Developer passionate about creating digital experiences that are equal parts functional and beautiful.
            </p>
            <div className="d-flex justify-content-evenly">
            <a href="https://docs.google.com/document/d/18B1npZHOXn3Nf14tNUh4L3ckASPbNT3-sL3aNJ3FAOQ/edit?usp=sharing"><button className="p-custom font-weight-bold">View My Resume</button></a>
            
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


          <div className="col-md-4">
            <img className="w-100 rounded" src={grace} alt="Grace profile photo" />
          </div>
        </div>
      </div>


  </div>)
}

export default Homepage;
