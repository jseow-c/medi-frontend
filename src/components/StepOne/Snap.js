import React, { useEffect } from "react";
import UILoading from "../UI/Loading";
import { setDemoStep } from "../../functions/misc";

import axios from "axios";

const StepOneSnap = ({ setStage, setImage, imageType = "static", image }) => {
  useEffect(() => {
    const snapMeraki = async (setUrl, cb = null) => {
      const url = `${process.env.REACT_APP_SERVER_IP}/meraki/snap`;
      const options = { "Content-Type": "application/json" };
      const postData = {};
      const response = await axios.post(url, postData, options);

      const responseJson = await response.data;
      setUrl(responseJson);
      setTimeout(() => cb(), 2000);
    };
    setDemoStep(0);
    if (imageType === "static") {
      setTimeout(() => {
        setImage(
          `${process.env.REACT_APP_SERVER_IP}/images/sample_meraki_ch.jpg`
        );
        setStage(2);
      }, 3000);
    } else {
      snapMeraki(setImage, () => setStage(2));
    }
  }, [setStage, setImage, imageType]);
  return (
    <div className="step-one-loader">
      <img src={image} alt="Person" style={{ display: "none" }} />
      <UILoading title="Meraki" desc="Meraki getting Face Image now" size={1} />
    </div>
  );
};

export default StepOneSnap;
