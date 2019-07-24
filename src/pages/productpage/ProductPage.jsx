import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";
import { fetchProductById } from "../../store/actions/product";

const useStyles = makeStyles(theme => ({
  root: { marginTop: "2rem" },
  paper: {
    padding: "1rem 2rem"
  }
}));

const ProductPage = ({ fetchProductById, product, match, isLoading }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchProductById(match.params.id);
  }, [fetchProductById, match]);

  if (!product) {
    return <CircularProgress />;
  }
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid
          style={{ padding: "1rem 3rem" }}
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
        >
          <img
            style={{ width: "100%" }}
            src={product.image.src}
            alt={product.image.alt}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h2" component="h1">
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="secondary"
            >
              {product.price} USD
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.desc} Some description comes here
            </Typography>
            <Button
              style={{ marginTop: "1.5rem" }}
              fullWidth={true}
              color="primary"
              variant="contained"
            >
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

ProductPage.propTypes = {
  fetchProductById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  product: state.product[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchProductById }
)(ProductPage);
