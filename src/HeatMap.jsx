import React from 'react';
import PropTypes from 'prop-types';
import XLabels from './XLabels';
import DataGrid from './DataGrid';

function HeatMap({ xLabels, yLabels, data, background, height, xLabelWidth, xLabelsLocation, yLabelTextAlign, xLabelsVisibility, unit, displayYLabels }) {
  return (
    <div>
      {xLabelsLocation === 'top' &&
        <XLabels labels={xLabels} width={xLabelWidth} labelsVisibility={xLabelsVisibility} />
      }
      <DataGrid
        {...{ xLabels, yLabels, data, background, height, xLabelWidth, yLabelTextAlign, unit, xLabelsLocation, displayYLabels }}
      />
      {xLabelsLocation === 'bottom' &&
        <XLabels labels={xLabels} width={xLabelWidth} labelsVisibility={xLabelsVisibility} />
      }

    </div>
  );
}

HeatMap.propTypes = {
  xLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  yLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  background: PropTypes.string,
  height: PropTypes.number,
  xLabelWidth: PropTypes.number,
  xLabelsLocation: PropTypes.oneOf(['top', 'bottom']),
  xLabelsVisibility: PropTypes.arrayOf(PropTypes.bool),
  yLabelTextAlign: PropTypes.string,
  displayYLabels: PropTypes.bool,
  unit: PropTypes.string,
};

HeatMap.defaultProps = {
  background: '#329fff',
  height: 30,
  xLabelWidth: 60,
  yLabelTextAlign: 'right',
  unit: '',
  xLabelsLocation: 'top',
  xLabelsVisibility: null,
  displayYLabels: true
};

export default HeatMap;
