"use client";
import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = ({
  values,
  handleChange,
  handleSubmit,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.logoform}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default LoginForm;
