import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../comon/Button';

const navItems = ['Home', 'About Us'];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3'>
      {navItems.map((item) => (
        <li className='font-normal'>
          <a
            href='#'
            className='flex items-center relative p-2 after:absolute after:content[""] after:left-0 after:top-full after:w-full after:h-[1.5px] after:bg-none hover:text-blue-700 hover:after:bg-blue-600'
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className='mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 border-b-[1px] shadow bg-slate-100'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <span className='mr-4 cursor-pointer py-1.5 font-normal'>Camellia</span>

        <div className='hidden lg:block'>{navList}</div>

        <Button variant='contained' size='large' className='hidden lg:flex'>
          <span className='capitalize'>Sign In</span>
        </Button>
        <FontAwesomeIcon
          icon={openNav ? faXmark : faBars}
          onClick={() => {}}
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
        />
      </div>
    </nav>
  );
};

export default Header;
