import React from 'react';

const Test = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center p-4 bg-gray-900 text-white'>
      <div className='sm:w-1/2 sm:pr-4'>
        <form className='bg-white p-6 shadow-md'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='sku'>
              SKU
            </label>
            <input
              className='w-full border border-gray-400 p-2'
              type='text'
              id='sku'
              name='sku'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full border border-gray-400 p-2'
              type='text'
              id='name'
              name='name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='price'>
              Price
            </label>
            <input
              className='w-full border border-gray-400 p-2'
              type='number'
              id='price'
              name='price'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='quantity'>
              Quantity
            </label>
            <input
              className='w-full border border-gray-400 p-2'
              type='number'
              id='quantity'
              name='quantity'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' htmlFor='category'>
              Category
            </label>
            <input
              className='w-full border border-gray-400 p-2'
              type='text'
              id='category'
              name='category'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-medium mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              className='w-full border border-gray-400 p-2'
              id='description'
              name='description'
              rows='5'
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg'>
              Submit
            </button>
            <button className='bg-transparent hover:bg-gray-500 text-gray-700 font-medium py-2 px-4 rounded-lg'>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className='sm:w-1/2 sm:pl-4 mt-4 sm:mt-0'>
        <div className='bg-white p-6 shadow-md'>
          <div className='flex flex-wrap -mx-2'>
            <div className='w-1/2 px-2'>
              <img
                className='h-48 w-full object-cover rounded-lg hover:shadow-lg cursor-pointer'
                src='image1.jpg'
              />
            </div>
            <div className='w-1/2 px-2'>
              <img
                className='h-48 w-full object-cover rounded-lg hover:shadow-lg cursor-pointer'
                src='image2.jpg'
              />
            </div>
            <div className='w-1/2 px-2 mt-4'>
              <img
                className='h-48 w-full object-cover rounded-lg hover:shadow-lg cursor-pointer'
                src='image3.jpg'
              />
            </div>
            <div className='w-1/2 px-2 mt-4'>
              <img
                className='h-48 w-full object-cover rounded-lg hover:shadow-lg cursor-pointer'
                src='image4.jpg'
              />
            </div>
            <div className='w-1/2 px-2 mt-4'>
              <img
                className='h-48 w-full object-cover rounded-lg hover:shadow-lg cursor-pointer'
                src='image5.jpg'
              />
            </div>
            <div className='w-1/2 px-2 mt-4'>
              <div className='flex items-center justify-center h-48 bg-gray-300'>
                <label
                  htmlFor='file-upload'
                  className='cursor-pointer text-gray-700 font-medium'
                >
                  Upload
                </label>
                <input id='file-upload' className='hidden' type='file' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
