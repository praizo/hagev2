import React from "react";

import check from "../../../assests/Check.svg";
import checkwhite from "../../../assests/Check-white.svg";
import SubscriptionCard from "../../../components/SubscriptionCard/SubscriptionCard";

const Pricing = () => {
  const plans = [
    {
      title: "Free Plan",
      description: "",
      bgColor: "border border-primary-100",
      textColor: "text-black",
      features: [
        "Dashboard for analytics",
        "Create orders",
        "Real-time notifications",
      ],
      buttonBg: "bg-primary-100",
      buttonBghover: "bg-[#04502A]",
      checkIcon: check, // Pass the appropriate check icon
    },
    {
      title: "PRO Plan",
      description:
        "More power for small scale manufacturers who want efficient logistics.",
      bgColor: "bg-primary-100",
      textColor: "text-white-100",
      features: [
        "Everything in free plan",
        "Order visibility and tracking",
        "Access to public fleets",
        "Report generation and business intelligence",
        "Premium customer support",
      ],
      buttonBg: "bg-secondary-200",
      buttonBghover: "bg-[#57976F]",
      checkIcon: checkwhite,
    },
    {
      title: "Enterprise Plan",
      description: "Maximize performance with increased supplies.",
      bgColor: "bg-primary-100",
      textColor: "text-white-100",
      features: [
        "Everything in retailers plan",
        "Trip financing (see terms and conditions)",
        "Select order visibility",
        "Onboard and manage fleet",
        "Premium customer support",
      ],
      buttonBg: "bg-secondary-200",
      buttonBghover: "bg-[#57976F]",
      checkIcon: checkwhite,
    },
  ];
  return (
    <div className="bg-white-100 px-4 xl:px-20 py-8 md:py-16 ">
      <div className="flex flex-col justify-center items-center pb-8 md:pb-16">
        <h1 className=" font-main font-semibold text-2xl md:text-4xl leading-9 md:leading-tight">
          There’s a plan for you
        </h1>
        <p className="font-medium text-xl">
          Start with a premium plan, or try the free version.
        </p>
      </div>
      <SubscriptionCard plans={plans} />
    </div>
  );
};

export default Pricing;
