import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import UIProgress from "../components/UI/Progress";
import UIModal from "../components/UI/Modal";
import { setDemoStep, formatDate } from "../functions/misc";
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
    hide: "step-two-content",
    show: "step-two-content show"
  },
  button: {
    hide: "button is-success is-light is-rounded next-button hide",
    show: "button is-success is-light is-rounded next-button"
  }
};

const ScreensStepSeven = () => {
  const {
    stepStore: [step, setStep]
  } = useContext(StoreContext);
  const execute = step < 7;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const [loading, setLoading] = useState(execute ? true : false);
  const [modal, setModal] = useState(false);
  const [chosen, setChosen] = useState(execute ? null : doctorChosen);
  const history = useHistory();
  const clickDoctor = () => {
    setChosen(doctorChosen);
    setTimeout(() => {
      setModal(true);
      setButtonClass("button is-success is-light is-rounded next-button");
    }, 1000);
    setStep(7);
    setDemoStep(7);
  };
  useEffect(() => {
    if (execute && !loading) {
      setTimeout(() => setContentClass(classObj.content.show), 500);
    }
  }, [execute, loading]);
  return loading ? (
    <div className="step-two-loading" style={{ padding: "0 40px" }}>
      <UIProgress
        time={3000}
        finishCB={() => setLoading(false)}
        title="LOADING"
        description={`Retrieving from Medical Roster for ${formatDate(
          new Date()
        )}...`}
      />
    </div>
  ) : (
    <div className={contentClass}>
      <div className="generic-text-box h-250">
        <h1>Add Doctor using Bot</h1>
        <p style={{ marginTop: 25 }}>
          Using Bots integrated with the Medical Duty Roster, Subject Matter
          Experts can be invited into a consultation without needing the
          Attending Doctor to manually search for the specialist on duty.
        </p>
        <p style={{ margin: "25px 0" }}>
          This allows time to be saved, the consultation process to be more
          efficient and streamlined and to enable a better patient experience.
        </p>
      </div>
      <UIRoster
        title="List of Plastic Surgeons On Duty"
        people={doctors}
        chosen={chosen}
        defaultChosen={doctorChosen}
        onClick={clickDoctor}
      />
      <UIModal
        show={modal}
        title={doctorChosen}
        description="is assigned for case."
        bgClick={() => setModal(false)}
      />
      <button className={buttonClass} onClick={() => history.push("/step-8")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepSeven;
