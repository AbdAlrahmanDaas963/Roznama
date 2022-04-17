import React from "react";

function MiniCard({ name, time }) {
  return (
    <div className="mini-card">
      <div className="name">{name}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default MiniCard;
