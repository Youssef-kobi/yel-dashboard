import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { useStateCtx } from '../../context/ContextProvider';
import { PyramidData } from '../../data/dummy';
const PyramidChart = () => {
  const { currentMode, currentColor } = useStateCtx();

  return (
    <AccumulationChartComponent
      id='pyramid-chart'
      legendSettings={{
        // border: { radius: 60 } ,
        background: '#d5d5d54d',
        textStyle: { color: currentColor, fontWeight: '600' },
      }}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationDataLabel,
          AccumulationTooltip,
          PyramidSeries,
          AccumulationLegend,
          AccumulationSelection,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name='Food'
          dataSource={PyramidData}
          xName='x'
          yName='y'
          type='Pyramid'
          width='45%'
          height='80%'
          neckWidth='15%'
          gapRatio={0.03}
          explode
          emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
          dataLabel={{
            visible: true,
            position: 'Inside',
            name: 'text',
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PyramidChart;
