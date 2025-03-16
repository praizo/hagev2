import React from "react";
import MarketplaceFeatures from "./sections/MarketplaceFeatures";
import BusinessCallToAction from "../home/sections/BusinessCallToAction";
import Faqs from "../../components/FAQs/Faqs";

const Transporters = () => {
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

  return (
    <>
      <MarketplaceFeatures />
      <Faqs faqs={faqs} />
      <BusinessCallToAction />

    </>
  );
};

export default Transporters;
