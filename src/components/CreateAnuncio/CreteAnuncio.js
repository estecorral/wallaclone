import React, {useState} from "react";
import NavBar from "../NavBar";
import {navStyles} from "../ComponentStyles/buttonStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactSelect from 'react-select';

import './CreateAnuncio.css';

const options = [
    { value: 'game', label: 'Juegos' },
    { value: 'motor', label: 'Motor' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'pc', label: 'PC' },
    { value: 'sports', label: 'Deportes' },
    { value: 'electro', label: 'Electrodomésticos' }
];
const optionsVenta = [
    { value: false, label: 'compra' },
    { value: true, label: 'venta' },
];

export default function CreateAnuncio ({session, saveAd}) {
    const classes = navStyles();
    const [file, setFile] = useState({});
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        let formData = new FormData();
        formData.append('foto', file);
        formData.append('token', session.session.token);
        formData.append('nombre', data.nombre);
        formData.append('descripcion', data.descripcion);
        formData.append('precio', data.precio);
        formData.append('autor', session.session.id);
        const tagsArr = data.tags.map(tag => {
            console.log(tag.value);
            return tag.value;
        });
        formData.append('tags', tagsArr);
        saveAd(session.session.token, formData);
    };

    const getFile = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="createAnuncio">
            <NavBar/>
            <div className="content">
                <Card className="card">
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2">
                            Añadir un nuevo anuncio
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Introduce los campos del anuncio a continuación
                        </Typography>
                    </CardContent>
                    <CardActions className="cardations">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputForm">
                                <Controller
                                    name="nombre"
                                    as={<TextField variant="outlined"  className="controller" placeholder="nombre"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.nombre && "Your input is required"}
                                <Controller
                                    name="descripcion"
                                    as={<TextField variant="outlined" className="controller" multiline
                                                   rows="4" placeholder="descripción"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.descripcion && "Your input is required"}
                                <Controller
                                    name="precio"
                                    as={<TextField variant="outlined" type="number" className="controller" placeholder="precio"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.precio && "Your input is required"}
                                <input name="foto" type="file"  className="controller" onChange={getFile} placeholder="foto"/>
                                {errors.foto && "Your input is required"}
                                <Controller
                                    name="tags"
                                    as={<ReactSelect className="controller" placeholder="Tags"
                                    options={options} isMulti/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.tags && "Your input is required"}
                                <Controller
                                    name="venta"
                                    as={<ReactSelect className="controller" placeholder="tipo"
                                                     options={optionsVenta}/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.venta && "Your input is required"}
                            </div>
                            <div className="buttons">
                                <Button className={classes.buttonBlue2}>
                                    Cancelar
                                </Button>
                                <Button className={classes.buttonRed} type="submit">
                                    Guardar
                                </Button>
                            </div>
                        </form>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}