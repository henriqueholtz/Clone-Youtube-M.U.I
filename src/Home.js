
import React from 'react';

import {makeStyles, AppBar, Toolbar, IconButton, Button, List, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Box, Typography, ListSubheader } from "@material-ui/core";

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
  },
  subheader: {
    textTransform: 'uppercase'
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
        <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Sign In</Button>
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
        
          <ListItem button key={'trending'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Trending'} />
          </ListItem>
      
          <ListItem button key={'subscriptions'} classes={{root: classes.listItem }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText classes={{
            primary: classes.listItemText
            }} primary={'Subscriptions'} />
          </ListItem>
        </List>

        <Divider /> 

        <List>
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

        <Divider />

        <Box p={3}>
            <Typography variant="body2">
                Sign in to like videos, comment and subscribe.
            </Typography>
            <Box mt={2}>
              <Button 
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                Sign In
              </Button>
            </Box>
        </Box>

        <Divider /> 
        
        <List component="nav" aria-labelledby="nested-list-subheader" subheader={
              <ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
                Best of YouTube
              </ListSubheader>
        }>
          
          <ListItem button key={'music'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Music'}/>
          </ListItem>

          <ListItem button key={'gaming'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Gaming'}/>
          </ListItem>

          <ListItem button key={'movies'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Movies'}/>
          </ListItem>

          <ListItem button key={'news'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'News'}/>
          </ListItem>

          <ListItem button key={'live'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Live'}/>
          </ListItem>

          <ListItem button key={'learning'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Learning'}/>
          </ListItem>

          <ListItem button key={'spotlight'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'Spotlight'}/>
          </ListItem>

          <ListItem button key={'360-video'} classes={{root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText classes={{
              primary: classes.listItemText
              }} primary={'360° Video'}/>
          </ListItem>
        </List>

        <Divider />
        <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary={'Browser channels'}/>
          </ListItem>
        <Divider />

        <List component="nav" aria-labelledby="nested-list-subheader" subheader={
          <ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
            MORE FROM YOUTUBE
          </ListSubheader>
        }>
          
          <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary={'YouTube Premium'}/>
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary={'Live'}/>
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary={'Settings'}/>
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary={'Report history'}/>
          </ListItem>

        </List>

      </Drawer>
    </Box>
  </div>;
}

export default Home;
