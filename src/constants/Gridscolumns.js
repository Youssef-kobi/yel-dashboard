const productPicture = (props) => (
  <img
    className='rounded-full w-10 h-10 m-auto'
    src={props.imageUrl[0]}
    alt='product'
  />
);
export const ProductsGrid = [
  { type: 'checkbox', width: '15' },
  {
    field: 'sku',
    headerText: 'SKU',
    width: '50',
    textAlign: 'Center',
    isPrimaryKey: true,
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
