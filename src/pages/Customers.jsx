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
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import Header from '../components/Header';
import { useStateCtx } from '../context/ContextProvider';
import { customersData, customersGrid } from '../data/dummy';
const Customers = () => {
  const { currentMode } = useStateCtx();
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-half-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={'Page'} title={'Customers'} />
      <GridComponent
        // className='border rounded-xl'
        id='overviewgrid'
        dataSource={customersData}
        allowPaging
        allowSorting
        cssClass='dark'
        searchSettings={{
          ignoreCase: true,
          fields: [],
          operator: 'contains',
          key: '',
        }}
        toolbar={['Search', 'Delete', 'Edit', 'Add']}
        allowResizing
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowAdding: true,
          allowRemoving: true,
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Page,
            Toolbar,
            Selection,
            Edit,
            Sort,
            Filter,
            // ContextMenu,
            // ExcelExport,
            // PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
