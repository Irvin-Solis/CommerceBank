import React from 'reactn';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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

export default function NavBar({ ...props }) {
  const classes = useStyles();

  React.useEffect(() => {

  }, [props])

  const changeTheme = () => {
    props.themeChange();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barStyle}>
        <Toolbar>
          <AccountBalanceIcon sx={{ fontSize: 25 }}/> 
          <Typography variant="h5" className={classes.title}>
          &nbsp;Mobile Bank 
          </Typography>

          {props.darkState ? <Brightness7Icon onClick={changeTheme} /> : <Brightness4Icon onClick={changeTheme} />}
        </Toolbar>
      </AppBar>
    </div>
  );
}