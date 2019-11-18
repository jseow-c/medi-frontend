import React from "react";

const StepTwelveDestroy = () => {
  return (
    <>
      <div className="generic-text-box h-200">
        <h1>Removing conversation now...</h1>
        <p style={{ margin: "25px 0" }}>
          It is sad but we need to do a clean up after every visit.
        </p>
      </div>
      <div>
        <i
          className="fas fa-bomb has-text-danger"
          style={{ fontSize: "25vmin" }}
        ></i>
      </div>
    </>
  );
};

export default StepTwelveDestroy;
