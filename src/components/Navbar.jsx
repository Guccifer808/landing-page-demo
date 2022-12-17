import React, { useState } from 'react';
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarHandler = () => setSidebar(!sidebar);

  return (
    <div className='flex h-20 max-w-[1850px] mx-auto px-5 justify-between items-center text-stone-100'>
      <h1 className='w-full text-3xl font-bold text-stone-100'>DEMO</h1>
      <ul className='hidden md:flex font-semibold'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contacts</li>
      </ul>
      {/* Mobile menu */}
      <div onClick={sidebarHandler} className='block md:hidden'>
        {!sidebar ? <RiCloseLine size={30} /> : <RiMenu4Fill size={24} />}
      </div>
      {/* Mobile menu sidebar */}
      <div
        className={
          !sidebar
            ? 'fixed h-full left-0 top-0 w-[66%] border-r border-slate-700 backdrop-blur-sm duration-500 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <ul className='pt-20 uppercase font-bold p-4 flex-col text-center'>
          <li className='p-4 border-b border-slate-700'>Home</li>
          <li className='p-4 border-b border-slate-700'>Services</li>
          <li className='p-4 border-b border-slate-700'>About</li>
          <li className='p-4 border-b border-slate-700'>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
