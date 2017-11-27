import {types,} from 'mobx-state-tree'
import client from "graphql/config";

const ALL_FOODS = require("graphql/FoodQuery.graphql");
const UPDATE_FOOD = require("graphql/FoodUpdate.graphql");
const CREATE_FOOD = require("graphql/FoodCreate.graphql");
import {ApolloQueryResult} from "apollo-client";
import * as moment from 'moment'

import {Month} from '../model/MomentExtension';
import {flow} from "mobx-state-tree"


const currentMonth: string = Month[moment().month()];

export const Food = types.model(
    "Food",
    {
        id: types.identifier(),
        name: types.string,
        category: types.string,
        image: types.maybe(types.string),
        season: types.string
    }
);

export type IFood = typeof Food.Type

export const FoodStore = types.model(
    "FoodStore",
    {
        foods: types.optional(types.array(Food), []),
        isLoading: types.optional(types.boolean, true),
        filter: types.maybe(types.string),
        seasonFilter: types.optional(types.map(types.string), {[currentMonth]: currentMonth}),

    })
    .views(self => {
        return {
            get filteredFoods() {
                const matchFilterName = (food: IFood) => !self.filter || food.name.toUpperCase().includes(self.filter.toUpperCase());
                const matchFilterSeason = (food: IFood) => self.seasonFilter.keys().length == 0 || self.seasonFilter.keys().some((month: string) => month === food.season);
                const match = (food: IFood) => matchFilterName(food) && matchFilterSeason(food);
                return self.foods.filter(match)
            }
        }
    })
    .actions(self => {
        function sendFetchFoods(): Promise<IFood[]> {
            return client.query({
                query: ALL_FOODS
            }).then((q: ApolloQueryResult<any>) => q.data.foods)
                .catch((e) => console.error("Failed to load all foods", e));
        }

        function sendUpdateFood(food: IFood): Promise<IFood | void> {
            return client.mutate({
                mutation: UPDATE_FOOD,
                variables: {food}
            }).then((result: ApolloQueryResult<{ food: IFood }>) => result.data.food)
                .catch(e => console.error("Failed to update food", e))
        }

        return {
            addSeasonFilter(month: string) {
                if (self.seasonFilter.has(month))
                    self.seasonFilter.delete(month);
                else
                    self.seasonFilter.set(month, month);
            },
            setFilter(filter: string | undefined) {
                self.filter = filter;
            },
            updateFood: flow(function* update(food: IFood) {
                const foodUpdated = yield sendUpdateFood(food);
                self.foods.replace(foodUpdated.$treenode);
            }),
            afterCreate: flow(function* afterCreate() {
                self.isLoading = true;
                self.foods = yield sendFetchFoods();
                self.isLoading = false;
            }),
            update(id: string, field: string, value: any) {
                self.foods.find((f: IFood) => f.id === id)[field] = value
            }
        }
    });

export type IFoodStore = typeof FoodStore.Type
