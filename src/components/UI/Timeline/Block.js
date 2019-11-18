import React from "react";
import { parseISOString } from "../../../functions/misc";

const UITimelineBlock = ({ title, desc, firstStep, lastStep, timing }) => {
  const regex = /(\d+:\d+):(\d+)/;
  const parsedFirst = parseISOString(timing[firstStep]);
  const parsedLast = parseISOString(timing[lastStep]);
  const parsedMatch = parsedFirst.toString().match(regex);
  const timeHours = parsedMatch[1];
  const timeSecs = parsedMatch[2];
  const duration = (parsedLast.getTime() - parsedFirst.getTime()) / 1000;
  const durMins = Math.floor(duration / 60);
  const durSecs = Math.round(duration % 60);

  return (
    <div className="timeline__box">
      <div className="timeline__date">
        <span className="timeline__day">{timeHours}</span>
        <span className="timeline__month">{timeSecs} sec</span>
      </div>
      <div className="timeline__post">
        <div className="timeline__content">
          <h2>{title}</h2>
          <p>
            Duration: {durMins > 0 && `${durMins}min `}
            {durSecs}sec
          </p>
          <p>Description: {desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UITimelineBlock;
