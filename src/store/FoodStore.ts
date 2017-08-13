import {types,} from 'mobx-state-tree'
import {Month} from "../model/MomentExtension";
import client from "../graphql/config";
import {ALL_FOODS} from "../graphql/FoodQuery";
import {ApolloQueryResult} from "apollo-client";

export const Food = types.model(
    "Food",
    {
        id: types.identifier(),
        name: types.string,
        category: types.string,
        image: types.maybe(types.string),
        season: types.array(types.string)
    }
);

export type IFood = typeof Food.Type


export const FoodStore = types.model(
    {
        foods: types.optional(types.array(Food), []),
        isLoading: types.optional(types.maybe(types.boolean), true),
        filter: types.maybe(types.string),
        seasonFilter: types.optional(types.array(types.string), []),
        get filteredFoods() {
            return this.foods.filter((f: IFood) => !this.filter || f.name.search(`/${this.filter}/i`) == 0)
        },
        get dropdownModelFoods() {
            return this.filteredFoods.map((f: IFood) => ({text: f.name, value: f.name}));
        }
    },
    {
        fetchFoods(): Promise<IFood[]> {
            return client.query({
                query: ALL_FOODS
            }).then((q: ApolloQueryResult<any>) => q.data.foods)
                .catch((e) => console.error("Failed to load all foods", e));
        },
        fetchFoodsSuccess(foods: IFood[]) {
            this.isLoading = false;
            this.foods = foods;
        },
        loadFoods() {
            this.isLoading = true;
            this.fetchFoods().then((f: IFood[]) => this.fetchFoodsSuccess(f))
        },
        afterCreate() {
            this.loadFoods();
        }
    }
);

export type IFoodStore = typeof FoodStore.Type