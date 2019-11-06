import React from "react";

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

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
    <div class="timeline__box">
      <div class="timeline__date">
        <span class="timeline__day">{timeHours}</span>
        <span class="timeline__month">{timeSecs} sec</span>
      </div>
      <div class="timeline__post">
        <div class="timeline__content">
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
