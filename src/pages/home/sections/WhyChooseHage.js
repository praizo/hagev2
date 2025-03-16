import React from 'react';

import money from '../../../assests/money-2.svg';
import bus from '../../../assests/bus-1.svg';
import graph from '../../../assests/graph-1.svg';
import trucks from '../../../assests/trucks.png';
import trucksMobile from '../../../assests/trucksmobile.png';

const WhyChooseHage = () => {
  const handleBookDemoClick = () => {
    window.location.href = 'mailto:info@tryhage.com';
  };
  return (
    <div className="bg-white-200 px-4 xl:px-16 font-main">
      <div className="py-8  md:py-16  ">
        <div className=" p-4 xl:p-6 grid  md:grid-cols-3 gap-8 bg-primary-100 rounded-xl ">
          <div className=" p-3 xl:p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={money} alt="money" className="rounded-full" />

            <div className=" col-span-3">
              <h4 className="text-sm md:text-base font-semibold pb-2">
                Real-time Tracking
              </h4>
              <p className=" font-body font-light text-xs md:text-sm leading-7 text-[#344054]">
                Gain complete visibility into your shipment's location and
                progress. Eliminate delays and proactively manage your
                inventory.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={bus} alt="bus" className="rounded-full" />

            <div className=" col-span-3">
              <h4 className="text-sm md:text-base font-semibold pb-2">
                Enhanced Communication
              </h4>
              <p className=" font-body font-light text-xs md:text-sm leading-7 text-[#344054]">
                Break down communication silos. All parties involved, from
                distributors like Tunde to suppliers and drivers, can
                collaborate effectively on a single platform.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={graph} alt="graph" className="rounded-full" />

            <div className=" col-span-3">
              <h4 className="text-base  font-semibold pb-2">
                Improved Efficiency
              </h4>
              <p className=" font-body font-light text-xs md:text-sm leading-7 text-[#344054]">
                Streamline delivery processes, optimize routes, and eliminate
                unnecessary delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseHage;
