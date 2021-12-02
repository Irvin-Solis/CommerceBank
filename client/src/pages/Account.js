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
    }, [props.darkState, userAccounts]); 
   
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
                <Grid item spacing={2} className={classes.grid} xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Grid container spacing={2}> 
                                {userAccounts.map(item => 
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography varient="h4">
                                                <Box sx={{ fontSize: 'h6.fontSize' }}>
                                                    Checking&nbsp;{item}
                                                </Box>
                                            </Typography>
                                            <Typography varient="h6" align="right">
                                                <Box sx={{ fontWeight: 'bold', fontSize: 'default'}}>$3456</Box>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    
                                </Grid>
                            )}
                    </Grid>

                </Grid>
                <Grid item xl={0} lg={0} md={0} sm={0} xs={0}/>
            </Grid>
        </div>
    )
}