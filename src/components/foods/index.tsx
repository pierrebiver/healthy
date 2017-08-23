import * as React from 'react'
import {Header, Segment, Divider} from "semantic-ui-react";
import FoodList from './FoodList';
import {SearchBar} from '../search/';

import './index.css';

export const Food = () => (
    <div>
        <Segment
            inverted
            color="blue"
            textAlign='center'
            style={{minHeight: 150, padding: '1em 0em'}}
            vertical
        >
            <Header as="h1">Welcome to Healthy</Header>
            <Divider/>
            <SearchBar/>
        </Segment>
        <FoodList/>
    </div>
);