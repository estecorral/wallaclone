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

import './detail.css';
import Chip from "@material-ui/core/Chip";

export default function Detail({match, getAd, ad}) {

    const classes = navStyles();

    useEffect(() => {
        getAd(match.params.id);
    }, [getAd, match.params.id]);

    return(
      <div className="detail">
          <NavBar/>
          <div className="detailcenter">
              {
                  Object.keys(ad).length !== 0 ?  <Card className={classes.cardDetail}>
                      <CardHeader
                          avatar={
                              <Avatar aria-label="recipe" className={classes.avatar}>
                                  R
                              </Avatar>
                          }
                          title={ad.nombre}
                          subheader="September 14, 2016"
                      />
                          <img className="media" src={`http://localhost:3001/images/anuncios/${ad.foto}`} alt=""/>
                      <CardContent>
                          <Typography className="cardDescription" variant="body2" color="textSecondary" component="p">
                              {ad.descripcion}
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                              <FavoriteOutlined />
                          </IconButton>
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
                      </CardActions>
                  </Card> :
                      <div>Cargando</div>
              }
          </div>
      </div>
    );
}