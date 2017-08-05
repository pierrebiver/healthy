import * as React from 'react';
import {Search} from 'semantic-ui-react';
import {SeasonList} from "./SeasonList";


export const SearchBar = () => (
    <div>
        <SeasonList/>
        <Search fluid/>
    </div>
);
