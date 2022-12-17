import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 text-stone-100'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 text-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mt-6'>
            Want AI to help along your journey?
          </h1>
          <p className='font-semibold mt-4'>
            Sign up for an AI-powered learning techniques
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col w-full sm:flex-row items-center justify-between'>
            <input
              className='flex w-full p-3 rounded-md text-[#111827]'
              type='email'
              placeholder='Enter Email'
            />
            <button
              type='submit'
              className='bg-amber-200/95 hover:bg-amber-400 w-[150px] rounded-lg font-semibold items-center uppercase ml-4 my-6 px-6 py-3 md:mx-auto md:ml-4 text-[#111827]'
            >
              Sign Up
              {/* <svg viewBox='0 0 50 6' xmlns='http://www.w3.org/2000/svg'>
                <path d='m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z' />
              </svg> */}
            </button>
          </div>
          <p>
            We care about your privacy. Read our
            <span
              className='text-amber-200/95 hover:text-amber-400 cursor-pointer ml-1'
              href='#'
            >
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
