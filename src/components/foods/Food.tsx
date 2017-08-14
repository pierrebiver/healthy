import * as React from 'react'
import {Card} from 'semantic-ui-react'
import {IFood} from "../../store/FoodStore";

type FoodProps = {
    food: IFood
}


const FoodComponent = ({food}: FoodProps) => (
    <Card>
        <Card.Content>
            <Card.Header>
                {food.name}
            </Card.Header>
            <Card.Meta>
        <span>
            {food.category}
        </span>
            </Card.Meta>
            <Card.Description>
                <span>{`Season: ${food.season}`}</span>
            </Card.Description>
        </Card.Content>
    </Card>
);

export default FoodComponent;