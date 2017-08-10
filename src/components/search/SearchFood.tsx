import * as React from 'react'
import {Dropdown} from 'semantic-ui-react';

type SearchFoodProps = {
    foods: {
        text: string;
        value: string;
    }[]
}

const emptyArray: string[] = [];
//TODO  add filter on months, more detailled card ? with season in grey ?
const SearchFoodComponent = (props: any) => (
    <Dropdown placeholder="Search for healthy stuff" fluid loading={props.data.loading} search selection
              options={props.data.foods || emptyArray} multiple/>
);


//export const SearchFood = graphql(ALL_FOODS, {name: 'data'})(SearchFoodComponent);
