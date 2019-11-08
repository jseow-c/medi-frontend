import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

const classObj = {
  content: {
    hide: "step-two-content hide",
    show: "step-two-content"
  },
  button: {
    hide: "button is-success is-light is-rounded next-button hide",
    show: "button is-success is-light is-rounded next-button"
  }
};

const ScreensStepEight = () => {
  const {
    stepStore: [step, setStep]
  } = useContext(StoreContext);
  const execute = step < 8;

  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const history = useHistory();
  useEffect(() => {
    if (execute) {
      setContentClass(classObj.content.show);
      setButtonClass(classObj.button.show);
      setStep(8);
      setDemoStep(8);
    }
  }, [execute, setStep]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-250">
        <h1>Ask the Plastic Surgeon over Video!</h1>
        <p style={{ marginTop: 50 }}>
          Often times, the injury is hard to determine simply via a photo. It
          might require a consultation to look at the injury to determine the
          cause and the remedy.
        </p>
        <p style={{ marginTop: 25 }}>
          Use your handphone to do a Webex Video Conference with the Plastic
          Surgeon
        </p>
      </div>
      <i
        className="fas fa-video has-text-grey"
        style={{ fontSize: "25vmin", marginBottom: "5vmin" }}
      ></i>
      <button className={buttonClass} onClick={() => history.push("/step-9")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepEight;
