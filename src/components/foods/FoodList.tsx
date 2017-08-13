import * as React from 'react'
import {Grid, Loader} from 'semantic-ui-react';
import FoodComponent from "./Food";
import {inject, observer} from 'mobx-react';
import {compose} from "recompose";
import {IFood, IFoodStore} from "../../store/FoodStore";


const FoodItem = ({food}: { food: IFood }) => (
    <Grid.Column>
        <FoodComponent food={food}/>
    </Grid.Column>
);


// TODO add filter from searchbar and season
const FoodListComponent = ({foodStore}: { foodStore: IFoodStore }) => {
    if (foodStore.isLoading) {
        return <Loader active/>
    }

    return <Grid columns={4}>
        {foodStore.foods.map((f: any) => <FoodItem key={f.id} food={f}/>)}
    </Grid>
};

export default compose<{ foodStore: IFoodStore }, {}>(
    inject("foodStore"),
    observer
)(FoodListComponent)


