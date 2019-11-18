import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import UISidebar from "../components/UI/Sidebar";
import UIWebex from "../components/UI/Webex";
import ScreensStepOne from "./ScreensStepOne";
import ScreensStepTwo from "./ScreensStepTwo";
import ScreensStepThree from "./ScreensStepThree";
import ScreensStepFour from "./ScreensStepFour";
import ScreensStepFive from "./ScreensStepFive";
import ScreensStepSix from "./ScreensStepSix";
import ScreensStepSeven from "./ScreensStepSeven";
import ScreensStepEight from "./ScreensStepEight";
import ScreensStepNine from "./ScreensStepNine";
import ScreensStepTen from "./ScreensStepTen";
import ScreensStepEleven from "./ScreensStepEleven";
import ScreensStepTwelve from "./ScreensStepTwelve";
import ScreensEnd from "./ScreensEnd";
import ScreensZero from "./ScreensZero";
import {
  cleanRoom,
  cleanUser,
  getUser,
  getUserData,
  PrivateRoute
} from "../functions/misc";
import { StoreContext } from "../context";

const ScreensRoot = () => {
  const {
    loadingStore: [loading, setLoading],
    dataStore: [, setData],
    nameStore: [, setName],
    roomStore: [, setRoom],
    roomIdStore: [roomId, setRoomId],
    stepStore: [, setStep],
    medicineStore: [, setMedicine],
    paymentStore: [, setPayment],
    statusStore: [, setStatus],
    timingStore: [, setTiming],
    messageStore: [, setMessage],
    countryStore: [, setCountry],
    reasonStore: [, setReason],
    accidentStore: [, setAccident],
    policeStore: [, setPolice]
  } = useContext(StoreContext);

  const [contentClass, setContentClass] = useState("content-container");
  const location = useLocation();

  // Check if first page - do clean up
  // else get data and load
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/step-1") {
      const cleanAll = async () => {
        await cleanRoom();
        await cleanUser();
        setLoading(false);
      };
      cleanAll();
    } else {
      const setUser = async () => {
        const demo = await getUser();
        const newData = await getUserData(demo.name);
        setStep(demo.step);
        setData(newData);
        setName(demo.name);
        setRoom(demo.room);
        setRoomId(demo.roomId);
        setMedicine(demo.medicine);
        setPayment(demo.payment);
        setStatus(demo.status);
        setTiming(demo.timing);
        setMessage(demo.message);
        setAccident(demo.accident);
        setPolice(demo.police);
        setReason(demo.reason);
        setCountry(demo.country);
        setContentClass("content-container with-webex");
        setLoading(false);
      };
      setUser();
    }
  }, [
    setData,
    setLoading,
    setName,
    setRoom,
    setRoomId,
    setStep,
    setMedicine,
    setPayment,
    setStatus,
    setTiming,
    setMessage,
    setPolice,
    setAccident,
    setReason,
    setCountry
  ]);

  // Ensure CSS for Container when there is Webex
  useEffect(() => {
    if (roomId) setContentClass("content-container with-webex");
    else setContentClass("content-container");
  }, [roomId, setContentClass]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="root-container">
      <UISidebar />
      <div className="main-container">
        {/* <UIWebex /> */}
        <div className={contentClass}>
          <Switch>
            <Route exact path="/">
              <ScreensZero />
            </Route>
            <PrivateRoute path="/step-1">
              <ScreensStepOne />
            </PrivateRoute>
            <PrivateRoute path="/step-2">
              <ScreensStepTwo />
            </PrivateRoute>
            <PrivateRoute path="/step-3">
              <ScreensStepThree />
            </PrivateRoute>
            <PrivateRoute path="/step-4">
              <ScreensStepFour />
            </PrivateRoute>
            <PrivateRoute path="/step-5">
              <ScreensStepFive />
            </PrivateRoute>
            <PrivateRoute path="/step-6">
              <ScreensStepSix />
            </PrivateRoute>
            <PrivateRoute path="/step-7">
              <ScreensStepSeven />
            </PrivateRoute>
            <PrivateRoute path="/step-8">
              <ScreensStepEight />
            </PrivateRoute>
            <PrivateRoute path="/step-9">
              <ScreensStepNine />
            </PrivateRoute>
            <PrivateRoute path="/step-10">
              <ScreensStepTen />
            </PrivateRoute>
            <PrivateRoute path="/step-11">
              <ScreensStepEleven />
            </PrivateRoute>
            <PrivateRoute path="/step-12">
              <ScreensStepTwelve />
            </PrivateRoute>
            <PrivateRoute path="/end">
              <ScreensEnd />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ScreensRoot;
