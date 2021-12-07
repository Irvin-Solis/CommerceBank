import {React, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    headFont:{
        fontFamily: 'Poppins',
        fontWeight: 'bold'
    },
    body:{
        fontFamily: 'Open Sans'
    },
    parent: {
        display: 'grid'
    },
    icon: {
        gridColumn: 1,
        gridRow: 1,
        textAlign: 'center',
        opacity: 0.05,
        marginBottom: -163
    },
    form: {
        gridColumn: 1,
        gridRow: 1,
        marginTop: 100
    },
    title: {
        textAlign: 'center',
        marginBottom: 20    
    },
    formControl:{
        '& > *': {
            margin: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'center'
    }

  }));

export default function Home(props) {
    const classes = useStyles();
    const [windowWidth , setWidth] = useState(null);
    useEffect(() => {
        setWidth(window.innerWidth)
    })

    return (
        <div>
            <Grid container >
                <Grid item xl={4} lg={4} md={4} sm={3} xs={'auto'}/>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <div className={classes.parent}>
                        <div className={classes.icon}>
                            <LocalAtmTwoToneIcon sx={ windowWidth < 460 ? { fontSize: 274 } : {fontSize: 400} }/>
                            <AccountBalanceTwoToneIcon sx={ windowWidth < 460 ? { fontSize: 274 } : {fontSize: 400} }/>                      
                        </div>
                        <div className={classes.form}>
                            <Box
                                sx={{
                                    border: 2,
                                    borderColor: 'text.primary',
                                    borderRadius: 1
                                }}
                            >
                                <Card>
                                    <CardContent>
                                        <div className={classes.title}>
                                            <LockRoundedIcon/>
                                            <Typography varient="h5" className={classes.headFont}>Login to Mobile Banking</Typography>
                                            <Divider />
                                        </div>   
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                required
                                                label="Login ID"
                                            />
                                            <TextField
                                                required
                                                label="Password"
                                            />
                                            <FormControlLabel control={<Checkbox />} label="Remember me"/>
                                            <Button variant="outlined" className={classes.body}>Sign In</Button>
                                        </FormControl>  
                                    </CardContent>
                                </Card>
                            </Box>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={3} xs={'auto'}/>
            </Grid>
        </div>  
    )
    
}