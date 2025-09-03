import type { JSX } from 'react';
import TopNavbar from '../navigation/TopNavbar';
import UserSideNav from '../navigation/UserSideNav';

type props = {
  children: JSX.Element;
};
const WrapperLayout = ({ children }: props) => {
  return (
    <div className='bg-[#eeeeee]'>
      <TopNavbar />
      <div className='lg:flex '>
        <div className=' '>
          <UserSideNav />
        </div>
        <div className='flex-1 overflow-x-hidden'>
          <div className='min-h-screen px-3 pt-3   overflow-hidden'>
            {children}
          </div>
        </div>
      </div>
      {/* <FooterSection /> */}
    </div>
  );
};

export default WrapperLayout;
