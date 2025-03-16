import React from 'react';

import money from '../../../assests/money-2.svg';
import bus from '../../../assests/bus-1.svg';
import graph from '../../../assests/graph-1.svg';
import trucks from '../../../assests/trucks.png';
import trucksMobile from '../../../assests/trucksmobile.png';

const AboutusFeatures = () => {
  return (
    <div className="bg-white-100 pt-32 md:pt-44">
      <div className="px-4 md:px-16 ">
        <div>
          <div className="grid xl:grid-cols-2 gap-y-12 xl:gap-y-0 md:gap-x-20 text-primary-300 pb-10 md:pb-20">
            <div className="order-2 xl:order-1">
              <div className="pb-12 text-sm md:text-base leading-6 text-left">
                <h3 className="mb-5 font-semibold text-sm md:text-base">
                  Mission
                </h3>
                <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
                  To revolutionize the logistics landscape by fostering
                  transparency and collaboration, empowering businesses to
                  deliver success.
                </p>
              </div>
              <div className="pb-5 text-sm md:text-base leading-6 text-left">
                <h3 className="mb-5 font-semibold text-sm md:text-base">
                  Vision
                </h3>
                <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
                  We envision a future where logistics operate seamlessly,
                  fueled by real-time data and a shared view of the supply
                  chain. Every business, from distributors like Tunde to major
                  suppliers and manufacturers, will have the tools they need to
                  optimize operations and achieve their full potential.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center order-1 xl:order-2 text-right xl:text-left">
              <h3 className="pb-2 md:pb-6 text-sm md:text-base leading-6  font-semibold">
                About us
              </h3>
              <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
                Delivering Transparency, Driving Success
              </h1>
            </div>
          </div>

          <div className="">
            <img src={trucks} alt="truck" className="hidden md:flex w-full" />

            <img
              src={trucksMobile}
              alt="truck"
              className=" flex md:hidden w-full"
            />
          </div>
        </div>

        <div className="py-12  md:py-28  ">
          <div className="grid xl:grid-cols-2 gap-y-8 xl:gap-y-0 xl:gap-x-20 text-primary-300 pb-12 md:pb-20">
            <div className="flex flex-col justify-center">
              <h3 className="pb-2 md:pb-6 text-sm md:text-base leading-6  font-semibold">
                Why choose Hage?
              </h3>
              <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
                Hage: Efficiency and Transparency
              </h1>
            </div>
            <div>
              <div className="pb-12 text-sm md:text-base leading-6 text-left">
                <h3 className="pb-4  font-semibold">Picture this:</h3>
                <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
                  Tunde, a distributor in Abuja, faced a common challenge:
                  unreliable deliveries from a supplier hundreds of kilometers
                  away. Delays due to inefficiencies and a lack of communication
                  meant lost sales and frustrated customers.
                </p>
              </div>
              <div className="pb-5 text-sm md:text-base leading-6 text-left">
                <h3 className="mb-5 font-semibold text-sm md:text-base">
                  The Hage Difference:
                </h3>
                <p className="pb-2 text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
                  Hage is more than just a logistics platform. We bridge the
                  critical gap in communication and transparency that plagues
                  traditional supply chains. Our innovative SaaS solution
                  empowers businesses like Tunde's and manufacturing companies
                  to work together seamlessly.
                </p>
                <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal">
                  Hage goes beyond just delivering goods. We deliver
                  transparency, efficiency, and ultimately, the fuel for your
                  business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8 bg-primary-100 rounded-xl ">
            <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
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

            <div className="p-5 grid grid-cols-4 bg-white-300 rounded-xl">
              <img
                src={graph}
                alt="graph"
                className="rounded-full bg-secondary-300"
              />

              <div className=" col-span-3">
                <h4 className="text-sm md:text-base font-semibold pb-2">
                  Data-Driven Decisions
                </h4>
                <p className=" font-body font-light text-xs md:text-sm leading-7 text-[#344054]">
                  Make informed decisions based on real-time insights. Plan
                  inventory replenishment strategically and ensure products are
                  always available to meet customer demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusFeatures;
