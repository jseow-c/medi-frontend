import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import StepTwoVital from "../components/StepTwo/Vital";
import UIProgress from "../components/UI/Progress";
import { setDemoStep } from "../functions/misc";
import { StoreContext } from "../context";

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

const ScreensStepThree = () => {
  const {
    stepStore: [step, setStep],
    dataStore: [data]
  } = useContext(StoreContext);
  const execute = step < 3;
  const [temperature, setTemperature] = useState(
    execute ? "" : data.temperature
  );
  const [pressure, setPressure] = useState(execute ? "" : data.blood_pressure);
  const [heartrate, setHeartrate] = useState(execute ? "" : data.heart_rate);
  const [resrate, setResrate] = useState(execute ? "" : data.respiratory_rate);
  const [loading, setLoading] = useState(execute ? true : false);

  const [contentClass, setContentClass] = useState(
    execute ? classObj.content.hide : classObj.content.show
  );
  const [buttonClass, setButtonClass] = useState(
    execute ? classObj.button.hide : classObj.button.show
  );
  const history = useHistory();
  useEffect(() => {
    if (execute && !loading) {
      setContentClass(classObj.content.show);
      setTimeout(() => {
        setTemperature(data.temperature);
        setResrate(data.respiratory_rate);
        setTimeout(() => {
          setHeartrate(data.heart_rate);
          setPressure(data.blood_pressure);
          setButtonClass(classObj.button.show);
        }, 1500);
      }, 1500);
      setStep(3);
      setDemoStep(3);
    }
  }, [
    loading,
    execute,
    setStep,
    data.temperature,
    data.respiratory_rate,
    data.heart_rate,
    data.blood_pressure
  ]);
  return loading ? (
    <div className="step-two-loading" style={{ padding: "0 40px" }}>
      <UIProgress
        time={3000}
        finishCB={() => setLoading(false)}
        title="LOADING"
        description="Retrieving Patient Vitals via Networked Medical Instruments..."
      />
    </div>
  ) : (
    <div className={contentClass}>
      <StepTwoVital
        temperature={temperature}
        pressure={pressure}
        heartrate={heartrate}
        resrate={resrate}
      />
      <button className={buttonClass} onClick={() => history.push("/step-4")}>
        Next
      </button>
    </div>
  );
};

export default ScreensStepThree;
