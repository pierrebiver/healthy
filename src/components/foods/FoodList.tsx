import * as React from 'react'
import {List, Loader,} from 'semantic-ui-react';
import Food from "model/Food";
import FoodComponent from "./Food";
import {graphql, gql, ChildProps} from "react-apollo";

const FoodItem = ({food}: { food: Food }) => (
    <List.Item>
        <FoodComponent food={food}/>
    </List.Item>
);

type FoodProps = {
    foods: Food[]
}

const FoodListComponent = (childProps: ChildProps<FoodProps, any>) => {
    if (childProps.data.loading) {
        return <Loader/>
    }

    if (childProps.data.error) {
        return <div>
            {childProps.data.error}
        </div>
    }
    console.log(childProps);

    return <List>
        {childProps.foods.map(f => <FoodItem food={f}/>)}
    </List>
};


const ALL_FOODS = gql`
    query all {
        allFoods {
            name
            image
            season
            category
        }
    }
`;

export default graphql(ALL_FOODS, {name: 'data'})(FoodListComponent)


