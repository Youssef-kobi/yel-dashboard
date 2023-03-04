import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateCtx } from '../context/ContextProvider';
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateCtx();
  // const currentCdolor = 'bg-blue-600';
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to={'/'}
              onClick={handleCloseSideBar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware />
              <span>ShopName</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => setActiveMenu((prevState) => !prevState)}
                className='text-xl rounded-full text-black p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-500 m-3 mt-4 uppercase '>
                  {item.title}
                </p>
                {item.links.map((Link) => (
                  <NavLink
                    key={Link.name}
                    to={`/${Link.name}`}
                    onClick={handleCloseSideBar}
                    style={({isActive})=>({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-white ${
                        isActive
                          ? ''
                          : 'text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray'
                      }`
                    }
                  >
                    {Link.icon}
                    <span className='capitalize'>{Link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
