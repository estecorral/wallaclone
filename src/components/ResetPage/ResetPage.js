import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {navStyles} from "../ComponentStyles/buttonStyles";

import './ResetPage.css';

export default function ResetPage({match, resetPass}) {

    const classes = navStyles();
    const { handleSubmit, errors, getValues, control } = useForm();

    const onSubmit = (data) => {
        if (data.password === data.checkPassword) {
            resetPass(data.password, match.params.email, match.params.token);
        }
    };

    return(
        <div className="resetpass">
            <Card className="card" variant="outlined">
                <CardContent className="card-content">
                    <Typography variant="h5" component="h2">
                        Recuperación de contraseña
                    </Typography>
                    <Typography  color="textSecondary">
                        Escribe tu nueva contraseña
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="password"
                            as={<TextField label="Password" type="password" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.password &&
                        errors.password.type === "required"}
                        <Controller
                            name="checkPassword"
                            as={<TextField label="Repite contraseña" type="password" className="input"/>}
                            control={control}
                            rules={{required: true, validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || 'Los passwords tienen que coincidir!';
                                    }},
                                    message: 'los passwords no coinciden'}}
                            defaultValue=""
                        />
                        {errors.checkPassword && errors.checkPassword.message}
                        <Button variant="contained" className={classes.buttonBlue3} type="submit">
                            Enviar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}