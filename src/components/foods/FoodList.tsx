import * as React from 'react'
import {List} from 'semantic-ui-react';
import Food from "model/Food";
import FoodComponent from "./Food";


const FoodItem = ({food}: { food: Food }) => (
    <List.Item>
        <FoodComponent food={food}/>
    </List.Item>
);

const FoodListComponent = ({foods}: { foods: Food[] }) => (
    <List>
        {foods.map(f => <FoodItem food={f}/>)}
    </List>
);


export default FoodListComponent