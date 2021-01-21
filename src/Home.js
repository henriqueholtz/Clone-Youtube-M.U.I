
import React from 'react';
import TopBar from './Components/TopBar'
import LeftNavBar from './Components/LeftNavBar'
import {makeStyles, AppBar, Toolbar, IconButton, Button, List, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Box, Typography, ListSubheader } from "@material-ui/core";

import { useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  menuIcon: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  }
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return <div className={classes.root}>
    <TopBar />

    <LeftNavBar />  
  </div>;
}

export default Home;
