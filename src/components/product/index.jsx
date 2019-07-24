import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ history, name, desc, src, alt, price, match, id }) => {
  return (
    <Card>
      <CardActionArea onClick={() => history.push(`/product/${id}`)}>
        <CardMedia
          component="img"
          alt={alt}
          height="240"
          image={src}
          title={name}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          {price} USD
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default withRouter(Product);
