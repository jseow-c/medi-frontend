import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../../context";
import SpaceWidget, { destinationTypes } from "@ciscospark/widget-space";
// Sass import required to style widgets
import "@ciscospark/widget-space/src/momentum.scss";

const UIWebex = () => {
  const [display, setDisplay] = useState(false);
  const {
    roomIdStore: [roomId]
  } = useContext(StoreContext);
  const [spaceProps, setSpaceProps] = useState({
    accessToken: process.env.REACT_APP_WEBEX_ADMIN_TOKEN,
    destinationType: destinationTypes.SPACEID,
    destinationId: roomId,
    activities: {
      files: true,
      meet: true,
      message: true,
      people: true
    },
    initialActivity: "message",
    logLevel: "silent",
    muteNotifications: true
  });
  useEffect(() => {
    setSpaceProps(space => {
      return { ...space, destinationId: roomId };
    });
  }, [roomId]);
  useEffect(() => {
    if (spaceProps.destinationId) setDisplay(true);
    else setDisplay(false);
  }, [spaceProps.destinationId]);
  return (
    <div
      className="webex-space"
      style={{
        display: display ? "block" : "none"
      }}
    >
      {display && <SpaceWidget {...spaceProps} />}
    </div>
  );
};

export default UIWebex;
