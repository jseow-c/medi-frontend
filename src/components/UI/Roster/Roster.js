import React from "react";
import UIRosterCard from "./Card";

const UIRoster = ({ title, people, chosen = null }) => {
  return (
    <div className="roster-card-list">
      <h1>{title} Roster</h1>
      {people.map(person => (
        <UIRosterCard
          key={person.name}
          {...person}
          active={person.name === chosen}
        />
      ))}
    </div>
  );
};

export default UIRoster;
