import React from 'react';
import {
  earningData,
  paymentMethods,
  SparklineAreaData,
  SparkLineColumnsData,
  topData,
} from '../data/dummy';
import { GoPrimitiveDot } from 'react-icons/go';
import SparkLine from '../components/Charts/SparkLineChart';
import Stacked from '../components/Charts/StackedChart';
import { useStateCtx } from '../context/ContextProvider';
import PieChart from '../components/Charts/PieChart';
import { LineChart } from '../components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import LowInventoryLevels from '../components/LowInventoryLevels';
const Ecommerce = () => {
  const { currentColor, currentMode } = useStateCtx();
  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-3  w-full'>
        <div
          style={
            currentMode === 'Dark'
              ? { backgroundImage: 'url(./undrawdark.svg)' }
              : { backgroundImage: 'url(./undraw.svg)' }
          }
          className=' col-span-1  bg-half-white dark:text-gray-500 dark:bg-secondary-dark-bg h-44 rounded-xl p-8 pt-9 m-3 bg-no-repeat bg-right bg-cover'
        >
          <div className='flex justify-between items-center'>
            <div className='mb-4'>
              <p className='font-bold text-2xl text-gray-600'>Earnings</p>
              <p className='text-xl'>$63,448,78</p>
            </div>
          </div>
          <div>
            <button
              style={{ backgroundColor: currentColor }}
              className='p-3 hover:drop-shadow-xl text-white text-base rounded-2xl'
            >
              Download
            </button>
          </div>
        </div>
        <div className=' lg:col-span-2 grid grid-cols-2 lg:grid-cols-4  gap-2 m-3'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-half-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'
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
              <p className='text-sm text-gray-500 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-3 mx-auto w-full '>
        <div className='bg-half-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:col-span-2 lg:col-span-2'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
              Revenue Updates
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-500 hover:drop-shadow-xl'>
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
                <p>
                  <span className='text-3xl font-semibold'>$20,394</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5 flex justify-center items-center w-full'>
                <SparkLine
                  currentColor={currentColor}
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='100%'
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <button
                  type='button'
                  style={{ backgroundColor: currentColor }}
                  className='p-3 hover:drop-shadow-xl text-white text-base  rounded-2xl'
                >
                  Download Report
                </button>
              </div>
            </div>
            <div className='flex justify-center items-center overflow-auto'>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
        {/* Earning */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
          <div className='bg-half-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl '>
            <div className='flex flex-col h-full'>
              <div className='flex justify-between'>
                <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
                  Earnings
                </p>
                <div className='flex flex-col justify-start'>
                  <p>
                    <span className='text-3xl font-semibold'>$20,394</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Monthly Revenue</p>
                </div>
              </div>

              <div className='mt-5 flex justify-center items-center h-full w-full'>
                <SparkLine
                  currentColor={currentColor}
                  id='line-sparklineColumn'
                  type='Column'
                  height='100px'
                  width='100%'
                  data={SparkLineColumnsData}
                  color={currentColor}
                />
              </div>
            </div>
          </div>
          <div className='bg-half-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl '>
            <div className='flex flex-col '>
              <div className='flex justify-between'>
                <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
                  Expenses
                </p>
                <div className='flex flex-col justify-start'>
                  <p>
                    <span className='text-3xl font-semibold'>$20,394</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Yearly sales</p>
                </div>
              </div>
              <div className='flex justify-center items-end h-full w-full'>
                <PieChart size='200' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <div className=' lg:col-span-1 bg-half-white  dark:text-gray-200 m-3 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'>
          <div className='flex justify-between items-center '>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
              Recent Transactions
            </p>
            <div className='flex items-center border rounded p-2 '>
              <p className='flex items-center text-gray-500 hover:drop-shadow-xl'>
                May 2021
              </p>
            </div>
          </div>
          <ul className='list-none m-3'>
            {paymentMethods.map((item) => (
              <li
                key={item.name}
                className='flex items-start mb-4 px-2 py-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <div className='flex items-center'>
                  <div
                    style={{ background: item.iconBg, color: item.iconColor }}
                    className='p-4 rounded-3xl mr-3 flex justify-center items-center'
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-bold'>{item.name}</p>
                    <p className='text-gray-500 text-sm'>{item.status}</p>
                  </div>
                </div>
                <div className='ml-auto mt-4 text-xs font-bold text-gray-500'>
                  <span>{item.amount}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className=' border-t pt-4 mt-4'>
            <div className='flex justify-between'>
              <button
                type='button'
                style={{ backgroundColor: currentColor }}
                className='p-3 hover:drop-shadow-xl text-white text-base rounded-2xl'
              >
                Make a transaction
              </button>
              <button
                type='button'
                className='hover:text-gray-500 text-sm font-semibold rounded-2xl'
              >
                View more transactions
              </button>
            </div>
          </div>
        </div>
        <div className='lg:col-span-2 bg-half-white dark:text-gray-200 m-3 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'>
          <div className='flex justify-between items-center '>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
              Sales Overview
            </p>
            <div className='flex items-center border rounded p-2 '>
              <p className='flex items-center text-gray-500 hover:drop-shadow-xl'>
                May 2021
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <LineChart />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <div className='bg-half-white dark:text-gray-200 m-3 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'>
          <div className='flex justify-between items-center '>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
              Weekly Stats
            </p>
            <button className='font-bold p-2 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:drop-shadow-xl'>
              <BiDotsHorizontalRounded />
            </button>
          </div>
          <ul className='list-none m-3'>
            {topData.map((item) => (
              <li
                key={item.title}
                className='flex items-start my-2 px-2 py-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <div className='flex items-center'>
                  <div
                    style={{ background: item.iconBg, color: item.iconColor }}
                    className='p-4 rounded-full mr-3 flex justify-center items-center'
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-bold'>{item.title}</p>
                    <p className='text-gray-500 text-sm'>{item.name}</p>
                  </div>
                </div>
                <div className='ml-auto mt-4 text-xs font-bold text-gray-500'>
                  <span>{item.amount}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className='mt-5 flex justify-center items-center w-full'>
            <SparkLine
              currentColor={currentColor}
              id='line-sparkline-fill'
              type='Area'
              height='80px'
              width='100%'
              data={SparklineAreaData}
              color={currentColor}
            />
          </div>
        </div>
        <div className='bg-half-white  dark:text-gray-200 m-3 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'>
          <div className='flex justify-between items-center '>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
              Low stock
            </p>
            <button className='font-bold p-2 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:drop-shadow-xl'>
              <BiDotsHorizontalRounded />
            </button>
          </div>
          <LowInventoryLevels />
        </div>
        <div className='bg-half-white dark:text-gray-200 m-3 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl'>
          <div className='flex justify-between items-center '>
            <p className='font-semibold text-xl text-gray-600 dark:text-gray-200'>
            Store Visitors
            </p>
            <button className='font-bold p-2 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:drop-shadow-xl'>
              <BiDotsHorizontalRounded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
