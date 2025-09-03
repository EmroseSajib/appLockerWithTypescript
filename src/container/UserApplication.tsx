import NotFoundScreen from '../screen/NotFoundScreen';
import UserDashboardScreen from '../screen/UserDashboardScreen';
import AssignRoutes from './AssignRoutes';

const routes = [
  {
    path: '/',
    components: <UserDashboardScreen />,
  },

  {
    path: '*',
    components: <NotFoundScreen />,
  },
];

const UserApplication = () => {
  return <AssignRoutes route={routes} />;
};

export default UserApplication;
