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
          <i className="vital-icon fas fa-thermometer-half has-text-info"></i>
          <br /> Temperature
        </div>{" "}
        <div className={tempClass}>
          {temperature ? temperature : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="vital-icon fas fa-fist-raised has-text-warning"></i>
          <br /> Blood Pressure
        </div>{" "}
        <div className={pressureClass}>
          {pressure ? pressure : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="vital-icon fas fa-heartbeat has-text-danger"></i>
          <br /> Heart Rate
        </div>{" "}
        <div className={heartClass}>
          {heartrate ? heartrate : "Calculating..."}
        </div>
      </article>
      <article className="vital-card">
        <div className="vital-title">
          <i className="vital-icon fas fa-wind has-text-success"></i>
          <br /> Respiratory Rate
        </div>{" "}
        <div className={resClass}>{resrate ? resrate : "Calculating..."}</div>
      </article>
    </div>
  );
};

export default StepTwoVital;
