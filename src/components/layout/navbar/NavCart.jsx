import React from "react";
import PropTypes from "prop-types";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { connect } from "react-redux";

const NavCart = ({ cartItems }) => {
  return (
    <Badge badgeContent={cartItems.length} color="secondary">
      <ShoppingCart />
    </Badge>
  );
};

NavCart.propTypes = {
  cartItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cartItems: Object.values(state.cart)
});

export default connect(mapStateToProps)(NavCart);
