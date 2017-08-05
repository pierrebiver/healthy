import * as React from 'react'
import {Header, Image} from "semantic-ui-react";
import FoodList from './FoodList';
import {SearchBar} from '../search/';


export const Food = () => (
    <div>
        <Image src={require("../../images/healthy-16-9.jpeg")} fluid  />
        <Header>Welcome to Healthy</Header>
        <SearchBar/>
        <FoodList/>
    </div>
);