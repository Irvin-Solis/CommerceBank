import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';

export default function Account(props) {

    const userAccounts = ["211111111", "4111111111"];
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };
    return (
        <div>
            <Grid container spacing={2} justifyContent="center"  style={{ marginBottom: "5%" }}>
                <Grid item xs="auto"/>
                <Grid item  xs={5} justifyContent="center">
                    <Typography variant="h3">
                        Account Information
                    </Typography>
                </Grid>
                <Grid item xs="auto"/>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Checking Acc: 211111111" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Saving Acc: 4111111111" />
                    </ListItem>
                </List>
            </Grid>
        </div>
    )
}