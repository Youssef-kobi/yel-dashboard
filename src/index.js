import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './context/ContextProvider';
import { ToastContainer } from 'react-toastify';

registerLicense(
  'Mgo+DSMBaFt/QHRqVVhkXVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS31TdEZiX3xXeHFQRg==;Mgo+DSMBPh8sVXJ0S0J+XE9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEZjW3xfdndcTmZVUQ==;ORg4AjUWIQA/Gnt2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dgWX1dcXJWT2hUVEQ=;ODQ3NjEzQDMyMzAyZTM0MmUzMFBBYmh3NGZDQ1lCUGlySm9Od01WcFRiL2RIV3YvOS91bDd3UVZyQnBBaGM9;ODQ3NjE0QDMyMzAyZTM0MmUzMExIdURYSmx0T3V5cDNySkJlOHdyU0VRZ3JkTVNxTXFya2VhKzlSb0txNmM9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtDVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhWn9cc3VTRWlVVE12;ODQ3NjE2QDMyMzAyZTM0MmUzMFAzb0Q3MmZEZVlyUDJxb3BVR3dPYWd0OUNOUjhOOCtnWUtiNTNjakdYWXc9;ODQ3NjE3QDMyMzAyZTM0MmUzMENtc3E1RGRGVUwyejNSdEZrR3lxcHpNTEVzend5YmNTS3dsOTh2dzNHWEk9;Mgo+DSMBMAY9C3t2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dgWX1dcXJRRmBfUEQ=;ODQ3NjE5QDMyMzAyZTM0MmUzMFo2V2NPeU9DdXhJdGZyeVIrdTZ2SUZjQVZKei95cGNxZEdZS0ZNRU1idUE9;ODQ3NjIwQDMyMzAyZTM0MmUzMEM2MlBubGxLaEZSMTZ1WE1QUkswZktJa01iZmhlY3U2anVqU0JMblQrWEE9;ODQ3NjIxQDMyMzAyZTM0MmUzMFAzb0Q3MmZEZVlyUDJxb3BVR3dPYWd0OUNOUjhOOCtnWUtiNTNjakdYWXc9'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <ToastContainer
      position='bottom-center'
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <App />
  </ContextProvider>
);
