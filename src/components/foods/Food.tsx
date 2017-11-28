import * as React from 'react'
import {Button, Card, Modal} from 'semantic-ui-react'
import {IFood} from "store/FoodStore";
import Edit from "./Edit";
import {compose, withState} from "recompose";
import {observer} from "mobx-react";

type FoodProps = {
    food: IFood
}

const withModalState = withState("open", "setOpen", false);

const FoodComponent = ({food, setOpen, open}: FoodProps & { setOpen: (open: boolean) => void, open: boolean }) => (
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
                <Modal trigger={<Button floated="right" icon="edit" onClick={() => setOpen(true)}/>} open={open}
                       closeIcon closeOnDimmerClick={false}>
                    <Modal.Header>Edit food</Modal.Header>
                    <Modal.Content>
                        <Edit food={food} onClose={() => setOpen(false)}/>
                    </Modal.Content>
                </Modal>
            </Card.Description>
        </Card.Content>
    </Card>
);

export default compose<FoodProps, FoodProps>(
    withModalState,
    observer
)(FoodComponent);