import React from "react";
import ReactDOM from "react-dom";
import CropperContainer from "./cropper/CropperContainer";
import Item from "./cropper/Item";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="someTestField">
        <CropperContainer>
          {({ x, y }) => <Item x={x} y={y} />}
        </CropperContainer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
