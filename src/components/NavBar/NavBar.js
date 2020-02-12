import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ControlPoint } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import {navStyles} from "../ComponentStyles/buttonStyles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

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
                            <Button className={classes.buttonGreen} component={Link} to="/createanuncio">
                                <ControlPoint/>
                                Nuevo Anuncio
                            </Button>
                            <Button className={classes.buttonBlue2} component={Link} to="/profile">Profile</Button>
                            <Button className={classes.buttonRed} onClick={logout}>logout</Button>
                            <Snackbar open={session.success}>
                                <Alert severity="info">
                                    Bienvenido: {session.session.username}
                                </Alert>
                            </Snackbar>
                        </div>
                    )}
                    {!session.success && (
                        <div>
                            <Button className={classes.buttonBlue2} component={Link} to="/register">Registro</Button>
                            <Button className={classes.buttonRed} component={Link} to="/login">Login</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}