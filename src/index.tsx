import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import { FoodStore} from "./store/FoodStore";
import {App} from './App';

import '../semantic/dist/semantic.css';


const store = {
    foodStore: FoodStore.create(),
};


ReactDOM.render(
    <Provider {...store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);