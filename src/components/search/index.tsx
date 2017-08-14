import * as React from 'react';
import {Divider, Segment} from 'semantic-ui-react';
import {SeasonList} from "./SeasonList";
import SearchFood from './SearchFood';

// TODO when add month, dynamic placeholder

export const SearchBar = () => (
    <Segment textAlign="center" attached>
        <SeasonList/>
        <Divider hidden/>
        <SearchFood/>
        <Divider hidden/>
    </Segment>
);


