import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Container,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cart";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <Container maxWidth="md">
      {cartItems.map(item => (
        <Card style={{ margin: "2rem auto" }} key={item.id}>
          <CardMedia
            component="img"
            alt={item.image.alt}
            height="240"
            image={item.image.src}
            title={item.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {item.price} USD
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {item.desc}
            </Typography>
          </CardContent>
          <Button
            color="secondary"
            variant="contained"
            fullWidth={true}
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart
          </Button>
        </Card>
      ))}
    </Container>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  console.log(Object.values(state.cart));
  return {
    cartItems: Object.values(state.cart)
  };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
