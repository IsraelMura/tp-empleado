"use client";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginForm } from "../components";

import { useForm } from "../hooks";
import { useAuth } from "../contexts";

const LoginContainer = () => {
  const { values, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const {isLoggedIn, login, loading} = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/inicio"/>
  }

  const submitForm = async (e) => {
    console.log("submitForm");
    const result = await login(values);
    console.log("values", values);
    console.log("result", result);
    if (result.ok) {
      navigate("/home");
    } else {
      setError(result.message);
    }
  };

  return (
    <LoginForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit(submitForm)}
      loading={loading}
      error={error}
    />
  );
};

export default LoginContainer;
