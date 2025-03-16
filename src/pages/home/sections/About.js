import React from 'react';

import trucks from '../../../assests/trucks.png';
import trucksMobile from '../../../assests/trucksmobile.png';
import blogimage from '../../../assests/blog-image.png';

const About = () => {
  return (
    <div className="bg-white-200 px-4 xl:px-20 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-0  gap-x-8 xl:gap-x-24 text-primary-300 pb-10 md:pb-20">
        <div className="order-2 md:order-1">
          <div className="pb-6 text-sm md:text-base leading-6 text-left">
            <h3 className="mb-3 font-bold text-sm md:text-base">Mission</h3>
            <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
              To revolutionize the logistics landscape by fostering transparency
              and collaboration, empowering businesses to deliver success.
            </p>
          </div>
          <div className="pb-6 text-sm md:text-base leading-6 text-left">
            <h3 className="mb-3 font-bold text-sm md:text-base">Vision</h3>
            <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
              We envision a future where logistics operate seamlessly, fueled by
              real-time data and a shared view of the supply chain. Every
              business, from distributors like Tunde to major suppliers and
              manufacturers, will have the tools they need to optimize
              operations and achieve their full potential.
            </p>
          </div>
        </div>

        <div className="flex flex-col  order-1 md:order-2 text-right md:text-left">
          <h3 className="mb-3 font-bold text-sm md:text-base">
            About us
          </h3>
          <h1 className=" font-main font-normal text-3xl  md:text-4xl lg:text-5xl lg:leading-normal">
            Hage is increasing transparency and ensuring effective communication
            from order to delivery
          </h1>
        </div>
      </div>

      <div className="">
        <img src={trucks} alt="bus" className="hidden md:flex w-full" />

        <img src={trucksMobile} alt="bus" className=" flex md:hidden w-full" />
      </div>
    </div>
  );
};
export default About;
