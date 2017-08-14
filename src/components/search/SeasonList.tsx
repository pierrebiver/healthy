import * as React from 'react';
import {List, Button, ButtonProps} from 'semantic-ui-react';
import {MonthList, Month} from '../../model/MomentExtension';
import {inject, observer} from 'mobx-react';
import {compose, withHandlers} from "recompose";
import {IFoodStore} from "../../store/FoodStore";
import {SyntheticEvent} from "react";


// TODO regroup by season ? nice way to display it ?
export const SeasonListComponent = ({foodStore,onClick}: SeasonListProps & { onClick: (event: SyntheticEvent<any>, data: ButtonProps) => void }) => (
    <Button.Group>
        {MonthList.map(m => <Button key={m} active={foodStore.seasonFilter.has(Month[m])} onClick={onClick}
                                    value={Month[m]}>{Month[m]}</Button>)}
    </Button.Group>
);

type SeasonListProps = {
    foodStore: IFoodStore
}

const withOnClick = withHandlers({
    onClick: ({foodStore}: SeasonListProps) => (event: SyntheticEvent<any>, data: ButtonProps) => foodStore.addSeasonFilter(data.value)
});

export const SeasonList = compose<SeasonListProps, {}>(
    inject("foodStore"),
    observer,
    withOnClick
)(SeasonListComponent);