import React from 'react';
import { Header } from '../../components';
import AreaChart from '../../components/Charts/AreaChart';

const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation Rate in Percentage' />
      <div className='w-full'>
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;
