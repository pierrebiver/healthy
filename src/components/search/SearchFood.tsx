import * as React from 'react'
import {Search, SearchProps} from 'semantic-ui-react';
import {IFoodStore} from "../../store/FoodStore";
import {inject, observer} from 'mobx-react';
import {compose, withHandlers} from "recompose";
import {SyntheticEvent} from "react";

type FoodStoreProps = {
    foodStore: IFoodStore
}

type SearchFoodComponentProps = FoodStoreProps & {
    onSearchChange: (event: any, data: SearchProps) => void
}


//TODO  add filter on months, more detailled card ? with season in grey ?
const SearchFoodComponent = ({foodStore, onSearchChange}: SearchFoodComponentProps) => {
    return (
        <Search placeholder="Search for healthy stuff" fluid loading={foodStore.isLoading}
                onSearchChange={onSearchChange}  open={false}
                value={foodStore.filter || undefined}/>
    );
};

const withOnChange = withHandlers({
    onSearchChange: ({foodStore}: FoodStoreProps) => (event: SyntheticEvent<any>, data: SearchProps) => foodStore.setFilter(data.value)
});

export default compose<{ foodStore: IFoodStore }, {}>(
    inject("foodStore"),
    observer,
    withOnChange
)(SearchFoodComponent)