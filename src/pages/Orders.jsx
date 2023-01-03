import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import Header from '../components/Header';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={'Page'} title={'Orders'} />
      <GridComponent
        // className='border rounded-xl'
        // // style={{}}
        // cssClass='bg-white dark:bg-secondary-dark-bg'
        // style={{background: 'transparent' }}
        // className='bg-white dark:bg-secondary-dark-bg'
        id='overviewgrid'
        dataSource={ordersData}
        allowPaging
        allowSorting
        searchSettings={{
          ignoreCase: true,
          fields: [],
          operator: 'contains',
          key: '',
        }}
        toolbar={['Search']}
      >
        <ColumnsDirective >
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Toolbar,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
