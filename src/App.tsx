import * as React from 'react';
import {Route, Router} from 'react-router';
import {Food} from './components/foods';
import createHashHistory from "history/createHashHistory";



export const App = () => (
    <Router history={createHashHistory()}>
        <Route path="/" render={Food}/>
    </Router>
);