import { Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from "@material-ui/styles";
import React from 'react';

const useStyles = makeStyles({
    AppBarStyle: {
        marginBottom: '20px'
    },
    flexStyle: {
        flex: 1
    }
})


export default function Header(props) {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.AppBarStyle}>

            <Toolbar>
                <Typography variant="h4" className={classes.flexStyle}>
                    {props.title}
                </Typography>
                <PetsIcon />
            </Toolbar>

        </AppBar>
    )
}