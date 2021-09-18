import React from 'react'
import {
  makeStyles, Drawer, Divider
} from '@material-ui/core';


import Listas from '../Listas';
const useStyles = makeStyles(theme => ({
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  toolbar: {
    minHeight: '87px',
  },
}))
const DrawerMenu = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      classes={{
        paper: classes.drawerPaper
      }}
      onClose={props.onClose ? props.onClose : null}
      anchor='left'
    >
      <div className={classes.toolbar}></div>
      <Divider/>
      <Listas/>
    </Drawer>
  )
}

export default DrawerMenu;

