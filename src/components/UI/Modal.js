import React from "react";

const UIModal = ({ show, title, description, bgClick }) => {
  return (
    <div className={show ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={bgClick}></div>
      <div className="modal-content" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "3.5em", fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: "1.5em" }}>{description}</div>
      </div>
    </div>
  );
};

export default UIModal;
