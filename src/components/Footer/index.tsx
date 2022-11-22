import React from 'react';

const items = ['Facebook', 'Instagram', 'Twitter'];

const Footer = () => {
  return (
    <div className='relative bg-blue-900 px-20 text-white'>
      <div className='flex items-center justify-between py-24 md:space-x-10'>
        <span>&copy; 2020 DE, Inc. All rights reserved.</span>

        {/* <div>
          {items.map((item) => (
            <a href='/' key={item} className='inline-block p-2 ml-3'>
              {item}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
