import React from 'react';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TfiLinkedin } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-8 max-w-[1800px] mx-auto py-16 px-6 text-stone-100'>
      <div className=''>
        <h1 className='w-full text-3xl font-bold text-amber-200/95'>DEMO</h1>
        <p className='py-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam
          iure, eius culpa qui voluptates.
        </p>
        <div className='flex md:w-[75%] my-6 mx-4 justify-between'>
          <TfiLinkedin
            size={30}
            className='hover:text-amber-200/95 hover:scale-105 cursor-pointer'
          />
          <AiOutlineGithub
            size={30}
            className='hover:text-amber-200/95 hover:scale-105 cursor-pointer'
          />
          <AiFillTwitterCircle
            size={30}
            className='hover:text-amber-200/95 hover:scale-105 cursor-pointer'
          />
          <RiFacebookCircleFill
            size={30}
            className='hover:text-amber-200/95 hover:scale-105 cursor-pointer'
          />
        </div>
      </div>
      <div className='flex lg:col-span-2 justify-between mt-4'>
        {/* Column 1 */}
        <div>
          <h6 className='font-medium text-stone-200 text-amber-200/95'>
            Solutions
          </h6>
          <ul>
            <li className='py-2 text-sm'>High Tech</li>
            <li className='py-2 text-sm'>Financial</li>
            <li className='py-2 text-sm'>Manufacturing</li>
            <li className='py-2 text-sm'>Healthcare</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h6 className='font-medium text-stone-200 text-amber-200/95'>
            Developers
          </h6>
          <ul>
            <li className='py-2 text-sm'>Integration</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>AI Research</li>
            <li className='py-2 text-sm'>System Status</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h6 className='font-medium text-stone-200 text-amber-200/95'>
            Legal
          </h6>
          <ul>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Cookies Usage</li>
            <li className='py-2 text-sm'>Claim</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h6 className='font-semibold text-stone-200 text-amber-200/95 '>
            Support
          </h6>
          <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
