import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

import DrawerMenu from "../DrawerMenu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },

  textTypo: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    textDecoration: "none",
    color: "#59595b",
    fontSize: "16px",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid container item flexGrow={1}>
              <Image src="/images/home.png" width={80} height={80} />
            </Grid>
            <Grid item sx={{ display: { md: "flex", xs: "none" } }} md={2}>
              <Link href="/Nosotros">
                <a className={classes.textTypo}>Nosotros</a>
              </Link>
              <Link href="/Contacto">
                <a className={classes.textTypo}>Contacto</a>
              </Link>
              <Link href="/Login">
                <a className={classes.textTypo}>Login</a>
              </Link>
            </Grid>
            <Grid item xs>
              <IconButton
                aria-label="open drawer"
                className={classes.menuButton}
                onClick={() => props.buttonAbrir()}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
