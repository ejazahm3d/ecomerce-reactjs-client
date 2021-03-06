import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import { validationSchema } from "./validationScheme";
import { Typography, Container, Paper } from "@material-ui/core";
import RegisterForm from "./RegisterForm";
import PropTypes from "prop-types";
import { createUser } from "../../../store/actions/auth";

const Register = ({ createUser, isAuthenticated }) => {
  const values = { name: "", email: "", confirmPassword: "", password: "" };
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
          Please Register
        </Typography>

        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={async values => {
            await createUser(values);
          }}
          render={props => <RegisterForm {...props} />}
        />

        <Typography
          style={{ marginTop: "0.5rem" }}
          align="left"
          variant="caption"
          display="block"
          color="textSecondary"
        >
          Already registered? <Link to="/login"> Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { createUser }
)(Register);
