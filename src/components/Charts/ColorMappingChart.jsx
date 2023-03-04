import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateCtx } from '../../context/ContextProvider';
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from '../../data/dummy';
const ColorMappingChart = () => {
  const { currentMode, currentColor } = useStateCtx();
  return (
    <ChartComponent
      id='charts'
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{
        mode: 'Range',
        background: '#d5d5d54d',
        textStyle: { color: currentColor, fontWeight: '600' },
      }}
      tooltip={{ enable: true }}
    >
      <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={colorMappingData[0]}
          name='USA'
          xName='x'
          yName='y'
          type='Column'
          cornerRadius={{
            topLeft: 10,
            topRight: 10,
          }}
        />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {rangeColorMapping.map((item, index) => (
          <RangeColorSettingDirective key={index} {...item} />
        ))}
      </RangeColorSettingsDirective>
    </ChartComponent>
  );
};

export default ColorMappingChart;
