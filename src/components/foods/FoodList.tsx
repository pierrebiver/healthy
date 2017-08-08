import * as React from 'react'
import {Grid, Loader,} from 'semantic-ui-react';
import Food from "model/Food";
import FoodComponent from "./Food";
import {graphql, gql, ChildProps} from "react-apollo";

const FoodItem = ({food}: { food: Food }) => (
    <Grid.Column >
        <FoodComponent food={food}/>
    </Grid.Column>
);

type FoodProps = {
    foods: Food[]
}

// TODO add filter from searchbar and season
const FoodListComponent = (childProps: ChildProps<FoodProps, any>) => {
    if (childProps.data.loading) {
        return <Loader/>
    }

    if (childProps.data.error) {
        return <div>
            {childProps.data.error.message}
        </div>
    }

    return <Grid columns={4}>
        {childProps.data.foods.map((f: Food) => <FoodItem key={f.id} food={f}/>)}
    </Grid>
};

const ALL_FOODS = gql`
    query allFoods {
        foods {
            name
            image
            season
            category
        }
    }
`
;
export default graphql(ALL_FOODS, {name: 'data'})(FoodListComponent)


