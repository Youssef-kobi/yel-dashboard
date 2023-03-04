import { Selection } from '@syncfusion/ej2-charts';
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  GridComponent,
  Inject,
  Page,
  Resize,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useAuth } from '../context/auth';
import {
  handleAdd,
  handleDelete,
  handleEdit,
  handleFetch,
} from '../services/Crud';
import ItemForm from './ItemForm';

const Products = () => {
  const { user } = useAuth();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  // const [editFormData, setEditFormData] = useState({});
  const productPicture = (props) => {
    return <img src={props.imageUrl[0]} alt='toto' />;
  };
  const ProductsGrid = [
    { type: 'checkbox', width: '15' },
    {
      field: 'sku',
      headerText: 'SKU',
      width: '50',
      textAlign: 'Center',
      isPrimaryKey: true,
      type: 'string',
    },
    {
      field: 'name',
      headerText: 'Product Name',
      width: '200',
      textAlign: 'Center',
    },
    {
      field: 'price',
      headerText: 'Price',
      width: '50',
      textAlign: 'Center',
    },
    {
      field: 'quantity',
      headerText: 'Quantity',
      width: '50',
      textAlign: 'Center',
    },
    {
      field: 'imageUrl',
      headerText: 'Image',
      width: '50',
      textAlign: 'Center',
      template: productPicture,
      type: 'array',
    },
    {
      field: 'category',
      headerText: 'Category',
      width: '100',
      textAlign: 'Center',
    },
    {
      field: 'description',
      headerText: 'Description',
      width: '200',
      textAlign: 'Center',
    },
  ];
  const [dataGrid, setDataGrid] = useState([]);
  useEffect(() => {
    const handleFetching = async () => {
      const data = await handleFetch('products', user?.uid);
      setDataGrid(data);
    };
    handleFetching();
  }, [user?.uid]);
  let grid;
  const toolbarClick = (args, data) => {
    if (args.item.id === 'overviewgrid_excelexport') {
      const excelExportProperties = {
        exportType: 'CurrentPage',
      };
      grid.excelExport(excelExportProperties);
    }
  };
  const actionBegin = (args) => {
    if (
      grid &&
      (args.requestType === 'beginEdit' || args.requestType === 'add')
    ) {
      setOpenEditDialog(true);
    }
    if (grid && args.requestType === 'save') {
      console.log('save');
    }
  };
  const actionComplete = async (args) => {
    if (args.requestType === 'delete') {
      handleDelete(
        args.data.map((data) => data.docId),
        'products'
      );
    }
  };
  const handleAddFn = async (args) => {
    const newItem = await handleAdd(args, 'products');
    setDataGrid((prev) => [...prev, newItem]);
  };
  const handleEditFn = async (args) => {
    const newItem = await handleEdit(args, 'products');
    setDataGrid((prev) =>
      prev.map((product) => (product.docId === args.docId ? newItem : product))
    );
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-half-white rounded-3xl'>
      <Header category={'Page'} title={'Products'} />
      <GridComponent
        id='overviewgrid'
        dataSource={dataGrid}
        actionComplete={actionComplete}
        actionBegin={actionBegin}
        allowPaging
        allowSorting
        searchSettings={{
          ignoreCase: true,
          fields: [],
          operator: 'contains',
          key: '',
        }}
        ref={(g) => (grid = g)}
        toolbar={['Search', 'Add', 'Edit', 'Delete', 'ExcelExport']}
        toolbarClick={toolbarClick}
        allowExcelExport
        allowResizing
        allowContextMenu
        allowSelection
        // handleAdd={(e) => console.log(e)}
        // handleEdit={(e) => console.log(e)}
        // editSettingsTemplate={(props)=>console.log('helloooooooooooo',props)}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowAdding: true,
          allowRemoving: true,
          // mode: 'Dialog',
          // dialog: EditDialog,
          template: (props) => (
            <ItemForm
              item={props}
              columns={ProductsGrid}
              openEditDialog={openEditDialog}
              setOpenEditDialog={setOpenEditDialog}
              handleAddFn={handleAddFn}
              handleEditFn={handleEditFn}
            />
          ),
        }}
      >
        <ColumnsDirective>
          {ProductsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Toolbar,
            Page,
            ExcelExport,
            Edit,
            Selection,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Products;
