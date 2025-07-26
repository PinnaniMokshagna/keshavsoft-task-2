import React from 'react';

function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
            <div className="tilt-card w-100 text-center">
              <h5 className="mb-3">Contact Information</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><i className="bi bi-envelope me-2 text-primary"></i> info@keshavsoft.com</li>
                <li className="mb-2"><i className="bi bi-telephone me-2 text-primary"></i> +91 98765 43210</li>
                <li><i className="bi bi-geo-alt me-2 text-primary"></i> Hyderabad, India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;