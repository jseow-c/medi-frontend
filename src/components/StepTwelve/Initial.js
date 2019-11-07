import React from "react";

const StepTwelveInitial = ({ bombClick }) => {
  return (
    <>
      <div className="generic-text-box h-150">
        <h1>Destroy Conversation...</h1>
        <p style={{ margin: "25px 0" }}>
          It is sad to say good-bye. But let's end the demo with a bang!
        </p>
      </div>
      <div>
        <i
          className="fas fa-sign-out-alt has-text-primary"
          style={{ fontSize: "40vmin", cursor: "pointer" }}
          onClick={bombClick}
        ></i>
      </div>
    </>
  );
};

export default StepTwelveInitial;
