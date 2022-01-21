import React from 'react';
import '../App.css';

function Projects() {
  return (

<div className="project-container pt-5 d-flex">

    <div className="row">
        <div className="project-header">
            <h3 className="font-lato text-center">take a look at my <h1 className="font-playfair color-hotpink"> PROJECTS</h1></h3>
            

        </div>
        {/* Card 1 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-1">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink">decidr.</h5>
                    <p className="card-text font-lato"> React</p>
                    <p className="card-text font-lato text-left">A simple React app to help you make a decision when your brain just can't anymore.</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/garanico/decidr-app"><button className="card-btn font-lato fw-bold text-white">code</button></a>
                        <a href="https://garanico.github.io/decidr-app/"><button className="card-btn font-lato fw-bold text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 2 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-2">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink">the haunted house game</h5>
                    <p className="card-text font-lato"> React | Team Project</p>
                    <p className="card-text font-lato text-left">A fun "choose your own adventure" style game just in time for spooky season.</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/luceroweb/haunted-house-game"><button className="card-btn font-lato text-white">code</button></a>
                        <a href="https://luceroweb.github.io/haunted-house-game/#/"><button className="card-btn font-lato text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-3">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink">my first website</h5>
                    <p className="card-text font-lato"> HTML | CSS</p>
                    <p className="card-text font-lato text-left">A fun throwback to the first website I've ever built!</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/garanico/w4b-final-project"><button className="card-btn font-lato fw-bold text-white">code</button></a>
                        <a href="https://garanico.github.io/w4b-final-project/"><button className="card-btn font-lato fw-bold text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 4 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-4">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink">decidr.</h5>
                    <p className="card-text font-lato"> React </p>
                    <p className="card-text font-lato text-left">A simple React app to help you make a decision when your brain just can't anymore.</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/garanico/decidr-app"><button className="card-btn font-lato fw-bold text-white">code</button></a>
                        <a href="https://garanico.github.io/decidr-app/"><button className="card-btn font-lato fw-bold text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 5 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-5">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink">decidr.</h5>
                    <p className="card-text font-lato"> React </p>
                    <p className="card-text font-lato">A simple React app to help you make a decision when your brain just can't anymore.</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/garanico/decidr-app"><button className="card-btn font-lato fw-bold text-white">code</button></a>
                        <a href="https://garanico.github.io/decidr-app/"><button className="card-btn font-lato fw-bold text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 6 */}
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="card text-dark pc-overlay pc-img-6">
                <div className="text-center">
                    <h5 className="card-title font-playfair color-hotpink text-center">decidr.</h5>
                    <p className="card-text font-lato text-center"> React </p>
                    <p className="card-text font-lato text-left">A simple React app to help you make a decision when your brain just can't anymore.</p>

                    <div className="card-btn-container d-flex justify-content-center">
                        <a href="https://github.com/garanico/decidr-app"><button className="card-btn font-lato fw-bold text-white">code</button></a>
                        <a href="https://garanico.github.io/decidr-app/"><button className="card-btn font-lato fw-bold text-white">live site</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* End of Cards list */}


    </div>
</div>
  )
}

export default Projects;
