import * as React from 'react';
import {Button, ButtonProps} from 'semantic-ui-react';
import {MonthList, Month} from 'model/MomentExtension';
import {inject, observer} from 'mobx-react';
import {compose, withHandlers} from "recompose";
import {IFoodStore} from "store/FoodStore";
import {SyntheticEvent} from "react";


const withOnClick = withHandlers({
    onClick: ({foodStore}: StoreProps) => (event: SyntheticEvent<any>, data: ButtonProps) => foodStore.addSeasonFilter(data.value)
});

type MonthButtonProps = StoreProps & {
    onClick: (event: SyntheticEvent<any>, data: ButtonProps) => void,
}

const MonthButtonComponent = ({foodStore, onClick, monthName}: MonthButtonProps & { monthName: string }) => (
    <Button toggle active={foodStore.seasonFilter.has(monthName)} onClick={onClick}
            value={monthName}>{monthName}</Button>
);

const MonthButton = compose<MonthButtonProps, { monthName: string }>(
    inject("foodStore"),
    withOnClick,
    observer
)(MonthButtonComponent);

export const SeasonList = () => (
    <Button.Group basic inverted>
        {MonthList.map(m => <MonthButton key={m} monthName={Month[m]}/>)}
    </Button.Group>
);

type StoreProps = {
    foodStore: IFoodStore
}

