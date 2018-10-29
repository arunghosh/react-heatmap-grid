import React from "react";
import PropTypes from "prop-types";
import FixedBox from "./FixedBox";

const DataGrid = ({
  xLabels,
  yLabels,
  data,
  xLabelWidth,
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
}) => {
  const flatArray = data.reduce((i, o) => [...o, ...i], []);
  const max = Math.max(...flatArray);
  const min = Math.min(...flatArray);
  return (
    <div>
      {yLabels.map((y, yi) => (
        <div key={yi} style={{ display: "flex" }}>
          <FixedBox width={xLabelWidth}>
            <div
              style={{
                textAlign: yLabelTextAlign,
                paddingRight: "5px",
                paddingTop: `${height / 3.7}px`,
              }}
            >
              {displayYLabels && y}
            </div>
          </FixedBox>
          {xLabels.map((x, xi) => {
            const value = data[yi][xi];
            const style = Object.assign({}, cellStyle(background, value, min, max, data, xi, yi), {
              cursor: `${cursor}`,
              margin: "1px 1px 0 0",
              height,
              width: squares ? `${height}px` : undefined,
              flex: squares ? "none" : 1,
              textAlign: "center",
            })
            return (
              <div
                onClick={onClick.bind(this, xi, yi)}
                title={(value || value === 0) && `${value} ${unit}`}
                key={`${xi}_${yi}`}
                style={style}
              >
                <div style={{ paddingTop: `${height / 3.7}px` }}>
                  {cellRender(value)}
                </div>
              </div>
            )
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
  yLabelTextAlign: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  displayYLabels: PropTypes.bool,
  onClick: PropTypes.func,
  cursor: PropTypes.string,
  squares: PropTypes.bool,
  cellRender: PropTypes.func.isRequired,
  cellStyle: PropTypes.func.isRequired,
};

DataGrid.defaultProps = {
  displayYLabels: true,
  cursor: "",
  onClick: () => {},
  squares: false,
};

export default DataGrid;
