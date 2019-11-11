import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UICardPerson from "../UI/Card/Person";
import { StoreContext } from "../../context";
import { setDemoStep } from "../../functions/misc";
import axios from "axios";

const StepOneEnd = ({ facial, image }) => {
  const {
    dataStore: [, setData],
    roomIdStore: [roomId, setRoomId],
    roomStore: [, setRoom],
    stepStore: [, setStep]
  } = useContext(StoreContext);
  const [person, setPerson] = useState({});
  const [time, setTime] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!roomId) {
      console.log("creating room");
      const getPatientData = async facial => {
        const url = `${process.env.REACT_APP_SERVER_IP}/patient/get`;
        const options = { "Content-Type": "application/json" };
        const postData = {
          name: facial.person_name
        };
        const response = await axios.post(url, postData, options);
        const title = `MOH - ${response.data.name}`;
        const roomUrl = `${process.env.REACT_APP_SERVER_IP}/webex/room`;
        const roomData = { title };
        const roomRes = await axios.post(roomUrl, roomData, options);
        const memberUrl = `${process.env.REACT_APP_SERVER_IP}/webex/membership`;
        const memberData = {
          title,
          email: sessionStorage.getItem("email")
        };
        await axios.post(memberUrl, memberData, options);

        const setPatientUrl = `${process.env.REACT_APP_SERVER_IP}/demo/patient`;
        const patientData = {
          name: facial.person_name,
          room: title,
          roomId: roomRes.data.id
        };
        await axios.post(setPatientUrl, patientData, options);

        setRoomId(roomRes.data.id);
        setRoom(title);
        setData(response.data);
        setTime(new Date().toISOString().split("T")[0]);
        setPerson(response.data);
        setStep(1);
        setDemoStep(1);

        sessionStorage.setItem("room", `MOH - ${response.data.name}`);
      };
      getPatientData(facial);
    }
  }, [facial, setData, setRoomId, setStep, setRoom, roomId]);
  return Object.keys(person).length > 0 ? (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <UICardPerson person={person} time={time} image={image} />
      <button
        className="button is-success is-light is-rounded next-button"
        onClick={() => {
          history.push("/step-2");
        }}
      >
        Next
      </button>
    </div>
  ) : (
    <div className="step-one-loader vertical">
      <div className="title">Intercorp presents</div>
      <div className="person">{facial.person_name}</div>
      <div className="confidence">
        Confidence Level {Math.round(facial.confidence * 100)}%
      </div>
    </div>
  );
};

export default StepOneEnd;
