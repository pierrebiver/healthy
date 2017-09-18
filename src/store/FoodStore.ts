import {types,} from 'mobx-state-tree'
import client from "graphql/config";

const ALL_FOODS = require("graphql/FoodQuery.graphql");
const UPDATE_FOOD = require("graphql/FoodUpdate.graphql");
const CREATE_FOOD = require("graphql/FoodCreate.graphql");
import {ApolloQueryResult} from "apollo-client";
import * as moment from 'moment'

import {Month} from '../model/MomentExtension';
import {IObservableArray} from "mobx";


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
    {
        foods: types.optional(types.array(Food), []),
        isLoading: types.optional(types.boolean, true),
        filter: types.maybe(types.string),
        seasonFilter: types.optional(types.map(types.string), {[currentMonth]: currentMonth}),
        get filteredFoods() {
            const matchFilterName = (food: IFood) => !this.filter || food.name.toUpperCase().includes(this.filter.toUpperCase());
            const matchFilterSeason = (food: IFood) => this.seasonFilter.keys().length == 0 || this.seasonFilter.keys().some((month: string) => month === food.season);
            const match = (food: IFood) => matchFilterName(food) && matchFilterSeason(food);
            return this.foods.filter(match)
        },
    },
    {
        addSeasonFilter(month: string) {
            if (this.seasonFilter.has(month))
                this.seasonFilter.delete(month);
            else
                this.seasonFilter.set(month, month);
        },
        setFilter(filter: string | undefined) {
            this.filter = filter;
        },
        fetchFoods(): Promise<IFood[]> {
            return client.query({
                query: ALL_FOODS
            }).then((q: ApolloQueryResult<any>) => q.data.foods)
                .catch((e) => console.error("Failed to load all foods", e));
        },
        fetchFoodsSuccess(foods: IObservableArray<IFood>) {
            this.isLoading = false;
            this.foods = foods;
        },
        loadFoods() {
            this.isLoading = true;
            this.fetchFoods().then((f: IObservableArray<IFood>) => this.fetchFoodsSuccess(f))
        },
        afterCreate() {
            this.loadFoods();
        },
        update(id: string, field: string, value: any) {
            this.foods.find(f => f.id === id)[field] = value
        }
    }
);

export type IFoodStore = typeof FoodStore.Type
