import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InputBase from "@material-ui/core/InputBase";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    widht: "calc(100% - ${drawerWidth}px)",
    marginRight: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  tam: {
    padding: "4rem",
  },
  textTypo: {
    textDecoration: "none",
    color: "#59595b",
    marginBottom: "1rem",
  },
  textInput: {
    textDecoration: "none",
    color: "#59595b",

    fontSize: ".857rem",
  },
  mdForm: {
    marginTop: 60,
  },
}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const drawer = (
    <div className={classes.tam}>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-start"
        alignContent="center"
        wrap="nowrap"
      >
        <Typography variant="h5" color="initial" className={classes.textTypo}>
          Bienvenido a Mi Hogar!
        </Typography>
        <Typography
          variant="subtitle1"
          color="initial"
          className={classes.textTypo}
        >
          Por favor, crea una cuenta con tu email y contraseña.
        </Typography>
        <Typography
          variant="caption"
          color="initial"
          className={classes.textInput}
        >
          Email
        </Typography>
        <TextField
          id="standard-full-width"
          placeholder="Email"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="dense"
        />
        <Typography
          variant=" caption"
          color="initial"
          className={classes.textInput}
        >
          Password
        </Typography>
        <TextField
          id="standard-full-width"
          placeholder="Password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="dense"
        />
      </Grid>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <Hidden smDown>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            item
            xs={12}
          >
            <Grid container>
              <Grid item xs={6}>
                <Link href="/">
                  <Image src="/images/home.png" width={100} height={100} />
                </Link>
              </Grid>
            </Grid>

            <Link href="/">
              <Image src="/images/home.png" width={600} height={600} />
            </Link>
          </Grid>

          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            anchor="right"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
      <div>
        <Hidden mdUp>
          <div className={classes.mdForm}>
            <Grid
              container
              spacing={3}
              alignItems="flex-start"
              direction="row"
              justify="center"
              alignContent="center"
              wrap="nowrap"
            >
              <Grid item xs={8} sm={8}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={5}>
                    <Image src="/images/home.png" width={150} height={150} />
                  </Grid>
                </Grid>

                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.textTypo}
                >
                  Bienvenido a Mi Hogar!
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="initial"
                  className={classes.textTypo}
                >
                  Por favor, crea una cuenta con tu email y contraseña.
                </Typography>
                <Typography
                  variant="caption"
                  color="initial"
                  className={classes.textInput}
                >
                  Email
                </Typography>
                <TextField
                  id="standard-full-width"
                  placeholder="Email"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />
                <Typography
                  variant=" caption"
                  color="initial"
                  className={classes.textInput}
                >
                  Password
                </Typography>
                <TextField
                  id="standard-full-width"
                  placeholder="Password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
            </Grid>
          </div>
        </Hidden>
      </div>
    </div>
  );
};

export default ResponsiveDrawer;
