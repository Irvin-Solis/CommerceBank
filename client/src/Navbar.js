import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  barStyle: {
    background : '#4CB848' // commerce bank color or whatever
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isOpen, setDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barStyle}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
          <Typography variant="h6" className={classes.title}>
            Commerce Bank
          </Typography>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Banking
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}