import React from "react";

import marketplace2image1 from "../../../assests/marketplace2image1.png";
import marketplace2image2 from "../../../assests/marketplace2image2.png";
import marketplace3image3 from "../../../assests/marketplace2image3.png";

import checkgold from "../../../assests/check-gold.svg";

const MarketplaceFeatures2 = () => {
  return (
    <div className="bg-white-100 pt-20 md:pt-24">
      <div className="px-4 md:px-8 lg:px-24">
        <div className="grid  xl:grid-cols-2 gap-y-10 xl:gap-y-0 ">
          <div className=" flex justify-center items-center order-2 xl:order-1 mt-8 md:mt-0 mb-12 md:mb-0">
            <div>
              <h1 className="  md:px-0 pb-4  text-[2rem] md:text-[3.8rem]  font-normal font-main text-left text-primary-200  md:leading-normal">
                Monitor your shipments with Hage's{" "}
                <span className="text-secondary-100">enterprise platform</span>
              </h1>

              <p className="w-[90%] md:w-[80%] text-base text-primary-100 leading-7 pb-4 md:pb-0 font-sub">
                With just a few clicks, you can manage all your local freight
                operations with the help of our dashboard.
              </p>

              <div className="flex items-center mt-8 xl:w-[80%]">
                <button className="py-3 bg-secondary-200 text-white-100 w-full rounded-md">
                  Join our waitlist{" "}
                </button>
              </div>
            </div>
          </div>

          <img
            src={marketplace2image1}
            alt="HagePhones"
            className="w-[100%] order-1 xl:order-2"
          />
        </div>

        <div className=" py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={marketplace2image2} alt="marketplaceimage1" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For manufacturers
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Our desktop application simplifies the process of finding and
                  managing transporters for your shipments. Search for qualified
                  transporters based on their experience, ratings, and
                  availability. Get quotes, compare options, and book shipments
                  directly through the platform.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Advanced transporter search with filters
                    </p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Secure quote generation tool</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Online booking and shipment management
                    </p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 md:w-[80%]">
                  <button className="py-3 bg-secondary-200 text-white-100 w-full rounded-md">
                    Join our waitlist{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-8 md:py-10 ">
            <div className=" md:order-2">
              <img src={marketplace3image3} alt="marketplaceimage2" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For manufacturers
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Track your shipments in real-time with our comprehensive
                  tracking system. Monitor the location of your goods and
                  estimated delivery times. Stay informed of any delays or
                  unforeseen circumstances.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Real-time shipment tracking on a map</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Estimated delivery time updates</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Automated shipment notifications</p>
                  </li>
                </ul>

                <div className="flex items-center mt-8 md:w-[80%]">
                  <button className="py-3 bg-secondary-200 text-white-100 w-full rounded-md">
                    Join our waitlist{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeatures2;
