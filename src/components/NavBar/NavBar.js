import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {navStyles} from "../ComponentStyles/buttonStyles";

export default function NavBar({session, logout}) {
    const classes = navStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.nav}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Wallaclone
                    </Typography>
                    {session.success && (
                        <div>
                            Bienvenido: <b>{session.session.username}</b>
                            <Button color="inherit" onClick={logout}>logout</Button>
                        </div>
                    )}
                    {!session.success && (
                        <div>
                            <Button color="inherit" component={Link} to="/register">Registro</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}