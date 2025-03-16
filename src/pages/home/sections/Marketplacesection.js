import React, { useState } from "react";
import useFormHandler from "../../../hooks/useFormHandler";
import Modal from "../../../components/Modal/Modal";
import LoadingButton from "../../../components/Button/LoadingButton";

import house from "../../../assests/house-filled.svg";
import marketplace1mobile from "../../../assests/marketplace1mobile.png";
import bus from "../../../assests/bus-filled.svg";
import marketplace2mobile from "../../../assests/marketplace2mobile.png";
import marketplace3mobile from "../../../assests/marketplace3mobile.png";
import googleplay from "../../../assests/google-play.png";
import appstore from "../../../assests/app-store.png";

const Marketplacesection = ({ bgcolor }) => {
  const marketplaceData = [
    {
      title: "ENTERPRISES",
      description: "Send and track supplies easily.",
      features: ["Search filters", "Shipment tracking", "Collaboration tools"],
      bgColor: "bg-secondary-200",
      icon: house,
      image: marketplace1mobile,
      cta: {
        text: "Login",
        href: "/",
      },
      footerText: "Don’t have an account yet?",
      footerLink: { text: "Create an account.", href: "/" },
    },
    {
      title: "Transporters and fleet owners",
      description: "Deliver cargo, instant pay.",
      features: [
        "Constant deliveries",
        "Network building",
        "Driver management",
      ],
      bgColor: "bg-[#012811]",
      icon: bus,
      image: marketplace2mobile,
      storeLinks: [
        { src: appstore, href: "/" },
        { src: googleplay, href: "/" },
      ],
    },
    {
      title: "Distributors",
      description: "Receive and track supplies easily.",
      features: ["Status update", "Real-time tracking"],
      bgColor: "bg-black",
      icon: bus,
      image: marketplace3mobile,
      storeLinks: [
        { src: appstore, href: "/" },
        { src: googleplay, href: "/" },
      ],
    },
  ];
 const [modalState, setModalState] = useState({
    isOpen: false,
    type: "success", // "success" or "error"
    title: "",
    message: "",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "First name is required";

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    return errors;
  };

  const handleFormSubmit = async (values) => {
    console.log("Submitting:", values);
    setLoading(true);

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      // Show success modal
      setModalState({
        isOpen: true,
        type: "success",
        title: "Success",
        message: "You have successfully joined the waitlist!",
      });
    } catch (error) {
      // Show error modal
      setModalState({
        isOpen: true,
        type: "error",
        title: "Submission Failed",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const { values, errors, loading, setLoading, handleChange, handleSubmit } =
    useFormHandler({ name: "", email: "" }, validate, handleFormSubmit);
  return (
    <section>
      <div className={`${bgcolor} px-4 xl:px-20 py-16  font-main`}>
        <div className="pb-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 xl:gap-x-80">
            {/* Left Side */}
            <div className="md:w-2/5 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-semibold">
                Marketplace
              </h2>
              <p className="mt-5 text-[#273C2F]">
                The one place where transporters, Suppliers, and Businesses can
                collaborate to ensure on-time delivery.
              </p>
            </div>

            {/* Right Side */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-3/5 flex flex-col space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-light mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g Lekan Omotosho"
                    value={values.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
                      ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : " focus:ring-gray-100"
                      } 
                      bg-transparent`}                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-light mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Example@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
                      ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-gray-100"
                      } 
                      bg-transparent`}                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <LoadingButton isLoading={loading} type="submit">
                Join Waitlist
              </LoadingButton>

              {/* <button className="w-full bg-secondary-200 text-white-100 font-medium py-3 rounded-md hover:bg-primary-100 transition">
                  Join Waitlist
                </button> */}
            </form>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-y-5 gap-x-3 xl:gap-x-5">
          {marketplaceData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden flex flex-col ${item.bgColor}`}
            >
              <div className="px-4 xl:px-8">
                {/* Header */}
                <div className="flex items-center  pb-3   pt-6 md:pt-9">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-6 md:w-8 mr-1.5 md:mr-3 object-cover"
                  />
                  <h1 className="font-main text-xs md:text-base text-white-100 font-semibold uppercase">
                    {item.title}
                  </h1>
                </div>

                {/* Main Content */}
                <h1 className=" py-2 font-main text-2xl text-white-100 font-semibold">
                  {item.description}
                </h1>

                <div className=" py-2 text-white-100 text-sm font-body font-normal">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA (Button or Store Links) */}
                <div className=" py-2 flex items-center gap-3">
                  {item.cta ? (
                    <button className="text-secondary-200 text-sm px-6 py-2.5 bg-white-100 font-body font-medium rounded-lg">
                      {item.cta.text}
                    </button>
                  ) : (
                    item.storeLinks?.map((link, i) => (
                      <a key={i} href={link.href}>
                        <img src={link.src} alt="store" />
                      </a>
                    ))
                  )}
                </div>

                {/* Footer (Optional) */}
                {item.footerText && (
                  <div className=" py-2 text-white-100 text-sm font-body font-normal">
                    <p>
                      {item.footerText}{" "}
                      <a
                        href={item.footerLink.href}
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        {item.footerLink.text}
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="mt-8 flex-grow">
                <img
                  src={item.image}
                  alt="marketplace"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Success/Error Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.title}
        type={modalState.type}
      >
        <p>{modalState.message}</p>
      </Modal>
    </section>
  );
};

export default Marketplacesection;
