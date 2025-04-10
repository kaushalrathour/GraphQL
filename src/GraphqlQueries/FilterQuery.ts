import { gql } from "@apollo/client";

const min = 0;
const max = 50;
const available = true;

const queryString = `available_for_sale:${available} AND variants.price:>=${min} AND variants.price:<=${max}`;


export const FilterQuery = gql`
  query FilterProducts($query: String!) {
    products(first: 100, query: $query) {
      edges {
        node {
          id
          title
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          description
          availableForSale
          productType
        }
      }
    }
  }
`;


export const variables = { query: queryString };

