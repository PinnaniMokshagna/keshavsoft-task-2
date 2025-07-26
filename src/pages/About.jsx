import React from 'react';
import techImg from '../assets/Tech.jpg';
import designImg from '../assets/Design.jpg';
import responsiveImg from '../assets/Responsive.jpg';
import preethiImg from '../assets/preethi.png';
import rahulImg from '../assets/rahul.png';
import priyaImg from '../assets/priya.jpg';

function About() {
  return (
    <>
      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">About Keshav Soft</h2>
          <p className="lead">
            Keshav Soft delivers innovative software solutions that empower businesses to grow and succeed. Our team is passionate about technology and committed to excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h3 className="mb-4 text-center">Our Services</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={techImg} alt="Software Development" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="card-title">Custom Software Development</h5>
                <p className="card-text">Tailored solutions to meet your unique business needs, from web apps to enterprise systems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={designImg} alt="Cloud Integration" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="card-title">Cloud Integration</h5>
                <p className="card-text">Seamless integration with cloud platforms to boost scalability, security, and performance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={responsiveImg} alt="Business Analytics" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="card-title">Business Analytics</h5>
                <p className="card-text">Data-driven insights to help you make smarter decisions and grow your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="mb-4 text-center">Our Team</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={preethiImg} alt="Team Member 1" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="mb-1">Priya Sharma</h5>
                <p className="text-muted mb-0">Lead Developer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={rahulImg} alt="Team Member 2" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="mb-1">Rahul Verma</h5>
                <p className="text-muted mb-0">UI/UX Designer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <img src={priyaImg} alt="Team Member 3" width="80" height="80" className="mb-3 rounded-circle shadow object-fit-cover" />
                <h5 className="mb-1">Sneha Patel</h5>
                <p className="text-muted mb-0">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-5">
        <div className="container">
          <h3 className="mb-4 text-center">Why Choose Keshav Soft?</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <i className="bi bi-lightbulb display-4 text-primary mb-3"></i>
                <h5 className="mb-2">Innovation</h5>
                <p className="mb-0">We embrace new technologies and creative thinking to deliver unique solutions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <i className="bi bi-people display-4 text-primary mb-3"></i>
                <h5 className="mb-2">Collaboration</h5>
                <p className="mb-0">We work closely with our clients to ensure their vision becomes reality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tilt-card h-100 text-center">
                <i className="bi bi-award display-4 text-primary mb-3"></i>
                <h5 className="mb-2">Excellence</h5>
                <p className="mb-0">We are committed to delivering high-quality results, every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
