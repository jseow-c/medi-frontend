import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressSpan = styled.span`
  transition: ${p => `${p.time / 1000 - 0.5}s width ease`};
`;

const UIProgress = ({ title, description, time = 5000, finishCB }) => {
  const [percent, setPercent] = useState(0);
  const transition = `all ${time / 1000}s ease`;
  useEffect(() => {
    setTimeout(() => setPercent(100), 300);
    setTimeout(finishCB, time);
  }, [time, finishCB]);
  console.log(transition);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      }}
    >
      <span style={{ fontSize: "3.5em", fontWeight: 800 }}>{title}</span>
      <span style={{ fontSize: "1.25em" }}>{description}</span>
      <div className="meter">
        <ProgressSpan
          time={time}
          style={{ width: `${percent}%` }}
        ></ProgressSpan>
      </div>
    </div>
  );
};

export default UIProgress;
