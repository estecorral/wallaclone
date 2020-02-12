import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../Register';
import Login from '../Login';
import HomeAnuncios from "../HomeAnuncios";
import Detail from "../Detail";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Profile";
import UserAnuncios from "../UserAnuncios";
import { restoreUser } from '../../storage/storage';
import CreateAnuncio from "../CreateAnuncio";


const App = ({ updateSession }) => {
    const restSession = restoreUser();

    useEffect(() => {
        if (restSession) {
            updateSession(restSession);
        }
    }, []);

    return (
        <Switch>
            <Route path="/register" exact component={Register} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={HomeAnuncios}/>
            <Route path='/detail/:name/:id' exact component={Detail}/>
            <Route path='/anuncios/:username' exact component={UserAnuncios} />
            <PrivateRoute path="/profile" exact component={Profile}/>
            <PrivateRoute path="/createanuncio" exact component={CreateAnuncio}/>
        </Switch>
)};

export default App;