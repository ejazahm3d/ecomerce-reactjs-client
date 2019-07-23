import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import { Typography, Container, Paper } from "@material-ui/core";
import SignInForm from "./LoginForm";
import { validationSchema } from "./validationScheme";
import { login } from "../../../store/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignIn = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
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
          onSubmit={values => login(values)}
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

SignIn.propType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(SignIn);
