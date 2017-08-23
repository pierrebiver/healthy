import * as React from 'react';
import {Divider, Container} from 'semantic-ui-react';
import {SeasonList} from "./SeasonList";
import SearchFood from './SearchFood';

// TODO when add month, dynamic placeholder

export const SearchBar = () => (
    <Container textAlign="center">
        <SeasonList/>
        <Divider hidden/>
        <SearchFood/>
        <Divider hidden/>
    </Container>
);


