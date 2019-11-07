import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIMedicine from "../components/UI/Medicine/Medicine";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const emailChosen = "jeremyty@cisco.com";
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
      const putInCashier = async () => {
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
        putInCashier();
      }, 2000);
      setStep(10);
      setDemoStep(10);
    }
  }, [execute, room, setStep]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-150">
        <h1>Pharmacy and Cashier</h1>
        <p style={{ margin: "25px 0" }}>
          Type <i>@drstrange end payment</i> upon issuing of medicine and
          payment.
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
