import * as React from 'react'
import {Dropdown} from 'semantic-ui-react';
import {graphql, gql, ChildProps} from "react-apollo";

type SearchFoodProps = {
    foods: {
        text: string;
        value: string;
    }[]
}

const emptyArray: string[] = [];
//TODO  add filter on months, more detailled card ? with season in grey ?
const SearchFoodComponent = (props: ChildProps<SearchFoodProps, any>) => (
    <Dropdown placeholder="Search for healthy stuff" fluid loading={props.data.loading} search selection
              options={props.data.foods || emptyArray} multiple/>
);

const ALL_FOODS = gql`
            query allFoods {
                foods {
                    text: name
                    value: name
                }
            }
    `
;
export const SearchFood = graphql(ALL_FOODS, {name: 'data'})(SearchFoodComponent);
