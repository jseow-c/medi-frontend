import React from "react";

const UIRosterCard = ({ name, num, active }) => {
  const avail = num === 0;
  const availClass = avail
    ? "has-text-success has-text-weight-bold"
    : "has-text-danger has-text-weight-bold";
  const availText = avail ? "Available" : "Busy";
  const boxClass = active ? "box flex has-background-warning" : "box flex";
  return (
    <div className={boxClass}>
      <article className="media" style={{ display: "flex" }}>
        <figure className="image is-64x64 flex mr-1">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Person"
          />
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <small>Viewing {num} patients</small>{" "}
              <small className={availClass} style={{ float: "right" }}>
                {availText}
              </small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UIRosterCard;
