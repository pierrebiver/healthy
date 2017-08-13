import * as React from 'react'
import {Header, Container} from "semantic-ui-react";
import FoodList from './FoodList';
import {SearchBar} from '../search/';


export const Food = () => (
    <div>
        <Container text>
            <Header as="h1" style={{backgroundImage: "url('../../images/healthy-16-9.jpeg')"}}>Welcome to
                Healthy</Header>
        </Container>
        <SearchBar/>
        <FoodList/>
    </div>
);