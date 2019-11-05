import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { StoreContext } from "../../context";

const useNav = origin => {
  const [nav, setNav] = useState(origin);
  const location = useLocation();

  // set the navigation
  useEffect(() => {
    if (location.pathname === "/") setNav(1);
    else if (location.pathname.indexOf("/step-") >= 0) {
      const newNav = parseInt(location.pathname.split("/step-")[1], 10);
      setNav(newNav);
    }
  }, [location.pathname]);

  return nav;
};

const SideButton = ({ history, nav, step, name, num }) => {
  const onClick = num => {
    if (step >= num) history.push(`/step-${num}`);
  };
  const cardClass = num =>
    nav === num ? "card active" : step >= num ? "card over" : "card";
  return (
    <div className={cardClass(num)} onClick={() => onClick(num)}>
      {name}
    </div>
  );
};

const UISidebar = () => {
  const nav = useNav(1);
  const {
    stepStore: [step]
  } = useContext(StoreContext);
  const history = useHistory();
  const constVar = { history, nav, step };
  return (
    <div className="sidebar">
      <progress
        className="progress is-small timeline-bar"
        value={nav * 7.5 - 0.75}
        max="100"
      ></progress>
      <div className="sidebar-empty"></div>
      <SideButton {...constVar} num={1} name="Patient Registration" />
      <SideButton {...constVar} num={2} name="Triage Nurse Notified" />
      <SideButton {...constVar} num={3} name="Patient Vitals" />
      <SideButton {...constVar} num={4} name="Attending Doctor Notified" />
      <SideButton {...constVar} num={5} name="Medical History Retrieved" />
      <SideButton {...constVar} num={6} name="Rich Media Used For Diagnosis" />
      <SideButton {...constVar} num={7} name="Escalation To Plastic Surgeon" />
      <SideButton {...constVar} num={8} name="Video Consultation" />
      <SideButton {...constVar} num={9} name="Medicine Recommendation" />
      <SideButton {...constVar} num={10} name="Pharmacy/Cashier Counter" />
      <SideButton {...constVar} num={11} name="Summary of Visit" />
      <SideButton {...constVar} num={12} name="Housekeeping" />
    </div>
  );
};

export default UISidebar;
