import { useState } from "react";
import googleplay from "../../../assests/googleplay.svg";
import appstore from "../../../assests/appstore.svg";
import hagebglogo from "../../../assests/hagebglogo.png";
import monitoricon from "../../../assests/monitoricon.png";

const HowWeServe = () => {
  const roles = [
    {
      id: "driver",
      label: "As a driver",
      title: "Earn money with Hage.",
      description:
        "For truck drivers looking for new ways to make money. Register as a driver and start taking orders.",
      features: [
        {
          title: "Trip & Earnings Overview",
          description:
            "Easily track your completed trips, earnings, and payout history in one place for financial clarity.",
        },
        {
          title: "Instant Delivery Requests",
          description:
            "Accept jobs on-demand to maximize your daily trips and earnings.",
        },
        {
          title: "Secure Handover Confirmation",
          description:
            "Submit proof of delivery instantly with photo uploads, signatures, and waybill verification.",
        },
      ],
    },
    {
      id: "fleet",
      label: "As a fleet manager",
      title: "Join Hage with your fleet and earn more.",
      description:
        "As a fleet owner, you can manage all your trucks from easy-to-use dashboard",
      features: [
        {
          title: "Fleet Performance Dashboard",
          description:
            "Monitor driver performance, vehicle usage, and trip success rates in one place to optimize fleet efficiency.",
        },
        {
          title: "Driver & Vehicle Tracking",
          description:
            "Track real-time locations, route history, and availability to ensure seamless coordination and minimize delays.",
        },
        {
          title: "Automated Reporting",
          description:
            "Access detailed insights on trip completion rates, earnings, and compliance to make data-driven decisions.",
        },
      ],
    },
    {
      id: "distributor",
      label: "As a distributor",
      title: "Track your deliveries from suppliers with ease.",
      description:
        "All the information and tracking data you need in one place.",
      features: [
        {
          title: "Delivery Coordination Hub",
          description:
            "Manage inbound shipments with real-time tracking and estimated arrival times to streamline operations.",
        },
        {
          title: "Secure Handover Verification",
          description:
            "Verify deliveries using unique codes, digital signatures, and photo confirmation for added security.",
        },
        {
          title: "Automated Delivery Notifications",
          description:
            "Stay informed with step-by-step shipment updates from pickup to drop-off, reducing uncertainty.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "As an enterprise",
      title: "We are the fastest way to book a truck for your cargo.",
      description:
        "Many of our users are ordering goods from Suppliers just like you.",
      showButton: true, // Add this property to control visibility
      button: "Register as business",
      features: [
        {
          title: "Logistics Management Hub",
          description:
            "Oversee all shipments, transport partners, and delivery statuses in a centralized dashboard for better supply chain control.",
        },
        {
          title: "Real-Time Shipment Tracking",
          description:
            "Gain full visibility into your shipments with live tracking and automated status updates at key milestones.",
        },
        {
          title: "Custom SLA & Compliance Monitoring",
          description:
            "Set service level agreements, enforce compliance, and receive alerts on any breaches or delays.",
        },
      ],
    },
  ];

  const [activeRole, setActiveRole] = useState("driver");

  const activeContent = roles.find((role) => role.id === activeRole);

  return (
    <div className="bg-white-100 pt-20  font-main">
      <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-0 px-6 xl:px-20">
        <h2 className=" text-3xl lg:text-4xl font-light text-[#09120B] md:mb-6">
          How we serve you
        </h2>

        <div className="flex gap-3 justify-start flex-wrap mb-10">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`px-5 py-2.5 rounded-xl border ${
                activeRole === role.id
                  ? "bg-secondary-200 text-white-100 border border-[#32A071]"
                  : "bg-[#F8FAFC] text-[#94A3B8] border border-[#E2E8F0]"
              }`}
              onClick={() => setActiveRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white-200 px-4 xl:px-20 py-6 md:pt-12 md:pb-28 md:px-16  flex flex-col lg:flex-row gap-y-12  xl:gap-40 justify-between items-center relative">
        <div className="absolute md:left-16 bottom-0">
          <img src={hagebglogo} alt="" className="md:max-w-md" />
        </div>

        <div className="flex-1">
          <h3 className=" text-4xl lg:text-5xl leading-tight font-semibold text-primary-100">
            {activeContent.title}
          </h3>
          <p className="mt-4 font-normal text-[#273C2F]">
            {activeContent.description}
          </p>
          {/* Conditional Rendering: Button or Logos */}
          {activeContent.showButton ? (
            <button className="mt-4 px-6 py-3 bg-secondary-200 text-white-100 rounded-lg">
              {activeContent.button}
            </button>
          ) : (
            <div className="mt-4 flex gap-2">
              <img src={googleplay} alt="Google Play" className="h-10" />
              <img src={appstore} alt="App Store" className="h-10" />
            </div>
          )}
        </div>

        <div className="space-y-4 flex-1 z-20">
          {activeContent.features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] items-center gap-8 p-4 bg-white-100 border border-[#64AB801A] rounded-xl shadow-sm"
            >
              {/* Fixed-size icon container */}
              <div className="p-3 flex items-center justify-center rounded-full bg-secondary-300">
                <img src={monitoricon} alt="icon" className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-semibold text-lg leading-snug">
                  {feature.title}
                </h4>
                <p className="text-sm font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeServe;
