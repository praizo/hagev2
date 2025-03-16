import React, { useState } from "react";
import chevrondown from "../../assests/chevrondown.svg";

const Faqs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first item by default

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#F7FBF9] px-4 md:px-20 py-8 md:py-16">
      <h2 className="text-center text-2xl md:text-5xl font-main font-semibold text-primary-200 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="md:max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col mb-3 bg-white-100 font-body text-lg p-6 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-start">
              <p className="font-bold leading-tight">{faq.question}</p>
              <img
                src={chevrondown}
                alt="icon"
                className={`object-fill h-full max-w-lg transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <div className="mt-2 font-normal leading-snug text-[#3C3C43D9]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
