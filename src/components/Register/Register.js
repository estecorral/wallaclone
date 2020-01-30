import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Controller, useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';

import {setNewUser} from "../../Services/api";
import './Register.css';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 30,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 20,
        width: '100%',
    },
    input: {
        margin: 3,
        width: '100%',
    }
});

export default function Register() {
    const { handleSubmit, watch, errors, control } = useForm()
    const onSubmit = data => { setNewUser(data).then(res => console.log(res));
    }

    const classes = useStyles();

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
                            <Controller
                                name="email"
                                as={<TextField label="email" className="input"/>}
                                control={control}
                                rules={{required: true}}
                                defaultValue=""
                            />
                            <Controller
                                name="password"
                                as={<TextField label="Password" type="password" className="input"/>}
                                control={control}
                                rules={{required: true}}
                                defaultValue=""
                            />
                            <Button variant="contained" color="primary" className={classes.root} type="submit">
                                Registrarse
                            </Button>
                        </form>
                    </CardContent>
            </Card>
        </div>
    );
}