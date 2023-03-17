import "./Card.css";
import React from "react";

export default function Card(props) {
  const Cardstyle = {
    backgroundColor: props.color,
    borderColor: props.color,
  };

  return (
    <div className="Card" style={Cardstyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
