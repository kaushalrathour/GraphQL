import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
                    query getProducts {
                        products(first: 15) {
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
                            }
                            }
                        }
                    }
`