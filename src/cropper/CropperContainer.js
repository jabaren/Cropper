import React from "react";
import "./CropperContainer.scss";
import { withDragListeners } from "./withDragListeners";

const CropperContainer = ({ children, x, y, ...otherProps }) => {
  return (
    <div {...otherProps} className="CropperContainer">
      {children({ x, y })}
    </div>
  );
};

export default withDragListeners(CropperContainer);
