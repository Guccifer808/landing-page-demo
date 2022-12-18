import React from 'react';
import card1 from '../assets/card3.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card1.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-stone-200'>
      <div className='grid md:grid-cols-3 max-w-[1240px] mx-auto gap-8'>
        {/* Card 1 */}
        <div className='flex flex-col p-4 my-4 rounded-lg w-full shadow-lg shadow-slate-700 hover:shadow-slate-900 hover:shadow-lg hover:scale-105 duration-200'>
          <img
            className='w-20 mx-auto mt-[-2.5rem] bg-stone-200'
            src={card1}
            alt='entry'
          />
          <h2 className='font-bold text-2xl py-8 text-center'>Bronze Level</h2>
          <p className='text-4xl font-bold text-center text-[#111827]'>$49</p>
          <div className='text-center font-medium text-[#111827]'>
            <p className='py-2 mt-8 mx-8 border-b border-slate-700'>
              Lorem, ipsum.
            </p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
          </div>
          <button className='bg-amber-200/95 hover:bg-amber-400 w-fit inline-flex items-center rounded-lg font-semibold text-center uppercase mx-auto px-6 py-2 mt-8 text-[#111827]'>
            Start Journey
          </button>
        </div>
        {/* Card 2 */}
        <div className='flex flex-col p-4 my-8 md:my-0 rounded-lg w-full shadow-lg shadow-slate-700 hover:shadow-slate-900 hover:shadow-lg hover:scale-105 duration-200'>
          <img
            className='w-20 mx-auto mt-[-2.5rem] bg-stone-200'
            src={card2}
            alt='entry'
          />
          <h2 className='font-bold text-2xl py-8 text-center'>Silver Level</h2>
          <p className='text-4xl font-bold text-center text-[#111827]'>$99</p>
          <div className='text-center font-medium text-[#111827]'>
            <p className='py-2 mt-8 mx-8 border-b border-slate-700'>
              Lorem, ipsum.
            </p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
          </div>
          <button className='bg-amber-200/95 hover:bg-amber-400 w-fit inline-flex items-center rounded-lg font-semibold text-center uppercase mx-auto px-6 py-2 mt-8 text-[#111827]'>
            Start Journey
          </button>
        </div>
        {/* Card 3 */}
        <div className='flex flex-col p-4 my-4 rounded-lg w-full shadow-lg shadow-slate-700 hover:shadow-slate-900 hover:shadow-lg hover:scale-105 duration-200'>
          <img
            className='w-20 mx-auto mt-[-2.5rem] bg-stone-200'
            src={card3}
            alt='entry'
          />
          <h2 className='font-bold text-2xl py-8 text-center'>
            Platinum Level
          </h2>
          <p className='text-4xl font-bold text-center text-[#111827]'>$149</p>
          <div className='text-center font-medium text-[#111827]'>
            <p className='py-2 mt-8 mx-8 border-b border-slate-700'>
              Lorem, ipsum.
            </p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
            <p className='py-2 mx-8 border-b border-slate-700'>Lorem, ipsum.</p>
          </div>
          <button className='bg-amber-200/95 hover:bg-amber-400 w-fit inline-flex items-center rounded-lg font-semibold text-center uppercase mx-auto px-6 py-2 mt-8 text-[#111827]'>
            Start Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
