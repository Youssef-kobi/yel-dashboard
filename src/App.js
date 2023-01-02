import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Customers,
  Ecommerce,
  Employees,
  Orders,
  // Orders,
  // Calendar,
  // Employees,
  // Stacked,
  // Pyramid,
  // Customers,
  // Kanban,
  // Area,
  // Bar,
  // Pie,
  // Financial,
  // ColorPicker,
  // ColorMapping,
  // Editor,
} from './pages';
import { FiSettings } from 'react-icons/fi';
import { useState } from 'react';
import { useStateCtx } from './context/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
  const { activeMenu } = useStateCtx();
  const currentColor = 'blue-600';
  return (
    <div className=''>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                // onClick={() => setThemeSettings(true)}
                className={`text-3xl text-white p-3 bg-${currentColor} rounded-full hover:drop-shadow-xl hover:bg-light-gray`}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>SideBar w-0</div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/kanban' element='ECommerce' />

                <Route path='/editor' element='ECommerce' />
                <Route path='/calendar' element='ECommerce' />
                <Route path='/color-picker' element='ECommerce' />
                {/* Charts */}
                <Route path='/line' element='ECommerce' />
                <Route path='/area' element='ECommerce' />
                <Route path='/bar' element='ECommerce' />
                <Route path='/pie' element='ECommerce' />
                <Route path='/financial' element='ECommerce' />
                <Route path='/color-mapping' element='ECommerce' />
                <Route path='/pyramid' element='ECommerce' />
                <Route path='/stacked' element='ECommerce' />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
