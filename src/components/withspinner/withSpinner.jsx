import React from "react";

const withSpinner = propName => WrappedComponent => {
  return !propName ? <div>Loading</div> : <WrappedComponent />;
};

export default withSpinner;
