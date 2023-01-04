import React from 'react';
import { Header } from '../../components';
import SparkLineChart from '../../components/Charts/SparkLineChart';

const SparkLine = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation Rate' />
      <div className='w-full'>
        <SparkLineChart />
      </div>
    </div>
  );
};

export default SparkLine;
