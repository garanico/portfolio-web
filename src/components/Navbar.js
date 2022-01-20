import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div class="navigation">
        <h3 class="float-md-start mb-0 text-black h2-custom">
          <a class="nav-link navbar-brand text-black nav-h1-custom" href="/">g.</a>
        </h3>

        <div class="navbar-expand-md navbar-light float-md-end">
          <div class="container-fluid mb-0">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-black p-custom" aria-current="page" href="/index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black p-custom" href="/about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black p-custom" href="/projects.html">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Navbar
