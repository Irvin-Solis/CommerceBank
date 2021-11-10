import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginTop: 10
    }
  }));

export default function Account(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "5%" }}>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1} />
                <Grid item component={Paper} className={classes.grid} xl={10} lg={10} md={10} sm={10} xs={10}>
                    heowgiunp
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
            </Grid>
        </div>
    )
}