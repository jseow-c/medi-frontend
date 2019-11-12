import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import React from "react";

export const cleanRoom = async () => {
  const url = `${process.env.REACT_APP_SERVER_IP}/demo/room/clear/all`;
  await axios.post(url);
  // const title = sessionStorage.getItem("room");
  // const titleString = `${title}`;
  // if (title && titleString !== "null" && titleString !== "undefined") {
  //   sessionStorage.removeItem("room");
  //   const roomUrl = `${process.env.REACT_APP_SERVER_IP}/webex/room`;
  //   const options = {
  //     headers: { "Content-Type": "application/json" },
  //     data: { title }
  //   };
  //   await axios.delete(roomUrl, options);
  // }
};

export const cleanUser = async () => {
  const setPatientUrl = `${process.env.REACT_APP_SERVER_IP}/demo/patient`;
  const options = { "Content-Type": "application/json" };
  const patientData = {
    name: "",
    room: "",
    roomId: "",
    step: 0,
    medicine: [],
    payment: 0,
    status: false,
    timing: [],
    message: [],
    country: [],
    reason: "",
    accident: false,
    police: false
  };
  await axios.post(setPatientUrl, patientData, options);
};

export const getUser = async () => {
  const patientUrl = `${process.env.REACT_APP_SERVER_IP}/demo/patient`;
  const patientRes = await axios.get(patientUrl);
  return patientRes.data;
};

export const getUserData = async name => {
  const infoUrl = `${process.env.REACT_APP_SERVER_IP}/patient/get`;
  const options = { "Content-Type": "application/json" };
  const infoData = { name };
  const infoRes = await axios.post(infoUrl, infoData, options);
  return infoRes.data;
};

export const setDemoStep = async step => {
  const infoUrl = `${process.env.REACT_APP_SERVER_IP}/demo/step`;
  const options = { "Content-Type": "application/json" };
  const infoData = { step };
  const infoRes = await axios.post(infoUrl, infoData, options);
  return infoRes.data;
};

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
