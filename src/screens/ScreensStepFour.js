import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIRoster from "../components/UI/Roster/Roster";
import UIProgress from "../components/UI/Progress";
import UIModal from "../components/UI/Modal";
import { setDemoStep, formatDate } from "../functions/misc";
import { StoreContext } from "../context";

import axios from "axios";

const doctors = [
  {
    name: "James Sze",
    photo:
      "https://pbs.twimg.com/profile_images/1119638274522267648/oT06seM-.png",
    status: "Off-Shift",
    title: "Medical Officer",
    workdays: ["Mon", "Tue", "Wed", "Thurs", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Nicholas Lim",
    photo:
      "https://pbs.twimg.com/profile_images/869994638110736385/CVYUarcq.jpg",
    status: "Off-Shift",
    title: "Consultant",
    workdays: ["Tue", "Wed", "Thurs", "Sat", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Rebecca Tok",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTM2NzI3NTU5Nl5BMl5BanBnXkFtZTcwODkxODAwNA@@._V1_UY256_CR9,0,172,256_AL_.jpg",
    status: "Busy",
    title: "Consultant",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "3pm - 10pm"
  },
  {
    name: "Mohammed Bin Ayob",
    photo:
      "https://pbs.twimg.com/profile_images/946958436830285824/M21pui0V.jpg",
    status: "Available",
    title: "Medical Officer",
    workdays: ["Tue", "Wed", "Fri", "Sat", "Sun"],
    shift: "7am - 6pm"
  },
  {
    name: "George Yacob",
    photo: "https://i.imgur.com/RPAvHAM.jpg",
    status: "Available",
    title: "Senior Consultant",
    workdays: ["Mon", "Tue", "Thurs", "Fri", "Sun"],
    shift: "7am - 6pm"
  }
];

const doctorChosen = "Mohammed Bin Ayob";
const emailChosen = "Attendingdoctor@ccepdemo.com";
const nurseEmail = "triagenurse@ccepdemo.com";

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

const ScreensStepFour = () => {
  const {
    stepStore: [step, setStep],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 4;
  const [loading, setLoading] = useState(execute ? true : false);
  const [modal, setModal] = useState(false);
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const [chosen, setChosen] = useState(execute ? null : doctorChosen);
  const history = useHistory();
  const clickDoctor = () => {
    const runSteps = async () => {
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
        setModal(true);
        //  Step 5 - Show Button
        setButtonClass("button is-success is-light is-rounded next-button");
      }, 1000);
    };
    runSteps();
    setStep(4);
    setDemoStep(4);
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
      <UIRoster
        title="List of Active Doctors On Duty"
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
      <button className={buttonClass} onClick={() => history.push("/step-5")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepFour;
