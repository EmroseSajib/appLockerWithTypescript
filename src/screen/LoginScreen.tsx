import { Button, Input } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgDanger } from 'react-icons/cg';
import { FaRegEye } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { LuEyeOff } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';
// import { getAuthData } from '../redux/slices/LoginSlice/authSlice';
import { ScaleLoader } from 'react-spinners';
import { AuthContext } from '../context/Providers/AuthContext';
import loginImage from '/assets/loginImage.png';
import bgImage from '/assets/loginPage.jpg';
import logo from '/assets/logo.png';

// import { login } from "../store/actions/userLoginAction";

const LoginScreen = () => {
  const { login, loading } = useContext(AuthContext);
  console.log('loginData=========>>>>', login);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');
  const randomString = Math.random().toString(36).slice(8);

  const [captcha, setCaptcha] = useState(randomString);
  const [valid, setValid] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (event) => {
    // event.preventDefault();
    if (event?.captchaData === captcha) {
      setValid(false);

      login(event?.username, event?.password);
    } else {
      setValid(true);
    }
  };
  const [showPass, setShowPass] = useState(false);
  //   const userInfo = useSelector((state) => state?.authData);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // dispatch(getAuthData(data));
    matchCaptcha(data);
    // console.log(data);
  };

  const gradientStyle = {
    background: 'linear-gradient(to top, #39B039, white)',
    height: '100vh', // Set the height to the full viewport for demonstration
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: '24px',
  };

  return (
    <>
      <div
        className='bg-no-repeat'
        style={gradientStyle}
      >
        <div className='lg:grid grid-cols-6 gap-4 h-screen flex flex-col justify-between'>
          {/* Image Part (Now on the Left) */}
          <div className='lg:flex items-center justify-center text-center col-span-4 w-[100%] mx-auto hidden lg:order-first'>
            <div>
              <img
                className='mx-auto h-auto w-[100%] ' // Adjusted the gap between elements
                src={loginImage}
                alt='Your Company'
              />
            </div>
          </div>

          {/* Form Part (Now on the Right) */}
          <div className='col-span-2 flex items-center order-first lg:order-last my-auto mx-3'>
            <div className='mx-auto py-5 g-white/10 backdrop-blur-xl text-black rounded-md border-[1px] border-gray-600 blur-none z-100 shadow-lg'>
              <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img
                  className='mx-auto h-auto w-[35%] my-5  '
                  src={logo}
                  alt='Your Company'
                />
              </div>
              <div className='lg:px-20 px-5'>
                {/* {userInfo?.error && <ErrorValidate error={userInfo?.error} />} */}
                <form
                  className='text-black'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className='flex flex-col gap-2'>
                    <Input
                      color='black'
                      label='User Name'
                      variant='standard'
                      autoComplete='off'
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <div className='text-red-400 text-[12px] font-[500] py-2'>
                        <p className='flex items-center'>
                          <CgDanger size={13} /> {`User Name field is required`}
                        </p>
                      </div>
                    )}
                    <Input
                      color='black'
                      type={showPass == true ? 'text' : 'password'}
                      label='Password'
                      variant='standard'
                      icon={
                        showPass == true ? (
                          <LuEyeOff
                            color='#43A6E3'
                            size={20}
                            onClick={() => setShowPass(!showPass)}
                          />
                        ) : (
                          <FaRegEye
                            color='#43A6E3'
                            size={20}
                            onClick={() => setShowPass(!showPass)}
                          />
                        )
                      }
                      {...register('password', { required: true })}
                    />
                    {errors.password && (
                      <div className='text-red-400 text-[12px] font-[500] py-2'>
                        <p className='flex items-center'>
                          <CgDanger size={13} /> {`Password field is required`}
                        </p>
                      </div>
                    )}
                    <div className='flex items-center justify-between py-5 gap-5'>
                      <div className='flex items-center gap-2'>
                        <h3
                          className='line-through py-[2px] px-3 w-20 font-serif font-bold text-[18px] tracking-widest rounded-md'
                          style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                          }}
                        >
                          {captcha}
                        </h3>
                        <IoMdRefresh
                          size={20}
                          className='cursor-pointer'
                          onClick={() => refreshString()}
                        />
                      </div>
                      <p className='text-xs text-sky-400 text-end'>
                        {`Forget Password? `}
                        <a className='font-semibold leading-6 text-sky-500 hover:text-black cursor-pointer'>
                          Click here
                        </a>
                      </p>
                    </div>
                    <Input
                      color='black'
                      error={valid}
                      label='Type the characters above'
                      autoComplete='off'
                      {...register('captchaData', { required: true })}
                    />
                  </div>
                  <div className='flex items-center justify-end py-2'>
                    <Button
                      type='submit'
                      className='bg-[#403CCA] text-white font-semibold py-[10px] px-8'
                    >
                      Log in
                    </Button>
                    {loading ? (
                      <ScaleLoader
                        className='ml-2 flex items-center'
                        color='#F3A843'
                        height={20}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
