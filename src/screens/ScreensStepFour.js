import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const doctors = [
  { name: "Chun Kun", num: 1 },
  { name: "Bill Gates", num: 0 },
  { name: "Lily Ada", num: 1 },
  { name: "Nicholas Chen", num: 0 },
  { name: "Elon Musk", num: 0 }
];
const doctorChosen = "Nicholas Chen";
const emailChosen = "nichchen@cisco.com";
const nurseEmail = "jamgoh@cisco.com";

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

const ScreensStepFour = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 4;
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
      const runSteps = async () => {
        // Step 1  - Show content
        setContentClass("step-two-content");
        setTimeout(async () => {
          //  Step 2 - Set Doctor
          setChosen(doctorChosen);

          // Step 3 - Add Doctor
          const memberUrl = `${process.env.REACT_APP_SERVER_IP}/webex/membership`;
          const options = { "Content-Type": "application/json" };
          const memberData = {
            title: room,
            email: emailChosen
          };
          await axios.post(memberUrl, memberData, options);

          // Step 4 - Remove Nurse
          const removeOptions = {
            headers: { "Content-Type": "application/json" },
            data: {
              title: room,
              email: nurseEmail
            }
          };
          await axios.delete(memberUrl, removeOptions);
          setTimeout(() => {
            //  Step 5 - Show Button
            setButtonClass("button is-success is-light is-rounded next-button");
          }, 1000);
        }, 2000);
      };
      runSteps();
      setStep(4);
      setDemoStep(4);
    }
  }, [execute, setStep, room]);
  return (
    <div className={contentClass}>
      <UIRoster title="Doctor" people={doctors} chosen={chosen} />
      <button className={buttonClass} onClick={() => history.push("/step-5")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepFour;
