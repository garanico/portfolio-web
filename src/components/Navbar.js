import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Navbar({ currentPage, setCurrentPage }) {


    return (
        <div class="navigation fixed-top">
        <h3 class="float-md-start mb-0 custom-black h2-custom">
          <Link 
          className="nav-link navbar-brand custom-black fw-bold font-playfair nav-h1-custom" 
          to={"/"}
          >g.
          </Link>
        </h3>

        <div class="navbar-expand-md navbar-light float-md-end">
          <div class="container-fluid mb-0">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link 
                class="nav-link text-black font-lato" 
                to={"/"} 
                >home
                </Link>
                </li>
                <li class="nav-item">
                  <Link
                  class="nav-link text-black font-lato" 
                  to={"about"}>about
                  </Link>
                </li>
                <li class="nav-item">
                  <Link 
                  class="nav-link text-black font-lato" 
                  to={"/projects"}>projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Navbar
