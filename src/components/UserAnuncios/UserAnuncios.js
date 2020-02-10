import React, {useEffect} from "react";
import NavBar from "../NavBar";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import {EuroSymbolRounded} from "@material-ui/icons";
import {navStyles} from "../ComponentStyles/buttonStyles";

import './UserAnuncios.css';
export default function UserAnuncios({match, getAds, ads}) {

    useEffect(() => {
        getAds();
    }, [getAds]);

    const classes = navStyles();

    return(
      <div className="UserAnuncios">
        <NavBar/>
        <div className="cards">
            <h3>Anuncios del usuario <b>{match.params.username}</b></h3>
                {
                    ads.length === 0 ?
                        <Snackbar  open={ads.length === 0} autoHideDuration={6000}>
                            <Alert severity="warning">
                                <AlertTitle>Info</AlertTitle>
                                No se han encontrado anuncios
                            </Alert>
                        </Snackbar>:
                        ads.map(ad => (
                            <Card className={classes.card} key={ad._id}>
                                <CardMedia
                                    className={classes.cover}
                                    image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                                />
                                <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${ad.nombre}/${ad._id}`}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5">{ad.nombre}</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {ad.descripcion}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardactions}>
                                            <Chip
                                                icon={<EuroSymbolRounded />}
                                                label={ad.precio}
                                                style={{backgroundColor:'#b3e5fc'}}
                                            />
                                            {ad.venta ?
                                                <Chip className={classes.chipventa}
                                                      label="venta"
                                                      style={{backgroundColor:'#0288d1', color: 'white'}}
                                                /> :
                                                <Chip className={classes.chipcompra}
                                                      label="compra"
                                                      color="primary"
                                                      variant="outlined"
                                                />}
                                        </CardActions>
                                    </div>
                                </ButtonBase>
                            </Card>
                        ))
                }
        </div>
      </div>
    );
}