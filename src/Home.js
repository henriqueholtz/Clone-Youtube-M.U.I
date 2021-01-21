
import React from 'react';

import {makeStyles, AppBar, Toolbar, IconButton, Button, List, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Box, Typography } from "@material-ui/core";

import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer +1,
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  logo: {
    height: 25
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  menuIcon: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  list: {
    marginTop: 52
  }
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return <div className={classes.root}>
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
        <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Fazer Login</Button>
      </Toolbar>
    </AppBar>

    <Box display="flex">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List className={classes.list}>
          <ListItem button key={'home'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Home'} />
          </ListItem>
        
          <ListItem button key={'tendencies'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Tendencies'} />
          </ListItem>
      
          <ListItem button key={'subscriptions'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText classes={{
            primary: classes.listItemText
            }} primary={'Subscriptions'} />
          </ListItem>
        </List>

        <Divider /> 

        <List className={classes.list}>
          <ListItem button key={'library'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Library'} />
          </ListItem>
        
          <ListItem button key={'history'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'History'} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  </div>;
}

export default Home;
