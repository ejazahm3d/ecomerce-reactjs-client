import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
export default withRouter(({ history }) => {
  return (
    <Card>
      <CardActionArea onClick={() => history.push("/product/id")}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
});
