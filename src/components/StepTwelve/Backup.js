import React from "react";

const StepTwelveBackup = () => {
  return (
    <>
      <div className="generic-text-box h-200">
        <h1>Backing up conversation...</h1>
        <p style={{ margin: "25px 0" }}>
          Prior to removing conversation, we will do a backup of the messages.
        </p>
      </div>
      <div>
        <i
          className="fas fa-envelope-open-text has-text-info"
          style={{ fontSize: "25vmin" }}
        ></i>
      </div>
    </>
  );
};

export default StepTwelveBackup;
