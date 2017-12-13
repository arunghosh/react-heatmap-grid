# react-heatmap-grid

**Installation**

```
npm install react-heatmap-grid
```


**Usage**

The component takes 
* `xLabels` - 1D array of numbers
* `yLables` - 1D array of numbers
* 'data' - 2D array of numbers  having `yLabels.length` rows and 'xLabels.length` rows. 

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
|background|PropTypes.string|The base color for the heatmap|#329fff|
|height|PropTypes.number|Height of each cell of the heatmap in px|30|
|xLabelWidth|PropTypes.number|Width of the x label area in pixel|60|


### For developers

To make new build
```
npm run build
```

To run dev server
```
npm run dev
```

To run test
```
npm run test
```