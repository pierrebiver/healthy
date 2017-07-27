import * as React from 'react'
import {Header} from "semantic-ui-react/";
import FoodList from './FoodList';

export default () => (
    <div>
        <Header>Welcome to Healthy</Header>
        <FoodList foods={[]}/>
    </div>
)