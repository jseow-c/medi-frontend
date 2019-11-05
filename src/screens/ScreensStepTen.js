import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIMedicine from "../components/UI/Medicine/Medicine";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

const medicine = [
  {
    name: "Bacitracin",
    icon: "fas fa-capsules",
    desc: "prevents minor skin infections caused by small cuts"
  },
  {
    name: "Neosporin",
    icon: "fas fa-prescription-bottle-alt",
    desc: "contains neomycin and polymyxin"
  }
];

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

const ScreensStepTen = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 10;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const history = useHistory();
  useEffect(() => {
    if (execute) {
      setContentClass("step-two-content");
      setButtonClass("button is-success is-light is-rounded next-button");
      setStep(10);
      setDemoStep(10);
    }
  }, [execute, setStep, room]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-150">
        <h1>Issue Medicine using Bot</h1>
        <p style={{ margin: "25px 0" }}>
          Type <i>@drstrange issue med</i> to issue medicine to the people.
        </p>
      </div>
      <UIMedicine title="Issuing Medicine" medicine={medicine} />
      <button className={buttonClass} onClick={() => history.push("/step-11")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepTen;