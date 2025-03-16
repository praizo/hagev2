import React from "react";
import comingSoonBadge from "../../../assests/ComingSoonBadge.svg";

const ServiceFeatures = ({
  titleA,
  spanTitle,
  titleB,
  subTitle,
  image,
  imageMobile,
  buttonText,
}) => {
  return (
    <div className="bg-white-100 pt-48 ">
      <div className="px-4 md:px-16 md:py-4">
        {buttonText && (
          <div className="flex justify-center items-center pb-3 ">
            <button>
              <img src={comingSoonBadge} alt="coming soon" />
            </button>
          </div>
        )}

        <div className="flex flex-col justify-center items-center mb-6 md:mb-[4.5rem]">
          <h1 className=" xl:w-[80%] md:px-0 mb-6 md:mb-4 text-[2rem] md:text-6xl  font-normal font-main text-center text-primary-200  md:leading-normal">
            {titleA} <span className="text-secondary-100">{spanTitle}</span>{" "}
            {titleB}
          </h1>

          <p className=" text-base text-primary-200 font-light text-center">
            {subTitle}
          </p>
        </div>

        <div>
          <img src={image} alt="bus" className="hidden md:flex w-full" />

          <img src={imageMobile} alt="bus" className=" flex md:hidden w-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
