import React from 'react';

const Hero = () => {
  return (
    <div className='text-stone-200'>
      <div className='flex flex-col justify-center w-full h-screen max-w-[800px] mt-[-96px] mx-auto text-center'>
        <p className='p-2 uppercase text-amber-200/70 text-xl font-bold'>
          There is no end to education
        </p>
        <h1 className='md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold'>
          Knowledge, like air.
        </h1>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold'>
          <p>Learning is </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
