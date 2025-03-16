import React, { useState } from "react";
import useFormHandler from "../../../hooks/useFormHandler";
import Modal from "../../../components/Modal/Modal";
import LoadingButton from "../../../components/Button/LoadingButton";
import businessctaimg from "../../../assests/businesscta.png";

const BusinessCallToAction = () => {
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
    <div className="grid xl:grid-cols-2 gap-0 bg-white font-main">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center p-8 md:py-28 px-4 md:px-8 lg:px-20 order-2 xl:order-1">
        <h2 className="text-2xl md:text-5xl font-semibold text-black mb-8">
          Think our services can help your business?
        </h2>
        <p className="text-[#64748B] mb-8 md:mb-24 md:pr-28">
          If you're looking to streamline your logistics and make deliveries
          more efficient, we'd love to show you how our platform can work for
          you. Book a demo with us and see how we can support your delivery
          needs.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-light text-sm mb-1">First name</label>
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
                bg-transparent`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-light text-sm mb-1">
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
                bg-transparent`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <LoadingButton isLoading={loading} type="submit">
            Join Waitlist
          </LoadingButton>
        </form>
      </div>

      {/* Right Side - Image & Text */}
      <div
        className="relative bg-cover bg-center min-h-[75vh] flex items-end px-6 md:px-16 pb-10 md:pb-20 order-1"
        style={{ backgroundImage: `url('${businessctaimg}')` }}
      >
        <p className="text-2xl lg:text-3xl z-10 text-white-100 md:leading-snug">
          Hage goes beyond just delivering goods. We deliver transparency,
          efficiency, and ultimately, the fuel for your business growth.
        </p>
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

export default BusinessCallToAction;
