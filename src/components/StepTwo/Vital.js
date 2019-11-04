import React from "react";

const StepTwoVital = ({ temperature, pressure, heartrate, resrate }) => {
  const tempClass = temperature ? "vital-value" : "vital-value loading";
  const pressureClass = pressure ? "vital-value" : "vital-value loading";
  const heartClass = heartrate ? "vital-value" : "vital-value loading";
  const resClass = resrate ? "vital-value" : "vital-value loading";

  return (
    <div className="vital-container">
      <h1>Patient's Vital</h1>
      <article className="vital-card">
        <div className="vital-title">
          <i className="fas fa-thermometer-half"></i> Temperature
        </div>{" "}
        <div className={tempClass}>
          {temperature ? temperature : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="fas fa-fist-raised"></i> Blood Pressure
        </div>{" "}
        <div className={pressureClass}>
          {pressure ? pressure : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="fas fa-heartbeat"></i> Heart Rate
        </div>{" "}
        <div className={heartClass}>
          {heartrate ? heartrate : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="fas fa-wind"></i> Respiratory Rate
        </div>{" "}
        <div className={resClass}>{resrate ? resrate : "Calculating..."}</div>
      </article>
    </div>
  );
};

export default StepTwoVital;
