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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
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
            Ecom
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
