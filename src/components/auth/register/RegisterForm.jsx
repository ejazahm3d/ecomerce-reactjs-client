import React from "react";
import { Button, TextField } from "@material-ui/core";

const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  errors,
  touched
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      fullWidth
      label="Name"
      name="name"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.name && touched.name && errors.name}
      error={errors.name && touched.name}
    />

    <TextField
      fullWidth
      label="Email Address"
      type="email"
      placeholder="Email address"
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.email && touched.email && errors.email}
      error={errors.email && touched.email}
    />

    <TextField
      fullWidth
      type="password"
      label="Password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      helperText={errors.password && touched.password && errors.password}
      error={errors.password && touched.password}
    />

    <TextField
      fullWidth
      label="Confirm Password"
      type="password"
      placeholder="Password"
      name="confirmPassword"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.confirmPassword}
      helperText={
        errors.confirmPassword &&
        touched.confirmPassword &&
        errors.confirmPassword
      }
      error={errors.confirmPassword && touched.confirmPassword}
    />

    <Button
      style={{ marginTop: "1rem" }}
      fullWidth
      color="primary"
      variant="contained"
      type="submit"
    >
      Register
    </Button>
  </form>
);

export default RegisterForm;
