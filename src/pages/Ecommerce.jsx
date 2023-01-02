import React from 'react';
import { earningData, SparklineAreaData } from '../data/dummy';
import { GoPrimitiveDot } from 'react-icons/go';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center '>
          <div className='flex justify-between items-center'>
            <div className='mb-4'>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448,78</p>
            </div>
          </div>
          <div>
            <button className='p-3 hover:drop-shadow-xl text-white text-base bg-blue-600 rounded-2xl'>
              Download
            </button>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                className={`text-2xl rounded-full p-4 hover:drop-shadow-xl`}
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm font-bold text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full lg:w-3/4 md:w-4/5'>
          <div className='flex justify-between'>
            <p>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/* Fix Responsiveness */}
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2  gap-10'>
            <div className='border-r-1 border-color flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-start'>
                <p>
                  <span className='text-3xl font-semibold'>$20,394</span>
                  <span className='p-1.5  font-semibold hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
                {/* </div>
              <div className='mt-8'> */}
                <p>
                  <span className='text-3xl font-semibold'>$20,394</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='#2563eb'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='#2563eb'
                />
              </div>
              <div className='mt-10'>
                <button
                  type='button'
                  className='p-3 hover:drop-shadow-xl text-white text-base bg-blue-600 rounded-2xl'
                >
                  Download Report
                </button>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
