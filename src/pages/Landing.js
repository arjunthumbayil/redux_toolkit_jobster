import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Salvia pug venmo DIY cronut knausgaard selfies. Kombucha coloring
            book chicharrones, meggings hammock swag forage echo park messenger
            bag artisan woke raw denim umami. Umami listicle vinyl authentic
            selvage freegan same.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
