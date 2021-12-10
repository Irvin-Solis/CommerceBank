import { React, useEffect, useState, useGlobal, setGlobal } from 'reactn';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
    const history = useHistory();
    const [windowWidth , setWidth] = useState(null);
    const [userId, setId] = useState(null);
    const [username, setUsername] = useState(null);
    const [userPass, setPass] = useState(null);
    const [note, setNote] = useState(false);
    const [auth, setAuth] = useGlobal('signedIn');

    const login = async () =>{
        checkCred()
    }

    const checkCred = async () =>{
        let validUser = false;
        let validCred = false;
        fetch('http://localhost:5000/api/getUser/' + userId)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
          if(data.length != 0 && data[0]['user_id'] == userId) { 
              validUser = true
              setUsername(data[0]['username'])
             }
        })
        fetch('http://localhost:5000/api/getUserPass/' + userPass)
        .then((res) => res.json())
        .then((data) =>{
          if(data.length != 0 && data[0]['user_id'] == userId) { validCred = true }

          if(validUser && validCred) {
              let acc = []
            setAuth(true);
            fetch('http://localhost:5000/api/getUserAccounts/' +userId)
            .then((res) => res.json())
            .then((data) =>{
                data.map(item =>{
                    acc.push(item['account_num'])
                })
                setGlobal({
                    "user_id": userId,
                    "username": username,
                    "userAccounts": acc
                  });
                history.push('/Account')
              })
            }
            else{
                setNote(true);
            }
        })
    }


    useEffect(() => {
        setWidth(window.innerWidth)
        if(auth){ history.push('/Account') }


        
    }, [auth])

    return (
        <div>
            <Snackbar open={note} autoHideDuration={1000} onClose={()=>{setNote(false)}}>
                <Alert onClose={()=>{setNote(false)}} severity="error" >
                    Incorrect Username or Password!
                </Alert>
            </Snackbar>
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
                                                onChange={(event)=>{setId(event.target.value)}}
                                            />
                                            <TextField
                                                required
                                                label="Password"
                                                type="password"
                                                onChange={(event)=>{setPass(event.target.value)}}
                                            />
                                            <FormControlLabel control={<Checkbox />} label="Remember me"/>
                                            <Button onClick={login} variant="outlined" className={classes.body}>Sign In</Button>  
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