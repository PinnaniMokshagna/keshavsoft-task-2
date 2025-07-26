import React from 'react';
import softImg from '../assets/Soft.jpg';
import genImg from '../assets/Gen.jpg';
import ecomersImg from '../assets/Ecomers.jpg';
import dataImg from '../assets/data.jpg';
import machineImg from '../assets/Machine.jpg';
import reactImg from '../assets/React.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Portfolio</h2>
        <p className="lead text-center mb-5">
          Showcasing Success: Our portfolio is a testament to our collaborative approach to innovation and our commitment to excellence. Below, you'll find a curated selection of our projects that exemplify our skill in turning complex challenges into impactful digital solutions. Each project highlights our dedication to delivering high-quality results that drive business success.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={softImg} alt="Project 1" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">Software Development</h5>
              <p className="mb-0">Tailored digital solutions for complex business processes.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={genImg} alt="Project 2" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">Web Application</h5>
              <p className="mb-0">Delivering seamless experiences across all platforms.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={ecomersImg} alt="Project 3" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">E-commers web site</h5>
              <p className="mb-0">Driving growth with cutting-edge online retail technology.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={dataImg} alt="Project 4" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">Data Science</h5>
              <p className="mb-0">Driving growth with cutting-edge online retail technology.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={machineImg} alt="Project 5" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">Machine Learning</h5>
              <p className="mb-0">Driving growth with cutting-edge online retail technology.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tilt-card h-100 text-center">
              <img src={reactImg} alt="Project 6" width="80" height="80" className="mb-3 rounded shadow object-fit-cover" />
              <h5 className="mb-2">React Developer</h5>
              <p className="mb-0">Driving growth with cutting-edge online retail technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;