import React from 'react';

function AboutUs() {
  return (
    <section className="pb-0" id="about">
      <div className="container">
        <h1 className="text-center">ABOUT US</h1>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="assets/img/gallery/health-care.png" alt="About Us" />
          </div>
          <div className="col-md-6">
            <h2>We are developing a healthcare system around you</h2>
            <p>We think that everyone should have easy access to excellent healthcare.</p>
            <button className="btn btn-outline-primary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
