import React from "react";
import PropTypes from "prop-types";
import FixedBox from "./FixedBox";

function XLabels({ labels, width, labelsVisibility, squares, height, yWidth }) {
  return (
    <div id='x-labels-list' style={{ display: "flex" }}>
      <FixedBox width={yWidth} />
      {labels.map((x, i) => (
        <div
          key={i}
          style={{
            flex: squares ? "none" : 1,
            textAlign: "center",
            width: squares ? `${height + 1}px` : width,
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
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
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
