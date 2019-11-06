import React from "react";
import UITimelineBlock from "./Block";

const UITimeline = ({ timeline, timing }) => {
  return (
    <div class="page">
      <div class="timeline">
        {timeline.map(tme => (
          <UITimelineBlock {...tme} timing={timing} key={tme.title} />
        ))}
      </div>
    </div>
  );
};

export default UITimeline;
