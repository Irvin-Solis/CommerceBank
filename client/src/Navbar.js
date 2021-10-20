import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';

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
    background : '#006747' // commerce bank color or whatever
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
          <AccountBalanceTwoToneIcon fontSize="large"/> 
          <Typography variant="h5" className={classes.title}>
            Commerce Bank 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}