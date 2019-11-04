import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const nurses = [
  { name: "Chun Kun", num: 1 },
  { name: "Choon Hon Goh", num: 0 },
  { name: "Lily Ada", num: 1 },
  { name: "Steve Job", num: 0 },
  { name: "Elon Musk", num: 0 }
];
const nurseChosen = "Choon Hon Goh";
const emailChosen = "jamgoh@cisco.com";

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

const ScreensStepTwo = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 2;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const [chosen, setChosen] = useState(execute ? null : nurseChosen);
  const history = useHistory();
  useEffect(() => {
    if (execute) {
      const putInNurse = async () => {
        const memberUrl = `${process.env.REACT_APP_SERVER_IP}/webex/membership`;
        const options = { "Content-Type": "application/json" };
        const memberData = {
          title: room,
          email: emailChosen
        };
        await axios.post(memberUrl, memberData, options);
        setTimeout(() => {
          setButtonClass("button is-success is-light is-rounded next-button");
        }, 1000);
      };
      setContentClass("step-two-content");
      setTimeout(() => {
        setChosen(nurseChosen);
        putInNurse();
      }, 2000);
      setStep(2);
      setDemoStep(2);
    }
  }, [execute, setStep, room]);
  return (
    <div className={contentClass}>
      <UIRoster title="Nurse" people={nurses} chosen={chosen} />
      <button className={buttonClass} onClick={() => history.push("/step-3")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepTwo;
