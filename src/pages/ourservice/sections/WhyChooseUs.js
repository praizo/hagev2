import React from 'react';
import money from '../../../assests/money-2.svg';
import bus from '../../../assests/bus-1.svg';
import graph from '../../../assests/graph-1.svg';

const WhyChooseUs = () => {
  return (
    <div className="bg-white-200 py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="flex justify-center items-center pb-8 md:pb-16">
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Why choose us?
          </h1>
        </div>

        <div className="p-6 grid md:grid-cols-2  xl:grid-cols-4 gap-8 bg-primary-100 rounded-xl ">
          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={money} alt="money" className="rounded-full" />

            <div className=" col-span-3">
              <p className=" font-body  text-sm md:text-base leading-7 text-primary-200">
                Competitive rates for your domestic shipments.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={bus} alt="bus" className="rounded-full" />

            <div className=" col-span-3">
              <p className=" font-body  text-sm md:text-base leading-7 text-primary-200">
                Access to a vast network of pre-vetted carriers.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img src={graph} alt="graph" className="rounded-full" />

            <div className=" col-span-3">
              <p className=" font-body  text-sm md:text-base leading-7 text-primary-200">
                Real-time tracking for complete shipment visibility.
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
            <img
              src={graph}
              alt="graph"
              className="rounded-full bg-secondary-300"
            />

            <div className=" col-span-3">
              <p className=" font-body  text-sm md:text-base leading-7 text-primary-200">
                Secure and reliable transportation for your goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
