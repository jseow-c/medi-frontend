import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

const classObj = {
  content: {
    hide: "step-two-content",
    show: "step-two-content show"
  },
  button: {
    hide: "button is-success is-light is-rounded next-button hide",
    show: "button is-success is-light is-rounded next-button"
  }
};

const ScreensStepSix = () => {
  const {
    stepStore: [step, setStep]
  } = useContext(StoreContext);
  const execute = step < 6;

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
      setStep(6);
      setDemoStep(6);
    }
  }, [execute, setStep]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-300">
        <h1>Take a picture of the injury using Webex!</h1>
        <p style={{ marginTop: 25 }}>
          The attending doctor can take a picture of the condition or injury for
          archival or to share with Subject Matter Experts (SMEs) who can
          collaborate to aid the diagnosis.
        </p>
        <p style={{ marginTop: 25 }}>
          You may either take photo using your phone or upload a pre-stored
          image of an injury.
        </p>
      </div>

      <i
        className="fas fa-camera-retro has-text-grey"
        style={{ fontSize: "20vmin", marginBottom: "5vmin" }}
      ></i>
      <button className={buttonClass} onClick={() => history.push("/step-7")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepSix;
