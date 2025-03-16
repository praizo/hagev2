import React from "react";

const BookDemo = ({ demoButtonText }) => {
  const handleBookDemoClick = () => {
    window.location.href = "mailto:info@hage.com";
  };

  return (
    <div className="py-20 md:py-32 bg-white-200">
      <div className="px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-y-0">
          <div className="flex flex-col justify-center text-primary-300">
            <h1 className="text-2xl md:text-4xl font-normal font-main leading-8 pb-3 md:pb-6">
              Check out our marketplace today!
            </h1>
            <p className="text-sm md:text-base leading-6 md:leading-8 font-body font-normal md:pr-24">
              Our multi-faceted products meet the needs of manufacturers,
              transporters, and distributors
            </p>
          </div>
          <div className="md:flex justify-center items-center">
            <button
              className="my-2 md:my-0 py-3 md:py-4 px-auto w-full xl:w-[50%] rounded-lg text-base text-white-100 bg-secondary-200"
              onClick={handleBookDemoClick}
            >
              {demoButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
