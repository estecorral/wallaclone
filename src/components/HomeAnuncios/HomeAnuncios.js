import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {navStyles} from "../ComponentStyles/buttonStyles";
import {SportsEsports, DriveEtaRounded, PhoneIphoneRounded, ComputerRounded, SportsBasketballRounded,
    LocalLaundryServiceRounded, RemoveRedEyeRounded, EuroSymbolRounded,
    SettingsBackupRestore} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import './HomeAnuncios.css'
import {Controller, useForm} from "react-hook-form";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from "@material-ui/core/Chip";
import ReactSelect from 'react-select';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AlertTitle from "@material-ui/lab/AlertTitle";

import NavBar from "../NavBar";

const optionsType = [
    { value: "", label: "Compra/venta"},
    { value: false, label: "Compra" },
    { value: true, label: "Venta" }
];

const optionsPrice = [
    { value: "", label: "" },
    { value: "1-100", label: "1-100" },
    { value: "101-500", label: "101-500" },
    { value: "501-2000", label: "501-2000" },
    { value: "2001-5000", label: "2001-5000" },
    { value: "5001-10000", label: "5001-10000" }
];

export default function HomeAnuncios({getFilterAds, getAllAds, ads, revertAds}) {
    const { handleSubmit, control } = useForm();
    const [tag, setTagState] = useState('');
    const [state, setState] = useState({
            name: '',
            tipo: '',
            precios: '',
        });
    const [adsRever, setAdsRevState] = useState(false);

    const classes = navStyles();

    const getAds = useCallback(
        filters => {
            filters ? getFilterAds(filters) : getAllAds();
        }, [getFilterAds, getAllAds]
    );

    useEffect(() => {
        getAds();
    }, [getAds]);

    const reverseList = () => {
        setAdsRevState(!adsRever);
        revertAds(ads.reverse());
    };

    return(
        <React.Fragment>
            <div className="homeAnuncios">
               <NavBar/>
                <div className="searcher">
                    <div className="title">
                        <Typography variant="h5">Encuentra lo que buscas</Typography>
                    </div>
                    <div>
                        <Typography variant="h6" color="textSecondary">Selecciona una categoria</Typography>
                    </div>
                    <div className="iconsearch">
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( ''); getAds({tag: 'all', ...state})}}>
                            { tag === '' ?
                                <RemoveRedEyeRounded fontSize="large" style={{color: '#03a9f4' }} /> :
                                <RemoveRedEyeRounded fontSize="large"/>
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'game'); getAds({tag: 'game', ...state})}}>
                            {tag === 'game' ?
                                <SportsEsports fontSize="large" style={{color: '#03a9f4'}}/> :
                                < SportsEsports fontSize = "large" />
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'motor'); getAds({tag: 'motor', ...state})}}>
                            {tag === 'motor' ?
                                <DriveEtaRounded fontSize="large" style={{color: '#03a9f4'}}/> :
                                <DriveEtaRounded fontSize="large"/>
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'mobile'); getAds({tag: 'mobile', ...state})}}>
                            {tag === 'mobile' ?
                                <PhoneIphoneRounded fontSize="large" style={{color: '#03a9f4'}}/> :
                                <PhoneIphoneRounded fontSize="large"/>
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'pc'); getAds({tag: 'pc', ...state})}}>
                            {tag === 'pc' ?
                                <ComputerRounded fontSize="large" style={{color: '#03a9f4'}}/> :
                                <ComputerRounded fontSize="large"/>
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'sports'); getAds({tag: 'sports', ...state})}}>
                            {tag === 'sports' ?
                                <SportsBasketballRounded fontSize="large" style={{color: '#03a9f4'}}/> :
                                <SportsBasketballRounded fontSize="large"/>
                            }
                        </IconButton>
                        <IconButton aria-label="todos los anuncios" onClick={() => { setTagState( 'electro'); getAds({tag: 'electro', ...state})}}>
                            {tag === 'electro' ?
                                <LocalLaundryServiceRounded fontSize="large" style={{color: '#03a9f4'}}/> :
                                <LocalLaundryServiceRounded fontSize="large"/>
                            }
                        </IconButton>
                    </div>
                    <div className="selectores">
                        <form onSubmit={handleSubmit(state => { setState(state); getAds({tag, ...state})})} className="formSearch">
                            <div className="filtrosSelect">
                                <Controller
                                    name="name"
                                    as={<TextField variant="outlined" label="Nombre anuncio" className="controller"/>}
                                    control={control}
                                    defaultValue=""
                                />
                                <Controller
                                    name="tipo"
                                    as={<ReactSelect className="controller" placeholder="Compra/Venta" />}
                                    control={control}
                                    options={optionsType}
                                    defaultValue={optionsType[0]}
                                    onChange={([selected]) => {
                                        return { value: selected };
                                    }}
                                />
                                <Controller
                                    name="precios"
                                    as={<ReactSelect className="controller" placeholder="Rango de precios"/>}
                                    control={control}
                                    options={optionsPrice}
                                    defaultValue={optionsPrice[0]}
                                    onChange={([selected]) => {
                                        return { value: selected };
                                    }}
                                />
                            </div>
                            <Button variant="contained" color="primary" className={classes.buttonBlue} type="submit" >
                                Buscar
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="cardList">
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
                            ads.map(ad => (
                                <Card className={classes.card} key={ad._id}>
                                    <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${(ad.nombre.toLocaleLowerCase()).trim()}/${ad._id}`}>
                                    <CardMedia
                                        className={classes.cover}
                                        image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                                    />
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
        </React.Fragment>
    );
};