import * as React from 'react'
import {Grid, Loader,} from 'semantic-ui-react';
import {Food} from "store/FoodStore";
import FoodComponent from "./Food";
import {inject, observer} from 'mobx-react';
import {compose, lifecycle} from "recompose";


const FoodItem = ({food}: { food: any }) => (
    <Grid.Column>
        <FoodComponent food={food}/>
    </Grid.Column>
);


// TODO add filter from searchbar and season
const FoodListComponent = ({foodStore}: { foodStore: any }) => {
    if (foodStore.isLoading) {
        return <Loader/>
    }

    return <Grid columns={4}>
        {foodStore.foods.map((f: any) => <FoodItem key={f.id} food={f}/>)}
    </Grid>
};


const withLifecycle = lifecycle<any, any>({
    componentDidMount() {
        this.props.food.loadFoods()
    }
});

export default compose<any, any>(
    inject("food"),
    observer,
    withLifecycle
)(FoodListComponent)


