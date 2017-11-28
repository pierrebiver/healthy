import * as React from 'react'
import {Button, Card, Modal} from 'semantic-ui-react'
import {IFood} from "store/FoodStore";
import Edit from "./Edit";
import {compose} from "recompose";
import {observer} from "mobx-react";

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
                <Modal trigger={<Button floated="right" icon="edit"/>} closeIcon closeOnDimmerClick={false}>
                    <Modal.Header>Edit food</Modal.Header>
                    <Modal.Content>
                        <Edit food={food}/>
                    </Modal.Content>
                </Modal>
            </Card.Description>
        </Card.Content>
    </Card>
);

export default compose<FoodProps, FoodProps>(observer)(FoodComponent);