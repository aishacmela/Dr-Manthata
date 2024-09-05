import React from "react";

import blackFamily from "./img/gallery/blackfamily.png";
import "./App.css"
import "./Home.css"; // Import the new CSS file

function Home() {
  return (
    <section id="home">
      {/* Container for the content */}
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xl-6 col-xxl-7 text-end">
            <img
              className="pt-7 pt-md-0 w-100"
              src={blackFamily}
              alt="hero-header"
            />
          </div>
          <div className="col-md-75 col-xl-6 col-xxl-5 text-start py-6">
            <h1>
              We're <strong>determined</strong> for
              <br />
              your&nbsp;<strong>better life.</strong>
            </h1>
            <p>
              You can get the care you need 24/7 – be it online or in
              <br />
              person. You will be treated by a caring specialist doctor.
              <br />
              Voted the best doctor in Mankweng by patients and residents.
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill"
              href="#!"
              role="button"
            >
              Make an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
