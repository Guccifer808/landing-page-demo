import React from 'react';
import image1 from '../assets/section1-1.png';
const SectionOne = () => {
  return (
    <div className='w-full bg-stone-200 py-26 px-4'>
      <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
        <img
          className='w-[500px] mx-auto my-4'
          src={image1}
          alt='laptop-section'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#111827] font-bold'>Learn with us together</p>
          <h1 className='text-2xl font-bold py-2 sm:text-3xl md:text-4xl'>
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            repudiandae ducimus eligendi voluptatum placeat dolores maxime,
            eaque unde harum, aperiam et porro ipsum qui quo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
