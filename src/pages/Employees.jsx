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
import { employeesData, employeesGrid } from '../data/dummy';
const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={'Page'} title={'Employees'} />
      <GridComponent
        // className='border rounded-xl'
        id='overviewgrid'
        dataSource={employeesData}
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
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
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

export default Employees;
