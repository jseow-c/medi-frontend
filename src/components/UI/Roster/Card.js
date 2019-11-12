import React from "react";

const UIRosterCard = ({
  name,
  photo,
  status,
  title,
  workdays,
  shift,
  active
}) => {
  const statusClass =
    status === "Available"
      ? "has-text-success has-text-weight-bold"
      : "has-text-danger has-text-weight-bold";
  const boxClass = active ? "box flex has-background-warning" : "box flex";
  return (
    <div className={boxClass}>
      <article className="media" style={{ display: "flex" }}>
        <figure className="image is-64x64 flex mr-1">
          <img src={photo} alt="Person" className="avatar-image" />
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <small>{title}</small>{" "}
              <small className={statusClass} style={{ float: "right" }}>
                {status}
              </small>
              <br />
              Workdays: {workdays.join(", ")}
              <br />
              Shift: {shift}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UIRosterCard;
