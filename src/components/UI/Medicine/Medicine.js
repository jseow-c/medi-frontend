import React from "react";
import UIMedicineCard from "./Card";

const UIMedicine = ({ title, medicine }) => {
  return (
    <div className="medicine-card-list">
      <h1>{title} Card</h1>
      <div class="tile is-ancestor">
        <div class="tile">
          <div class="tile is-parent">
            {medicine.map(med => (
              <UIMedicineCard key={med.name} {...med} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIMedicine;
