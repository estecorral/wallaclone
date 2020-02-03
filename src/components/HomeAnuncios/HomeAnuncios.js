import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { navStyles } from "../ComponentStyles/buttonStyles";
import {SportsEsports, DriveEtaRounded, PhoneIphoneRounded, ComputerRounded, SportsBasketballRounded,
    LocalLaundryServiceRounded, RemoveRedEyeRounded, FavoriteOutlined } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import './HomeAnuncios.css'
import {Controller, useForm} from "react-hook-form";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";

export default function HomeAnuncios(props) {
    const { handleSubmit, errors, control } = useForm();
    const classes = navStyles();

    useEffect(() => {
        props.getAllAds();
    }, [props.getAllAds]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        <React.Fragment>
            <div className="homeAnuncios">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar className={classes.nav}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Wallaclone
                            </Typography>
                            <Button color="inherit">Registro</Button>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="searcher">
                    <div className="title">
                        <Typography variant="h5">Encuentra lo que buscas</Typography>
                    </div>
                    <div>
                        <Typography variant="h6" color="textSecondary">Selecciona una categoria</Typography>
                    </div>
                    <div className="iconsearch">
                        <RemoveRedEyeRounded className={classes.iconButton} />
                        <SportsEsports className={classes.iconButton}/>
                        <DriveEtaRounded className={classes.iconButton}/>
                        <PhoneIphoneRounded className={classes.iconButton}/>
                        <ComputerRounded className={classes.iconButton}/>
                        <SportsBasketballRounded className={classes.iconButton}/>
                        <LocalLaundryServiceRounded className={classes.iconButton}/>
                    </div>
                    <div className="selectores">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="anuncio"
                                as={<TextField label="Nombre anuncio" variant="outlined"/>}
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                name="tipo"
                                as={<Select variant="outlined" label="compra/venta"/>}
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                name="precios"
                                as={<Select variant="outlined"/>}
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                name="limite"
                                as={<Select variant="outlined"/>}
                                control={control}
                                defaultValue=""
                            />
                            <Button variant="contained" color="primary" className={classes.buttonBlue} type="submit">
                                Buscar
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="cardList">
                    {
                        props.ads.length === 0 ? <div>Cargando</div> : props.ads.map(ad => (
                            <Card className={classes.card} key={ad._id}>
                                <CardHeader
                                    title={ad.nombre}
                                />
                                <CardMedia
                                    className={classes.cardmedia}
                                    image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {ad.descripcion.slice(0,50)}...
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardactions}>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteOutlined />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
};