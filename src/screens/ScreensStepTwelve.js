import React, { useState, useEffect, useContext } from "react";
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

const ScreensStepTwelve = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 12;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  useEffect(() => {
    if (execute) {
      setContentClass("step-two-content");
      setStep(12);
      setDemoStep(12);
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
    </div>
  );
};

export default ScreensStepTwelve;
