import * as React from 'react';
import {Divider} from 'semantic-ui-react';
import {SeasonList} from "./SeasonList";
//import {SearchFood} from './SearchFood';

// TODO when add month, dynamic placeholder

export const SearchBar = () => (
    <div>
        <SeasonList/>
        <Divider hidden/>
        <Divider hidden/>
    </div>
);


