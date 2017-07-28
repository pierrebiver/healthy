import * as React from 'react'
import {Header} from "semantic-ui-react";
import FoodList from './FoodList';

export const Food = () => (
    <div>
        <Header>Welcome to Healthy</Header>
        <FoodList/>
    </div>
)