import { ButtonBase, Hidden, makeStyles } from "@material-ui/core";
import AppBar from "../AppBar";
import DrawerMenu from "../DrawerMenu";
import React from "react";

import ImageFirst from "../ImageFirst/ImageFirst";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "240px",
  },
  toolbar: {
    minHeight: "87px",
  },
}));
export default function Layout({ children }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const buttonAbrir = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <AppBar buttonAbrir={buttonAbrir} />

      <Hidden smUp>
        <DrawerMenu
          variant="temporary"
          open={mobileOpen}
          onClose={buttonAbrir}
        />
      </Hidden>

      {children}
      <ImageFirst title="Contact US"/>
    </div>
  );
}
