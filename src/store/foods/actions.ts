import * as constants from './constants';
import Food from "model/Food";
import {Filter} from "./reducer";


function initializeFoods(foods: Food[]) {
    return {
        type: constants.INITIALIZE_FOODS,
        foods
    }
}

function updateFilter(filter: Filter) {
    return {
        type: constants.UPDATE_FILTER,
        filter
    }
}

