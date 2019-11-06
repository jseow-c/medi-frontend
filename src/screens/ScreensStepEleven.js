import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UITimeline from "../components/UI/Timeline/Timeline";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const timeline = [
  {
    title: "Registration",
    desc: "Patient registered with facial recognition.",
    firstStep: 0,
    lastStep: 1
  },
  {
    title: "Triage Nurse",
    desc: "Triage Nurse collected vitals and other information from patient.",
    firstStep: 1,
    lastStep: 3
  },
  {
    title: "Doctor",
    desc: "Doctor used given information to try to diagnose patient.",
    firstStep: 4,
    lastStep: 8
  },
  {
    title: "Video Call",
    desc: "Doctor made a video conference with a specialist.",
    firstStep: 8,
    lastStep: 9
  },
  {
    title: "Pharmacy",
    desc: "Pharmacy helped to issue medicine and collected payment.",
    firstStep: 9,
    lastStep: 10
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

const ScreensStepEleven = () => {
  const {
    stepStore: [step, setStep],
    timingStore: [timing, setTiming],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 11;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const history = useHistory();
  useEffect(() => {
    if (execute) {
      const getTiming = async () => {
        const url = `${process.env.REACT_APP_SERVER_IP}/demo/timing`;
        const response = await axios.get(url);
        setTiming(response.data);
        setTimeout(() => {
          setContentClass(classObj.content.show);
          setButtonClass(classObj.button.show);
        }, 1000);
      };
      getTiming();
      setStep(11);
      setDemoStep(11);
    }
  }, [execute, setStep, setTiming, room]);
  return (
    <div className={contentClass}>
      <h1>Timeline</h1>
      <UITimeline timeline={timeline} timing={timing} />
      <button className={buttonClass} onClick={() => history.push("/step-12")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepEleven;
