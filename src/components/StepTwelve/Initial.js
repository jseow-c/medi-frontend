import React from "react";

const StepTwelveInitial = ({ bombClick }) => {
  return (
    <>
      <div className="generic-text-box h-200">
        <h1>Removing Conversation from Staff Devices</h1>
        <p style={{ margin: "25px 0" }}>
          The details of the conversation and the Team Spaces for this patient
          have been removed automatically to reduce cluttering on the devices of
          the healthcare workers
        </p>
      </div>
      <div>
        <i
          className="fas fa-sign-out-alt has-text-primary"
          style={{ fontSize: "25vmin", cursor: "pointer" }}
          onClick={bombClick}
        ></i>
      </div>
    </>
  );
};

export default StepTwelveInitial;
