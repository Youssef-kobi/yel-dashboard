import React from 'react';
import { Header } from '../../components';
import StackedChart from '../../components/Charts/StackedChart';

const Stacked = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation Rate' />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
