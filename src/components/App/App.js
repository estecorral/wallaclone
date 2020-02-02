import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../Register';
import Login from '../Login';
import HomeAnuncios from "../HomeAnuncios";

const App = () => (
        <Switch>
            <Route path="/register" exact component={Register} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={HomeAnuncios}/>
        </Switch>
);

export default App;