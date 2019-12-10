import React, { useEffect, useState } from "react";
import UILoading from "../UI/Loading";
import UIModal from "../UI/Modal";
import axios from "axios";

const StepOneFacial = ({ image, setStage, setFacial }) => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const sendToIntercorp = async image => {
      const url = `${process.env.REACT_APP_SERVER_IP}/intercorp/compare`;
      const options = { "Content-Type": "application/json" };
      const postData = {
        url: image
      };
      axios
        .post(url, postData, options)
        .then(res => {
          setFacial(res.data);
          setStage(3);
        })
        .catch(() => setModal(true));
    };
    sendToIntercorp(image);
  }, [image, setStage, setFacial]);
  return (
    <div className="step-one-loader">
      <UIModal
        show={modal}
        title="No Match"
        description="Please try again..."
        bgClick={() => {
          setStage(0);
        }}
      />
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
