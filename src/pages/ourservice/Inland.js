import React from "react";

import Marketplacesection from "../home/sections/Marketplacesection";
import Faqs from "../../components/FAQs/Faqs";
import ServiceHeader from "./sections/ServiceHeader";
import BusinessCallToAction from "../home/sections/BusinessCallToAction";
import HowWeServe from "./sections/HowWeServe";
import servicehero from "../../assests/inlandlogistics.png";

const Inland = () => {
  const faqs = [
    {
      question: "How can I send cargo to my distributors?",
      answer:
        "Register as an enterprise. You can create a new account on our Marketplace. Find your selected distributors and create an order with them. You might need to invite your distributors if they are not on the marketplace.",
    },
    {
      question: "How can I sign up as a distributor?",
      answer:
        "Download our mobile app. Login or create an account as a distributor. Find suppliers or manufacturers and create your order with them.",
    },
    {
      question: "How can I become a truck transporter?",
      answer:
        "Download our mobile app and login or create an account as a transporter. You will receive orders from our numerous enterprises.",
    },
    {
      question: "How can I earn with my fleet?",
      answer:
        "Download our mobile app and login or create an account as a fleet manager. You will receive orders from our numerous enterprises.",
    },
  ];

  const bgcolor = "bg-white-100";

  const data = {
    title: "Seamless Logistics for Your Business",
    subtitle:
      "Fast, reliable, and transparent delivery solutions tailored for enterprises, SMEs, and transporters. Track deliveries in real-time and optimize your supply chain effortlessly.",
    buttonText: "Join Waitlist",
    placeholderName: "e.g Lekan Omotosho",
    placeholderEmail: "Example@gmail.com",
    bgImage: servicehero, // Replace with actual image path
    badge: false,
  };

  return (
    <>
      <ServiceHeader data={data} />
      <HowWeServe />
      <section id="marketplace">
        <Marketplacesection bgcolor={bgcolor} />
      </section>
      <Faqs faqs={faqs} />
      <BusinessCallToAction />
    </>
  );
};

export default Inland;
