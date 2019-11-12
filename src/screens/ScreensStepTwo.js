import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const nurses = [
  {
    name: "Chun Kun",
    photo: "https://i.imgur.com/sgeHfTT.jpg",
    status: "Off-Shift",
    title: "Senior Staff Nurse 1",
    workdays: ["Mon", "Tue", "Wed", "Thurs", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Emily Tan",
    photo: "https://randomuser.me/api/portraits/women/17.jpg",
    status: "Available",
    title: "Senior Staff Nurse 2",
    workdays: ["Tue", "Wed", "Fri", "Sat", "Sun"],
    shift: "7am - 6pm"
  },
  {
    name: "Lily Ada",
    photo: "https://i.imgur.com/kJCWUAo.jpg",
    status: "Busy",
    title: "Staff Nurse",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Steve Goh Ching Lek",
    photo:
      "https://pbs.twimg.com/profile_images/931120694137679872/fyXUlj0e.jpg",
    status: "Off-Shift",
    title: "Staff Nurse",
    workdays: ["Tue", "Wed", "Thurs", "Sat", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Maria de Souza",
    photo: "https://i.imgur.com/kcPMLNS.jpg",
    status: "Available",
    title: "Senior Staff Nurse 1",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "7am - 6pm"
  }
];
const nurseChosen = "Emily Tan";
const emailChosen = "triagenurse@ccepdemo.com";

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
          setButtonClass(classObj.button.show);
        }, 1000);
      };
      setContentClass(classObj.content.show);
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
