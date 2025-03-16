import React from "react";

const Hiring = () => {
  return (
    <div className="bg-white-100 py-16 md:py-24">
      <div className="px-4 md:px-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            We are hiring!
          </h1>

          <p className="pt-4 pb-6  md:text-base font-body font-light text-center">
            We might have an opportunity for you. Check it out today.
          </p>

          <button className="w-full md:w-auto bg-secondary-200  py-3 md:px-4 text-base text-white-100 rounded-lg">
            Open positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
