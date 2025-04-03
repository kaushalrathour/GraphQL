import { ApolloClient, InMemoryCache } from "@apollo/client"
import {APOLLO_CLIENT_URL, APOLLO_TOKEN} from "@env"

export const client = new ApolloClient({
    uri: APOLLO_CLIENT_URL,
    headers: {
        "X-Shopify-Storefront-Access-Token" : APOLLO_TOKEN,
        "Content-Type" :"application/json"
    },
    cache: new InMemoryCache
})