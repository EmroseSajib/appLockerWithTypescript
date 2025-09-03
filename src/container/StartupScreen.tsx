import { useContext, useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import { AuthContext } from '../context/Providers/AuthContext';
import LoginScreen from '../screen/LoginScreen';
import UserApplication from './UserApplication';
import WrapperLayout from './WrapperLayout';

const StartupScreen = () => {
  const { token, getReloadAthData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await getReloadAthData(); // reload token from localStorage/backend
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <div>
        <ScaleLoader
          className='ml-2 flex items-center'
          color='#F3A843'
          height={20}
        />
      </div>
    ); // can be spinner
  }

  return token ? (
    <WrapperLayout>
      <UserApplication />
    </WrapperLayout>
  ) : (
    <LoginScreen />
  );
};

export default StartupScreen;
