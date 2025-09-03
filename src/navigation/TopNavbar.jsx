import {
  Drawer,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Providers/AuthContext';
const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };

  // const handleToggle = (e) => {
  //   localStorage.setItem('language', e.target.value);
  //   dispatch(setLanguage(e.target.value));
  //   setActive();
  // };

  return (
    <>
      <nav className='top-0  z-50 py-2   bg-white   sticky shadow-md transition duration-500 '>
        <div className='flex justify-between items-center px-3 '>
          <div className=' lg:w-[40%] '>
            <div className='flex items-center gap-2'>
              <div className=' block lg:hidden'>
                <AiOutlineMenuUnfold
                  onClick={openDrawer}
                  size='25'
                  className='bold'
                />
                <Drawer
                  open={open}
                  onClose={closeDrawer}
                >
                  {/* <MobileSideNav onClose={closeDrawer} /> */}
                </Drawer>
              </div>
            </div>
          </div>
          <div className='lg:hidden flex items-center justify-end gap-5'>
            <Link
              to='/'
              className='lg:w-[30%] w-[30%] '
            >
              <img
                src='/assets/logo/logo.png'
                className='cursor-pointer duration-500 z-10 '
              />
            </Link>
            <span className='text-start text-sm font-medium lg:block hidden text-blue-gray-600'></span>
          </div>
          <div className='lg:px-4 '>
            <div className='lg:flex items-center justify-end  space-x-5 flex '>
              <span
                className='bg-light-green-200 px-2 cursor-pointer rounded-md text-justify font-semibold text-[15px] '
                onClick={() => setSelectUnitModalSecond(true)}
              >
                {/* {vehicleName ? JSON.parse(vehicleName) : ''} */}
                {/* hello */}
              </span>
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <span className='flex items-center justify-center gap-5'>
                  {/* <FaRegBell
                    size={24}
                    color='black'
                  /> */}
                  <MenuHandler>
                    <button
                      type='button'
                      className='text-textPrimary  cursor-pointer'
                      title='User'
                    >
                      <div className='flex items-center justify-between gap-2'>
                        <img
                          className='w-10 h-10 p-[2px] rounded-full border-black text-sky-600 border-[1px]'
                          src='/assets/profile2.png'
                          alt='user photo'
                        />

                        <span className='hidden lg:block text-sm font-semibold uppercase '>
                          User
                        </span>
                      </div>
                    </button>
                  </MenuHandler>
                </span>

                <MenuList className='w-[190px] border-none '>
                  {/* <Link to='/Profile-details'> */}
                  <MenuItem className='flex space-x-1 text-textPrimary  hover:bg-white hover:text-darkTextSecondary  transition ease-in-out delay-150 duration-300 '>
                    <span>
                      <BiUser size={16} />
                    </span>
                    <span className=''> My Profile</span>
                  </MenuItem>
                  {/* </Link> */}

                  <MenuItem className=''>
                    <Link to='/change-password'>
                      <span className='flex space-x-1 text-textPrimary  hover:bg-white  hover:text-darkTextSecondary  transition ease-in-out delay-150 duration-300 '>
                        <MdPassword size={16} />
                        Change Password
                      </span>
                    </Link>
                  </MenuItem>

                  <MenuItem
                    onClick={() => handleLogOut()}
                    className=' text-textPrimary  hover:bg-white  hover:text-darkTextSecondary transition ease-in-out delay-150 duration-300'
                  >
                    <button
                      type='button'
                      className='flex space-x-1'
                    >
                      <BiLogOutCircle size={16} />

                      <span className='text-red-300'>Logout</span>
                    </button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
