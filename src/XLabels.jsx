import React from "react";
import PropTypes from "prop-types";
import FixedBox from "./FixedBox";

function XLabels({ labels, width, labelsVisibility,squares, height, paddingRight, paddingTop}) {
  let squareWidth;
  if (squares) {
    squareWidth = height +1;
  }
  return (
    <div style={{ display: "flex" }}>
      <FixedBox width={width} />
      {labels.map((x, i) => (
        <div
          key={x}
          style={{
            flex: squares ? 'none': 1,
            textAlign: "center",
            width: squares ?  `${squareWidth}px` : 'undefined',
            visibility:
              labelsVisibility && !labelsVisibility[i] ? "hidden" : "visible",
          }}
        >
          {x}
        </div>
      ))}
    </div>
  );
}

XLabels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  labelsVisibility: PropTypes.arrayOf(PropTypes.bool),
  width: PropTypes.number.isRequired,
  squares: PropTypes.bool,
  height: PropTypes.number,
};

XLabels.defaultProps = {
  labelsVisibility: null,
  squares: false,
  height: 30,
};

export default XLabels;
