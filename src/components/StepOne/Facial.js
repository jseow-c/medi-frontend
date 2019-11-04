import React, { useEffect } from "react";
import UILoading from "../UI/Loading";
import axios from "axios";

const StepOneFacial = ({ image, setStage, setFacial }) => {
  useEffect(() => {
    const sendToIntercorp = async image => {
      const url = `${process.env.REACT_APP_SERVER_IP}/intercorp/compare`;
      const options = { "Content-Type": "application/json" };
      const postData = {
        url: image
      };
      const response = await axios.post(url, postData, options);
      setFacial(response.data);
      setStage(3);
    };
    sendToIntercorp(image);
  }, [image, setStage, setFacial]);
  return (
    <div className="step-one-loader">
      <img
        width="350vmin"
        height="auto"
        src={image}
        alt="Person"
        style={{ margin: "5vmin" }}
      />
      <UILoading
        title="Intercorp"
        desc="Face Recognition in Progress"
        size={1}
      />
    </div>
  );
};

export default StepOneFacial;
