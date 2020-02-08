import React, {useEffect} from 'react';
import NavBar from "../NavBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {FavoriteOutlined} from "@material-ui/icons";
import {navStyles} from "../ComponentStyles/buttonStyles";
import Avatar from "@material-ui/core/Avatar";

import './detail.css';

export default function Detail({match, getAd, ad}) {

    const classes = navStyles();
    console.log(match.params.id);

    useEffect(() => {
        getAd(match.params.id);
    }, [getAd]);

    return(
      <div className="detail">
          <NavBar/>
          <div className="detailcenter">
              <Card className={classes.cardDetail}>
                  <CardHeader
                      avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                              R
                          </Avatar>
                      }
                      title={ad.nombre}
                      subheader="September 14, 2016"
                  />
                  <CardMedia
                      className={classes.media}
                      image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                  />
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                          {ad.description}
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                          <FavoriteOutlined />
                      </IconButton>
                  </CardActions>
              </Card>
          </div>
      </div>
    );
}