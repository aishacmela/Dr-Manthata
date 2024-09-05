import React from "react";
import family from "./img/gallery/blackfamily.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContent row">
      <div className="col-md-5 col-xl-6 text-end">
        <img className="img-fluid" src={family} alt="family" />
      </div>
      <div className="col-md-7 col-xl-6 text-md-start text-center py-6">
        <h1 className="fw-light font-base fs-6 fs-xxl-7">
          We're <strong>determined</strong> for
          <br />
          your&nbsp;<strong>better life.</strong>
        </h1>
        <p className="fs-1 mb-5">
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
  );
};

export default Home;
