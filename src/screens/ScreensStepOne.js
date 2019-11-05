import React, { useState } from "react";
import StepOneInitial from "../components/StepOne/Initial";
import StepOneSnap from "../components/StepOne/Snap";
import StepOneFacial from "../components/StepOne/Facial";
import StepOneEnd from "../components/StepOne/End";
// import { StoreContext } from "../context";

const ScreensStepOne = () => {
  const [stage, setStage] = useState(0);
  const [image, setImage] = useState("");
  const [facial, setFacial] = useState({});

  switch (stage) {
    case 3:
      return <StepOneEnd facial={facial} image={image} />;
    case 2:
      return (
        <StepOneFacial
          image={image}
          setStage={setStage}
          setFacial={setFacial}
        />
      );
    case 1:
      return <StepOneSnap setImage={setImage} setStage={setStage} />;

    default:
    case 0:
      return <StepOneInitial onClick={() => setStage(1)} />;
  }
};

export default ScreensStepOne;
