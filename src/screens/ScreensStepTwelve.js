import React, { useState, useEffect, useContext } from "react";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";
import axios from "axios";

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
    messageStore: [message, setMessage],
    roomStore: [room]
  } = useContext(StoreContext);
  const execute = step < 12;
  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  useEffect(() => {
    if (execute) {
      setContentClass("step-two-content");
    }
  }, [execute]);
  return (
    <div className={contentClass}>
      <div className="generic-text-box h-150">
        <h1>Destroy Conversation...</h1>
        <p style={{ margin: "25px 0" }}>
          It is sad to say good-bye. But let's end the demo with a bang!
        </p>
      </div>
      <div>
        <i
          class="fas fa-bomb has-text-danger"
          style={{ fontSize: "40vmin", cursor: "pointer" }}
          onClick={async () => {
            // const roomUrl = `${process.env.REACT_APP_SERVER_IP}/webex/room`;
            // const roomData = { title };
            // const roomRes = await axios.post(roomUrl, roomData, options);
            const roomUrl = `${process.env.REACT_APP_SERVER_IP}/webex/room`;
            const options = {
              headers: { "Content-Type": "application/json" },
              data: { title: room }
            };
            await axios.delete(roomUrl, options);
            setStep(12);
            setDemoStep(12);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ScreensStepTwelve;
