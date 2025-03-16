import React, { useState } from "react";
import useFormHandler from "../../../hooks/useFormHandler";
import Modal from "../../../components/Modal/Modal";
import LoadingButton from "../../../components/Button/LoadingButton";
const ServiceHeader = ({ data }) => {
  const {
    title,
    subtitle,
    buttonText,
    placeholderName,
    placeholderEmail,
    bgImage,
    badge,
  } = data;

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
    <div
      className="relative flex items-center justify-start px-6 md:pl-20 pt-44 xl:pt-48 pb-36 font-main w-full "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white-100 md:max-w-[70%] xl:max-w-[49%] text-left ">
        {badge && (
          <span className="inline-block px-4 py-1 border border-white-100 rounded-full text-sm mb-6">
            Coming soon
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-bold md:leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-lg">{subtitle}</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col xl:pr-48">
          <div className="mt-6 mb-4 flex flex-col md:flex-row  gap-3">
            <div className="flex-1">
              <label className="block text-sm font-light">First name</label>

              <input
                type="text"
                name="name"
                placeholder={placeholderName}
                value={values.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
                  ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : " focus:ring-gray-100"
                  } 
                  bg-transparent`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-light">Email address</label>

              <input
                type="email"
                name="email"
                placeholder={placeholderEmail}
                value={values.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-gray-100"
                  } 
                  bg-transparent`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Conditionally Render the Button */}
          {buttonText && (
            <div>
              <LoadingButton isLoading={loading} type="submit">
                {buttonText}
              </LoadingButton>
            </div>
          )}
        </form>
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
    </div>
  );
};

export default ServiceHeader;
