import { Suspense, useContext, useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
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
      <div className='flex h-screen justify-center items-center bg-blue-gray-50'>
        <RingLoader
          size={80}
          color='#1296E0'
        />
      </div>
    ); // can be spinner
  }

  return token ? (
    <WrapperLayout>
      <Suspense
        fallback={
          <div className='flex h-screen justify-center items-center bg-blue-gray-50'>
            <RingLoader
              size={80}
              color='#1296E0'
            />
          </div>
        }
      >
        <UserApplication />
      </Suspense>
    </WrapperLayout>
  ) : (
    <LoginScreen />
  );
};

export default StartupScreen;
