import * as React from 'react'
import Food from "model/Food";
import {Card, Image} from 'semantic-ui-react'

type FoodProps = {
    food: Food
}


const FoodComponent = ({food}: FoodProps) => (
    <Card>
        <Card.Content>
            <Card.Header>
                {food.name}
            </Card.Header>
            <Card.Meta>
        <span >
            { food.category }
        </span>
            </Card.Meta>
        </Card.Content>
    </Card>
);

export default FoodComponent;