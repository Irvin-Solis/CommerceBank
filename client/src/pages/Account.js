import {React, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginTop: 10,
        spacing: 10
    },
    sidebar: {
        marginRight: "20px"
    }
  }));

export default function Account(props) {
    const classes = useStyles();

    const userAccounts = [ '4111111111', '2147483647'];

    useEffect(() => {
        console.log(props.darkState)
    }, [props.darkState]); 
   
    return (
        <div className={classes.root}>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5%" }}>
                <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'}>
                    <div className={classes.sidebar}>
                        <Typography variant="h4">Settings</Typography>
                        <Divider />
                        <List>
                            <ListItem button >
                                <Typography variant="h5">Account</Typography>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                            <Typography variant="h5">Notifications</Typography>
                            </ListItem>
                        </List>
                        <Divider />
                    </div>
                </Grid>
                <Grid item component={Paper} spacing={2} className={classes.grid} xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5%" }}>
                        <Box component={Paper} elevation={0}
                            sx={{
                                width: 1
                            }}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="h5">Accounts</Typography>
                        </Grid>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
                        <Grid item xl={10} lg={10} md={10} sm={10} xs={10} >

                            <Grid container > 
                                {userAccounts.map(item => 


                                    <Typography>{item}</Typography>

                            )}
                            </Grid>
                        </Grid>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

                        </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xl={0} lg={0} md={0} sm={0} xs={0}/>
            </Grid>
        </div>
    )
}