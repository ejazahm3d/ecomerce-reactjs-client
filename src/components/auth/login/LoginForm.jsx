import React from "react";
import { Button, TextField } from "@material-ui/core";

const SignInForm = ({
  values,
  handleBlur,
  handleSubmit,
  handleChange,
  errors,
  touched
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      fullWidth
      name="email"
      label="Email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.email && touched.email && errors.email}
      error={errors.email && touched.email}
    />

    <TextField
      fullWidth
      name="password"
      type="password"
      label="Password"
      onChange={handleChange}
      values={values.password}
      onBlur={handleBlur}
      helperText={errors.password && touched.password && errors.password}
      error={errors.password && touched.password}
    />

    <Button
      style={{ marginTop: "1rem" }}
      fullWidth
      variant="contained"
      color="primary"
      type="submit"
    >
      Login
    </Button>
  </form>
);

export default SignInForm;
