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
    display: "flex",
  },
  menuButton: {
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
    fontSize: "14px",
    margin: "1rem",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={8} flexGrow={1}>
              <Link href="/">
                <Image src="/images/home.png" width={80} height={80} />
              </Link>
            </Grid>
          </Grid>
          <Grid item xs sx={{ display: { md: "flex", xs: "none" } }}>
            <Link href="/Nosotros">
              <a className={classes.textTypo}>Nosotros</a>
            </Link>
          </Grid>
          <Grid item xs sx={{ display: { md: "flex", xs: "none" } }}>
            <Link href="/Contacto">
              <a className={classes.textTypo}>Contacto</a>
            </Link>
          </Grid>
          <Grid item xs sx={{ display: { md: "flex", xs: "none" } }}>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
