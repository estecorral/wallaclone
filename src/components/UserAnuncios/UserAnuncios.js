import React, {useEffect, useState} from "react";
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
import {EuroSymbolRounded, DeleteForeverRounded, Edit} from "@material-ui/icons";
import {navStyles} from "../ComponentStyles/buttonStyles";

import './UserAnuncios.css';
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
export default function UserAnuncios({match, getAds, ads, session, deleteAd}) {

    useEffect(() => {
        getAds();
    }, [getAds]);

    const classes = navStyles();

    const [open, setOpen] = useState(false);
    const [dialogState, setDialog] = useState();

    const handleClickOpenDelete = (e) => {
        console.log(e);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const delAd = (e, id) => {
        e.preventDefault();
        console.log('se borra', id);
        deleteAd(id, session.session.username, session.session.token);
    };

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
                                <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${ad.nombre}/${ad._id}`}>
                                <CardMedia
                                    className={classes.cover}
                                    image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                                />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                                <div className="typo">
                                                   <Typography component="h5">{ad.nombre}</Typography>
                                                   <Typography variant="body2" color="textSecondary" component="p">
                                                       {ad.descripcion}
                                                   </Typography>
                                                </div>
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
                                {ad.autor.username === session.session.username &&(
                                    <div className="anunciops">
                                        <IconButton aria-label="delete" className={classes.margin} onClick={()=> { handleClickOpenDelete(); setDialog(ad._id)}}>
                                            <DeleteForeverRounded fontSize="large" />
                                        </IconButton>
                                        <IconButton aria-label="delete" className={classes.margin}>
                                            <Edit fontSize="large" />
                                        </IconButton>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            id={ad._id}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description">
                                            <DialogTitle id="alert-dialog-title">{"Atención"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Si acepta, se procedera a eliminar el anuncio y toda la información relativa a este.
                                                    ¿Está seguro que desea eliminar el anuncio?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} className={classes.buttonBlue2}>
                                                    Cancelar
                                                </Button>
                                                <Button onClick={(e) => delAd(e, dialogState)} type="submit" className={classes.buttonRed}>
                                                    Aceptar
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                )}
                            </Card>
                        ))
                }
        </div>
      </div>
    );
}