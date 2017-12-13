# react-heatmap-grid

**Installation**

```
npm install react-heatmap-grid
```


**Usage**

The mandatory properties 
|Name |Type|Description|Sample|
|---|---|---|---|
|`xLabels`|Array of string|`['1am', '2am', ''3am]`|
|`yLables`|Array of string|`['Sun, 'Mon']`|
|`data`|2D Array of numbers having `yLabels.length` rows and 'xLabels.length` rows|`[[2,3,5][5,6,9]]`| 

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