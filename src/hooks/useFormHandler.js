import { useState } from "react";

const useFormHandler = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value })); // ✅ Updating state correctly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      await onSubmit(values);
      setLoading(false);
      setValues(initialValues); // ✅ Reset form after successful submission
    }
  };

  return { values, errors, loading,setLoading, handleChange, handleSubmit };
};

export default useFormHandler;
