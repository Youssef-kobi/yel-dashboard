import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  PieSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateCtx } from '../../context/ContextProvider';
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  pieChartData,
} from '../../data/dummy';

const PieChart = () => {
  const { currentMode, currentColor } = useStateCtx();
  const tooltipRender = (args) => {
    let value = (args.point.y / args.series.sumOfPoints) * 100;
    args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
  };
  const datalabel = { visible: true, position: 'Inside', name: 'text', textStyle: { color: currentColor, fontWeight: '600' }, };
  return (
    <AccumulationChartComponent
      id='pie-chart'
      height='420px'
      // primaryXAxis={pie}
      // primaryYAxis={LinePrimaryYAxis}
      // chartArea={{ border: { width: '0' } }}
      tooltipRender={tooltipRender}
      legendSettings={{
        // border: { radius: 60 } ,
        background: '#d5d5d54d',
        textStyle: { color: currentColor, fontWeight: '600' },
      }}
      // center={{ x: '60%', y: '60%' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        {/* {pieChartData.map((item, index) => ( */}
        <AccumulationSeriesDirective
          // key={index}
          explode={true}
          explodeOffset='10%'
          explodeIndex={0}
          xName='x'
          yName='y'
          radius='70%'
          dataSource={pieChartData}
          dataLabel={datalabel}
        />
        {/* ))} */}
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
