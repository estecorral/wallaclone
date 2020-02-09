import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../Register';
import Login from '../Login';
import HomeAnuncios from "../HomeAnuncios";
import Detail from "../Detail";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Profile";

const App = () => (
        <Switch>
            <Route path="/register" exact component={Register} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={HomeAnuncios}/>
            <Route path='/detail/:name/:id' exact component={Detail}/>
            <PrivateRoute path="/profile" exact component={Profile}/>
        </Switch>
);

export default App;