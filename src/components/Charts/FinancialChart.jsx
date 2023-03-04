import {
  ChartComponent,
  Crosshair,
  DateTime,
  HiloSeries,
  Inject,
  Legend,
  LineSeries,
  Logarithmic,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateCtx } from '../../context/ContextProvider';
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../data/dummy';
const FinancialChart = () => {
  const { currentMode } = useStateCtx();
  const date1 = new Date('2017, 1, 1');

  // eslint-disable-next-line consistent-return
  function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);
  return (
    <ChartComponent
      id='financial-chart'
      height='420px'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartArea={{ border: { width: '0' } }}
      crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          xName='x'
          yName='low'
          name='Apple Inc'
          type='Hilo'
          low='low'
          high='high'
          dataSource={returnValue}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
