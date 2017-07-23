import Food, {FoodCategory} from "model/Food";
import {Month} from "model/MomentExtension";
import * as constants from './constants';


export type Filter = {
    category?: FoodCategory,
    month?: Month,
    input?: string;
}

export type InitialState = {
    filter: Filter,
    foods: Food[]
}

export const initialState: InitialState = {
    filter: {},
    foods: []
};


const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case constants.INITIALIZE_FOODS: {
            return {...state, foods: action.foods};
        }
        case constants.UPDATE_FILTER:
            return {...state, filter: action.filter};
        default:
            return state
    }
};

export default reducer;