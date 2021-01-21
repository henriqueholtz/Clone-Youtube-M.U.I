import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {makeStyles, AppBar, Toolbar, IconButton, Button, List, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Box, Typography, ListSubheader } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer +1,
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  logo: {
    height: 25
  },
  grow: {
    flexGrow: 1
  },
}))

export default function TopBar() {
    const classes = useStyles();

    return (
        <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <img src="/images/black.png" alt="logo" className={classes.logo} />

        <div className={classes.grow}/>
        
        <IconButton
          className={classes.icons}
          color="inherit"
        >
          <VideoCall />
        </IconButton>

        <IconButton
          className={classes.icons}
          color="inherit"
        >
          <AppsIcon />
        </IconButton>

        <IconButton
          className={classes.icons}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
        <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Sign In</Button>
      </Toolbar>
    </AppBar>
    )
}