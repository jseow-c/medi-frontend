import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

const doctors = [
  {
    name: "Goh Yong Kian",
    photo:
      "https://pbs.twimg.com/profile_images/790582305064648704/ty5Armt_.jpg",
    status: "Available",
    title: "Consultant",
    specialization: "Plastic Surgeon",
    workdays: ["Tue", "Wed", "Fri", "Sat", "Sun"],
    shift: "7am - 6pm"
  },
  {
    name: "Joyce Lim",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "Busy",
    title: "Consultant",
    specialization: "Plastic Surgeon",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Ganesh S/O Sundaram",
    photo: "https://randomuser.me/api/portraits/men/95.jpg",
    status: "Off-Shift",
    title: "Senior Consultant",
    specialization: "Plastic Surgeon",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "7am - 6pm"
  }
];

const doctorChosen = "Goh Yong Kian";

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
