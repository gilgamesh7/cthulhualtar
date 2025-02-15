import React, { useState, useEffect, useRef } from 'react';
import init, { get_rlyeh_location, calculate_time_to_awaken } from 'rust_wasm_functions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import cthulhuImage1 from './images/cthulhu.jpeg';
import cthulhuImage2 from './images/cthulhu-2.jpg';
import cthulhuImage3 from './images/cthulhu-6.png.webp';
import cthulhuImage4 from './images/cthulhu-5.jpg.webp';
import cthulhuImage5 from './images/cthulhu-3.jpeg';

function Altar() {
  const [rlyeh_location, setRlyehLocation] = useState([]);
  const [awakeningTime, setAwakeningTime] = useState([]);

  const timerRef = useRef(null); // Use ref instead of state for timer ID to avoid triggering eslint error "React Hook useEffect has a missing dependency"
  const carouselRef = useRef(null); // Ref for carousel element

  useEffect(() => {

    let active = true; // Track if the component is still mounted

    const loadWASM = async () => {
      await init();

      const rlyeh_location = get_rlyeh_location();
      setRlyehLocation(rlyeh_location);

      const scheduleNextUpdate = () => {
        if (!active) {
          return;
        }

        const awakeningTime = calculate_time_to_awaken();
        setAwakeningTime(awakeningTime);

        // Generate a random interval between 1 and 6 seconds
        const nextInterval = Math.floor(Math.random() * 6 + 1) * 1000; // Random time between 1 and 6 seconds

        // Schedule the next update
        timerRef.current = setTimeout(() => {
          scheduleNextUpdate();
        }, nextInterval);

      };

      // Start the first update
      scheduleNextUpdate();
    };

    loadWASM();

    // Cleanup on component unmount
    return () => {
      active = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []); // Dependency array is empty to ensure the effect runs once

  useEffect(() => {
    // Initialize the carousel when the component mounts
    if (carouselRef.current) {
      const bootstrap = require('bootstrap'); // Import Bootstrap dynamically
      new bootstrap.Carousel(carouselRef.current, {
        interval: 6000, // Set the interval to 6 seconds
        ride: 'carousel', // Automatically start the carousel
      });
    }
  }, []);

  return (
    <div className="altar" class="container-sm">
      <div class="d-flex justify-content-center mt-4">
      <div class="bg-warning text-dark p-3 shadow-sm rounded text-center">
          {awakeningTime}
        </div>
      </div>

    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-2">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3> The Covenant of the Abyssal Harbinger</h3>
          <br></br>
          Carlos Danger <br></br>
          Santiago Hernandez <br></br>
          Bernard O'Leary <br></br>
          Minotaur <br></br>
          Roger Federer <br></br>
          Dirk Diggler <br></br>
          Michael Hunt <br></br>
          Baba Yaga <br></br>
          <br></br>
          <h3> Specters of the Broken Covenant of the Abyss </h3>
          <br></br>
          Rajesh Babu <br></br>
        </div>
        <div class="col">
          <div className="container mt-5">
            <h1 className="text-center mb-4">{rlyeh_location}</h1>
            <div
              id="myCarousel"
              className="carousel slide"
              ref={carouselRef} // Attach the ref to the carousel element
            >
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
              </ol>

              {/* Carousel Items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={cthulhuImage1} className="d-block w-100" alt="Cthulhu" />
                  <div className="carousel-caption">
                    <h5>Cthulhu</h5>
                    <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={cthulhuImage2} className="d-block w-100" alt="Cthulhu" />
                  <div className="carousel-caption">
                    <h5>Cthulhu</h5>
                    <p>In his house at R'lyeh, dead Cthulhu lies dreaming</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={cthulhuImage3} className="d-block w-100" alt="Cthulhu" />
                  <div className="carousel-caption">
                    <h5>Cthulhu</h5>
                    <p>That is not dead which can eternal lie, And with strange aeons even death may die.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={cthulhuImage4} className="d-block w-100" alt="Cthulhu" />
                  <div className="carousel-caption">
                    <h5>Cthulhu</h5>
                    <p>The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={cthulhuImage5} className="d-block w-100" alt="Cthulhu" />
                  <div className="carousel-caption">
                    <h5>Cthulhu</h5>
                    <p>A mountain walked or stumbled.</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
      </div>

      <div class="col-3">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3> This is the invocation for your supplication</h3>
        <br></br>
      <iframe 
        width="100%" 
        height="150" 
        src="https://www.youtube.com/embed/zu-akdyxpUc?rel=0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <div>
      <br></br>
          <h3> Portents of Cosmic Tempests </h3>
          <br></br>
          In the cursed light of 06:36 AM, the spectral sun awakens over eldritch R'lyeh, only to retreat by 08:32 PM into grim twilight. At 09:10 AM, a feeble, 5%-lit waxing crescent ascends, casting eerie omens, and by 10:12 PM, it sinks into abysmal shadow. 
          <br></br>
      </div>
      </div>
      </div>

      </div>  
      <p className="mt-3"></p>
      <p className="mt-1"></p>
    </div>
  
  );
}

export default Altar;
