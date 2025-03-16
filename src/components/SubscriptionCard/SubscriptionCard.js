import React from "react";

const SubscriptionCard = ({ plans }) => (
  <div className="grid md:grid-cols-3 gap-4 xl:gap-8">
    {plans.map((plan, index) => (
      <div
        key={index}
        className={`p-4  xl:p-8 rounded-xl flex flex-col h-full ${plan.bgColor}`}
      >
        {/* Header */}
        <div className={`mb-6 ${plan.textColor}`}>
          <h3 className="font-body font-bold text-xl pb-2 md:pb-4">
            {plan.title}
          </h3>
          {plan.description && (
            <p className="text-base font-medium font-body mt-2">
              {plan.description}
            </p>
          )}
        </div>

        {/* Features List */}
        <div className="border-t-[0.0625rem] border-secondary-200 py-8 flex-grow">
          <h4
            className={`text-base font-body font-normal mb-2 ${plan.textColor}`}
          >
            Includes:
          </h4>
          {plan.features.map((feature, i) => (
            <div key={i} className={`flex items-center my-4 ${plan.textColor}`}>
              <img src={plan.checkIcon} alt="check" className="w-4" />
              <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-auto">
          <button
            className={`py-3 w-full text-white-100 rounded-lg text-center ${plan.buttonBg} hover:${plan.buttonBghover}`}
          >
            Get started
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default SubscriptionCard;
