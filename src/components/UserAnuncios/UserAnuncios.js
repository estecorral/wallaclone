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
import {EuroSymbolRounded, DeleteForeverRounded, Edit, SettingsBackupRestore,
    RemoveShoppingCartRounded, ShopTwoRounded} from "@material-ui/icons";
import {navStyles} from "../ComponentStyles/buttonStyles";

import './UserAnuncios.css';
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import ReactSelect from "react-select";
import Pagination from "@material-ui/lab/Pagination";
import Tooltip from "@material-ui/core/Tooltip";

const options = [
    { value: 'game', label: 'Juegos' },
    { value: 'motor', label: 'Motor' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'pc', label: 'PC' },
    { value: 'sports', label: 'Deportes' },
    { value: 'electro', label: 'Electrodomésticos' }
];
const optionsVenta = [
    { value: true, label: 'venta' },
    { value: false, label: 'compra' },
];

export default function UserAnuncios({match, getAds, ads, session, deleteAd, updateAd, revertAds,
                                         setVendido, setReservado}) {

    useEffect(() => {
        getAds();
    }, [getAds]);

    const { handleSubmit, errors, control } = useForm();
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [dialogState, setDialog] = useState();
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

    const onSubmit = (data) => {
        updateAd(dialogState._id, data, session.session.token);
    };

    const classes = navStyles();

    const handleClickOpenDelete = () => {
        setOpen(true);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const delAd = (e, id) => {
        e.preventDefault();
        deleteAd(id, session.session.username, session.session.token);
    };

    const valueTag = (tags) => {
        const listTags = tags.map(tag => {
            return { value: tag, label: tag }
        });
        return listTags;
    };

    const getTipoValue = (type) => {
        if(type) {
            return { value: true, label: 'venta' };
        } else return { value: false, label: 'compra' }
    };

    const reverseList = () => {
        revertAds(ads.reverse());
    };

    const vendido = (e, id, val) => {
        e.preventDefault();
        setVendido(id, val, session.session.token);
    };

    const reservado = (e, id, val) => {
        e.preventDefault();
        setReservado(id, val, session.session.token);
        getAds();
    };

    return(
      <div className="UserAnuncios">
        <NavBar/>
        <div className="cards">
            <h3>Anuncios del usuario <b>{match.params.username}</b></h3>
            <IconButton aria-label="cambiar orden" onClick={reverseList}>
                <SettingsBackupRestore fontSize="large"/>
            </IconButton>
                {
                    ads.length === 0 ?
                        <Snackbar  open={ads.length === 0} autoHideDuration={6000}>
                            <Alert severity="warning">
                                <AlertTitle>Info</AlertTitle>
                                No se han encontrado anuncios
                            </Alert>
                        </Snackbar>:
                        ads.slice(pagination.inicio, pagination.fin).map(ad => (
                            <Card className={classes.card} key={ad._id}>
                                <ButtonBase className={classes.buttonCard} component={Link}
                                            to={`/detail/${ad.nombre}/${ad._id}`}>
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
                                                <Chip
                                                      label="venta"
                                                      style={{backgroundColor:'#0288d1', color: 'white'}}
                                                /> :
                                                <Chip
                                                      label="compra"
                                                      color="primary"
                                                      variant="outlined"
                                                />}
                                        </CardActions>
                                    </div>
                                </ButtonBase>
                                { session.success ?
                                    ad.autor.username === session.session.username && (
                                        <div className="anunciops">
                                            <Tooltip title="Delete">
                                                <IconButton aria-label="delete" className={classes.margin}
                                                            onClick={()=> { handleClickOpenDelete(); setDialog(ad)}}>
                                                    <DeleteForeverRounded  />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="editar">
                                                <IconButton aria-label="edit" className={classes.margin}
                                                            onClick={() => {handleClickOpenEdit(); setDialog(ad)}}>
                                                    <Edit  />
                                                </IconButton>
                                            </Tooltip>
                                            {ad.vendido && (
                                                <Tooltip title="Vendido">
                                                    <IconButton aria-label="vendido" className={classes.margin}
                                                                onClick={(e) =>
                                                                    vendido(e, ad._id, false)} style={{color: '#f44336'}}>
                                                        <RemoveShoppingCartRounded />
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                            {!ad.vendido && (
                                                <Tooltip title="Vendido">
                                                    <IconButton aria-label="vendido" className={classes.margin}
                                                                onClick={(e) =>
                                                                    vendido(e, ad._id, true)}>
                                                        <RemoveShoppingCartRounded />
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                            {ad.reservado && (
                                                <Tooltip title="Reservado">
                                                    <IconButton aria-label="reservado" className={classes.margin}
                                                                onClick={(e) =>
                                                                    reservado(e, ad._id, false)} style={{color: '#03a9f4'}}>
                                                        <ShopTwoRounded/>
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                            {!ad.reservado && (
                                                <Tooltip title="Reservado">
                                                    <IconButton aria-label="reservado" className={classes.margin}
                                                                onClick={(e) =>
                                                                    reservado(e, ad._id, true)}>
                                                        <ShopTwoRounded/>
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                id={ad._id}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description">
                                                <DialogTitle id="alert-dialog-title">{"Atención"}</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        Si acepta, se procedera a eliminar el anuncio y toda la información
                                                        relativa a este.
                                                        ¿Está seguro que desea eliminar el anuncio?
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose} className={classes.buttonBlue2}>
                                                        Cancelar
                                                    </Button>
                                                    <Button onClick={(e) => delAd(e, dialogState._id)}
                                                            type="submit" className={classes.buttonRed}>
                                                        Aceptar
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                            <Dialog
                                                open={openEdit}
                                                onClose={handleClose}
                                                id={ad._id}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description">
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Modifique los datos del anuncio que desee"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">

                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="inputForm">
                                                            {dialogState && (
                                                                <div>
                                                                    Nombre del anuncio:
                                                                    <Controller
                                                                        name="nombre"
                                                                        as={<TextField variant="outlined"  className="controller" placeholder="nombre"/>}
                                                                        rules={{required: true}}
                                                                        control={control}
                                                                        defaultValue={dialogState.nombre}
                                                                    />
                                                                    {errors.nombre && "Your input is required"}
                                                                    Descripción:
                                                                    <Controller
                                                                        name="descripcion"
                                                                        as={<TextField variant="outlined" className="controller" multiline
                                                                                       rows="4" placeholder="descripción"/>}
                                                                        rules={{required: true}}
                                                                        control={control}
                                                                        defaultValue={dialogState.descripcion}
                                                                    />
                                                                    {errors.descripcion && "Your input is required"}
                                                                    Precio:
                                                                    <Controller
                                                                        name="precio"
                                                                        as={<TextField variant="outlined" type="number" className="controller" placeholder="precio"/>}
                                                                        rules={{required: true}}
                                                                        control={control}
                                                                        defaultValue={dialogState.precio}
                                                                    />
                                                                    {errors.precio && "Your input is required"}
                                                                    Tags:
                                                                    <Controller
                                                                        name="tags"
                                                                        as={<ReactSelect className="controller" placeholder="Tags"
                                                                                         options={options} isMulti/>}
                                                                        rules={{required: true}}
                                                                        control={control}
                                                                        defaultValue={valueTag(dialogState.tags)}
                                                                    />
                                                                    {errors.tags && "Your input is required"}
                                                                    Tipo:
                                                                    <Controller
                                                                        name="venta"
                                                                        as={<ReactSelect className="controller" placeholder="tipo"
                                                                                         options={optionsVenta}/>}
                                                                        onChange={([selected]) => {
                                                                            return { value: selected };
                                                                        }}
                                                                        rules={{required: true}}
                                                                        control={control}
                                                                        defaultValue={getTipoValue(dialogState.value)}
                                                                    />
                                                                    {errors.venta && "Your input is required"}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <Button onClick={handleClose} className={classes.buttonBlue2}>
                                                            Cancelar
                                                        </Button>
                                                        <Button onClick={handleClose} type="submit" className={classes.buttonRed}>
                                                            Aceptar
                                                        </Button>
                                                    </form>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    ) : <div></div>
                                }
                            </Card>
                        ))
                }
            <Pagination count={Math.ceil(ads.length/5)} page={page} onChange={changePage} color="primary" className="paginator"/>
        </div>
      </div>
    );
}