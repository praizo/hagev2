import React from "react";

import logo from "../../assests/hage_logo_1.svg";
import facebook from "../../assests/Facebook.svg";
import twitter from "../../assests/Twitter.svg";
import instagram from "../../assests/Instagram.svg";
import linkedin from "../../assests/LinkedIn.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:contact@hage.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+1437-233-9069`;
  };

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=18+King+Street+East,+Suite+1400,+Toronto,+Ontario+M5C+1C4,+Canada"
    );
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+2348024613727");
  };

  return (
    <div className="bg-primary-300 py-8 md:py-16 font-body">
      <div className="px-4 md:px-16">
        <div className="text-white-100 grid xl:grid-cols-[1fr_2fr_2fr_2fr_2fr] gap-y-10 md:gap-x-8">
          <Link to="/">
            <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
          </Link>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Our services</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/service/inland" className="py-2">
                Inland Logistics Services
              </NavLink>
              <NavLink
                to="/service/cross-border"
                className="py-2 flex justify-between items-center"
              >
                Cross-Border Logistics
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Marketplace</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/marketplace/enterprises" className="py-2">
                For Enterprises
              </NavLink>
              <NavLink to="/marketplace/transporters" className="py-2">
                For transporters
              </NavLink>
              <NavLink to="/marketplace/distributors" className="py-2">
                For Distributors
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Company</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/company#about" className="py-2">
                About us
              </NavLink>

              <NavLink to="/company#faq" className="py-2">
                FAQ
              </NavLink>
              <NavLink to="/" className="py-2">
                Hiring
              </NavLink>
            </ul>
          </div>
          <div>
            <div>
              <ul className="flex gap-6 xl:gap-0 xl:justify-between items-center pr-20 xl:pr-0">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tryhage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/tryhagetoday"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/naijawaysglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedIn" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-6 text-sm font-body flex flex-col">
              <div className=" flex items-start gap-4 md:gap-12 xl:gap-2 ">
                <button className="text-left py-2" onClick={handleMapClick}>
                  <div className="flex justify-between items-center pb-1">
                    <h2 className="text-base font-body">CANADA</h2>
                    <div className=" text-xs p-1 bg-[#F3A218] rounded-md text-white-100">
                      HQ
                    </div>
                  </div>
                  18 King Street East, Suite 1400, Toronto ON. M5C 1C4. Canada.
                </button>

                <button className="text-left py-2" onClick={handleMapClick}>
                  <h2 className="text-base font-body pb-1">LAGOS</h2>
                  108,Palm Avenue. Suite A, Mushin 102215, Lagos
                </button>
              </div>

              <button
                className="text-left  py-2"
                onClick={handleEmailClick}
              >
                info@tryhage.com
              </button>

              <button className="text-left  py-2" onClick={handlePhoneClick}>
                +1 437 233 9069 mobile, CA
              </button>
              <button className="text-left  py-2" onClick={handleWhatsAppClick}>
                +234 802 461 3727 WhatsApp, NG
              </button>
            </div>
          </div>
        </div>
        <div className="text-white-100 mt-10 md:mt-16  border-t border-white-100">
          <div className="pt-6 md:pt-8 md:flex justify-between items-center">
            <div className="text-sm pb-4 md:pb-0">
              © 2024 Hage. All rights reserved.
            </div>
            <div className=" pt-3">
              <ul className="flex md:justify-between items-center text-xs md:text-sm">
                <NavLink to="/privacy" className="underline">
                  Privacy Policy
                </NavLink>
                <NavLink to="/terms" className="px-4 underline">
                  Terms of Service
                </NavLink>
                <NavLink to="/cookies" className="underline">
                  Cookies Settings
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
