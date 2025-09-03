import { ScaleLoader } from 'react-spinners';
import type { cardProps } from '../shared/types';

const CardReuse = ({
  name,
  Icon,
  bgcolor,
  loading,
  borderColor,
  count,
}: cardProps) => {
  return (
    <div
      // style={{ backgroundColor: bgcolor }}
      className={`px-3 py-3 rounded-md ${bgcolor} `}
    >
      <div>
        <div className='flex justify-between items-center mb-4'>
          <div
            className={`font-bold text-[90%] `}
            style={{ color: '#000000' }}
          >
            {name}
          </div>
          {/* <BsSpeedometer size={30} color={"#303f9f"} /> */}
          <span className={`${borderColor} rounded-full p-2`}>{Icon} </span>
        </div>
        <div
          className='mb-1 text-center text-2xl font-bold mt-2'
          style={{ color: '#151D48' }}
        >
          {loading ? (
            <ScaleLoader
              className='ml-2 flex items-center '
              color='#46B9EE'
              height={20}
            />
          ) : count ? (
            count
          ) : (
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default CardReuse;
