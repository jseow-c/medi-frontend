import React from "react";

const UIMedicineCard = ({ name, icon, desc }) => {
  const iconClass = `${icon} med-icon`;
  return (
    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <i class={iconClass} />
        <p class="title">{name}</p>
        <p class="subtitle">{desc}</p>
      </article>
    </div>
  );
};

export default UIMedicineCard;
