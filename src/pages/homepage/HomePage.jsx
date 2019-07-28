import React, { useEffect } from "react";
import Carousel from "../../components/layout/carousel";
import Product from "../../components/product";
import {
  Container,
  Typography,
  Grid,
  CircularProgress
} from "@material-ui/core";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../store/actions/product";
import PropTypes from "prop-types";

const HomePage = ({ fetchAllProducts, products }) => {
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  return (
    <div>
      <Carousel />
      <Container maxWidth="md">
        <Typography
          style={{ margin: "1.5rem auto", textAlign: "center" }}
          variant="h2"
        >
          Products
        </Typography>

        <Grid container spacing={5}>
          {!products ? (
            <CircularProgress />
          ) : (
            products.map(product => (
              <Grid key={product.id} xs={12} lg={4} md={4} sm={6} item>
                <Product
                  id={product.id}
                  name={product.name}
                  desc={product.desc}
                  src={product.image.src}
                  alt={product.image.alt}
                  price={product.price}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

HomePage.propTypes = {
  fetchAllProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // Converting the object values into arrays
  products: Object.values(state.product)
});

export default connect(
  mapStateToProps,
  { fetchAllProducts }
)(HomePage);
