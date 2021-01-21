
import React from 'react';
import TopBar from './Components/TopBar'
import LeftNavBar from './Components/LeftNavBar'
import Wrapper from './Components/Wrapper'

import {makeStyles, AppBar, Toolbar, IconButton, Button, List, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Box, Typography, ListSubheader, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark
  },
  menuIcon: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  }
}));

function Home({darkMode, setDarkMode}) {
  console.log(darkMode, 'Home')
  const classes = useStyles();

  return <div className={classes.root}>
    <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />

    <Box display="flex">
      <Hidden mdDown>
        <LeftNavBar />
      </Hidden>

      <Wrapper />
    </Box>
  </div>;
}

export default Home;
