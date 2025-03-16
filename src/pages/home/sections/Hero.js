import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import hero_img_1 from "../../../assests/hero_img_1.png";
import hero_img_2 from "../../../assests/hero_img_2.png";

const Hero = () => {
  const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById("marketplace");
    if (marketplaceSection) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionPosition = marketplaceSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#marketplace") {
      setTimeout(scrollToMarketplace, 100);
    }
  }, []);

  const services = [
    {
      title: "Inland Logistic Services",
      image: hero_img_1,
      comingSoon: false,
    },
    {
      title: "Cross-Border Logistics",
      image: hero_img_2,
      comingSoon: true,
    },
  ];

  return (
    <main>
      <div className="flex flex-col justify-center items-center px-4 xl:px-[11.5rem] md:pb-16  md:space-y-0">
        <div className="w-full">
          <h1 className="text-4xl xl:text-5xl  font-semibold font-main text-center text-primary-200  leading-normal">
            We provide cargo logistics solutions that connect Enterprises,
            Transporters and Businesses
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-[#344054] text-xl font-medium md:leading-normal py-6 md:py-6">
            Our solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-[1.3rem] overflow-hidden group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Increased Blur on Hover */}
                <div className="absolute inset-0 bg-[#1E1E1E]/20  group-hover:backdrop-blur-sm transition-all duration-500"></div>

                {/* Default Positioned Text & Button */}
                <div className="absolute  w-full  py-4 lg:py-9 flex flex-col items-center justify-center gap-3 transition-all duration-100 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 bg-transparent backdrop-blur-none">
                  <div className="text-white-100 text-xl font-semibold flex flex-col lg:flex-row justify-center items-center gap-4 transition-all duration-500 group-hover:text-white">
                    <div>{service.title}</div>
                    {service.comingSoon && (
                      <Link to="#marketplace" className="bg-white text-sm border-2 border-white rounded-[1.38rem] px-8 py-1 transition-all duration-500 group-hover:bg-white">
                        Coming soon
                      </Link>
                    )}
                  </div>
                  {service.comingSoon && (
                    <Link  to="#marketplace" className="hidden group-hover:block mt-4 px-6 py-3 bg-secondary-200 text-white-100 rounded-lg">
                      Get started
                    </Link>
                  )}
                </div>

                  {/* Default Positioned Text & Button */}
                {/* <div className="absolute bottom-0 w-full bg-[#1E1E1E]/40 backdrop-blur-sm py-4 lg:py-9 flex flex-col items-center justify-center gap-3 transition-all duration-100 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:bg-transparent group-hover:backdrop-blur-none">
                  <div className="text-white-100 text-xl font-semibold flex flex-col lg:flex-row justify-center items-center gap-4 transition-all duration-500 group-hover:text-white">
                    <div>{service.title}</div>
                    {service.comingSoon && (
                      <button className="bg-white text-sm border-2 border-white rounded-[1.38rem] px-8 py-1 transition-all duration-500 group-hover:bg-white">
                        Coming soon
                      </button>
                    )}
                  </div>
                  {service.comingSoon && (
                    <button className="hidden group-hover:block mt-4 px-6 py-3 bg-secondary-200 text-white-100 rounded-lg">
                      Get started
                    </button>
                  )}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
