import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // Maneja el cambio de los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Maneja el submit del formulario
  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,
    setValues,
  };
};

export default useForm;
