import { LiaCarSideSolid } from 'react-icons/lia';
import useAxios from '../common/UseAxios';
import CardReuse from '../components/CardReuse';

const cardTitle = [
  'Total Customer',
  'Total Devices',
  'Total Retailers',
  'Active EMIS',
  'Completed EMIS',
];
const UserDashboardScreen = () => {
  const getDashboardCardData = useAxios({});

  // useEffect(() => {
  //   getDashboardCardData.fetcher({
  //     options: {
  //       method: 'GET',
  //       url: `/api/entry-exit/vehicle-stats`,
  //     },
  //     callback: () => {},
  //   });
  // }, []);

  console.log('getDashboardData', getDashboardCardData?.data);

  return (
    <div>
      <div className='grid grid-cols-5 md:grid-cols-3 gap-4 p-4'>
        <CardReuse
          name={'Total Customer'}
          Icon={
            <LiaCarSideSolid
              size={15}
              color='white'
            />
          }
          bgcolor={'bg-indigo-100'}
          loading={false}
          borderColor={'bg-green-500'}
          count={50}
        />
      </div>
    </div>
  );
};

export default UserDashboardScreen;
