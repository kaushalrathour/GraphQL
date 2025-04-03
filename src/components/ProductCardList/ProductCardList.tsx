import { FlatList, View } from "react-native";
import { Text } from "react-native-gesture-handler";
import ProductCard from "../ProductCard/ProductCard";
import { styles } from "./styles";

export default function ProductCardList ({data, title, horizontal= false}: any) {
    // console.log("List Data", data);
    const renderItem = ({item}: any)=>{
        return (

            <ProductCard product={item}/>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item)=> item.node.handle} horizontal={horizontal}/>
        </View>
    )
}