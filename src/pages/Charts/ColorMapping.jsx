import React from 'react';
import { Header } from '../../components';
import ColorMappingChart from '../../components/Charts/ColorMappingChart';

const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Map' />
      <div className='w-full'>
        <ColorMappingChart />
      </div>
    </div>
  );
};

export default ColorMapping;
