import React from 'react';
import PropTypes from 'prop-types';
import XLabels from './XLabels';
import DataGrid from './DataGrid';

function HeatMap({xLabels, yLabels, data, background, height, xLabelWidth, yLabelTextAlign, unit}) {
  return (
    <div>
      <XLabels labels={xLabels} width={xLabelWidth} />
      <DataGrid
        {...{xLabels, yLabels, data, background, height, xLabelWidth, yLabelTextAlign, unit}}
      />
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
  yLabelTextAlign: PropTypes.string,
  unit: PropTypes.string,
};

HeatMap.defaultProps = {
  background: '#329fff',
  height: 30,
  xLabelWidth: 60,
  yLabelTextAlign: 'right',
  unit: '',
};

export default HeatMap;
