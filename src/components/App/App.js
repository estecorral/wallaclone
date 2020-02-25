import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../Register';
import Login from '../Login';
import HomeAnuncios from "../HomeAnuncios";
import Detail from "../Detail";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Profile";
import UserAnuncios from "../UserAnuncios";
import CreateAnuncio from "../CreateAnuncio";
import FavoritosList from "../FavoritosList";
import ResetPassword from "../ResetPassword";
import ResetPage from "../ResetPage";

const App = () => {
    return (
        <Switch>
            <Route path="/register" exact component={Register} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={HomeAnuncios}/>
            <Route path='/detail/:name/:id' exact component={Detail}/>
            <Route path='/anuncios/:username' exact component={UserAnuncios} />
            <Route path='/resetpass' exact component={ResetPassword} />
            <Route path='/reset/:email/:token' exact component={ResetPage} />
            <PrivateRoute path="/profile" exact component={Profile}/>
            <PrivateRoute path="/createanuncio" exact component={CreateAnuncio}/>
            <PrivateRoute path="/favoritos" exact component={FavoritosList}/>
        </Switch>
)};

export default App;