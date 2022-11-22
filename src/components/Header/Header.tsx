import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className='relative bg-white'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between px-6 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/'>
              <span className='text-2xl uppercase tracking-wider italic text-red-500 font-black'>
                us ceramic
              </span>
              {/* <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              /> */}
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
              onClick={() => setOpenNav((prev) => !prev)}
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          {/* <nav className='hidden space-x-10 md:flex'>
            <div className='relative'>
              <button
                type='button'
                className='text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-blue-600'
                aria-expanded='false'
              >
                <span>Services</span>

                <svg
                  className='text-gray-400 ml-2 h-5 w-5 group-hover:text-blue-600'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>

            <a className='text-base font-medium text-gray-500 hover:text-blue-600 cursor-pointer'>
              Pricing
            </a>
            <a className='text-base font-medium text-gray-500 hover:text-blue-600 cursor-pointer'>
              About Us
            </a>
          </nav> */}

          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <Link
              to='/search'
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Search
            </Link>
            <Link
              to='/active'
              className='ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Active
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ${
          openNav ? '' : 'hidden'
        }`}
      >
        <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
              <div>
                <Link to='/'>
                  <span className='text-2xl uppercase tracking-wider italic text-red-500 font-black'>
                    us ceramic
                  </span>
                </Link>
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  onClick={() => setOpenNav((prev) => !prev)}
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='space-y-6 py-6 px-5'>
            <div className='flex flex-col'>
              <Link
                to='/search'
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Search
              </Link>
              <Link
                to='/active'
                className='mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Active
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
