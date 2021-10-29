import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {makeStyles, AppBar, Toolbar, IconButton, Button, Switch } from "@material-ui/core";
import { AppSettings } from '../AppSettings'

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

export default function TopBar({darkMode, setDarkMode}) {
    const classes = useStyles();
    const theme = useTheme();
    console.log(darkMode)

    return (
        <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <img src={theme.palette.type === 'dark' ? `${AppSettings.basePathImageFolder}white.png` : `${AppSettings.basePathImageFolder}black.png`} alt="logo" className={classes.logo} />

        <div className={classes.grow}/>
        
        <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />

        <IconButton className={classes.icons} >
          <VideoCall />
        </IconButton>

        <IconButton className={classes.icons} >
          <AppsIcon />
        </IconButton>

        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Sign In</Button>
      </Toolbar>
    </AppBar>
    )
}