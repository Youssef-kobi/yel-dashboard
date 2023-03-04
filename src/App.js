import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Area,
  Bar,
  ColorMapping,
  Customers,
  Ecommerce,
  Products,
  Financial,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from './pages';
import { FiSettings } from 'react-icons/fi';
import { lazy, Suspense, useState } from 'react';
import { useStateCtx } from './context/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AuthProvider, useAuth } from './context/auth';
import { FaSpinner } from 'react-icons/fa';

import * as PATHS from './constants/routes';

import myImage from './assets/BG.png';
import { toast } from 'react-toastify';
import Test from './pages/test';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
// const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Profile = lazy(() => import('./pages/Profile'));
function App() {
  const {
    activeMenu,
    setThemeSettings,
    themeSettings,
    currentColor,
    currentMode,
  } = useStateCtx();
  const PrivateOutlet = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
      <div
        className='flex justify-center  bg-cover bg-no-repeat items-center h-full '
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <Outlet />{' '}
      </div>
    ) : (
      <Navigate to={PATHS.LOGIN} />
    );
  };
  const ProfileOutlet = () => {
    const { user } = useAuth();
    !user.address && toast.error('please Finish Your profile');
    return user.address ? (
      <div className={`${currentMode === 'Dark' ? 'dark' : ''} w-full`}>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4 z-20 '>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                onClick={() => setThemeSettings(true)}
                style={{ backgroundColor: currentColor }}
                className={`text-3xl text-white p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray`}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 z-20 fixed dark:bg-secondary-dark-bg bg-half-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>SideBar w-0</div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-transparent min-h-screen md:ml-72 w-full  '
                : 'bg-transparent dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className='fixed z-20 md:static bg-half-white dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>

            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Navigate to={PATHS.PROFILE} />
    );
  };
  const PublicOutlet = () => {
    /* A hook that is listening to the user state. */
    const { isLoggedIn } = useAuth();
    return !isLoggedIn ? (
      <div
        className='flex justify-center  bg-cover bg-no-repeat items-center h-screen '
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <Outlet />
      </div>
    ) : (
      <Navigate to={PATHS.DASHBOARD} />
    );
  };
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div className='h-screen w-screen bg-[#aeaeae3d] flex justify-center items-center'>
            <FaSpinner size={56} />
          </div>
        }
      >
        <BrowserRouter>
          {themeSettings && <ThemeSettings />}
          <Routes>
            <Route element={<PublicOutlet />}>
              <Route path={PATHS.LOGIN} element={<Login />} />
              <Route path={PATHS.SIGNUP} element={<Register />} />
            </Route>
            <Route element={<PrivateOutlet />}>
              <Route path={PATHS.PROFILE} element={<Profile />} />
              <Route element={<ProfileOutlet />}>
                {/* <Route
                            path={PATHS.DASHBOARD}
                            element={<LandingPage />}
                          /> */}
                <Route path={PATHS.DASHBOARD} element={<Ecommerce />} />

                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/test' element={<Test />} />
                <Route path='/products' element={<Products />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/kanban' element='ECommerce' />

                <Route path='/editor' element='ECommerce' />
                <Route path='/calendar' element='ECommerce' />
                <Route path='/color-picker' element='ECommerce' />
                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
