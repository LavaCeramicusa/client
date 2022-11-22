import Header from 'components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-screen min-h-screen bg-red-200'>
      <Header />

      <h1 className='my-10 font-bold text-7xl'>
        Welcome you to <span className='text-blue-500'></span>
        <span className='text-red-700'>{'<3'}</span>
      </h1>
      <h3 className='mb-10 text-3xl'>You want:</h3>
      <p className=''>Check insurance card information</p>

      <span>Or</span>
      <Link to='/login' className='underline'>
        Login
      </Link>
    </div>
  );
};

export default Home;
