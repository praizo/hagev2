import React from "react";

const SuccessCount = () => {
  return (
    <div className="py-16 md:py-24 bg-white-100">
      <div className="grid md:grid-cols-2 gap-y-8 xl:gap-y-0 xl:gap-x-20 text-primary-300 px-4 md:px-16">
        <div className="flex flex-col justify-center">
          <h3 className="mb-5 font-semibold text-sm md:text-base">So far...</h3>
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight mb-5">
            Hage has achieved
          </h1>
          <h3 className=" font-semibold text-sm md:text-base">and counting</h3>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-y-12">
          <div>
            <h1 className="text-secondary-200 mb-2 text-4xl md:text-5xl font-sub font-bold">
              300+
            </h1>
            <p className=" text-sm md:text-base font-body font-light text-primary-100">
              Customers
            </p>
          </div>

          <div>
            <h1 className="text-secondary-200 mb-2 text-4xl md:text-5xl font-sub font-bold">
              98%
            </h1>
            <p className=" text-sm md:text-base font-body font-light text-primary-100">
              Customer satisfaction
            </p>
          </div>

          <div>
            <h1 className="text-secondary-200 mb-2 text-4xl md:text-5xl font-sub font-bold">
              500+
            </h1>
            <p className=" text-sm md:text-base font-body font-light text-primary-100">
              Completed trips
            </p>
          </div>

          <div>
            <h1 className="text-secondary-200 mb-2 text-4xl md:text-5xl font-sub font-bold">
              300+
            </h1>
            <p className=" text-sm md:text-base font-body font-light text-primary-100">
              Transporters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCount;
