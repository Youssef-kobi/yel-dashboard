import React from 'react';
import { Header } from '../../components';
import PyramidChart from '../../components/Charts/PyramidChart';

const Pyramid = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Pyramid' />
      <div className='w-full'>
        <PyramidChart />
      </div>
    </div>
  );
};

export default Pyramid;
