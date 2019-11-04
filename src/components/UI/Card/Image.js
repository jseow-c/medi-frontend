import React from "react";

const UICardImage = ({ name, time }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Person"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left avatar-circle has-background-info">
            <span className="icon fa-2x">
              <i className="fas fa-mars"></i>
            </span>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{time}</p>
          </div>
        </div>

        <div className="content">
          NRIC: SXXXYYYZZZ <br />
          Contact Number: 888222111 <br />
          Last Visit: 10/10/2010 <br />
          Height: 175cm <br />
          Last Recorded Weight: 65kg <br />
          Known Medical Conditions: Allergy to Penicillin <br />
          Emergency Contact: 987654321 <br />
          Relationship to Patient: Wife <br />
        </div>
      </div>
    </div>
  );
};

export default UICardImage;
