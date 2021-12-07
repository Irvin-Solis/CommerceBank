import {React, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginTop: 10,
        spacing: 10
    },
    sidebar: {
        marginRight: "5px"
    },
    heading:{
        fontFamily: 'Poppins',
    },
    body:{
        fontFamily: 'Open Sans'
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: "25vw",
      }
  }));

export default function Account(props) {
    const classes = useStyles();
    const history = useHistory();
    const [windowWidth, setWindowWidth] = useState(null);
    const [menu, setMenu] = useState(false);
    const [dialog, setDialog] = useState(false);
    const [fromAcc, setFromAcc] = useState('Select Acc');
    const [toAcc, setToAcc] = useState('Select Acc');
    const accounts = ['Checking *1111', 'Checking *3647']
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
      };
    const handleMenuClose = () => {
        setMenu(false);
    };
    const handleChange = (event) => {
        setFromAcc(event.target.value);
      };
      const handleChange1 = (event) => {
        setToAcc(event.target.value);
      };
    const toTransaction = () =>{
        handleMenuClose()
        history.push("/Transactions");
    };
    const handleDialog = () =>{
        setDialog(!dialog);
    }
    const userAccounts = { '*1111': '2345',
                            '*3647': '3465'};

    useEffect(() => {
        console.log(props.darkState)
        setWindowWidth(window.innerWidth)
        console.log(windowWidth)
    }, [props.darkState, userAccounts, accounts, fromAcc, toAcc]); 
   
    return (
        <div className={classes.root}>
            <Box  bgcolor="#e6e6e6" sx={{ borderRadius: 16, pb: 8 }} >
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5%" }}>
                <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'}>
                    {windowWidth <= 750 ?
                        <IconButton>
                            <DehazeIcon/>
                        </IconButton>
                        :    
                    <div className={classes.sidebar}>
                        <Typography variant="h4" className={classes.heading}>Settings</Typography>
                        <Divider />
                        <List>
                            <ListItem button >
                                <Typography variant="h5" className={classes.body}>Account</Typography>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <Typography variant="h5" className={classes.body}>Notifications</Typography>
                            </ListItem>
                        </List>
                        <Divider />
                    </div>}
                </Grid>
                <Grid item className={classes.grid} xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Typography variant="h5" className={classes.heading}>Good Evening, User</Typography>
                    <Typography variant="h4" className={classes.heading} style={{ paddingBottom: 6 }}>Accounts</Typography>
                    <Grid container spacing={2}>
                            {Object.keys(userAccounts).map((key, _) => 
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Box
                                    sx={{
                                        border: 2,
                                        borderColor: 'text.primary',
                                        borderRadius: 1
                                    }}
                                >
                                <Card>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                                                <Box 
                                                    sx={{
                                                        height: '100%',
                                                        width: 3.5,
                                                        bgcolor: '#007AA3'
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                                                <Typography varient="h4" className={classes.heading}>
                                                    <Box sx={{ fontSize: 'h6.fontSize' }}>Checking&nbsp;{key}</Box>
                                                    <Divider/>
                                                </Typography>
                                            </Grid>
                                            <Grid item xl={5} lg={5} md={5} sm={5} xs={4}/>
                                            <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
                                                <IconButton onClick={handleMenuClick}>
                                                    <MoreVertIcon style={{ paddingRight: 4 }}/>
                                                </IconButton>
                                                <Menu
                                                    anchorEl={menu}
                                                    open={menu}
                                                    onClose={handleMenuClose}
                                                    anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                    }}
                                                >
                                                    <MenuItem 
                                                        onClick={()=>{
                                                            handleMenuClose()
                                                            handleDialog()
                                                            }}
                                                    >
                                                        Transfer Funds
                                                    </MenuItem>
                                                    <MenuItem onClick={toTransaction}>View Activity</MenuItem>
                                                </Menu>
                                            </Grid>
                                        </Grid>
                                        <Typography varient="h6" align="right" className={classes.body}>
                                            <Box sx={{ align:'left', fontSize: 15}}>Current Balance:</Box>
                                            <Box sx={{ fontWeight: 'bold', fontSize: 15}}>${userAccounts[key]}</Box>
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Box>
                            </Grid>
                        )}
                        <Dialog open={dialog} onClose={handleDialog}  maxWidth='md' fullWidth='true'>
                            <DialogTitle>Transer Funds</DialogTitle>
                            <DialogContent>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        select
                                        label="From Account"
                                        defaultValue={fromAcc}
                                        value={fromAcc}
                                        onChange={handleChange}
                                        variant="filled"
                                        margin="dense"
                                        >
                                        {accounts.map((option) => (
                                            <MenuItem key={option} value={option}>
                                            {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        label="To Account"
                                        value={toAcc}
                                        onChange={handleChange1}
                                        variant="filled"
                                        margin="dense"
                                        >
                                        {accounts.map((option) => (
                                            <MenuItem key={option} value={option}>
                                            {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                            </DialogContent>
                            <DialogActions>
                                
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}