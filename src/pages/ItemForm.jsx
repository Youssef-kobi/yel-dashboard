import React, { useState } from 'react';
import { BsFillCameraFill } from 'react-icons/bs';

// import { Button } from '@syncfusion/ej2-react-buttons';
// import {
//   UploaderComponent,
//   RemovingEventArgs,
// } from '@syncfusion/ej2-react-inputs';

const EditDialog = ({
  item,
  columns,
  openEditDialog,
  closeEditDialog,
  handleSave,
  setOpenEditDialog,
  handleAddFn,
  handleEditFn,
}) => {
  const [editFormData, setEditFormData] = useState({
    category: item?.category || '',
    description: item?.description || '',
    imageUrl: item?.imageUrl || [],
    name: item?.name || '',
    price: item?.price || 0,
    quantity: item?.quantity || 0,
    sku: item?.sku || '',
  });
  const handleInputChange = (event) => {
    console.log(editFormData);
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item.isAdd) handleAddFn(editFormData);
    else handleEditFn({ ...editFormData, docId: item?.docId });
    setOpenEditDialog(false);
  };
  return (
    <div
      className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 dark:bg-gray-800'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl w-full md:w-3/4 lg:w-4/5 xl:w-1/3 p-4'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-2xl font-semibold'>Edit Product</p>
          <button
            className='p-2 text-gray-600 dark:text-gray-200 hover:text-gray-800'
            onClick={() => setOpenEditDialog(false)}
          >
            <BsFillCameraFill />
          </button>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium' htmlFor='sku'>
                SKU
              </label>
              <input
                type='text'
                name='sku'
                id='sku'
                value={editFormData.sku}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                value={editFormData.name}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium' htmlFor='price'>
                Price
              </label>
              <input
                type='number'
                name='price'
                id='price'
                value={editFormData.price}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block mb-2 text-sm font-medium'
                htmlFor='quantity'
              >
                Quantity
              </label>
              <input
                type='number'
                name='quantity'
                id='quantity'
                value={editFormData.quantity}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block mb-2 text-sm font-medium'
                htmlFor='category'
              >
                Category
              </label>
              <input
                type='text'
                name='category'
                id='category'
                value={editFormData.category}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block mb-2 text-sm font-medium'
                htmlFor='description'
              >
                Description
              </label>
              <textarea
                rows='5'
                name='description'
                id='description'
                value={editFormData.description}
                className='p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm w-full'
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div className='mb-6'>
              <label
                className='block mb-2 text-2xl font-semibold'
                htmlFor='images'
              >
                Upload Images
              </label>
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center justify-around flex-wrap'>
                  {editFormData.imageUrl.map((image, index) => (
                    <div className='flex flex-row items-center justify-around m-2'>
                      <img
                        src={image.src}
                        key={`image-${index}`}
                        width='90'
                        height='90'
                        className='shadow-md rounded-md'
                      />
                      <button
                        onClick={() => {
                          // handleImageRemove(index);
                        }}
                        className='ml-2 py-1 px-2 bg-red-400 rounded shadow-sm text-white dark:text-red-400 hover:bg-red-500 dark:hover:bg-red-700'
                      >
                        <span className='text-sm font-normal'>Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex flex-row items-center justify-around'>
                  <input
                    type='file'
                    name='images'
                    id='images'
                    className='py-2 px-3 bg-gray-400 dark:bg-gray-700 rounded shadow-sm'
                    // onChange={handleImageChange}
                  />
                  <label
                    htmlFor='images'
                    className='ml-2 py-2 px-3 bg-gray-400 dark:bg-gray-700 rounded shadow-sm text-gray-700 dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-800'
                  >
                    <span className='text-sm font-normal'>
                      <BsFillCameraFill />
                      &nbsp;&nbsp;Upload
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <button
            className='py-2 px-3 bg-gray-400 dark:bg-gray-700 rounded shadow-sm text-gray-700 dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-800'
            onClick={() => setOpenEditDialog(false)}
          >
            Cancel
          </button>
          <button className='py-2 px-3 bg-green-400 dark:bg-green-700 rounded shadow-sm text-white dark:text-green-100 hover:bg-green-500 dark:hover:bg-green-800'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
