import React from 'react';
import PropTypes from 'prop-types';
import FixedBox from './FixedBox'

function XLabels({ labels, width, labelsVisibility }) {
  console.log(labelsVisibility);
  return (
    <div style={{ display: 'flex' }}>
      <FixedBox width={width} />
      {labels.map((x, i) => (
        <div key={x} style={{ flex: 1, textAlign: 'center', visibility: labelsVisibility && labelsVisibility[i] === false ? 'hidden' : 'visible' }}>
          {x}
        </div>
      ))
      }
    </div >
  );
}


XLabels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  labelsVisibility: PropTypes.arrayOf(PropTypes.bool),
  width: PropTypes.number.isRequired,

};

XLabels.defaultProps = {
  labelsVisibility: null
};


export default XLabels;
