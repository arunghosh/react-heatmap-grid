import React from "react";
import PropTypes from "prop-types";
import FixedBox from "./FixedBox";

const DataGrid = ({
  xLabels,
  yLabels,
  data,
  xLabelWidth,
  yLabelWidth,
  background,
  height,
  yLabelTextAlign,
  unit,
  displayYLabels,
  onClick,
  cursor,
  squares,
  cellRender,
  cellStyle,
  title
}) => {
  const flatArray = data.reduce((i, o) => [...o, ...i], []);
  const max = Math.max(...flatArray);
  const min = Math.min(...flatArray);

  return (
    <div>
      {yLabels.map((y, yi) => (
        <div id='heatmap-row' key={yi} style={{ display: "flex" }}>
          <FixedBox width={yLabelWidth}>
            <div
              style={{
                position: "absolute",
                textAlign: yLabelTextAlign,
                paddingRight: "5px",
                paddingTop: `${height / 3.7}px`,
                width: `${yLabelWidth}px`
              }}
            >
              {displayYLabels && y}
            </div>
          </FixedBox>
          {xLabels.map((x, xi) => {
            const value = data[yi][xi];
            const style = Object.assign(
              {
                cursor: `${cursor}`,
                margin: "1px 1px 0 0",
                height,
                width: squares ? `${height}px` : undefined,
                flex: squares ? "none" : 1,
                textAlign: "center",
              },
              cellStyle(background, value, min, max, data, xi, yi)
            );
            return (
              <div
                id='single-heatmap-cell'
                onClick={onClick.bind(this, xi, yi)}
                title={title(value, unit, xi, yi)}
                key={`${xi}_${yi}`}
                style={style}
              >
                <div style={{ paddingTop: `${height / 3.7}px` }}>
                  {cellRender(value, x, y)}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

DataGrid.propTypes = {
  xLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
  yLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  background: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  xLabelWidth: PropTypes.number.isRequired,
  yLabelWidth: PropTypes.number.isRequired,
  yLabelTextAlign: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  displayYLabels: PropTypes.bool,
  onClick: PropTypes.func,
  cursor: PropTypes.string,
  squares: PropTypes.bool,
  cellRender: PropTypes.func.isRequired,
  cellStyle: PropTypes.func.isRequired,
  title: PropTypes.func
};

DataGrid.defaultProps = {
  displayYLabels: true,
  cursor: "",
  onClick: () => {},
  squares: false,
  title: (value, unit) => (value || value === 0) && `${value} ${unit}`
};

export default DataGrid;
