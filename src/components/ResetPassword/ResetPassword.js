import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {navStyles} from "../ComponentStyles/buttonStyles";
import {Link} from "react-router-dom";

import './ResetPassword.css';

export default function ResetPassword({reset}) {

    const classes = navStyles();
    const { handleSubmit, errors, control } = useForm();

    const onSubmit = (data) => {
        reset(data);
    };

    return(
        <div className="resetpass">
            <Card className="card" variant="outlined">
                <CardContent className="card-content">
                    <Typography variant="h5" component="h2">
                       Recuperación de contraseña
                    </Typography>
                    <Typography  color="textSecondary">
                        Escribe el mail de tu cuenta, te enviaremos un mail a tu correo con los
                        las instruciones para recuperar tu contraseña.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            as={<TextField label="email" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.email &&
                        errors.email.type === "required"}
                        <Button variant="contained" className={classes.buttonBlue3} type="submit">
                            Enviar
                        </Button>
                        <Button variant="contained" className={classes.buttonRed2}
                                component={Link} to={'/login'}>
                            Cancelar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}