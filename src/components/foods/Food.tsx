import * as React from 'react'
import {Card, Modal, Button} from 'semantic-ui-react'
import {IFood} from "store/FoodStore";
import Edit from "./Edit";

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
                <Modal trigger={<Button floated="right" icon="edit"/>}>
                    <Edit food={food}/>
                </Modal>
            </Card.Description>
        </Card.Content>
    </Card>
);

export default FoodComponent;