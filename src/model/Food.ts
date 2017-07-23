import {Month} from './MomentExtension';

export enum FoodCategory {
    Fruit,
    Vegetable,
    Legume,
    oleaginous
}


export default class Food {
    id: string;
    name: string;
    category: FoodCategory;
    image: string;
    season: Month[]
}