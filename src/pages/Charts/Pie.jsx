import React from 'react';
import { Header } from '../../components';
import PieChart from '../../components/Charts/PieChart';

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10  bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Pie' />
      <div className='w-full flex justify-center items-center '>
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
