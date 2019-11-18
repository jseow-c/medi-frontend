import React from "react";

const UICardPerson = ({ person, time, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={image} alt="Person" />
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
            <p className="title is-4">{person.name}</p>
            <p className="subtitle is-6">{time}</p>
          </div>
        </div>

        <div className="content">
          NRIC: {person.nric} <br />
          Contact Number: {person.phone} <br />
          Last Visit: {person.last_visit} <br />
          Height: {person.height}cm <br />
          Last Recorded Weight: {person.weight}kg <br />
          Known Medical Conditions: {person.medical_conditions.join(",")} <br />
          Emergency Contact: {person.emergency_contact} <br />
          Relationship to Patient: {person.emergency_relation} <br />
          Visit Reason: {person.reason} <br />
        </div>
      </div>
    </div>
  );
};

export default UICardPerson;
