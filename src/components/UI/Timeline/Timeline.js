import React from "react";
import UITimelineBlock from "./Block";

const UITimeline = ({ timeline, timing }) => {
  return (
    <div className="page">
      <div className="timeline">
        {timeline.map(tme => (
          <UITimelineBlock {...tme} timing={timing} key={tme.title} />
        ))}
      </div>
    </div>
  );
};

export default UITimeline;
