import React from "react";
import PropTypes from "prop-types";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const NavCart = props => {
  return (
    <Badge badgeContent={1} color="secondary">
      <ShoppingCart />
    </Badge>
  );
};

NavCart.propTypes = {};

export default NavCart;
