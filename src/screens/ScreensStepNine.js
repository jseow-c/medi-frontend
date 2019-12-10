import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIMedicine from "../components/UI/Medicine/Medicine";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

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
    hide: "step-two-content",
    show: "step-two-content show"
  },
  button: {
    hide: "button is-success is-light is-rounded next-button hide",
    show: "button is-success is-light is-rounded next-button"
  }
};

const ScreensStepNine = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 9;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(classObj.button.show);
  const [buttonTextClass, setButtonTextClass] = useState(
    execute ? "Issue Medicines" : "Next"
  );
  const history = useHistory();
  const clickIssueMed = () => {
    const runSteps = async () => {
      // Step 1 - hide the issue button
      setButtonClass(classObj.button.hide);
      // Step 2 - Add Medicine
      const url = `${process.env.REACT_APP_SERVER_IP}/demo/medicine`;
      const options = { "Content-Type": "application/json" };
      const data = { medicine: ["Neosporin", "Bacitracin"] };
      await axios.post(url, data, options);

      setTimeout(() => {
        // setModal(true);
        setButtonTextClass("Next");
        setButtonClass(classObj.button.show);
      }, 1000);
    };
    runSteps();
    setStep(9);
    setDemoStep(9);
  };
  useEffect(() => {
    if (execute) {
      setContentClass(classObj.content.show);
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
      <button
        className={buttonClass}
        onClick={() => {
          if (buttonTextClass === "Next") history.push("/step-10");
          else clickIssueMed();
        }}
        style={buttonTextClass === "Next" ? {} : { width: 200 }}
      >
        {buttonTextClass}
      </button>
    </div>
  );
};

export default ScreensStepNine;
