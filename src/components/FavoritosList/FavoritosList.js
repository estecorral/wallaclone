import React, {useEffect} from "react";

import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import {EuroSymbolRounded} from "@material-ui/icons";
import Card from "@material-ui/core/Card";

import {navStyles} from "../ComponentStyles/buttonStyles";
import NavBar from "../NavBar";

import './FavoritosList.css';

export default function FavoritosList({favorites, getAllFavorites, session}) {

    const classes = navStyles();

    useEffect(() => {
        getAllFavorites(session.session.id, session.session.token);
    }, [getAllFavorites]);

    return(
        <div className="favoritoslist">
            <NavBar/>
            <div className="favoritosCenter">
                <h3>Mis anuncios favoritos</h3>
                {favorites.map(fav => (
                    <Card className={classes.card} key={fav._id}>
                        <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${fav.nombre}/${fav._id}`}>
                            <CardMedia
                                className={classes.cover}
                                image={`http://localhost:3001/images/anuncios/${fav.foto}`}
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <div className="typo">
                                        <Typography component="h5">{fav.nombre}</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {fav.descripcion}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions className={classes.cardactions}>
                                    <Chip
                                        icon={<EuroSymbolRounded />}
                                        label={fav.precio}
                                        style={{backgroundColor:'#b3e5fc'}}
                                    />
                                    {fav.venta ?
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
                ))}
            </div>
        </div>
    );
}