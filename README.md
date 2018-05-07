# react-heatmap-grid

[![Build Status](https://travis-ci.org/arunghosh/react-heatmap-grid.svg?branch=master)](https://travis-ci.org/arunghosh/react-heatmap-grid)

A React component for heatmap in grid layout using `div`.

![alt tag](https://github.com/arunghosh/react-heatmap-grid/raw/master/docs/screenshot.png)

## Installation

```
yarn add react-heatmap-grid
```

## Usage

**Mandatory fields** 

|Name |Type|Sample|
|---|---|---|
|`xLabels`|Array of string|`['1am', '2am', '3am']`|
|`yLabels`|Array of string|`['Sun', 'Mon']`|
|`data`|2D Array of numbers having `yLabels.length` rows and `xLabels.length` rows|`[[2,3,5][5,6,9]]`| 

```javascript
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
```


**Configuration**

|Name |Type|Description|Default Value|
|---|---|---|---|
|background|string|The base color for the heatmap|#329fff|
|height|number|Height of each cell of the heatmap in px|30|
|xLabelWidth|number|Width of the x label area in pixel|60|
|yLabelTextAlign|string|text alignment of the yLabels|right|
|unit|string|unit to dislay next to the value on hover||


### For developers

**New build**
```
yarn build
```

**Run dev server**
```
yarn dev
```

**Run test**
```
yarn test
```
