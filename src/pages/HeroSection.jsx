import React from 'react';
import designImg from '../assets/Design.jpg';

function HeroSection() {
  return (
    <section className="hero-section text-center position-relative">
      <img
        src={designImg}
        alt="Keshav Soft Hero"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: 0, opacity: 0.25, pointerEvents: 'none', objectFit: 'cover' }}
      />
      <div className="container hero-content position-relative">
        <h1 className="display-3 fw-bold mb-3">Welcome to Keshav Soft</h1>
        <p className="lead mb-4">Innovative Software Solutions with a Modern 3D Touch</p>
        <a href="#features" className="btn btn-light btn-lg shadow">Explore Our Features</a>
      </div>
    </section>
  );
}

export default HeroSection;