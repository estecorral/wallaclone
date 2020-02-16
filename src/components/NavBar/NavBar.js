import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ControlPoint } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import {navStyles} from "../ComponentStyles/buttonStyles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavBar({session, logout}) {
    const classes = navStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.nav}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit"
                                aria-label="menu" aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>

                        {session.success && (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}  component={Link} to="/profile">Profile</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to={`/anuncios/${session.session.username}`}>Mis anuncios</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/createanuncio">Añadir nuevo anuncio</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/favoritos">Mis favoritos</MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>)
                        }
                        {!session.success && (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/register">Register</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
                            </Menu>)
                        }
                    <Typography variant="h6" component={Link} to="/" className={classes.title}>
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