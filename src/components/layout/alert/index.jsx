import React from "react";
import SnackbarContentWrapper from "./SnackBarContentWrapper";
import { Snackbar } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../../../store/actions/alert";

const Alert = ({ alerts, removeAlert }) => {
  const handleClose = id => {
    removeAlert(id);
  };

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} style={{ marginTop: "2rem" }}>
        <Snackbar
          open={true}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          autoHideDuration={2000}
        >
          <SnackbarContentWrapper
            message={alert.message}
            variant={alert.variant}
            onClose={() => handleClose(alert.id)}
          />
        </Snackbar>
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
