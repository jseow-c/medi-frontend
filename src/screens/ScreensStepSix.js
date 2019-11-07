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
      <div className="generic-text-box" style={{ height: "26vmin" }}>
        <h1>Take a picture of the injury using Webex!</h1>
        <p style={{ marginTop: 50 }}>
          We often find injuries that are visual such as cuts or wounds. We want
          these evidences stored in an <b>persistance messaging system</b>.
        </p>
        <p style={{ marginTop: 25 }}>
          Take the photo using your handphone and it appears even here on the
          web!
        </p>
      </div>

      <i
        className="fas fa-camera-retro has-text-grey"
        style={{ fontSize: "25vmin", marginBottom: "5vmin" }}
      ></i>
      <button className={buttonClass} onClick={() => history.push("/step-7")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepSix;
