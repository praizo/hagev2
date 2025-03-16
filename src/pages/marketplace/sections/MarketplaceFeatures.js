import React from "react";
import hagephones from "../../../assests/HagePhones.png";
import andriodappbadge from "../../../assests/Mobileappstorebadge.svg";
import appleappbadge from "../../../assests/Applestorebadge.svg";
import marketplaceimage1 from "../../../assests/marketplaceimage1.png";
import marketplaceimage3 from "../../../assests/marketplaceimage3.png";
import checkgold from "../../../assests/check-gold.svg";

const MarketplaceFeatures = () => {
  return (
    <div className="bg-white-100 pt-20 md:pt-32">
      <div className="px-4 md:px-8 lg:px-24">
        <div className="grid  xl:grid-cols-2 gap-y-10 xl:gap-y-0 ">
          <div className=" flex justify-center items-center order-2 xl:order-1">
            <div>
              <div className="mb-6">
                <span className="border-2 border-secondary-200 py-2 px-6 rounded-3xl text-secondary-200">
                  V1 Coming soon
                </span>
              </div>

              <h1 className="  md:px-0 pb-4  text-[2rem] md:text-[3.8rem]  font-normal font-main text-left text-primary-200  md:leading-normal">
                Become a driver and{" "}
                <span className="text-secondary-100">earn more</span>
              </h1>

              <p className="w-[90%] md:w-[80%] text-base text-[#344054] leading-7 pb-4 md:pb-0 font-sub">
                For truck drivers looking for new ways to make money. Register
                as a driver and start taking orders.
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
          <div className="grid md:grid-cols-2 gap-10 py-10 md:py-0">
            <div>
              <img src={marketplaceimage1} alt="marketplaceimage1" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For transporters
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Our mobile app connects you with a vast network of
                  manufacturers and distributors seeking reliable transportation
                  services. Search for loads by location, type of goods, and
                  truck size. Get notified of new opportunities that match your
                  preferences.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Nationwide job board</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Search filters for customized results
                    </p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Instant job notifications</p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 gap-x-2 md:gap-x-6">
                  <button>
                    <img src={andriodappbadge} alt="andriodappbadge" />
                  </button>
                  <button >
                    <img src={appleappbadge} alt="applebadge" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-8 pt-12 md:pt-20 space-y-7">
            <div className="mb-6">
              <span className="border-2 border-secondary-200 py-2 px-6 rounded-3xl text-secondary-200">
                V1 Coming soon
              </span>
            </div>
            <h1 className="text-[2rem] md:text-5xl font-extrabold font-sub  text-primary-200  md:leading-snug">
              Join Hage with your fleet and{" "}
              <span className="text-secondary-100">earn more</span>
            </h1>
            <p className="font-normal font-body text-lg text-center">
              As a fleet-owner, you can manage all your trucks from one <br />
              easy-to-use dashboard.
            </p>
            <div className="flex items-center mt-8 gap-x-2 md:gap-x-6">
              <button>
                <img src={andriodappbadge} alt="andriodappbadge" />
              </button>
              <button >
                <img src={appleappbadge} alt="applebadge" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-8 md:py-10 ">
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For transporters
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Share delivery progress reports with manufacturers,
                  distributors, and other stakeholders easily through our
                  platform. This ensures everyone involved has a clear
                  understanding of the shipment status and eliminates
                  communication gaps.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Real-time GPS tracking on a map</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      View estimated arrival times at each checkpoint
                    </p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Electronically record and share proof of delivery (POD)
                    </p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 gap-x-2 md:gap-x-6">
                  <button>
                    <img src={andriodappbadge} alt="andriodappbadge" />
                  </button>
                  <button >
                    <img src={appleappbadge} alt="applebadge" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <img src={marketplaceimage3} alt="marketplaceimage3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeatures;
