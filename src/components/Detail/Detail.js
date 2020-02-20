import React, {useEffect} from 'react';
import NavBar from "../NavBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {EuroSymbolRounded, FavoriteOutlined} from "@material-ui/icons";
import {navStyles} from "../ComponentStyles/buttonStyles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

import './detail.css';
import Chip from "@material-ui/core/Chip";
import {Link} from "react-router-dom";

export default function Detail({match, getAd, ad, session, setFavorite, getFavs, getAllFavorites, deleteFavorite}) {

    const classes = navStyles();
    useEffect(() => {
        if(session.success) {
            getAllFavorites(session.session.id, session.session.token);
        }
        getAd(match.params.id);
    }, [getAd, match.params.id, getAllFavorites]);

    const newFav = (e) => {
        e.preventDefault();
        setFavorite(session.session.id, ad, session.session.token);
    };

    const delFav = (e) => {
        e.preventDefault();
        deleteFavorite(session.session.id, ad, session.session.token);
    };

    return(
      <div className="detail">
          <NavBar/>
          <div className="detailcenter">
              {
                  Object.keys(ad).length !== 0 ?  <Card className={classes.cardDetail}>
                      <CardHeader
                          avatar={
                              <Avatar aria-label="recipe" className={classes.avatar}>
                                  {ad.autor.username.slice(0, 1).toUpperCase()}
                              </Avatar>
                          }
                          title={ad.nombre}
                          subheader={ad.date}

                      />
                          {ad.reservado && (
                              <Chip className={classes.reservado}
                                    label="Reservado"
                                    style={{backgroundColor:'#ce93d8'}}
                              />
                          )}
                          {ad.vendido && (
                              <Chip className={classes.reservado}
                                    label="Vendido"
                                    style={{backgroundColor:'#f44336', color: 'white'}}
                              />
                          )}
                          <img className="media" src={`http://localhost:3001/images/anuncios/${ad.foto}`} alt=""/>
                      <CardContent>
                          <Typography className="cardDescription" variant="body2" color="textSecondary" component="p">
                              {ad.descripcion}
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          { session.success && session.session.username !== ad.autor.username && ( getFavs.length > 0 && getFavs.find
                          (fav => fav._id === ad._id) ?
                              <IconButton aria-label="add to favorites" onClick={(e) => delFav(e)}>
                                <FavoriteOutlined style={{color: '#f44336'}}/>
                              </IconButton> :
                              <IconButton aria-label="add to favorites" onClick={(e) => newFav(e)}>
                                  <FavoriteOutlined />
                              </IconButton>
                          )}
                          <Chip
                              icon={<EuroSymbolRounded />}
                              label={ad.precio}
                              style={{backgroundColor:'#b3e5fc'}}
                          />
                          {ad.venta ?
                              <Chip
                                    label="venta"
                                    style={{backgroundColor:'#0288d1', color: 'white'}}
                              /> :
                              <Chip
                                    label="compra"
                                    color="primary"
                                    variant="outlined"
                              />}
                              Categorias:
                          {ad.tags.map((tag, key) =>(
                              <Chip key={key}
                                  label={tag}
                                  style={{backgroundColor:'#b3e5fc'}}
                              />
                          ))}
                          Propietario:
                          <Button component={Link} to={`/anuncios/${ad.autor.username}`}>
                              <Chip label={ad.autor.username}
                                    style={{backgroundColor:'#84ffff'}}
                              />
                          </Button>
                          <TwitterShareButton url={window.location} title={ad.nombre}>
                                  <TwitterIcon/>
                          </TwitterShareButton>
                          <FacebookShareButton url={window.location} title={ad.nombre}>
                              <FacebookIcon/>
                          </FacebookShareButton>
                      </CardActions>
                  </Card> :
                      <div>Cargando</div>
              }
          </div>
      </div>
    );
}