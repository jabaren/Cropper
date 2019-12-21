import React from "react";
import "./Item.scss";

export default function Item({ x = 0, y = 0 }) {
  return (
    <div
      className="Item"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}
    />
  );
}
