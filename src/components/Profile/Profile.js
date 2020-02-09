import React from "react";
import NavBar from "../NavBar";
import {navStyles} from "../ComponentStyles/buttonStyles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import './Profile.css';

export default function Profile({session}) {
    const classes = navStyles();

    console.log(session);

    return (
        <div className="profile">
            <NavBar/>
            {Object.keys(session).length !== 0 ?
                <div className="cardContend">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Usuario: {session.session.username}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Email: {session.session.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Editar</Button>
                            <Button size="small">Dar de baja</Button>
                        </CardActions>
                    </Card>
                </div> :
                <div>Cargando</div>
            }
        </div>
    )
}