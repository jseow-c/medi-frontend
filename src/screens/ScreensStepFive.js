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

const ScreensStepFive = () => {
  const {
    stepStore: [step, setStep]
  } = useContext(StoreContext);
  const execute = step < 5;

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
      setStep(5);
      setDemoStep(5);
    }
  }, [execute, setStep]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-250">
        <h1>@Bot Time</h1>
        <p style={{ marginTop: 50 }}>
          Time to test using the bot! Let's try some commands to draw out the
          medical history.
        </p>
        <p style={{ marginTop: 25 }}>
          Type <i>@drstrange info</i> to get the patient's information.
        </p>
      </div>
      <i
        className="fas fa-robot has-text-grey"
        style={{ fontSize: "25vmin", marginBottom: "5vmin" }}
      ></i>
      <button className={buttonClass} onClick={() => history.push("/step-6")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepFive;
