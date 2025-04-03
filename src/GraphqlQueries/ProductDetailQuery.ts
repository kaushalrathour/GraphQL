import { gql } from "@apollo/client";
export const PRODUCT_QUERY =  gql`
                        query getProducts($handle: String!) {
                            productByHandle(handle: $handle) {
                                title
                                description 
                                images(first: 5) {
                                edges {
                                    node {
                                    url
                                    }
                                }
                                }   
                                vendor
                                publishedAt
                                updatedAt
                            }
                        }
`;

export const TAGS_QUERY = gql`
    query getProducts($handle: String!) {
                            productByHandle(handle: $handle) {
                                tags
                            }
}
`