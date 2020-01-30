import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { useForm } from 'react-hook-form'
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';

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
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    const classes = useStyles();

    console.log(watch('example'));

    return (
        <div className="Register">
            <Card className="card" variant="outlined">
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="card-content">
                        <Typography variant="h5" component="h2">
                            Regístrate en wallaclone
                        </Typography>
                        <Typography  color="textSecondary">
                            Escribe tus datos
                        </Typography>
                            <TextField id="username" label="Username" color="primary"
                                       className={classes.input} ref={register}/>
                            <TextField id="email" label="email" color="primary" className={classes.input}/>
                            <TextField id="password" label="Password" color="primary" className={classes.input}/>
                            <Button variant="contained" color="primary" className={classes.root} type="submit">
                                Registrarse
                            </Button>
                    </CardContent>
                </FormControl>
            </Card>
        </div>
    );
}