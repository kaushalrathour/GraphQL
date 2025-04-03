import React, { useEffect } from "react";
import { View } from "react-native";
import { ApolloProvider } from "@apollo/client"
import { client } from "./apolloClient";
import { Provider } from "react-redux";
import { store } from "./app/store";
import NavigationContainer from "./NavigationContainer";




export default function App ():React.JSX.Element {
    return(
        <ApolloProvider client={client}>
        <Provider store={store}>
            <NavigationContainer/>
        </Provider>
        </ApolloProvider>
    )
}