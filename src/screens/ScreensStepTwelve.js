import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";
import axios from "axios";
import StepTwelveInitial from "../components/StepTwelve/Initial";
import StepTwelveBackup from "../components/StepTwelve/Backup";
import StepTwelveDestroy from "../components/StepTwelve/Destroy";

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

const ScreensStepTwelve = () => {
  const {
    stepStore: [step, setStep],
    messageStore: [, setMessage],
    roomStore: [room]
  } = useContext(StoreContext);
  const [stage, setStage] = useState(0);
  const history = useHistory();
  const execute = step < 12;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  useEffect(() => {
    if (execute) {
      setContentClass("step-two-content");
    }
  }, [execute]);
  const bombClick = async () => {
    setStage(1);
    const messageUrl = `${process.env.REACT_APP_SERVER_IP}/demo/message`;
    const response = await axios.post(messageUrl);
    setMessage(response.data);
    setStage(2);
    const roomUrl = `${process.env.REACT_APP_SERVER_IP}/webex/room`;
    const options = {
      headers: { "Content-Type": "application/json" },
      data: { title: room }
    };
    await axios.delete(roomUrl, options);
    setStep(12);
    setDemoStep(12);
    setTimeout(() => history.push("/end"), 2000);
  };
  return (
    <div className={contentClass}>
      {stage === 0 && <StepTwelveInitial bombClick={bombClick} />}
      {stage === 1 && <StepTwelveBackup />}
      {stage === 2 && <StepTwelveDestroy />}
    </div>
  );
};

export default ScreensStepTwelve;
