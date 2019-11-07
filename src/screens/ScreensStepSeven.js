import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

const doctors = [
  { name: "Chun Kun", num: 1 },
  { name: "Lily Ada", num: 1 },
  { name: "Sebastian Ma", num: 0 },
  { name: "Elon Musk", num: 0 }
];
const doctorChosen = "Sebastian Ma";

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

const ScreensStepSeven = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 7;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const [chosen, setChosen] = useState(execute ? null : doctorChosen);
  const history = useHistory();
  useEffect(() => {
    if (execute) {
      setContentClass("step-two-content");
      setTimeout(() => {
        setChosen(doctorChosen);
        setTimeout(() => {
          setButtonClass("button is-success is-light is-rounded next-button");
        }, 1000);
      }, 2000);
      setStep(7);
      setDemoStep(7);
    }
  }, [execute, setStep, room]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-150">
        <h1>Add Doctor using Bot</h1>
        <p style={{ margin: "25px 0" }}>
          Type <i>@drstrange add doctor</i> to get another doctor into the
          procedure.
        </p>
      </div>
      <UIRoster title="Plastic Surgeons" people={doctors} chosen={chosen} />
      <button className={buttonClass} onClick={() => history.push("/step-8")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepSeven;
