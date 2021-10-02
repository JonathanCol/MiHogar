import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import DrawerStatic from "../../components/DrawerStatic/DrawerStatic";
const useStyles = makeStyles((theme) => ({}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  return (
    <div>
      <DrawerStatic />
    </div>
  );
};

export default ResponsiveDrawer;
