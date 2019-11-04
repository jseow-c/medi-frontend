import React from "react";
import ciscoLogo from "../../img/cisco.png";
import intercorpLogo from "../../img/intercorp.jpg";

const StepOneInitial = ({ onClick = null }) => {
  return (
    <main className="step-one-initial-container">
      <section
        className="hero is-light is-medium step-one-initial"
        onClick={onClick}
      >
        <div className="hero-body step-one-initial-hero">
          <div className="container">
            <h1 className="title">Click to Register</h1>
            <h2 className="subtitle">Cisco collaborates with Intercorp</h2>
          </div>
          <div className="container mt-2">
            <img src={ciscoLogo} alt="Cisco" width="150" className="mr-2" />
            <img src={intercorpLogo} alt="Intercorp" width="150" />
          </div>
          <div className="is-size-7 is-italic mt-2">
            By clicking here, you acknowledge that you have read and understood
            the mentioned notice, and consent to the collection, use and
            disclosure of my personal data by Cisco for the purposes set out in
            the Notice.
          </div>
        </div>
      </section>
    </main>
  );
};

export default StepOneInitial;
