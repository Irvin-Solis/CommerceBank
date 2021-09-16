import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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

export default function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {

  }, [props])


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barStyle}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() =>{history.push("/")}}>
          <Typography variant="h6" className={classes.title}>
            Commerce Bank
          </Typography>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Banking
          </Typography>
          <Button color="inherit" onClick={()=>{history.push("/SignIn")}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}