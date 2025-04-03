import { Text, View } from "react-native";
import { styles } from "./styles";
import { client } from "../../apolloClient";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import { ALL_PRODUCTS_QUERY } from "../../GraphqlQueries/HomeScreenQueries";
import { useDispatch } from "react-redux";
import { setScreen } from "../../slices/activeScreenSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../types/StackParamList";

type Props = StackScreenProps<StackParamList, "Home">
export default function HomeScreen ({navigation}: Props)  {
    const {data: products, error, loading } = useQuery(ALL_PRODUCTS_QUERY)
    // console.log("Products", products);
    const dispatch = useDispatch();
    useEffect(()=>{
                dispatch(setScreen("Home"));
    },[]);
    return (
        <View style={styles.container}>
            {loading &&
                <Text>Loading....</Text>
            }
            {!loading &&  
                <ProductCardList data={products.products.edges} title={"Products"}/>
            }
        </View>
    )
}