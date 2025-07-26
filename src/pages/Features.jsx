import React from 'react';
import techImg from '../assets/Tech.jpg';
import designImg from '../assets/Design.jpg';
import responsiveImg from '../assets/Responsive.jpg';

function Features() {
  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="tilt-card h-100">
              <img src={techImg} alt="Tech" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
              <h4>Cutting-Edge Tech</h4>
              <p>We use the latest technologies to deliver robust, scalable solutions.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="tilt-card h-100">
              <img src={designImg} alt="Design" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
              <h4>Immersive Design</h4>
              <p>Modern, clean, and visually engaging UI/UX for your business.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="tilt-card h-100">
              <img src={responsiveImg} alt="Responsive" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
              <h4>Fully Responsive</h4>
              <p>Our layouts adapt seamlessly to any device or screen size.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;