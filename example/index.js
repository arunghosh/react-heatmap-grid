import React from 'react';
import ReactDOM from 'react-dom';
import HeatMap from '../src';

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

// Display only EVENT labels
const xLabelsVisibility = new Array(24).fill(0).map((_, i) => i % 2 === 0 ? true : false);

const yLabels = ['Sun', 'Mon', 'Tue'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

ReactDOM.render(
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    xLabelsLocation={'bottom'}
    xLabelsVisibility={xLabelsVisibility}
    data={data}
  />,
  document.getElementById('app')
);
