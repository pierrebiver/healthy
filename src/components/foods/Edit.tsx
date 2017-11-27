import * as React from "react";
import {SyntheticEvent} from "react";
import {IFood, IFoodStore} from "store/FoodStore";
import {Button, Container, Form, InputProps, SelectProps} from 'semantic-ui-react'
import {Month, MonthList} from 'model/MomentExtension';
import {compose, lifecycle, withHandlers} from "recompose";
import {inject, observer} from "mobx-react";


type EditProps = {
    foodStore: IFoodStore,
    food: IFood,
    onChange: (event: SyntheticEvent<any>, data: InputProps | SelectProps) => void
}

const categoryOptions = [
    {value: "Vegetable", text: "Vegetable"},
    {value: "Fruit", text: "Fruit"}
];

const monthListOptions = MonthList.map(m => ({text: Month[m], value: Month[m]}));

const withOnChange = withHandlers({
    onChange: ({foodStore, food}: StoreProps) => (event: SyntheticEvent<any>, data: InputProps | SelectProps) => foodStore.update(food.id.toString(), data.name, data.value)
});

const EditComponent = ({foodStore, onChange, food}: EditProps) => (
    <Container>
        <Form>
            <Form.Input label="Name" name="name" value={food.name} onChange={onChange}/>
            <Form.Select label="Category" name="category" options={categoryOptions}
                         value={food.category} onChange={onChange}/>
            <Form.Select label="Season" name="season" options={monthListOptions}
                         value={food.season} onChange={onChange}/>
            <Button>Cancel</Button>
            <Button primary onClick={() => foodStore.updateFood(food)}>Save and close</Button>
        </Form>
    </Container>
);

type StoreProps = {
    foodStore: IFoodStore,
    food: IFood,
}

const Edit = compose<EditProps, { food: IFood }>(
    inject("foodStore"),
    withOnChange,
    observer
)(EditComponent);

export default Edit;