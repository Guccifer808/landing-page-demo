import React from 'react';
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-stone-200'>
      <div className='flex flex-col justify-center w-full h-screen max-w-[800px] mt-[-96px] mx-auto text-center'>
        <p className='p-2 uppercase text-amber-200/95 text-xl font-bold'>
          There is no end to education
        </p>
        <h1 className='md:text-7xl py-4 md:py-6 sm:text-6xl text-4xl font-bold'>
          Knowledge, like air.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Learning is
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 md:py-6 pl-2'
            strings={['Happiness', 'Fun', 'Success', 'You']}
            typeSpeed={140}
            backSpeed={160}
            loop
            smartBackspace
          />
        </div>
        <p className='md:text-md text-md font-semibold p-4'>
          “Anyone who keeps learning stays young. The greatest thing in life is
          to keep your mind young.” <br />— Henry Ford
        </p>
        <button className='bg-amber-200/95 w-[7rem] rounded-lg font-semibold uppercase mx-auto px-6 py-2 mt-8 text-[#111827]'>
          Learn
        </button>
      </div>
    </div>
  );
};

export default Hero;
