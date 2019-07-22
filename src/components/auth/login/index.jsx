import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Typography, Container, Paper } from "@material-ui/core";
import SignInForm from "./LoginForm";
import { validationSchema } from "./validationScheme";

const SignIn = () => {
  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h2" align="center">
          My App
        </Typography>

        <Typography
          style={{ marginTop: "1rem" }}
          variant="subtitle1"
          align="center"
        >
          Please Sign In
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
          render={props => <SignInForm {...props} />}
        />

        <Typography
          style={{ marginTop: "0.5rem" }}
          align="left"
          variant="caption"
          display="block"
          color="textSecondary"
        >
          Dont have an account ? <Link to="/register"> Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignIn;
