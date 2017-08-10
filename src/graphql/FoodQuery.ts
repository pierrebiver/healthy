import gql from "graphql-tag";


export const ALL_FOODS_DROPDOWN = gql`
            query allFoodsDropdown {
                foods {
                    text: name
                    value: name
                }
            }
    `
;

export const ALL_FOODS = gql`
            query allFoods {
                foods {
                    name
                    image
                    season
                    category
                }
            }
    `
;