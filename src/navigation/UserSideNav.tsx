import SideNavBar from './SideNavBar';

const adminMenuData = [
  {
    id: 2,
    link: '/',
    component: 'AdminDashboard',
    banglaDescription: 'ড্যাশবোর্ড',
    englishDescription: 'Dashboard',
    parent: 0,
    currentLevel: 1,
    iconValue: 'LuLayoutDashboard',
    sequenceNumber: 1.0,
    navStatus: true,
    childList: null,
  },
];

const UserSideNav = () => {
  return (
    <>
      <SideNavBar menuList={adminMenuData} />
    </>
  );
};

export default UserSideNav;
