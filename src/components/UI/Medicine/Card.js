import React from "react";

const UIMedicineCard = ({ name, icon, desc }) => {
  const iconClass = `${icon} med-icon`;

  return (
    <div className="tile is-parent">
      <article className="tile is-child notification is-info">
        <i className={iconClass} />
        <p className="title">{name}</p>
        <p className="subtitle">{desc}</p>
      </article>
    </div>
  );
};

export default UIMedicineCard;
