import { useEffect, useState } from 'react';
import { LiaCarSideSolid } from 'react-icons/lia';
import { ScaleLoader } from 'react-spinners';
import { dashboardCard } from '../assets/collectData';
import PieChart from '../chart/PieChart';
import SplineChart from '../chart/SplineChart';
import useAxios from '../common/UseAxios';
import CardReuse from '../components/CardReuse';

const UserDashboardScreen = () => {
  const getDashboardCardData = useAxios({});
  const [loading, setLoading] = useState(true);
  const cardColor = [
    'bg-green-100',
    'bg-orange-100',
    'bg-pink-100',
    'bg-indigo-100',
    'bg-deep-purple-100',
    'bg-teal-100',
    'bg-light-blue-100',
    'bg-lime-100',
  ];
  useEffect(() => {
    getDashboardCardData.fetcher({
      options: {
        method: 'GET',
        url: `/api/entry-exit/vehicle-stats`,
      },
      callback: () => {},
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  console.log('getDashboardData', [getDashboardCardData?.data]);

  return (
    <div className='flex flex-col gap-1 py-1'>
      <div className='shadow-md rounded-md  bg-white p-2 '>
        <div className=' grid  md:grid-cols-4 gap-2  '>
          {dashboardCard?.map((item, index) => (
            <CardReuse
              key={index}
              name={item?.name}
              Icon={
                <LiaCarSideSolid
                  size={20}
                  color='white'
                />
              }
              bgcolor={cardColor[index]}
              loading={loading}
              borderColor={'bg-green-500'}
              count={item?.value}
            />
          ))}
        </div>
      </div>
      <div className='lg:grid grid-cols-12 gap-1 '>
        <div className=' shadow-md rounded-md  bg-white p-3 col-span-8 '>
          {loading ? (
            <div className=' h-[350px] flex justify-center items-center'>
              <ScaleLoader
                className='ml-2 flex  items-center'
                color='#46B9EE'
                height={45}
              />
            </div>
          ) : (
            <SplineChart title='Daily Vehicle Entry | Exit' />
          )}
        </div>
        <div className=' shadow-md rounded-md  bg-white p-3 col-span-4 flex justify-center items-center '>
          {loading ? (
            <div className=' h-[350px] flex justify-center items-center'>
              <ScaleLoader
                className='ml-2 flex  items-center'
                color='#46B9EE'
                height={45}
              />
            </div>
          ) : (
            <PieChart title='Daily Vehicle Diagram' />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardScreen;
