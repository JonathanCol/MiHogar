import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import DrawerStatic from "../../components/DrawerStatic/DrawerStatic";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "cover",
    alignContent: "center",
    margin: 30,
  },
}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default ResponsiveDrawer;
