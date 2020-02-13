import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Controller, useForm} from 'react-hook-form'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import { buttonStyles } from "../ComponentStyles/buttonStyles";
import './Register.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Register({regNewUser, regUser}) {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        regNewUser(data);
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
        } else if (err.email) {
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo email requerido
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
                            Regístrate en wallaclone
                        </Typography>
                        <Typography  color="textSecondary">
                            Escribe tus datos
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
                                name="email"
                                as={<TextField label="email" className="input"/>}
                                control={control}
                                rules={{required: true}}
                                defaultValue=""
                            />
                            {errors.email &&
                            errors.email.type === "required"}
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
                                Registrarse
                            </Button>
                        </form>
                    </CardContent>
            </Card>
            {setAlerts(errors)}
            <Snackbar open={!regUser} autoHideDuration={6000}>
                <Alert severity="error">
                    Username o email ya están en uso
                </Alert>
            </Snackbar>
        </div>
    );
}