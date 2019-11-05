import React, { useEffect } from "react";
import UILoading from "../UI/Loading";
import { setDemoStep } from "../../functions/misc";

const StepOneSnap = ({ setStage, setImage }) => {
  useEffect(() => {
    setTimeout(() => {
      setImage("https://images.wsj.net/im-117184?width=620&size=1.5");
      setStage(2);
    }, 3000);
    setDemoStep(0);
  }, [setStage, setImage]);
  return (
    <div className="step-one-loader">
      <img
        src="https://images.wsj.net/im-117184?width=620&size=1.5"
        alt="Person"
        style={{ display: "none" }}
      />
      <UILoading title="Meraki" desc="Meraki getting Face Image now" size={1} />
    </div>
  );
};

export default StepOneSnap;
