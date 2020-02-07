import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import {buttonStyles} from "../ComponentStyles/buttonStyles";
import MuiAlert from "@material-ui/lab/Alert";

import './Login.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login({login, sessionUser}) {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        console.log('log user', data);
        login(data);
    };

    const classes = buttonStyles();

    const setAlerts = (err) => {
        let openError = false;
        if(err.username){
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo username requerido
                    </Alert>
                </Snackbar>
            );
        } else if (err.password) {
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo password requerido
                    </Alert>
                </Snackbar>
            );
        }
    };

    return (
        <div className="Register">
            <Card className="card" variant="outlined">
                <CardContent className="card-content">
                    <Typography variant="h5" component="h2">
                        Inicio de Sesión
                    </Typography>
                    <Typography  color="textSecondary">
                        Escribe tu usuario y contraseña
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="username"
                            as={<TextField label="Username" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.username &&
                        errors.username.type === "required"}
                        <Controller
                            name="password"
                            as={<TextField label="Password" type="password" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.password &&
                        errors.password.type === "required"}
                        <Button variant="contained" color="primary" className={classes.buttonBlue} type="submit">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
            {setAlerts(errors)}
            <Snackbar open={sessionUser.error === 'Usuario o contraseña incorrectos'} autoHideDuration={6000}>
                <Alert severity="error">
                    Usuario o contraseña erroneos
                </Alert>
            </Snackbar>
        </div>
    );
}