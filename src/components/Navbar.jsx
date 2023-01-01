import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateCtx } from '../context/ContextProvider';
import avatar from '../data/avatar.jpg';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position='BottomRight'>
      <button
        type='button'
        className={`text-${color} relative text-xl rounded-full p-3 hover:bg-light-gray`}
        onClick={customFunc}
      >
        <span
          className={`absolute bg-${color} inline-flex rounded-full h-2 w-2 right-2 top-2`}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateCtx();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        // color='blue-600'
        icon={<AiOutlineMenu size={24} />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick('cart')}
          icon={<FiShoppingCart size={24} />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleClick('chat')}
          color='blue-600'
          icon={<BsChatLeft size={24} />}
        />
        <NavButton
          title='Notifications'
          customFunc={() => handleClick('notification')}
          color='blue-600'
          icon={<RiNotification3Line size={24} />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            onClick={() => handleClick('userProfile')}
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          >
            <img src={avatar} alt='avatar' className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi,{` `}</span>
              <span className='text-gray-400 text-bold ml-1 text-14'>
                Youssef
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
