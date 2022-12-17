import React from 'react';
import image1 from '../assets/section1-1.png';
const SectionOne = () => {
  return (
    <div className='w-full bg-stone-200 py-26 px-4'>
      <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
        <img
          className='w-[400px] md:w-[500px] mx-auto my-4'
          src={image1}
          alt='laptop-section'
        />
        <div className='flex flex-col justify-center mb-6'>
          <p className='text-[#111827] font-bold'>Learn with us together</p>
          <h1 className='text-2xl font-bold py-2 sm:text-3xl md:text-4xl'>
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            repudiandae ducimus eligendi voluptatum placeat dolores maxime,
            eaque unde harum, aperiam et porro ipsum qui quo?
          </p>
          <button className='bg-amber-200/95 hover:bg-amber-400 w-fit rounded-lg font-semibold text-center inline-flex items-center uppercase mx-auto md:mx-0 px-6 py-3 mt-8 text-[#111827]'>
            Get Started
            <svg
              aria-hidden='true'
              class='ml-2 -mr-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
