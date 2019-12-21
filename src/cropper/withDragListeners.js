import React, { useRef } from "react";

function getComponentDifferential(axisComponent, delta) {
  return axisComponent - delta;
}

export function withDragListeners(WrapperComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        moving: false,
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0,
        initialX: 0,
        initialY: 0
      };
    }

    getClientXYComponents({ type, touches, clientX, clientY, deltaX, deltaY }) {
      const x = type === "touchstart" ? touches[0].clientX : clientX;
      const y = type === "touchstart" ? touches[0].clientX : clientY;

      return {
        x: getComponentDifferential(x, deltaX),
        y: getComponentDifferential(y, deltaY)
      };
    }

    handleDragStart = event => {
      const { offsetX: deltaX, offsetY: deltaY } = this.state;
      const { x, y } = this.getClientXYComponents({
        ...event,
        deltaX,
        deltaY
      });

      this.setState({
        initialX: x,
        initialY: y,
        moving: true
      });
    };

    handleDragEnd = ({ type, touches, clientX, clientY }) => {
      this.setState({
        moving: false
      });
    };

    handleDrag = ({ target, currentTarget, ...otherEventProps }) => {
      const moving = this.state.moving;

      if (moving && target != currentTarget) {
        const { initialX: deltaX, initialY: deltaY } = this.state;
        const { x, y } = this.getClientXYComponents({
          ...otherEventProps,
          deltaX,
          deltaY
        });
        console.log(x, y);
        this.setState({
          x,
          y,
          offsetX: x,
          offsetY: y
        });
      }
    };

    render() {
      const { x, y } = this.state;

      return (
        <WrapperComponent
          {...this.props}
          x={x}
          y={y}
          onMouseDown={this.handleDragStart}
          onMouseUp={this.handleDragEnd}
          onMouseMove={this.handleDrag}
        />
      );
    }
  };
}
