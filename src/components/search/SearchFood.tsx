import * as React from 'react'
import {Dropdown} from 'semantic-ui-react';
import {IFoodStore} from "../../store/FoodStore";
import {inject, observer} from 'mobx-react';
import {compose} from "recompose";


//TODO  add filter on months, more detailled card ? with season in grey ?
const SearchFoodComponent = ({foodStore}: { foodStore: IFoodStore }) => (
    <Dropdown placeholder="Search for healthy stuff" fluid loading={foodStore.isLoading || true} search selection
              options={foodStore.dropdownModelFoods} multiple/>
);

export default compose<{ foodStore: IFoodStore }, {}>(
    inject("foodStore"),
    observer
)(SearchFoodComponent)