import React from 'react'
import { Header } from '../../components'
import FinancialChart from '../../components/Charts/FinancialChart'

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Financial' />
    <div className='w-full'>
      <FinancialChart />
    </div>
  </div>
  )
}

export default Financial