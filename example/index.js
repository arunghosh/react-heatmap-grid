import React from 'react';
import ReactDOM from 'react-dom';
import HeatMap from '../src';

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ['Sun', 'Mon', 'Tue'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

ReactDOM.render(
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    data={data}
  />,
  document.getElementById('app')
);
