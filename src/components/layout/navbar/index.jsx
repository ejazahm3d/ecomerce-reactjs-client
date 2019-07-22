import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit",
      textDecoration: "none"
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Ecom Logo
            </Link>
          </Typography>
          <Button color="inherit" variant="outlined">
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
