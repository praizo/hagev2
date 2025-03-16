import React from 'react';

import hagephones from '../../../assests/HagePhones.png';
import andriodappbadge from '../../../assests/Mobileappstorebadge.svg';
import appleappbadge from '../../../assests/Applestorebadge.svg';
import marketplaceimage2 from '../../../assests/marketplaceimage2.png';
import marketplaceimage4 from '../../../assests/marketplaceimage4.png';
import checkgold from '../../../assests/check-gold.svg';

const MarketplaceFeatures3 = () => {
  return (
    <div className="bg-white-100 pt-20 md:pt-32">
      <div className="px-4 md:px-8 lg:px-24">
        <div className="grid  xl:grid-cols-2 gap-y-10 xl:gap-y-0 ">
          <div className=" flex justify-center items-center order-2 xl:order-1 mt-8 md:mt-0 mb-12 md:mb-0">
            <div>
              <div className="mb-6">
                <span className="border-2 border-secondary-200 py-2 px-6 rounded-3xl text-secondary-200">
                  V1 Coming soon
                </span>
              </div>

              <h1 className="  md:px-0 pb-4  text-[2rem] md:text-[3.8rem]  font-normal font-main text-left text-primary-200  md:leading-normal">
                Receive and track supplies{' '}
                <span className="text-secondary-100">from manufacturers.</span>
              </h1>

              <p className="w-[90%] md:w-[80%] text-base text-[#344054] leading-7 pb-4 md:pb-0 font-sub">
                Track everything about your cargo and easily give reports to
                customers.
              </p>

              <div className=" flex items-center mt-8 gap-x-2 md:gap-x-6">
                <button>
                  <img src={andriodappbadge} alt="andriodappbadge" />
                </button>
                <button >
                  <img src={appleappbadge} alt="applebadge" />
                </button>
              </div>
            </div>
          </div>

          <img
            src={hagephones}
            alt="HagePhones"
            className="w-[100%] order-1 xl:order-2"
          />

        </div>

        <div className=" py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={marketplaceimage2} alt="marketplaceimage1" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For distributors{' '}
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Easily share shipment reports with customers, carriers, and
                  other stakeholders. Improve transparency throughout the supply
                  chain and ensure everyone is on the same page.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">Automated report generation</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">Streamlined communication</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">Data-driven decision making</p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 px-6 md:px-0">
                  <button>
                    <img src={andriodappbadge} alt="andriodappbadge" />
                  </button>
                  <button className="mx-6">
                    <img src={appleappbadge} alt="applebadge" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-8 md:py-10 ">
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For distributors
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Monitor the location of your shipments in real-time on a
                  user-friendly dashboard. Gain instant insights into estimated
                  arrival times and potential delays, allowing you to
                  proactively manage customer expectations and delivery
                  schedules.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">Real-time tracking dashboard</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">Detailed shipment information</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{' '}
                    <p className="px-4">
                      Final confirmation of dispatched order
                    </p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 px-6 md:px-0">
                  <button>
                    <img src={andriodappbadge} alt="andriodappbadge" />
                  </button>
                  <button className="mx-6">
                    <img src={appleappbadge} alt="applebadge" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <img src={marketplaceimage4} alt="marketplaceimage3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeatures3;
