import React from 'react';
import 'raf/polyfill';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DataGrid from '../src/DataGrid';

configure({ adapter: new Adapter() });

const defaultProps = {
  xLabels: ['x'],
  yLabels: ['y'],
  data: [0],
  height: 1,
  background: '#000000',
  xLabelWidth: 1,
  yLabelWidth: 1,
  xLabelTextAlign: 'top',
  yLabelTextAlign: 'left',
  unit: '',
  cellRender: () => null,
  cellStyle: () => {},
  width: 1
}

test('DataGrid renders a title from the provided title function', () => {
  const dataGrid = shallow(
    <DataGrid {...defaultProps} title={(value) => `CUSTOM_TITLE`} />
  );

  expect(dataGrid.find({title: 'CUSTOM_TITLE'})).toHaveLength(1);
})
