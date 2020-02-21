import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ControlPoint, AccountBox, ExitToApp, VpnKey, Home, LibraryBooks, Stars } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import {navStyles} from "../ComponentStyles/buttonStyles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

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
                                <MenuItem onClick={handleClose}  component={Link} to="/"><Home/>  Inicio</MenuItem>
                                <MenuItem onClick={handleClose}  component={Link} to="/profile">
                                    <AccountBox/>  Perfil</MenuItem>
                                <MenuItem onClick={handleClose} component={Link}
                                          to={`/anuncios/${session.session.username}`}>
                                    <LibraryBooks/>  Mis anuncios
                                </MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/createanuncio">
                                    <ControlPoint/>  Añadir nuevo anuncio
                                </MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/favoritos">
                                    <Stars/>  Mis favoritos</MenuItem>
                                <MenuItem onClick={logout}>
                                    <ExitToApp/>   Logout
                                </MenuItem>
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
                                <MenuItem onClick={handleClose} component={Link} to="/"><Home/>  Inicio</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/register"><VpnKey/>  Register</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/login"><ExitToApp/>  Login</MenuItem>
                            </Menu>)
                        }
                    <Typography variant="h6" component={Link} to="/" className={classes.title}>
                       Wallaclone
                    </Typography>
                    {session.success && (
                        <div>
                            <Tooltip title="Nuevo Anuncio" arrow>
                                <IconButton color="primary" component={Link} to="/createanuncio" style={{color: 'white'}}>
                                    <ControlPoint/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Perfil" arrow>
                                <IconButton color="primary" component={Link} to="/profile" style={{color: 'white'}}>
                                    <AccountBox/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Logout" arrow>
                                <IconButton color="primary" onClick={logout} style={{color: 'white'}}>
                                    <ExitToApp/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    )}
                    {!session.success && (
                        <div>
                            <Tooltip title="Registro" arrow>
                                <IconButton color="primary" component={Link} to="/register" style={{color: 'white'}}>
                                    <VpnKey/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Login" arrow>
                                <IconButton color="primary" component={Link} to="/login" style={{color: 'white'}}>
                                    <ExitToApp/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}