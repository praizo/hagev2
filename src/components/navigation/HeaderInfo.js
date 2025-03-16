import React from "react";

import emoji from "../../assests/celebrate_emojis.svg";

const HeaderInfo = () => {
  return (
    <>
      <div className="font-body ">
        <div className="hidden w-full md:flex justify-center items-center py-4 text-xs bg-primary-200 text-white-100 ">
          <p className="font-light px-2">
            Sign up to our manufacturer’s marketplace and get a 30 days free
            trial!
          </p>

          <span>
            <img src={emoji} alt="happy_emoji" className="w-4" />
          </span>

          <button className="font-normal text-secondary-100 px-2">
            Sign up now
          </button>
        </div>

        <div className="md:hidden w-full flex justify-center items-center py-2 text-[0.7rem] bg-primary-200 text-white-100 ">
          <p className="font-light px-2">
            Get a 30 days free trial on our marketplace!
          </p>

          <span>
            <img src={emoji} alt="happy_emoji" className="w-2" />
          </span>

          <button className="font-normal text-secondary-100 px-2">
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
