import gql from "graphql-tag";


export const ALL_FOODS = gql`
            query allFoods {
                foods {
                    id
                    name
                    image
                    season
                    category
                }
            }
    `
;