import React from "react";
import PropTypes from "prop-types";

const FixedBox = ({ children, width, empty }) => {
  return <div id={empty ? 'y-label-empty' : 'y-label'} style={{ flex: `0 0 ${width}px` }}> {children} </div>;
};

FixedBox.defaultProps = {
  children: " ",
  empty : undefined,
};

FixedBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  width: PropTypes.number.isRequired,
  empty: PropTypes.bool || undefined,
};

export default FixedBox;
