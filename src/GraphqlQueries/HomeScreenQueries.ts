import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
                    query getCollectionProducts($filters: [ProductFilter!]!){
  collectionByHandle(handle: "test-collection") {
    products(first: 100, filters: $filters) {
      filters {
        label
        presentation
        type
        id
        values {
          count
          id
          input
          label
          image {
            alt
            id
            mediaContentType
          }
        }
      }
      edges {
        node {
          title
          handle
          productType
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 3) {
            edges {
              node {
                url
              }
            }
          }
          vendor
        }
      }
    }
  }
}

`


export const VENDOR_QUERY = gql`
                    query getCollectionProducts($vendor: String!) {
  collectionByHandle(handle: "test-collection") {
    products(first: 100, filter: {productVendor: $vendor}) {
      filters {
        id
        label
        values {
          input
        }
      }
      edges {
        node {
          title
          handle
          productType
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 3) {
            edges {
              node {
                url
              }
            }
          }
          vendor
        }
      }
    }
  }
}

`