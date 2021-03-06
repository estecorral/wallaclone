import React, {useEffect, useState} from "react";

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
import Pagination from "@material-ui/lab/Pagination";

export default function FavoritosList({favorites, getAllFavorites, session}) {

    const classes = navStyles();

    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({inicio: 0, fin: 5});

    const changePage = (event, value) => {
        if (page <= value) {
            setPagination({inicio: pagination.inicio + 5, fin: pagination.fin + 5 });
        } else {
            setPagination({inicio: pagination.inicio - 5, fin: pagination.fin - 5 });
        }
        setPage(value);
    };

    useEffect(() => {
        getAllFavorites(session.session.id, session.session.token);
    }, [getAllFavorites]);

    return(
        <div className="favoritoslist">
            <NavBar/>
            <div className="favoritosCenter">
                <h3>Mis anuncios favoritos</h3>
                {favorites.slice(pagination.inicio, pagination.fin).map(fav => (
                    <Card className={classes.card} key={fav._id}>
                        <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${fav.nombre}/${fav._id}`}>
                            <CardMedia
                                className={classes.cover}
                                image={`http://18.219.27.78/images/anuncios/${fav.foto}`}
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
                                    {fav.reservado &&(
                                        <Chip className={classes.reservado}
                                              label="Reservado"
                                              style={{backgroundColor:'#ce93d8'}}
                                        />
                                    )}
                                    {fav.vendido && (
                                        <Chip className={classes.reservado}
                                              label="Vendido"
                                              style={{backgroundColor:'#f44336', color: 'white'}}
                                        />
                                    )}
                                </CardActions>
                            </div>
                        </ButtonBase>
                    </Card>
                ))}
                <Pagination count={Math.ceil(favorites.length/5)} page={page} onChange={changePage} color="primary" className="paginator"/>
            </div>
        </div>
    );
}