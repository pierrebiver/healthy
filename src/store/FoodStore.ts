import {types,} from 'mobx-state-tree'
import {Month} from "../model/MomentExtension";
import client from "../graphql/config";
import {ALL_FOODS} from "../graphql/FoodQuery";


export enum FoodCategory {
    Fruit = "Fruit",
    Vegetable = "Vegetable",
    Legume = "Legume",
    Oleaginous = "Oleqginous"
}


export const Food = types.model("Food", {
    id: types.identifier(),
    name: types.string,
    category: types.enumeration("FoodCategory", [FoodCategory.Fruit, FoodCategory.Vegetable,
        FoodCategory.Legume, FoodCategory.Oleaginous]),
    image: types.string,
    season: types.array(types.model(Month))
});

export const FoodStore = types.model(
    "FoodStore",
    {
        foods: types.array(types.model(Food)),
        isLoading: types.optional(types.boolean, false)
    },
    {
        loadFoods: function* (): any {
            this.isLoading = true;
            const {data: {foods}} = yield client.query({
                query: ALL_FOODS
            });

            this.isLoading = false;
        }
    }
);