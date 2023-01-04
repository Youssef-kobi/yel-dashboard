import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateCtx } from '../../context/ContextProvider';
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from '../../data/dummy';
const BarChart = () => {
  const { currentMode, currentColor } = useStateCtx();
  return (
    <ChartComponent
      id='bar-chart'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: '0' } }}
      tooltip={{ enable: true }}
      legendSettings={{
        // border: { radius: 60 } ,
        background: '#d5d5d54d',
        textStyle: { color: currentColor, fontWeight: '600' },
      }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[ColumnSeries, DataLabel, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
