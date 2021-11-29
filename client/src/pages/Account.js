import {React, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';

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
                <Grid item component={Paper} spacing={2} className={classes.grid} xl={7} lg={7} md={7} sm={7} xs={7}>
                    <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5%" }}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
                        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                            rehgwrt
                        </Grid>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
            </Grid>
        </div>
    )
}