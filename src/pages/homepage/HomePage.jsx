import React from "react";
import Carousel from "../../components/layout/carousel";
import Product from "../../components/product";
import { Container, Typography, Grid } from "@material-ui/core";

export default () => {
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

        <Grid container spacing={3}>
          <Grid xs={12} lg={4} md={4} sm={6} item>
            <Product />
          </Grid>
          <Grid xs={12} lg={4} md={4} sm={6} item>
            <Product />
          </Grid>
          <Grid xs={12} lg={4} md={4} sm={6} item>
            <Product />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
